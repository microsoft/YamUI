### Notes for use

Adding an `aria-label` to the icon is not supported, as it is being specified by wrapper components. For example, `Button` adds `aria-label` when it renders its `Icon` component.

The `block` prop may be necessary to remove extra `line-height`.

### Examples

Icon library:

```js { "props": { "data-example": "library" } }
const { IconSize, icons } = require('.');

const iconsLibrary = Object.keys(icons).map((icon, index) => (
  <tr key={index}>
    <td style={{ textAlign: 'right' }}>
      {icon}
    </td>
    <td>
      <Icon size={IconSize.LARGE} icon={icon} />
    </td>
    <td>
      <Icon size={IconSize.LARGE} icon={icon} color="teal" />
    </td>
  </tr>
));

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'right' }}>Label</th>
      <th>Inherit color</th>
      <th>Override color</th>
    </tr>
  </thead>
  <tbody>
    {iconsLibrary}
  </tbody>
</table>
```

Sizes:

```js { "props": { "data-example": "sizes" } }
const { IconSize } = require('.');

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
        <Icon size={IconSize.XXLARGE} icon="attach" />
      </td>
      <td>
        <Icon size={IconSize.XLARGE} icon="attach" />
      </td>
      <td>
        <Icon size={IconSize.LARGE} icon="attach" />
      </td>
      <td>
        <Icon size={IconSize.MEDIUM} icon="attach" />
      </td>
      <td>
        <Icon size={IconSize.SMALL} icon="attach" />
      </td>
      <td>
        <Icon size={IconSize.XSMALL} icon="attach" />
      </td>
    </tr>
  </tbody>
</table>
```

Auto-sized to text:

```js { "props": { "data-example": "autosize" } }
const { GutterSize, TextSize } = require('../Block');

const longText = (
  <span>
    <Icon icon="attach" /> The quick brown fox jumps over the lazy dog.
    <Icon icon="check" /> The quick brown fox jumps over the lazy dog.
    <Icon icon="group" /> The quick brown fox jumps over the lazy dog.
    <Icon icon="like" />
  </span>
);

<div>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    If a `size` prop is not given, the icon will be auto-sized to match the closest parent `Block` or `Text` component with a valid textSize set. Here are examples of icons inheriting from the current font-size.
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
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.XSMALL}>
    XSMALL. {longText}
  </Block>
</div>
```

Inline with text and color overrides:

```js { "props": { "data-example": "inline with text and color" } }
const { IconSize } = require('.');

<div>
  <p>
    This is a line of text with a <Icon size={IconSize.SMALL} icon="plus" /> inline icon.
  </p>
  <p style={{ color: 'blue' }}>
    This is a line of colored text with a <Icon size={IconSize.SMALL} icon="plus" /> inline icon.
  </p>
  <p>
    This is a line of colored text with a <Icon size={IconSize.SMALL} icon="plus" color="red" /> inline icon that overrides its color.
  </p>
</div>
```
