# head-honcho-net

Website for Hewitt's Rocking H Trailer & ATV Repair.

## Development Environment

- Docker Desktop or Docker Engine, running and accessible to your user
- Visual Studio Code with the `code` command available on `PATH`
- The VS Code Dev Containers extension

1. Run `./scripts/dev-container.sh` 
2. Use the VS Code Command Palette: **Dev Containers: Attach to Running Container...**, select the container name printed by the script
3. Open `/workspace`
4. Once connected, run `gh auth login`

Before opening a pull request, run `pnpm changelog:change` and commit the
generated entry in `changes/`. Describe the user-visible change and select the
appropriate version bump.

The release workflow runs `pnpm changelog:publish` to apply accumulated change
entries to the project version and changelog, then commits and pushes those
updates to `main` before creating the release. Run it from `main` with a tag
matching the resulting version (for example, `v1.2.3`). If branch protection
prevents the workflow from pushing, run `pnpm changelog:publish` locally,
commit and push the version and changelog updates, then rerun the workflow.

The single source of truth for the development-container image tag is
`.devcontainer/version`. Increment it when the base image, toolchain, required
tools, startup behavior, or VS Code attachment behavior changes; ordinary
website changes do not require a version bump.
