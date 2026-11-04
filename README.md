# denkirs-si

Front-end code served on [denkirs.si](https://denkirs.si) (DENKIRS EU track lighting), delivered through jsDelivr.
Only files that a visitor's browser downloads are kept here.

## Track configurator

`configurator/dkc3-<version>.js` — DENKIRS Track Configurator 3.0 (wizard, kit, light calculation, 3D studio)
for the configurator page of denkirs.si. It is a generated file: do not edit it here.

Each release is a git tag `v<version>`, and the page loads exactly that tag:

```
https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@v0.4.1/configurator/dkc3-0.4.1.js
```

If jsDelivr does not answer, the page takes the same file from `fastly.jsdelivr.net` (same path), then from
GitHub Pages: `https://denkirs-it.github.io/denkirs-si/configurator/dkc3-0.4.1.js`.
The browser checks the file against its SRI hash (sha384) before running it.

| Version | Date       | SRI                                                                       |
|---------|------------|---------------------------------------------------------------------------|
| 0.4.1   | 04.11.2026 | `sha384-678qz2phIcJWq6Lt3M03XUAw4V95BjDbLvPlKy9JR3gn0Wry/AO1HDtgrC5pgE6Z` |

### Rules

- A released tag is never moved or deleted: jsDelivr keeps a tagged file forever. A fix is a new version.
- Files of released versions stay in `main`, because GitHub Pages serves `main`.
- A release reaches the site only when the version number and SRI hash are changed on the page itself.

© DENKIRS EU d.o.o.
