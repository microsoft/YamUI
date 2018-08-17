### Notes for use

`Text` is an inline element. Note that inline elements cannot set a smaller line-height than what is set or inherited by the nearest block-level parent element. For this reason, it is generally best to set a `textSize` on a parent `Block` component rather than on individual `Text` components.

### Examples

Basic text:

```js { "props": { "data-description": "basic" } }
<div>
  <Paragraph>
    <Text>
      The <Strong>Text</Strong> component renders its children in a <Strong>span</Strong>. It's a convenient way to render a piece of text with a specific size. Text will support more options in the future.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text>
      By default the <Strong>Text</Strong> component does not render any styling so it can inherit styles of its parent.
    </Text>
  </Paragraph>
</div>
```

With screenreader text:

```js { "props": { "data-description": "with screenreader text" } }
<div>
  <Paragraph>
    <Text>
      This `Text` component does not have a `screenreaderText` value provided.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text screenreaderText="This text is available to screenreaders">
      This `Text` component has `screenreaderText` provided. This visible text is hidden from screenreaders while the screenreaderText value is made available to them.
    </Text>
  </Paragraph>
</div>
```

Bold:

```js { "props": { "data-description": "bold" } }
<div>
  <Text bold={true}>
    This example has <Strong>bold: true</Strong>.
  </Text>
</div>
```

Uppercase:

```js { "props": { "data-description": "uppercase" } }
<div>
  <Text uppercase={true}>
    This example has <Strong>uppercase: true</Strong>.
  </Text>
</div>
```

Max width with ellipsis:

NOTE: Text with maxWidth will add an extra 1px of height to the bottom of its containing element, an unfortunate side-effect of overflow-hidden on the inline-block Text element. To maintain perfect vertical rhythm in the next block of text, give the next container -1px top margin or simply use `<Block push={-1} />`.

```js { "props": { "data-description": "max width with ellipsis" } }
<div>
  <Text maxWidth={200}>
    This has maxWidth: 200px and all extra text will be hidden.
  </Text>
  <Text maxWidth={300}>
    This text has a maxWidth of 300px, all extra text will also be hidden.
  </Text>
</div>
```

Different text colors:

```js { "props": { "data-description": "colors" } }
const { TextColor } = require('.');

<div>
  <Paragraph>
    <Text>
      This is text without a color specified. It will inherit its color from its parent.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text color={TextColor.PRIMARY}>This example has <Strong>color: PRIMARY</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text color={TextColor.SECONDARY}>This example has <Strong>color: SECONDARY</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text color={TextColor.METADATA}>This example has <Strong>color: METADATA</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text color={TextColor.ERROR}>This example has <Strong>color: ERROR</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text color={TextColor.DISABLED}>This example has <Strong>color: DISABLED</Strong>.</Text>
  </Paragraph>
  <div style={{ backgroundColor: '#a8b0bd', padding: '16px' }}>
    <Text color={TextColor.WHITE}>
      This example has <Strong>color: WHITE</Strong>. It should be used where the background is a darker color.
    </Text>
  </div>
</div>
```

Different text sizes:

```js { "props": { "data-description": "sizes" } }
const { TextSize } = require('.');

<div>
  <Paragraph>
    <Text>
      This is text without a size specified. It will inherit its size and line-height from its parent.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XXLARGE}>This example has <Strong>size: XXLARGE</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XLARGE}>This example has <Strong>size: XLARGE</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.LARGE}>This example has <Strong>size: LARGE</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.MEDIUM}>This example has <Strong>size: MEDIUM</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.MEDIUM_SUB}>This example has <Strong>size: MEDIUM_SUB</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.SMALL}>This example has <Strong>size: SMALL</Strong>.</Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XSMALL}>This example has <Strong>size: XSMALL</Strong>.</Text>
  </Paragraph>
</div>
```

Different text sizes with long text:

```js { "props": { "data-description": "sizes long" } }
const { TextSize } = require('.');

<div>
  <Paragraph>
    <Text>
      This is text without <Strong>size</Strong> specified. It will inherit its size and line-height from its parent. This is text without <Strong>size</Strong> specified. It will inherit its size and line-height from its parent. This is text without <Strong>size</Strong> specified. It will inherit its size and line-height from its parent.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XXLARGE}>
      This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>. This example has <Strong>size: XXLARGE</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XLARGE}>
      This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>. This example has <Strong>size: XLARGE</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.LARGE}>
      This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>. This example has <Strong>size: LARGE</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.MEDIUM}>
      This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>. This example has <Strong>size: MEDIUM</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.MEDIUM_SUB}>
      This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>. This example has <Strong>size: MEDIUM_SUB</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.SMALL}>
      This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>. This example has <Strong>size: SMALL</Strong>.
    </Text>
  </Paragraph>
  <Paragraph>
    <Text size={TextSize.XSMALL}>
      This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>. This example has <Strong>size: XSMALL</Strong>.
    </Text>
  </Paragraph>
</div>
```

With background color:
```jsx { "props": { "data-description": "background-color" } }
const { TextColor } = require('.');

<div>
  Before the Text. <Text backgroundColor="themeLighterAlt">
    Text with <Strong>backgroundColor: themeLighterAlt</Strong>.
  </Text> After the Text.
</div>
```
