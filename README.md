# denkirs-si

Front-end code served on [denkirs.si](https://denkirs.si) (DENKIRS EU track lighting), delivered through jsDelivr.
Only files that a visitor's browser downloads are kept here.

## Track configurator

`configurator/dkc3-<version>.js` — DENKIRS Track Configurator 3.0 (wizard, kit, light calculation, 3D studio)
for the configurator page of denkirs.si. It is a generated file: do not edit it here.

Each release is a git tag `v<version>`, and the page loads exactly that tag:

```
https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@v0.4.5/configurator/dkc3-0.4.5.js
```

If jsDelivr does not answer, the page takes the same file from `fastly.jsdelivr.net` (same path), then from
GitHub Pages: `https://denkirs-it.github.io/denkirs-si/configurator/dkc3-0.4.5.js`.
The browser checks the file against its SRI hash (sha384) before running it.

The page also holds the configurator's texts for the site translation; they carry a texts version, and the
program translates only with blocks of the same version (otherwise it stays in English).

| Version | Date       | Texts    | SRI                                                                       |
|---------|------------|----------|---------------------------------------------------------------------------|
| 0.4.1   | 04.11.2026 | —        | `sha384-678qz2phIcJWq6Lt3M03XUAw4V95BjDbLvPlKy9JR3gn0Wry/AO1HDtgrC5pgE6Z` |
| 0.4.2   | 04.11.2026 | c9a01889 | `sha384-tlsRs8Q2tXEj0v+Lw5keaghASEumDzpNFS3MizG3nHGorSPP0yEBVjUQrCw7YV6P` |
| 0.4.3   | 04.11.2026 | c9a01889 | `sha384-1cGdtQEc0Bwr1O0Ktu9M7qXg99xOy3+i+YmJ4F0WERdMoqU+Z7aDTMP/5Ylt3WCT` |
| 0.4.4   | 04.11.2026 | c9a01889 | `sha384-JrIzKiL9KW/Lo/zERw0j+3TObpiJ32j9r0W92psCbqEH6/qljrFFOmR4ZfxjoW+T` |
| 0.4.5   | 04.11.2026 | c9a01889 | `sha384-LGEZjazR2z+vjQxvcRG/LAv2YG0qtg0swwZ80zfUELalxehGpVrlNwLkh9BK4WMr` |

## Catalog engine

`catalog/dkcat-<version>.js` — the product catalog of denkirs.si: grid, filters, listing search, product popup
(its styles are inside the file). A small loader in the site header fetches it only on pages that have a catalog.
Tag `catalog-v<version>`:

```
https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@catalog-v2.5.0/catalog/dkcat-2.5.0.js
```

| Version | Date       | SRI                                                                       |
|---------|------------|---------------------------------------------------------------------------|
| 2.3.0   | 09.11.2026 | `sha384-TuSlgEWNLEbCYx/Q+asKJ4PdGCCP0ofLodN1cXOqmib7yKp46Qui3xzsoCp+Ah9v` — not used: one style for the category pages' hero on phones has to be in the page, not in the file |
| 2.3.1   | 09.11.2026 | `sha384-lYkbIzurMhoWyaPdEisdeFUCQKro6aMAl9QudmnyRmj0wPL+/0nLiqFBDm0Rpujm` |
| 2.3.2   | 10.11.2026 | `sha384-RjOTW7yE8cLPF+jNBnA8HpAWw/3GYqpot+DJzuw3f9AXi7VJpymawJeenj6ujOz9` |
| 2.4.0   | 11.11.2026 | `sha384-As4s2Y2fXH0ggspxQTWlk5coStYn+C5AyhrJIEKB4kYwtO/c0ng238Hlho9cLTjv` |
| 2.5.0   | 11.11.2026 | `sha384-0gLbsBc970XUw6JvSwVHCoOC4RMANeH4Q8wHX9Rp0k8xyLiwjOlsoCcFmTkRmvw7` |

The catalog is loaded the same way as the configurator: jsDelivr, then `fastly.jsdelivr.net`, then GitHub Pages, each
checked against the SRI hash. It is a generated file: do not edit it here.

## Header logic

`header/dkh-3.9.0.js` (tag `header-v3.9.0`, 09.11.2026) was published but is not used: the header's menu, mobile
menu and search are the site's navigation, so their code stays in the page and does not depend on a CDN.

## 3D models

`3d/` — simplified 3D models of DENKIRS fixtures for the configurator's 3D studio: `index.json` and one
`<DKxxxx>.dkm` per fixture (format v1: `Float32[8]` vertex count, index count, min xyz, max xyz in mm, Y up →
`Int16[n·3]` positions within the box → padding to 4 bytes → `Uint16|Uint32` indices). The program loads them
from the same tag as itself: `https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@v0.4.5/3d/`.

### Rules

- Tags are set by the workflow `release-tags`: a new `configurator/dkc3-<x.y.z>.js` pushed to `main` gets the tag
  `v<x.y.z>` at the commit that added it (`catalog/dkcat-…` → `catalog-v…`, `header/dkh-…` → `header-v…`).
  Nobody sets or moves tags by hand.
- A version may wait in a branch `release-x.y.z` while it is checked; once it is in `main` and tagged, the same
  workflow removes that branch (commits and tags stay).
- A released tag is never moved or deleted: jsDelivr keeps a tagged file forever. A fix is a new version
  (the workflow fails if a released file was changed).
- Files of released versions stay in `main`, because GitHub Pages serves `main`.
- A release reaches the site only when the version number and SRI hash are changed on the page itself.

© DENKIRS EU d.o.o.
