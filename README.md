# head-honcho-net

Website for Hewitt's Rocking H Trailer & ATV Repair.

## Isolated development container

The development environment runs from a fresh clone of the remote repository
inside a Docker-managed volume. It does not mount the host checkout or any host
credential directories.

### Host prerequisites

- Docker Desktop or Docker Engine, running and accessible to your user
- Visual Studio Code with the `code` command available on `PATH`
- The VS Code Dev Containers extension

From this repository, run:

```sh
./scripts/dev-container.sh
```

The script builds the pinned image if it is not already available, starts a
uniquely named container and workspace volume, clones the remote's default
branch, and opens a new VS Code window attached to that workspace. It passes
the shell environment to VS Code so the Dev Containers extension can find
Docker even when VS Code was originally launched from the macOS Dock. The
script prints the container name, image version, stop/reopen commands, and
explicit cleanup commands. Existing containers and volumes are never removed
automatically.

Authenticate interactively from a terminal inside the container. For example,
run `gh auth login` for GitHub CLI, then launch `claude` or `codex` to follow
each coding agent's sign-in flow. Do not put tokens in the image or repository.

The single source of truth for the development-container image tag is
`.devcontainer/version`. Increment it when the base image, toolchain, required
tools, startup behavior, or VS Code attachment behavior changes; ordinary
website changes do not require a version bump.
