# Source SVG icons used to build React components

## To add a new icon or icons

1. Add prepared SVGs to assets/Icons/optimized folder

2. Run `yarn create:svg:components`

3. Export the new icon from src/components/Icon/icons/index.ts

4. Commit all these resources to a new branch.

### SVG requirements
 - square field of 240
 - viewBox required, height and width optional
 - no id or fill in path element. fill-rule ok.

