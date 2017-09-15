# Source SVG icons used to build React components

### Here we collect the raw (exported from Sketch) and optimized SVGs.

1. Add any number of raw SVGs to the `assets/Icons/raw` folder
2. Run `yarn svg`, which cleans up each SVG and creates a react component in `src/components/Icon/icons`
3. Add any new icon declarations to `src/components/Icon/icons/index.ts`

### SVG requirements
 - square field of 240
 - includes a `viewBox` attribute
