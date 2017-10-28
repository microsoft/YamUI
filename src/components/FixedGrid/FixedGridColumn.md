`FixedGrid` is made up of two components - `FixedGridRow` and `FixedGridColumn`. `FixedGrid` is most commonly useful when you have one side of a layout that should maintain its width, and the content to the other side should grow horizontally to fill the available space.

### Examples

Basic usage:

```js
<FixedGridRow>
  <FixedGridColumn fixed width={150}>This content is fixed at <em>150px</em> wide.</FixedGridColumn>
  <FixedGridColumn>This content will grow or shrink to fill the rest of the horizontal space.</FixedGridColumn>
</FixedGridRow>
```
