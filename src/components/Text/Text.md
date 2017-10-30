### Notes for use

`Text` is an inline element. Note that inline elements cannot set a smaller line-height than what is set or inherited by the nearest block-level parent element. For this reason, it is generally best to set a `textSize` on a parent `Block` component rather than on individual `Text` components.

### Examples

Basic text:

```js { "props": { "data-example": "basic" } }
<div>
  <p>
    <Text>
      The <strong>Text</strong> component renders its children in a <strong>span</strong>. It's a convenient way to render a piece of text with a specific size. Text will support more options in the future.
    </Text>
  </p>
  <p>
    <Text>
      By default the <strong>Text</strong> component does not render any styling so it can inherit styles of its parent.
    </Text>
  </p>
</div>
```

Different text sizes:

```js { "props": { "data-example": "sizes" } }
const { TextSize } = require('.');

<div>
  <p>
    <Text>
      This is text without a size specified. It will inherit its size and line-height from its parent.
    </Text>
  </p>
  <p>
    <Text size={TextSize.XXLARGE}>This example has <strong>size: XXLARGE</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.XLARGE}>This example has <strong>size: XLARGE</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.LARGE}>This example has <strong>size: LARGE</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.MEDIUM}>This example has <strong>size: MEDIUM</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.MEDIUM_SUB}>This example has <strong>size: MEDIUM_SUB</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.SMALL}>This example has <strong>size: SMALL</strong>.</Text>
  </p>
  <p>
    <Text size={TextSize.XSMALL}>This example has <strong>size: XSMALL</strong>.</Text>
  </p>
</div>
```

Different text sizes with long text:

```js { "props": { "data-example": "sizes long" } }
const { TextSize } = require('.');

<div>
  <p>
    <Text>
      This is text without <strong>size</strong> specified. It will inherit its size and line-height from its parent. This is text without <strong>size</strong> specified. It will inherit its size and line-height from its parent. This is text without <strong>size</strong> specified. It will inherit its size and line-height from its parent.
    </Text>
  </p>
  <p>
    <Text size={TextSize.XXLARGE}>
      This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>. This example has <strong>size: XXLARGE</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.XLARGE}>
      This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>. This example has <strong>size: XLARGE</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.LARGE}>
      This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>. This example has <strong>size: LARGE</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.MEDIUM}>
      This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>. This example has <strong>size: MEDIUM</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.MEDIUM_SUB}>
      This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>. This example has <strong>size: MEDIUM_SUB</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.SMALL}>
      This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>. This example has <strong>size: SMALL</strong>.
    </Text>
  </p>
  <p>
    <Text size={TextSize.XSMALL}>
      This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>. This example has <strong>size: XSMALL</strong>.
    </Text>
  </p>
</div>
```

Different text colors:

```js { "props": { "data-example": "colors" } }
const { TextColor } = require('.');

<div>
  <p>
    <Text>
      This is text without a color specified. It will inherit its color from its parent.
    </Text>
  </p>
  <p>
    <Text color={TextColor.PRIMARY}>This example has <strong>color: PRIMARY</strong>.</Text>
  </p>
  <p>
    <Text color={TextColor.SECONDARY}>This example has <strong>color: SECONDARY</strong>.</Text>
  </p>
  <p>
    <Text color={TextColor.METADATA}>This example has <strong>color: METADATA</strong>.</Text>
  </p>
  <p style={{ backgroundColor: '#a8b0bd', padding: '16px' }}>
    <Text color={TextColor.WHITE}>
      This example has <strong>color: WHITE</strong>. It should be used where the background is a darker color.
    </Text>
  </p>
</div>
```
