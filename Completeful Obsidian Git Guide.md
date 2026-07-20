---
title: Completeful Obsidian Git Guide
created: 2026-07-19
tags:
  - obsidian
  - git
  - github
  - backup
---

# Completeful Obsidian Git Guide

This vault is connected to the private GitHub repository:

- **Repository:** https://github.com/Zachary0hill/completeful-obs
- **Local vault:** `/Users/Mac/Agent-Assets-Growth/Completeful`
- **Branch:** `main`
- **Authentication:** HTTPS through macOS Keychain
- **Obsidian plugin:** Git (`obsidian-git`)

## Quick start

After opening the Completeful vault in Obsidian:

1. Press `Command + P` to open the Command Palette.
2. Search for **Git: Commit-and-sync**.
3. Run the command.
4. Wait for the success notices confirming the commit, pull, and push.

That command saves your current vault changes to Git history, pulls any newer changes from GitHub, and pushes your changes to GitHub.

## Recommended everyday workflow

### When you start working

1. Open the Completeful vault.
2. Press `Command + P`.
3. Run **Git: Pull** before editing, especially if the vault is used on another computer.

### While you work

Edit notes normally. Git does not change how Obsidian saves files; it adds version history and remote backup.

### When you finish working

1. Press `Command + P`.
2. Run **Git: Commit-and-sync**.
3. Wait for the success notices before closing Obsidian or switching computers.

Use this simple rule when working across devices:

> Pull before editing. Commit-and-sync before switching devices.

## Useful Obsidian Git commands

Open the Command Palette with `Command + P`, then search for one of these commands:

- **Git: Commit-and-sync** — Commit local changes, pull remote changes, and push to GitHub.
- **Git: Commit-and-sync with specific message** — Do the same thing while writing a descriptive commit message.
- **Git: Pull** — Download changes made on another computer.
- **Git: Push** — Upload commits that have not yet reached GitHub.
- **Git: List changed files** — See what has changed since the last commit.
- **Git: Open source control view** — Open the Git sidebar for changes, history, staging, and diffs.
- **Git: Open history view** — Browse previous versions and commits.

## Recommended automatic backup settings

Go to **Obsidian → Settings → Community plugins → Git**.

A practical starting configuration is:

- Enable pulling when Obsidian starts.
- Set automatic pull to every 10 minutes if you use more than one computer.
- Set automatic commit-and-sync or backup to every 10–15 minutes.
- Keep notifications enabled while learning the workflow so failures are visible.
- Use descriptive automatic commit messages that include the date and time.

If the vault is only used on this Mac, manual **Commit-and-sync** at the end of each work session is also sufficient.

## What is backed up

The repository contains the vault's notes, PDFs, assets, templates, maps, and shareable Obsidian configuration.

The following machine-specific or sensitive files are intentionally excluded by `.gitignore`:

- `.DS_Store`
- `.obsidian/workspace*.json`
- `.obsidian/cache/`
- `.trash/`
- `.obsidian/plugins/obsidian-git/data.json`

The last file is excluded because plugin settings can contain authentication-related data. GitHub credentials should stay in macOS Keychain and should never be written into a note.

## How to confirm the backup worked

### In Obsidian

Run **Git: Open history view** and confirm that the newest commit appears.

### On GitHub

Open https://github.com/Zachary0hill/completeful-obs and confirm the latest commit and updated file are visible on the `main` branch.

### In Terminal

```bash
cd "/Users/Mac/Agent-Assets-Growth/Completeful"
git status -sb
```

A fully synchronized result looks like this:

```text
## main...origin/main
```

If files are listed underneath that line, they contain local changes that have not yet been committed.

## Terminal fallback

If the Obsidian plugin is unavailable, the same backup can be performed in Terminal:

```bash
cd "/Users/Mac/Agent-Assets-Growth/Completeful"
git pull --ff-only
git add -A
git commit -m "Update Completeful vault"
git push
```

If Git says there is nothing to commit, the vault is already saved in the latest local commit.

## Authentication troubleshooting

This Mac is configured to store HTTPS credentials in macOS Keychain. Confirm that configuration with:

```bash
git config --global credential.helper
```

The expected result is:

```text
osxkeychain
```

If GitHub asks you to authenticate again:

1. Open Terminal.
2. Run `gh auth login` and choose GitHub.com and HTTPS.
3. Complete the browser login.
4. Return to the vault and run `git pull` once.
5. Try **Git: Commit-and-sync** again in Obsidian.

Do not use your normal GitHub account password in a Git password prompt. GitHub requires an authenticated helper or personal access token for HTTPS Git operations.

## Handling a sync conflict

A conflict usually means the same note was changed on two devices before both changes were synchronized.

1. Stop editing the conflicted note on other devices.
2. Open **Git: Open source control view** in Obsidian.
3. Identify the conflicted file.
4. Open it and look for conflict markers:

```text
<<<<<<<
local version
=======
GitHub version
>>>>>>>
```

5. Keep the correct content, combine both versions if needed, and remove all conflict-marker lines.
6. Save the note.
7. Run **Git: Commit-and-sync with specific message** and use a message such as `Resolve sync conflict`.

If the correct version is unclear, make a copy of the note before resolving it. Do not run destructive Git commands such as `reset --hard` unless you understand exactly which changes will be removed.

## Setting up the vault on another Mac

Do not create a separate empty vault with the same notes. Clone the existing GitHub repository instead:

```bash
git config --global credential.helper osxkeychain
cd "/path/where/you/want/the/vault"
git clone https://github.com/Zachary0hill/completeful-obs.git Completeful
```

Then:

1. Open Obsidian.
2. Choose **Open folder as vault**.
3. Select the cloned `Completeful` folder.
4. Allow community plugins if prompted.
5. Confirm that the Git plugin is enabled.
6. Run **Git: Pull** once before editing.

## Important safety notes

- Keep the GitHub repository private because this vault contains internal Completeful information.
- Never place passwords, access tokens, private keys, or customer secrets in vault notes.
- Do not delete the hidden `.git` directory; it stores the local version history and remote connection.
- Do not run **Initialize a new repo** again. This vault is already initialized.
- Do not clone the repository into a folder inside this vault.
- Always finish syncing one device before editing on another device.

## Current setup summary

The vault is initialized, connected to `origin`, tracking `origin/main`, authenticated through macOS Keychain, and backed up to the private `completeful-obs` GitHub repository.
