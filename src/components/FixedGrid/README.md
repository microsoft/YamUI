# FixedGrid

`FixedGrid` is made up of two components - `FixedGridRow` and `FixedGridColumn`. `FixedGrid` is most commonly useful when you have an image on one side of a layout that should maintain its width, and the content to the side should grow horizontally to fill the available space.

## FixedGridRow Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| gutterSize | GutterSize| Standard gutter size to be used as whitespace between columns. Defaults to `GutterSize.SMALL` (8px) |
| bottomSpacing | string | The component's label. |

## FixedGridColumn Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| fixed | boolean| Set to true if this column should have a fixed width. If true, and `width` is not provided, this column will shrink to fit its content. |
| width | number | The number of pixels wide this column should be. Ignored if `fixed` is not set to true. |

## Examples

### Basic usage

```js
<FixedGridRow>
  <FixedGridColumn fixed width={200}>This content is fixed at 200px wide</FixedGridColumn>
  <FixedGridColumn>This content will grow or shrink to fill the rest of the horizontal space.</FixedGridColumn>
</FixedGridRow>
```

### More advanced usage

You can see a real example of how `FixedGrid` is used by looking at the `MediaObject`'s render method.

Here's an example layout with a `100px` image on the left, a `20px` gutter, and arbitrary content on the right. The fixed column does not have a width set so it shrinks to the width of its image content.

```js
<FixedGridRow gutterSize={GutterSize.XLARGE}>
  <FixedGridColumn fixed>
    <Image source={imgSrc} description={imgDesc} width={100} />
  </FixedGridColumn>
  <FixedGridColumn>{content}</FixedGridColumn>
</FixedGridRow>
```
