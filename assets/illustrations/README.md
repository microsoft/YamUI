# SVG illustrations

These are the source SVG illustrations used to generate the corresponding React components.

## Adding new illustrations

* Add prepared SVGs to the `multisize/XX` folder that corresponds to it's size.  For illustrations that are tuned to look different at different sizes, you can add corresponding versions to each `multisize/XX` folder.  Otherwise you can just provide one that is unsized or sized the same as the folder name.
* Run `npm run svg:generate:illustrations`.
* Export the new icon from `src/components/Illustration/illustrations/index.ts`.
* Run `y run test:visual:component Illustration` to generate a new reference image. ([Requires docker](https://github.com/microsoft/yamui#installation))
* Run `npm run test:visual:approve` to approve the new reference image.
* Commit the new resources and visual diffs to a new branch, and open a pull request.

## Requirements

These are the requirements for all SVG files you add to this folder:

* If the svg has a `height` and `width` it should match the folder name.
* `viewBox` is required.
* `height` and `width` are optional.
