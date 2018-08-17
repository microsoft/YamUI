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
      The left column is fixed with <strong>fixed: true</strong> and <strong>width: 150</strong>. Its child <strong>Image</strong> has set <strong>fullWidth: true</strong> to fill the parent.
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
      The left column is fixed with <strong>fixed: true</strong>, but doesn't have a set <strong>width</strong>, so it will shrink to fit its contents. Its child <strong>Image</strong> has set <strong>width: 100</strong>.
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
      The right column is fixed with <strong>fixed: true</strong> and <strong>width: 150</strong>. Its child <strong>Image</strong> has set <strong>fullWidth: true</strong> to fill the parent.
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
      The right column is fixed with <strong>fixed: true</strong>, but doesn't have a set <strong>width</strong>, so it will shrink to fit its contents. Its child <strong>Image</strong> has set <strong>width: 100</strong>.
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
      This is an example with <strong>gutterSize: XXLARGE</strong> and <strong>bottomSpacing: XXLARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XLARGE} bottomSpacing={GutterSize.XLARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XLARGE</strong> and <strong>bottomSpacing: XLARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.LARGE} bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: LARGE</strong> and <strong>bottomSpacing: LARGE</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.MEDIUM} bottomSpacing={GutterSize.MEDIUM}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: MEDIUM</strong> and <strong>bottomSpacing: MEDIUM</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: SMALL</strong> and <strong>bottomSpacing: SMALL</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL} bottomSpacing={GutterSize.XSMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XSMALL</strong> and <strong>bottomSpacing: XSMALL</strong>.
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow gutterSize={GutterSize.XSMALL}>
    <FixedGridColumn fixed={true} width={100}>
      <Image source="logo.png" description="" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn>
      This is an example with <strong>gutterSize: XSMALL</strong> and no bottomSpacing.
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
