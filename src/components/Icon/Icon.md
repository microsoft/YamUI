This component renders an SVG icon.

## Notes of use

There's no need to pass `aria-label`; it's either unnecessary or handled by the parent component. For example, a simple *Follow* button will set the `aria-label` to the translated button text.

The `block` property may be necessary to remove text descenders space.

### Examples

Library of icons:

```js
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

Icon sizes:

```js
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

Inline icon with text:

```js
const { IconSize } = require('.');

<div>
  <p>
    This is a line of text with an <Icon size={IconSize.SMALL} icon="plus" /> inline icon.
  </p>
  <p style={{ color: 'blue' }}>
    This is a line of colored text with an <Icon size={IconSize.SMALL} icon="plus" /> inline icon.
  </p>
  <p>
    This is a line of colored text with an <Icon size={IconSize.SMALL} icon="plus" color="red" /> inline icon that overrides its color.
  </p>
</div>
```
