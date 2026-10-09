#!/usr/bin/env bash
set -euo pipefail

fail() {
    printf 'Error: %s\n' "$*" >&2
    exit 1
}

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
version_file="${repo_root}/.devcontainer/version"

[[ -f "${version_file}" ]] || fail "Missing container version file: ${version_file}"
container_version="$(tr -d '[:space:]' < "${version_file}")"
[[ "${container_version}" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] \
    || fail "Invalid container version in ${version_file}"

command -v docker >/dev/null 2>&1 || fail "Docker is required. Install Docker Desktop or Docker Engine."
docker info >/dev/null 2>&1 || fail "Docker is not running or is not accessible to this user."

origin_url="$(git -C "${repo_root}" remote get-url origin 2>/dev/null)" \
    || fail "The source repository must have an 'origin' remote."
[[ -n "${origin_url}" ]] || fail "The source repository's 'origin' remote URL is empty."
docker_context="$(docker context show)" \
    || fail "Could not determine the active Docker context."
[[ -n "${docker_context}" ]] || fail "The active Docker context name is empty."

image_tag="head-honcho-dev:${container_version}"
if ! docker image inspect "${image_tag}" >/dev/null 2>&1; then
    printf 'Building %s...\n' "${image_tag}"
    docker build --file "${repo_root}/Dockerfile.dev" --tag "${image_tag}" "${repo_root}"
fi

suffix="$(date +%Y%m%d%H%M%S)-$(uuidgen | tr '[:upper:]' '[:lower:]' | cut -c1-8)"
container_name="head-honcho-dev-${suffix}"
workspace_volume="head-honcho-workspace-${suffix}"

docker volume create "${workspace_volume}" >/dev/null
docker run --detach \
    --name "${container_name}" \
    --label "dev.head-honcho.container-version=${container_version}" \
    --mount "type=volume,source=${workspace_volume},target=/workspace" \
    --workdir /workspace \
    --entrypoint sleep \
    "${image_tag}" infinity >/dev/null

if ! remote_head="$(docker exec "${container_name}" git ls-remote --symref "${origin_url}" HEAD)"; then
    fail "Could not query the remote default branch. Container '${container_name}' and volume '${workspace_volume}' were kept."
fi
default_branch="$(printf '%s\n' "${remote_head}" | sed -n 's|^ref: refs/heads/\([^[:space:]]*\)[[:space:]]HEAD$|\1|p')"
[[ -n "${default_branch}" ]] \
    || fail "The remote did not report a default branch. Container '${container_name}' and volume '${workspace_volume}' were kept."

if ! docker exec "${container_name}" git clone \
    --single-branch \
    --branch "${default_branch}" \
    "${origin_url}" \
    /workspace; then
    fail "Could not clone the remote default branch '${default_branch}'. Container '${container_name}' and volume '${workspace_volume}' were kept. If the repository is private, authenticate inside the container with 'docker exec -it ${container_name} gh auth login', then clone '${origin_url}' into /workspace."
fi

printf '\nDevelopment container is ready.\n'
printf 'Container: %s\n' "${container_name}"
printf 'Image version: %s (%s)\n' "${container_version}" "${image_tag}"
printf 'Workspace: /workspace (Docker volume: %s)\n' "${workspace_volume}"
printf 'Cloned remote default branch: %s\n' "${default_branch}"
printf 'Docker context: %s\n' "${docker_context}"
printf 'Stop: docker stop %s\n' "${container_name}"
printf 'Reopen container: docker start %s\n' "${container_name}"
printf 'Attach manually in VS Code: Dev Containers: Attach to Running Container..., then select %s and open /workspace.\n' \
    "${container_name}"
printf 'Authenticate from a terminal in the container with: gh auth login, claude, or codex.\n'
printf 'Cleanup, only when you no longer need this checkout: docker rm -f %s && docker volume rm %s\n' \
    "${container_name}" "${workspace_volume}"
