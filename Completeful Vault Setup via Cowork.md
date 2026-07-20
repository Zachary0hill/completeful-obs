---
title: Completeful Vault Setup via Cowork
created: 2026-07-19
tags:
  - obsidian
  - git
  - github
  - cowork
  - onboarding
---

# Completeful Vault Setup via Cowork

This guide lets a Completeful team member set up the shared Obsidian knowledge vault on their own Mac by talking to Claude in a Cowork chat. Claude does the work. You copy, paste, and approve.

The vault lives in a private GitHub repository. Setting up means cloning that repository, opening it in Obsidian, and turning on automatic Git backup. You will not build anything by hand.

- **Repository:** https://github.com/Zachary0hill/completeful-obs (private)
- **Branch:** `main`
- **Obsidian plugin:** Git (`obsidian-git`)
- **Authentication:** GitHub over HTTPS, stored in macOS Keychain

---

## Before you start

Confirm three things. If any are missing, the prompts below tell Claude to install them for you.

1. **Obsidian** is installed. Download at obsidian.md if not.
2. **You have access to the private repo.** You must be signed in to, or invited to, the GitHub account that owns `completeful-obs`. Ask Zach or Josh for an invite if you are not sure.
3. **You are on the Mac** where you want the vault to live.

You will approve a few actions in Cowork, such as folder access and running Terminal commands. That is expected.

---

## How to use this guide

Open a new Cowork chat. Send the prompts below one at a time, in order. Wait for Claude to finish and confirm each step before sending the next. Read what Claude reports back so you know it worked.

If anything looks wrong, use the troubleshooting prompts at the end.

---

## Step 1. Give Claude the full picture

Paste this first. It tells Claude exactly what you want so the rest of the chat stays on track.

```text
I'm a Completeful team member. Help me set up our shared Obsidian
vault on this Mac using Cowork. The vault is a private GitHub repo at
https://github.com/Zachary0hill/completeful-obs and I want it cloned
locally, opened in Obsidian, with the Obsidian Git plugin enabled and
automatic backup configured. Walk me through it step by step, check
each step worked before moving on, and tell me whenever you need me to
approve something. Do not create a blank vault and copy notes in.
Clone the real repo so it stays connected to GitHub.
```

---

## Step 2. Check prerequisites

```text
First, check whether Git, the GitHub CLI (gh), and Obsidian are
installed on this Mac. If Git or gh are missing, install them for me
and tell me what you're doing. Confirm what versions I have before we
continue.
```

Claude will run checks in Terminal and install anything missing. Approve the Terminal access when prompted.

---

## Step 3. Sign in to GitHub

```text
Set up GitHub authentication over HTTPS using the macOS Keychain so I
don't get asked to log in on every sync. Use gh auth login, choose
GitHub.com and HTTPS, and walk me through the browser login. Confirm
I'm authenticated to the account that can access the private
completeful-obs repo.
```

If you are not a member of the repo yet, Claude will hit a permission error here. Get an invite from Zach or Josh, accept it, then send this prompt again.

---

## Step 4. Pick where the vault will live and clone it

```text
Help me choose a folder on this Mac for the vault, then clone
https://github.com/Zachary0hill/completeful-obs.git into a folder
named Completeful there. Show me the exact path when you're done so I
know where it is.
```

Claude will ask for access to a folder. A common choice is a Documents or Projects folder. Approve the folder Claude asks for, or tell it where you want the vault.

---

## Step 5. Open it in Obsidian

```text
Now help me open the cloned Completeful folder as a vault in Obsidian.
Tell me exactly what to click: Open folder as vault, then select the
Completeful folder, then trust the author and enable community plugins
when prompted. Confirm the Obsidian Git plugin is turned on.
```

Obsidian will ask you to trust the vault author and enable community plugins. Say yes. The Git plugin ships with the vault, so it should appear automatically. If it does not, the next prompt handles it.

---

## Step 6. Confirm the backup is working

```text
Verify everything is connected correctly. Check that the vault's Git
remote points at completeful-obs, that the branch is tracking
origin/main, and run a pull so I have the latest notes. Then explain
my everyday routine in one or two sentences.
```

When this passes, you are set up. The everyday routine is simple: pull before editing, and run **Git: Commit-and-sync** before you close Obsidian or switch computers.

---

## Optional. Turn on automatic backup

```text
Help me set up automatic Git backup in the Obsidian Git plugin
settings so my work saves to GitHub on its own. Recommend good
intervals for someone who sometimes works across two computers, and
tell me exactly which settings to change.
```

A practical starting point: pull when Obsidian starts, auto pull every ten minutes if you use more than one computer, and auto commit-and-sync every ten to fifteen minutes. Keep notifications on while you are learning so you can see when a sync fails.

---

## Everyday use, after setup

You do not need Cowork for daily work. Inside Obsidian:

1. Press `Command + P` to open the Command Palette.
2. Run **Git: Pull** before you start editing.
3. Run **Git: Commit-and-sync** when you finish, and wait for the success notices.

The rule to remember: **Pull before editing. Commit-and-sync before switching devices.**

For the complete reference, see the **Completeful Obsidian Git Guide** PDF in the vault root.

---

## Troubleshooting prompts

Paste whichever one matches what you are seeing.

**GitHub keeps asking me to log in**

```text
Git keeps prompting me to authenticate when I sync. Check my
credential helper is set to osxkeychain and re-run gh auth login over
HTTPS so my login is stored properly. Don't have me type my account
password into a Git prompt.
```

**The Git plugin is not showing up in Obsidian**

```text
The Obsidian Git plugin isn't enabled in my Completeful vault. Walk me
through installing and enabling Obsidian Git from Community plugins.
The repo is already connected, so we should not initialize a new repo.
```

**I got a merge conflict**

```text
I have a Git sync conflict in my Completeful vault. Help me find the
conflicted note, understand the conflict markers, keep the correct
content, and commit the resolution safely. Do not run any destructive
commands like reset --hard.
```

**I'm not sure my last changes were saved to GitHub**

```text
Confirm whether my latest Completeful vault changes made it to GitHub.
Check git status, tell me if anything is uncommitted, and if so, run a
commit-and-sync and confirm the push succeeded.
```

---

## Safety notes

- Keep the `completeful-obs` repository private. The vault holds internal Completeful information.
- Never put passwords, access tokens, private keys, or customer secrets into vault notes.
- Do not clone the repository into a folder inside an existing vault.
- Do not initialize a new repo. This vault is already connected to GitHub.
- Always finish syncing on one device before you start editing on another.

---

## What "done" looks like

You are set up correctly when the vault is cloned rather than copied, the Git remote points at `completeful-obs`, the branch tracks `origin/main`, your login lives in the macOS Keychain, and the Obsidian Git plugin is enabled. From there, follow the everyday rule and your notes stay backed up automatically.
