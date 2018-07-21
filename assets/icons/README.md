# SVG icons

These are the source SVG icons used to generate the corresponding React components.

## Adding new icons

* Add prepared SVGs to this folder.
* Run `npm run svg`.
* Export the new icon from `src/components/Icon/icons/index.ts`.
* Run `y run test:visual:component Icon` to generate a new reference image. ([Requires docker](https://github.com/microsoft/yamui#installation))
* Run `npm run test:visual:approve` to approve the new reference image.
* Commit the new resources and visual diffs to a new branch, and open a pull request.

## Requirements

These are the requirements for all SVG files you add to this folder:

* The size of the icon should be `240x240`.
* `viewBox` is required.
* `height` and `width` are optional.
