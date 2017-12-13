### Notes for use

Adding an `aria-label` to the icon is not supported, as it is being specified by wrapper components. For example, `Button` adds `aria-label` when it renders its `Icon` component.

The `block` prop may be necessary to remove extra `line-height`.

### Examples

Icon library:

```js { "props": { "data-example": "library" } }
const { IconSize } = require('../index');
const allIcons = require('.');
const { GutterSize, TextSize } = require('../Block');

const iconsLibrary = Object.keys(allIcons).map((Icon, index) => (
  <div style={{ float: 'left', width: '100px', textAlign: 'center' }}>
    <Block textSize={TextSize.XLARGE}>
      <Icon />
    </Block>
    <Block textSize={TextSize.XSMALL} bottomSpacing={GutterSize.XLARGE}>
      {Icon.constructor.displayName}
    </Block>
  </div>
));

<div>
  {iconsLibrary}
  <br style={{ clear: 'both' }} />
</div>
```

Sizes:

```js { "props": { "data-example": "sizes" } }
const { Attach, IconSize } = require('../index');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th>XXL</th>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Attach size={IconSize.XXLARGE} />
      </td>
      <td>
        <Attach size={IconSize.XLARGE} />
      </td>
      <td>
        <Attach size={IconSize.LARGE} />
      </td>
      <td>
        <Attach size={IconSize.MEDIUM} />
      </td>
      <td>
        <Attach size={IconSize.SMALL} />
      </td>
      <td>
        <Attach size={IconSize.XSMALL} />
      </td>
    </tr>
  </tbody>
</table>
```

Auto-sized to text:

```js { "props": { "data-example": "autosized to text" } }
const { GutterSize, TextSize } = require('../Block');
const { Attach, CheckMark, Group, Add, Like } = '.';

const longText = (
  <span>
    <Attach /> The quick brown fox jumps over the lazy dog.
    <CheckMark /> The quick brown fox jumps over the lazy dog.
    <Group /> The quick brown fox jumps over the lazy dog.
    <Add /> The quick brown fox jumps over the lazy dog.
    <Like /> LIKE
  </span>
);

<div>
  <Block bottomSpacing={GutterSize.XLARGE}>
    If a `size` prop is not given, the icon will be auto-sized to match the closest parent `Block` or `Text` component with a valid textSize:
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.XXLARGE}>
    XXLARGE. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.XLARGE}>
    XLARGE. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.LARGE}>
    LARGE. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.MEDIUM}>
    MEDIUM. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.MEDIUM_SUB}>
    MEDIUM_SUB. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.SMALL}>
    SMALL. {longText}
  </Block>
  <Block bottomSpacing={GutterSize.LARGE} textSize={TextSize.XSMALL}>
    XSMALL. {longText}
  </Block>
</div>
```

Auto-sized to headings:

```js { "props": { "data-example": "autosized to headings" } }
const { GutterSize } = require('../Block');
const { Attach, CheckMark, Like } = '.';

const longText = (
  <span>
    <Attach /> The quick brown fox jumps over the lazy dog.
    <CheckMark /> The quick brown fox jumps over the lazy dog.
    <Like />
  </span>
);

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    Icons also scale to match a Heading (h1-h6):
  </Block>
  <Heading level="1">
    H1. {longText}
  </Heading>
  <Heading level="2">
    H2. {longText}
  </Heading>
  <Heading level="3">
    H3. {longText}
  </Heading>
  <Heading level="4">
    H4. {longText}
  </Heading>
  <Heading level="5">
    H5. {longText}
  </Heading>
  <Heading level="6">
    H6. {longText}
  </Heading>
</div>
```

Inline with text and color overrides:

```js { "props": { "data-example": "inline with text and color" } }
const { Add, IconSize } = require('../index');

<div>
  <p>
    This is a line of text with a <Add size={IconSize.MEDIUM} /> inline icon.
  </p>
  <p style={{ color: 'blue' }}>
    This is a line of colored text with a <Add size={IconSize.MEDIUM} /> inline icon.
  </p>
  <p>
    This is a line of colored text with a <Add size={IconSize.MEDIUM} color="red" /> inline icon that overrides its color.
  </p>
</div>
```
