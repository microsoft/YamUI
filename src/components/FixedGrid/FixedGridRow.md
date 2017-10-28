`FixedGrid` is made up of two components - `FixedGridRow` and `FixedGridColumn`. `FixedGrid` is most commonly useful when you have one side of a layout that should maintain its width, and the content to the other side should grow horizontally to fill the available space.

### Examples

Basic usage:

```js
const { GutterSize } = require('.');

<FixedGridRow gutterSize={GutterSize.XLARGE}>
  <FixedGridColumn fixed>
    <Image source="smiley.png" description="" width={100} />
  </FixedGridColumn>
  <FixedGridColumn>
    Here's an example layout with a <em>100px</em> image on the left, a <em>20px</em> gutter, and arbitrary content on the right. The fixed column does not have a width set so it shrinks to the width of its image content.
  </FixedGridColumn>
</FixedGridRow>
```
