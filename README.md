# completeful-obs

Private knowledge vault for Completeful, backed up and version-controlled through GitHub. This repository is an [Obsidian](https://obsidian.md) vault. Open the folder as a vault in Obsidian rather than editing files individually.

Completeful is a US-based print-on-demand and 3PL fulfillment platform in Lafayette, Louisiana. This vault holds the internal knowledge base behind the brand, marketing, product, help center, and automation work.

> **This repository is private.** It contains internal Completeful information. Do not make it public, and never commit passwords, access tokens, private keys, or customer secrets.

---

## Quick start

If you already have access to this repo and want it on your Mac:

```bash
git config --global credential.helper osxkeychain
cd "/path/where/you/want/the/vault"
git clone https://github.com/Zachary0hill/completeful-obs.git Completeful
```

Then open the `Completeful` folder in Obsidian with **Open folder as vault**, trust the author, and enable community plugins so the Git plugin loads.

New to the vault or want Claude to set it up for you, see **Completeful Vault Setup via Cowork.md** in the repo root. For the full backup and sync reference, see **Completeful Obsidian Git Guide.pdf**.

---

## Everyday workflow

Git adds version history and off-site backup. It does not change how Obsidian saves your notes.

1. Run **Git: Pull** before you start editing.
2. Edit notes normally.
3. Run **Git: Commit-and-sync** when you finish, and wait for the success notices.

The rule to remember: **Pull before editing. Commit-and-sync before switching devices.**

Open the Command Palette with `Command + P` to find these commands.

---

## Repository structure

The vault is organized by numbered top-level folders so related material stays grouped and sortable.

| Folder | Contents |
|---|---|
| `00 Brand` | Brand overview, voice, visual identity, color, logo usage |
| `01 Marketing` | Marketing strategy, channel plans, social and blog content |
| `02 App & Product` | App and product notes and documentation |
| `03 Help Center` | Help center audits and publish-ready support copy |
| `04 Tutorials` | Seller-facing walkthroughs and tutorial scripts |
| `05 Production` | Production and fulfillment notes |
| `06 Website` | Website content and reference |
| `07 Meetings` | Meeting notes |
| `08 Reference` | General reference material |
| `10 Maps` | Maps of Content (MOCs) that link related notes by topic |
| `11 Ai Agents & Automations` | n8n workflows, content automation, agent systems |
| `99 Assets` | Shared assets, brand files, and the Brand Kit (logos, colors, tokens, icons, guidelines) |
| `_Templates` | Obsidian note templates |

Start at `10 Maps/Completeful Vault Home.md` for a linked overview of the vault.

---

## Key documents

- **Completeful Vault Setup via Cowork.md** — Guided setup a team member can run through a Claude Cowork chat.
- **Completeful Obsidian Git Guide.pdf** — Full reference for backup, sync, troubleshooting, and setting up on another machine.
- **Completeful Brand Overview.md** — Company facts, brand system, and current state of work.
- **Completeful Product Catalog.md** — Product catalog reference.
- **Completeful Vault — Navigation Guide.pdf** — Orientation to how the vault is organized.

---

## What is tracked

The repository contains the vault's notes, PDFs, assets, templates, maps, and shareable Obsidian configuration.

Machine-specific and sensitive files are intentionally excluded by `.gitignore`:

- `.DS_Store`
- `.obsidian/workspace*.json`
- `.obsidian/cache/`
- `.trash/`
- `.obsidian/plugins/obsidian-git/data.json`

The last file is excluded because plugin settings can contain authentication data. GitHub credentials stay in the macOS Keychain and should never be written into a note.

---

## Repository details

- **Branch:** `main`
- **Authentication:** GitHub over HTTPS, stored in macOS Keychain
- **Obsidian plugin:** Git (`obsidian-git`)

---

## Safety notes

- Keep this repository private.
- Never put passwords, access tokens, private keys, or customer secrets into vault notes.
- Do not delete the hidden `.git` directory. It stores local version history and the remote connection.
- Do not run **Initialize a new repo**. This vault is already connected to GitHub.
- Do not clone this repository into a folder inside another vault.
- Always finish syncing on one device before you start editing on another.

---

## Access

To request access to this repository, contact Zach or Josh.
