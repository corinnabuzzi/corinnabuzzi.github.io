# corinnabuzzi.github.io

My portfolio: who I am, what I've built, and how to reach me.

Live: https://corinnabuzzi.github.io

## Stack

Plain HTML, CSS and one small JavaScript module. No framework and no build step: what's in this repo is exactly what the browser gets.

- The fonts are self-hosted: Fraunces, Instrument Sans and Fragment Mono, all under the SIL Open Font License (licenses in `fonts/`).
- The JavaScript does two things: the live Milan clock in the contact section, and the button that copies my email. Without it, the page still works.

## Structure

```
index.html
favicon.svg
css/style.css
js/main.js
fonts/
```

## Running it locally

`js/main.js` is an ES module, and browsers won't load modules from `file://`, so serve the folder instead:

```
python -m http.server
```

or use the VSCode "Live Server" extension. Then open http://localhost:8000.

## History

I built the site one section at a time, and each step is tagged:

| Tag  | What it adds |
|------|--------------|
| `v0` | The full HTML with no styles, to see what the markup does on its own |
| `v1` | Fonts, colour tokens, base styles, header and hero |
| `v2` | About and the neofetch block |
| `v3` | Selected Work and the Fig. 1 diagram |
| `v4` | Contact, footer and the JavaScript |

`git diff v2 v3` shows exactly what one section added.

## Deployment

GitHub Pages, from `main`. The empty `.nojekyll` file makes Pages serve the files as they are, without running them through Jekyll.
