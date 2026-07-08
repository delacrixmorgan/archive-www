# 📚 Archive

![home](/screenshots/home.png?raw=true "Home")

**Build your own searchable archive** 🗃️

Ever read something online — a piece of journalism, a bit of history, an essay — and worried it might quietly disappear one day? This is a little template for saving those articles as your own **searchable, taggable catalog**, published as a website for free.

Archive is a **white-label template**, which just means: it comes plain on purpose. You fork it (make your own copy), drop in your articles, add your own name and update the colours (if you'd like), and it's yours! No design skills required, just a minimal setup. 💛

---

## ✨ What you get

- 🕰️ A clean **timeline** of your articles, newest first
- 🔎 Instant **full-text search** — it looks inside the titles, tags, authors, *and* the article text
- 🏷️ Clickable **tag filters** to group things (e.g. all your "Surveillance" pieces in one tap)
- 🌍 **Free hosting** on GitHub Pages — no monthly bill, ever
- 🗂️ **No database, no servers** — just simple text files you fully own

---

## 🧰 The tech behind it (and why it's so easy to maintain)

You don't need to understand any of this to use it — but here's the honest, plain-English version of what's under the hood and why it was chosen. 🙂

- **It's built with [Astro](https://astro.build)** — a "static site generator." That's a fancy way of saying it turns your files into a plain, fast website (just HTML, CSS, and a sprinkle of JavaScript). There's nothing running in the background that can crash or rack up a bill.
- **Only two dependencies.** Most projects rely on hundreds of moving parts that constantly need updating. This one leans on almost nothing — so there's very little that can break.
- **Your articles are just Markdown files.** Markdown is a super-simple way of writing formatted text (the same style used in a lot of note apps). It's plain text, readable forever, easy to back up, and never locked inside some app you might lose access to.
- **Search and tags build themselves.** Every time the site is generated, it reads your articles and automatically creates the search index and tag filters. You never wire anything up by hand.
- **It deploys itself.** Once it's on GitHub, every time you save a new article the website rebuilds and republishes on its own, using a free service called GitHub Actions.

**In short:** it was chosen to be *lightweight, simple, and self-deploying* — so you can spend your time collecting articles, not maintaining software. The whole loop is:

> ✍️ Add a Markdown file → ▶️ run one command → 🌍 your site updates itself.

---

## 🚀 Get it running on your computer

**1. Install Node.js** (this is the tool that runs the project).
Download it from [nodejs.org](https://nodejs.org) — you'll need **version 22.12 or newer**. Just click through the installer. ✅

**2. Get your own copy** of this project — click **Fork** on GitHub (or download it as a ZIP) and open the folder on your computer.

**3. Open a terminal** in that folder and run these commands one at a time:

```bash
# Install the project (only needed once)
npm install

# Start a live preview on your computer
npm run dev
```

**4. Open the link** it prints (usually `http://localhost:4321`) in your browser. 🎉 That's your archive, running live! Leave this window open — it refreshes automatically as you add articles.

When you're done and ready to publish, you can also run:

```bash
# Build the final website files (into a "dist" folder)
npm run build

# Preview that finished build
npm run preview
```

---

## 📝 Adding an article

![article](/screenshots/article.png?raw=true "Article")

This is the whole workflow — it's genuinely just "create a text file." 📄

**1. Create a new file** inside the `src/content/articles/` folder.

**2. Name it** using this pattern: `YYYY-MM-DD-a-short-name.md`
For example: `2013-06-11-snowden.md`

**3. Paste in this template** and fill it out (here's a real example from the included Snowden article):

```markdown
---
title: "Edward Snowden: the whistleblower behind the NSA surveillance revelations"
date: 2013-06-11
authors: ["Glenn Greenwald", "Ewen MacAskill", "Laura Poitras"]
tags: ["Surveillance"]
source: "https://www.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance"
excerpt: "The 29-year-old source behind the biggest intelligence leak in the NSA's history explains his motives, his uncertain future and why he never intended on hiding in the shadows."
---

The individual responsible for one of the most significant leaks in US
political history is Edward Snowden...

(the rest of the article goes here, in plain paragraphs)
```

**4. Save the file.** If `npm run dev` is still running, your browser updates instantly. That's it — you're done! ✨

---

## 🧾 Understanding the frontmatter (the bit between the `---` lines)

That little block at the top, fenced by `---` lines, is called **frontmatter**. Think of it as a tiny settings card for the article — it tells the site how to list, sort, and find your piece. Everything **below** the closing `---` is the article itself.

Here's every field, whether you need it, and *why it's there* 👇

| Field | Needed? | What it does / why it matters |
|-----------|:---:|-------------------------------|
| `title` | ✅ | The headline shown in your timeline. Also searchable. |
| `date` | ✅ | Written as `YYYY-MM-DD`. Decides **where the article sits in the timeline** (newest first). Make it match the date in the filename. |
| `authors` | ✅ | A list of who wrote it, e.g. `["Glenn Greenwald", "Ewen MacAskill"]`. Searchable too. Don't know? Use `[]`. |
| `tags` | ✅ | The magic behind filtering — **each tag becomes a clickable chip**, e.g. `["Surveillance"]`. Reuse the *exact same spelling* to group related articles together. No tags? Use `[]`. |
| `source` | ✅ | A link back to the original article, so your archive always credits and points to the real source. |
| `excerpt` | ✅ | The one-line summary shown under the title in the list. Also searchable. |

> 💡 **Good to know:** the search doesn't only look at these fields — it reads the **full article body** too. So you don't need to cram keywords into the excerpt just to make something findable. Write naturally.

---

## 🔎 How search & tags work

Both are automatic. 🪄

- Whatever you put in `tags` shows up as **filter buttons** at the top of your archive. Tap one to see only those articles. (Just remember: `"Surveillance"` and `"surveillance"` count as different tags, so keep your spelling consistent.)
- The **search box** matches against titles, tags, authors, *and* the full text of every article.

Every time you add a file and the site rebuilds, both the search and the tag list refresh themselves. Nothing to configure. ✅

---

## 🌍 Publish it online for free

Ready to share your archive with the world? GitHub hosts it for free. 🥳

1. Push your copy of the project to a repository on **GitHub**.
2. In your repo, go to **Settings → Pages**, and under **Source** choose **GitHub Actions**.
3. That's it! From now on, **every time you push a change to the `main` branch**, the site rebuilds and republishes automatically (thanks to the workflow already included in `.github/workflows/deploy.yml`).

> 🔧 One small tweak: open [site.config.mjs](site.config.mjs) and set `repository` to your repo's name and `githubUser` to your GitHub username. This is what makes all the links point to the right place on GitHub Pages. (More on that file just below. 👇)

---

## 🎨 Make it your own

It's a template — please change it! 💅

### ⚙️ The one file to edit: `site.config.mjs`

Everything that makes this archive *yours* — its name, tagline, and web address — lives in a single file at the top of the project: [site.config.mjs](site.config.mjs). Open it, change the four values, save. That's the whole setup. ✨

```js
export default {
  name: 'Archive',
  description: 'This is not a pipe',
  repository: 'archive-www',
  githubUser: 'delacrixmorgan',
};
```

| Value | What it does |
|-------|--------------|
| `name` | Your archive's name — shown in the header, browser tab titles, and footer. |
| `description` | A short tagline shown under the name — also used as the site's description for search engines. |
| `repository` | Your GitHub repository's name → becomes the URL path (`…github.io/your-repo`). Must match the repo you publish to. |
| `githubUser` | Your GitHub username → the web address your site is served from (`your-name.github.io`). |

> 💡 You don't need to touch any code — just those four lines. Change one and it updates everywhere automatically the next time the site builds.

### 🖌️ Going further (optional)

- 🎨 The colours and styling live in the CSS files under `css/`.
- 🧱 The page layout lives in [src/pages/index.astro](src/pages/index.astro) and [src/pages/[id].astro](src/pages/[id].astro).
- 🙂 Everything is yours to rename, restyle, and rearrange.

---

## 🗂️ What's in the box

```
├── src/
│   ├── content/articles/   # 👈 your Markdown articles go here
│   ├── layouts/            # page templates
│   └── pages/              # the homepage + article pages
├── public/                 # images and other static files
├── css/                    # the look & feel (colours, fonts, spacing)
└── .github/workflows/      # the "publish it for free" automation
```

---

## 🆘 Common questions

- **"npm isn't found / it won't install."** Make sure Node.js **22.12 or newer** is installed ([nodejs.org](https://nodejs.org)), then close and reopen your terminal.
- **"It says *Another astro dev server is already running*."** 😅 No worries — this isn't an error you caused. It just means a preview is *already* running from a previous `npm run dev`, so it won't start a second one. You have two easy options:
  - **Just use the one that's running** — open the URL it shows you (`http://localhost:4321`) and your preview is right there.
  - **Restart it fresh** — stop the old one with `npx astro dev stop`, or replace it in one step with `npm run dev -- --force`.
- **"My articles are in the wrong order."** Ordering comes from the `date` field — newest first. Double-check the date is written as `YYYY-MM-DD`.
- **"My tags aren't grouping together."** Tags must be spelled *exactly* the same (capital letters included) to be treated as the same tag.
- **"Do I need to know how to code?"** Nope! If you can create a text file and copy-paste a template, you can run your own archive. 💛

---

## 📜 License

This template is free and open source software, released under the **[GNU General Public License v3](LICENSE.md)**. 

In plain terms: you're free to use, change, and share it — just keep it under the same license so it stays free for everyone. 💛