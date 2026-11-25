# DENKIRS EU — files for product pages

This branch holds the files linked from the product pages of denkirs.si (`/products/<article>`). The branch has no code
and no history from `main`, so the `main` package with the configurator and the header stays small (jsDelivr serves
packages up to 50 MB).

- `datasheets/<article>.pdf` — the product datasheet, A4, two pages. Printed from the generator of the product pages.
- `ies/DK-EU-<number>.ies` — photometric files for DIALux and Relux, unchanged copies of the measurements. Only files
  whose luminous flux and light distribution match the data of the DENKIRS EU configurator are here.

Links on the site go through jsDelivr by branch name, so a new version of a file reaches the pages without changing them:
`https://cdn.jsdelivr.net/gh/Denkirs-it/denkirs-si@files/datasheets/dk-eu-5368-bk.pdf`.
