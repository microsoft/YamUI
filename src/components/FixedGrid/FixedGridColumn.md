`FixedGrid` is made up of two components - `FixedGridRow` and `FixedGridColumn`. `FixedGrid` is most commonly useful when you have one side of a layout that should maintain its width, and the content to the other side should grow horizontally to fill the available space.

### Examples

Fixed left column with width:

```js { "props": { "data-example": "fixed left column with width" } }
const { GutterSize } = require('.');

<FixedGridRow>
  <FixedGridColumn fixed width={50}>
    <Image source="smiley.png" description="test" fullWidth />
  </FixedGridColumn>
  <FixedGridColumn>
    The left column is fixed with <strong>width: 50</strong>. Its Image has set <strong>fullWidth</strong> to fill that 50px. The right column is not fixed and will grow or shrink to fill the grid's container.
  </FixedGridColumn>
</FixedGridRow>
```

Fixed left column without width:

```js { "props": { "data-example": "fixed left column without width" } }
<FixedGridRow>
  <FixedGridColumn fixed>
    <Image source="smiley.png" description="test" width={50} />
  </FixedGridColumn>
  <FixedGridColumn>
    The left column is fixed without a width, so it will shrink to fit its content. Its Image is set to 50px wide. The right column is not fixed and will grow or shrink to fill the
    grid's container.
  </FixedGridColumn>
</FixedGridRow>
```

Fixed right column with width:

```js { "props": { "data-example": "fixed right column with width" } }
<FixedGridRow>
  <FixedGridColumn>
    The right column is fixed with <strong>width: 50</strong>. Its Image has set <strong>fullWidth</strong> to fill that 50px. The left column is not set to fixed and will grow or shrink to fill the grid's container.
  </FixedGridColumn>
  <FixedGridColumn fixed width={50}>
    <Image source="smiley.png" description="test" fullWidth />
  </FixedGridColumn>
</FixedGridRow>
```

Fixed left column without width:

```js { "props": { "data-example": "fixed left column without width" } }
<FixedGridRow>
  <FixedGridColumn>
    The right column is fixed without a width, so it will shrink to fit its content. Its Image
    is set to 50px wide. The left column is not set to fixed and will grow or shrink to fill
    the grid's container.
  </FixedGridColumn>
  <FixedGridColumn fixed>
    <Image source="smiley.png" description="test" width={50} />
  </FixedGridColumn>
</FixedGridRow>
```

Two fixed columns:

```js { "props": { "data-example": "two fixed columns" } }
<FixedGridRow>
  <FixedGridColumn fixed width={50}>
    <Image source="smiley.png" description="test" fullWidth />
  </FixedGridColumn>
  <FixedGridColumn>
    This example has three columns. The left and right are both fixed, while the center column
    will grow or shrink to fit the grid's container.
  </FixedGridColumn>
  <FixedGridColumn fixed>
    <Image source="smiley.png" description="test" width={50} />
  </FixedGridColumn>
</FixedGridRow>
```

With gutterSize and bottomSpacing:

```js { "props": { "data-example": "with gutterSize and bottomSpacing" } }
const { GutterSize } = require('.');

<div>
  <FixedGridRow gutterSize={GutterSize.XXLARGE} bottomSpacing={GutterSize.XXLARGE}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XXLARGE</strong> and <strong>bottomSpacing: XXLARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XLARGE} bottomSpacing={GutterSize.XLARGE}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XLARGE</strong> and <strong>bottomSpacing: XLARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.LARGE} bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: LARGE</strong> and <strong>bottomSpacing: LARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.MEDIUM} bottomSpacing={GutterSize.MEDIUM}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: MEDIUM</strong> and <strong>bottomSpacing: MEDIUM</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: SMALL</strong> and <strong>bottomSpacing: SMALL</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL} bottomSpacing={GutterSize.XSMALL}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XSMALL</strong> and <strong>bottomSpacing: XSMALL</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL}>
    <FixedGridColumn fixed width={50}>
      <Image source="smiley.png" description="test" fullWidth />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XSMALL</strong> and no bottomSpacing.
    </FixedGridColumn>
  </FixedGridRow>
</div>
```
