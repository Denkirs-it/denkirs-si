# denkirs-si

Front-end code served on [denkirs.si](https://denkirs.si) (DENKIRS EU track lighting), delivered through jsDelivr.
Only files that a visitor's browser downloads are kept here.

## Track configurator

`configurator/dkc3-<version>.js` — DENKIRS Track Configurator 3.0 (wizard, kit, light calculation, 3D studio)
for the configurator page of denkirs.si. It is a generated file: do not edit it here.

Each release is a git tag `v<version>`, and the page loads exactly that tag:

```
https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@v0.4.4/configurator/dkc3-0.4.4.js
```

If jsDelivr does not answer, the page takes the same file from `fastly.jsdelivr.net` (same path), then from
GitHub Pages: `https://denkirs-it.github.io/denkirs-si/configurator/dkc3-0.4.4.js`.
The browser checks the file against its SRI hash (sha384) before running it.

The page also holds the configurator's texts for the site translation; they carry a texts version, and the
program translates only with blocks of the same version (otherwise it stays in English).

| Version | Date       | Texts    | SRI                                                                       |
|---------|------------|----------|---------------------------------------------------------------------------|
| 0.4.1   | 04.11.2026 | —        | `sha384-678qz2phIcJWq6Lt3M03XUAw4V95BjDbLvPlKy9JR3gn0Wry/AO1HDtgrC5pgE6Z` |
| 0.4.2   | 04.11.2026 | c9a01889 | `sha384-tlsRs8Q2tXEj0v+Lw5keaghASEumDzpNFS3MizG3nHGorSPP0yEBVjUQrCw7YV6P` |
| 0.4.3   | 04.11.2026 | c9a01889 | `sha384-1cGdtQEc0Bwr1O0Ktu9M7qXg99xOy3+i+YmJ4F0WERdMoqU+Z7aDTMP/5Ylt3WCT` |
| 0.4.4   | 04.11.2026 | c9a01889 | `sha384-JrIzKiL9KW/Lo/zERw0j+3TObpiJ32j9r0W92psCbqEH6/qljrFFOmR4ZfxjoW+T` |

## 3D models

`3d/` — simplified 3D models of DENKIRS fixtures for the configurator's 3D studio: `index.json` and one
`<DKxxxx>.dkm` per fixture (format v1: `Float32[8]` vertex count, index count, min xyz, max xyz in mm, Y up →
`Int16[n·3]` positions within the box → padding to 4 bytes → `Uint16|Uint32` indices). The program loads them
from the same tag as itself: `https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@v0.4.4/3d/`.

### Rules

- Tags are set by the workflow `release-tags`: a new `configurator/dkc3-<x.y.z>.js` pushed to `main` gets the tag
  `v<x.y.z>` at the commit that added it. Nobody sets or moves tags by hand.
- A released tag is never moved or deleted: jsDelivr keeps a tagged file forever. A fix is a new version
  (the workflow fails if a released file was changed).
- Files of released versions stay in `main`, because GitHub Pages serves `main`.
- A release reaches the site only when the version number and SRI hash are changed on the page itself.

© DENKIRS EU d.o.o.
