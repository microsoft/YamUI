`FixedGrid` is made up of two components - `FixedGridRow` and `FixedGridColumn`. `FixedGrid` is most commonly useful when you have one side of a layout that should maintain its width, and the content to the other side should grow horizontally to fill the available space.

### Examples

Fixed left column with width:

```js { "props": { "data-description": "fixed left column with width" } }
<FixedGridRow>
  <FixedGridColumn fixed={true} width={150}>
    <Image source="logo.png" description="" fullWidth={true} />
  </FixedGridColumn>
  <FixedGridColumn>
    <Paragraph>
      The left column is fixed with <Strong>fixed: true</Strong> and <Strong>width: 150</Strong>. Its child <Strong>Image</Strong> has set <Strong>fullWidth: true</Strong> to fill the parent.
    </Paragraph>
    <Paragraph>
      The right column is not fixed, and will grow or shrink to fill the grid's container.
    </Paragraph>
  </FixedGridColumn>
</FixedGridRow>
```

Fixed left column without width:

```js { "props": { "data-description": "fixed left column without width" } }
<FixedGridRow>
  <FixedGridColumn fixed={true}>
    <Image source="logo.png" description="" width={100} />
  </FixedGridColumn>
  <FixedGridColumn>
    <Paragraph>
      The left column is fixed with <Strong>fixed: true</Strong>, but doesn't have a set <Strong>width</Strong>, so it will shrink to fit its contents. Its child <Strong>Image</Strong> has set <Strong>width: 100</Strong>.
    </Paragraph>
    <Paragraph>
      The right column is not fixed, and will grow or shrink to fill the grid's container.
    </Paragraph>
  </FixedGridColumn>
</FixedGridRow>
```

Fixed right column with width:

```js { "props": { "data-description": "fixed right column with width" } }
<FixedGridRow>
  <FixedGridColumn>
    <Paragraph>
      The right column is fixed with <Strong>fixed: true</Strong> and <Strong>width: 150</Strong>. Its child <Strong>Image</Strong> has set <Strong>fullWidth: true</Strong> to fill the parent.
    </Paragraph>
    <Paragraph>
      The left column is not fixed, and will grow or shrink to fill the grid's container.
    </Paragraph>
  </FixedGridColumn>
  <FixedGridColumn fixed={true} width={150}>
    <Image source="logo.png" description="" fullWidth={true} />
  </FixedGridColumn>
</FixedGridRow>
```

Fixed right column without width:

```js { "props": { "data-description": "fixed right column without width" } }
<FixedGridRow>
  <FixedGridColumn>
    <Paragraph>
      The right column is fixed with <Strong>fixed: true</Strong>, but doesn't have a set <Strong>width</Strong>, so it will shrink to fit its contents. Its child <Strong>Image</Strong> has set <Strong>width: 100</Strong>.
    </Paragraph>
    <Paragraph>
      The left column is not fixed, and will grow or shrink to fill the grid's container.
    </Paragraph>
  </FixedGridColumn>
  <FixedGridColumn fixed={true}>
    <Image source="logo.png" description="" width={100} />
  </FixedGridColumn>
</FixedGridRow>
```

Two fixed columns:

```js { "props": { "data-description": "two fixed columns" } }
<FixedGridRow>
  <FixedGridColumn fixed={true} width={100}>
    <Image source="logo.png" description="" fullWidth={true} />
  </FixedGridColumn>
  <FixedGridColumn>
    This example has three columns. The left and right are both fixed, while the center column will grow or shrink to fit the grid's container.
  </FixedGridColumn>
  <FixedGridColumn fixed={true}>
    <Image source="logo.png" description="" width={100} />
  </FixedGridColumn>
</FixedGridRow>
```

With gutters and spacing:

```js { "props": { "data-description": "with gutters and spacing" } }
const { GutterSize } = require('.');

<div>
  <FixedGridRow gutterSize={GutterSize.XXLARGE} bottomSpacing={GutterSize.XXLARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: XXLARGE</Strong> and <Strong>bottomSpacing: XXLARGE</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XLARGE} bottomSpacing={GutterSize.XLARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: XLARGE</Strong> and <Strong>bottomSpacing: XLARGE</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.LARGE} bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: LARGE</Strong> and <Strong>bottomSpacing: LARGE</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.MEDIUM} bottomSpacing={GutterSize.MEDIUM}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: MEDIUM</Strong> and <Strong>bottomSpacing: MEDIUM</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: SMALL</Strong> and <Strong>bottomSpacing: SMALL</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL} bottomSpacing={GutterSize.XSMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: XSMALL</Strong> and <Strong>bottomSpacing: XSMALL</Strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <Strong>gutterSize: XSMALL</Strong> and no bottomSpacing.
    </FixedGridColumn>
  </FixedGridRow>
</div>
```

With vertical alignment:

```js { "props": { "data-description": "with vertical alignment" } }
<FixedGridRow>
  <FixedGridColumn fixed={true} width={100}>
    This example is showing the different vertical align options for each individual grid columns.
  </FixedGridColumn>
  <FixedGridColumn verticalAlign="top">
    This is vertical align 'top', the default prop
  </FixedGridColumn>
  <FixedGridColumn verticalAlign="middle">
    This is vertical align 'middle'
  </FixedGridColumn>
  <FixedGridColumn verticalAlign="bottom">
    This is vertical align 'bottom'
  </FixedGridColumn>
</FixedGridRow>
```
