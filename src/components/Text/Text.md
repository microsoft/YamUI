The `Text` component simply renders a `span`. It offers size and color props so UI features don't need to own this CSS. This is both a convenience for engineers and a way to enforce consistency of supported text colors and font-size/line-height combinations.

### Notes for use

`Text` is an inline element. Note that inline elements cannot set a smaller line-height than what is set or inherited by the nearest block-level parent element. For this reason, it is generally best to set a font size on a parent block-level element (`<Block textSize={TextSize.LARGE}>`) rather than on individual `Text` components.

### Examples

Basic text:

```js { "props": { "data-description": "basic" } }
<div>
  <Text>
    The <strong>&lt;Text /&gt;</strong> component renders its children in a <strong>span</strong>. It's a convenient way to render a piece of text with a specific size. Text will support more options in the future.
  </Text>
  <br />
  <Text>
    By default the <strong>&lt;Text /&gt;</strong> component does not render any styling so it can inherit styles of its parent.
  </Text>
</div>
```

Different text sizes:

```js { "props": { "data-description": "sizes" } }
const { TextSize } = require('.');

<div>
  <Text>
    This is text without a size specified. It will inherit its size and line-height from its parent.
  </Text>
  <br />
  <Text size={TextSize.XXLARGE}>This is size <em>XXLARGE</em>.</Text>
  <br />
  <Text size={TextSize.XLARGE}>This is size <em>XLARGE</em>.</Text>
  <br />
  <Text size={TextSize.LARGE}>This is size <em>LARGE</em>.</Text>
  <br />
  <Text size={TextSize.MEDIUM}>This is size <em>MEDIUM</em>.</Text>
  <br />
  <Text size={TextSize.MEDIUM_SUB}>This is size <em>MEDIUM_SUB</em>.</Text>
  <br />
  <Text size={TextSize.SMALL}>This is size <em>SMALL</em>.</Text>
  <br />
  <Text size={TextSize.XSMALL}>This is size <em>XSMALL</em>.</Text>
</div>
```

Different text sizes with long text:

```js { "props": { "data-description": "sizes long" } }
const { TextSize } = require('.');

<div>
  <Text>
    This is text without size specified. It will inherit its size and line-height from its parent. This is text without size specified. <strong>It will inherit</strong> its size and line-height from its parent. This is text without size specified. It will inherit its size and line-height from its parent.
  </Text>
  <br />
  <br />
  <Text size={TextSize.XXLARGE}>
    This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. <strong>This is size <em>XXLARGE</em>.</strong> This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>. This is size <em>XXLARGE</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.XLARGE}>
    This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. <strong>This is size <em>XLARGE</em>.</strong> This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>. This is size <em>XLARGE</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.LARGE}>
    This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. <strong>This is size <em>LARGE</em>.</strong> This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>. This is size <em>LARGE</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.MEDIUM}>
    This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. <strong>This is size <em>MEDIUM</em>.</strong> This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>. This is size <em>MEDIUM</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.MEDIUM_SUB}>
    This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. <strong>This is size <em>MEDIUM_SUB</em>.</strong> This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>. This is size <em>MEDIUM_SUB</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.SMALL}>
    This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. <strong>This is size <em>SMALL</em>.</strong> This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>. This is size <em>SMALL</em>.
  </Text>
  <br />
  <br />
  <Text size={TextSize.XSMALL}>
    This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. <strong>This is size <em>XSMALL</em>.</strong> This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>. This is size <em>XSMALL</em>.
  </Text>
</div>
```
