### Notes for use

You should generally use a `Block` component instead of a `div` for layouts. By using the component's `padding` and `bottomSpacing` props instead of writing your own CSS, you'll be able to maintain consistent component spacing. For example, YamUI may eventually support more advanced responsive features based on device type or screen width. YamUI could dynamically adjust its gutters, but any UI with its own layout CSS may not conform to new layouts.

#### Spacing

In general UI components should fill their parent container's width. They should also not set their own vertical spacing (outer margin) to make it easier to be rendered in any context. Layout components would generally manage spacing and gutters. You can make it a little easier to achieve consistent spacing if you try to use bottom spacing instead of top spacing whenever possible.

### Examples

Without props:

```js { "props": { "data-description": "without props" } }
<div>
  <Block>
    The <strong>Block</strong> component renders its children in a <em>div</em>. It's a convenient way to set consistent bottom gutters and padding, and manage pixel-perfect vertical rhythm between components.
  </Block>
  <Block>
    This text is in a second <strong>Block</strong> component. Since there isn't a <strong>bottomSpacing</strong> or <strong>padding</strong> prop set, the wrapper is just an unstyled <em>div</em>.
  </Block>
</div>
```

With padding:

```js { "props": { "data-description": "with padding" } }
const { GutterSize } = require('.');

<div>
  <Block padding={GutterSize.XXLARGE}>
    This example has <strong>padding: XXLARGE</strong>.
  </Block>
  <Block padding={GutterSize.XLARGE}>
    This example has <strong>padding: XLARGE</strong>.
  </Block>
  <Block padding={GutterSize.LARGE}>
    This example has <strong>padding: LARGE</strong>.
  </Block>
  <Block padding={GutterSize.MEDIUM}>
    This example has <strong>padding: MEDIUM</strong>.
  </Block>
  <Block padding={GutterSize.SMALL}>
    This example has <strong>padding: SMALL</strong>.
  </Block>
  <Block padding={GutterSize.XSMALL}>
    This example has <strong>padding: XSMALL</strong>.
  </Block>
  <Block>
    This example has no padding specified.
  </Block>
</div>
```

Block can also have separate vertical and horizontal padding. With horizontal padding:

```js { "props": { "data-description": "with horizontal padding" } }
const { GutterSize } = require('.');

<div>
  <Block horizontalPadding={GutterSize.XXLARGE}>
    This example has <strong>horizontalPadding: XXLARGE</strong>.
  </Block>
  <Block horizontalPadding={GutterSize.XLARGE}>
    This example has <strong>horizontalPadding: XLARGE</strong>.
  </Block>
  <Block horizontalPadding={GutterSize.LARGE}>
    This example has <strong>horizontalPadding: LARGE</strong>.
  </Block>
  <Block horizontalPadding={GutterSize.MEDIUM}>
    This example has <strong>horizontalPadding: MEDIUM</strong>.
  </Block>
  <Block horizontalPadding={GutterSize.SMALL}>
    This example has <strong>horizontalPadding: SMALL</strong>.
  </Block>
  <Block horizontalPadding={GutterSize.XSMALL}>
    This example has <strong>horizontalPadding: XSMALL</strong>.
  </Block>
  <Block>
    This example has no padding specified.
  </Block>
</div>
```

With vertical padding:

```js { "props": { "data-description": "with vertical padding" } }
const { GutterSize } = require('.');

<div>
  <Block verticalPadding={GutterSize.XXLARGE}>
    This example has <strong>verticalPadding: XXLARGE</strong>.
  </Block>
  <Block verticalPadding={GutterSize.XLARGE}>
    This example has <strong>verticalPadding: XLARGE</strong>.
  </Block>
  <Block verticalPadding={GutterSize.LARGE}>
    This example has <strong>verticalPadding: LARGE</strong>.
  </Block>
  <Block verticalPadding={GutterSize.MEDIUM}>
    This example has <strong>verticalPadding: MEDIUM</strong>.
  </Block>
  <Block verticalPadding={GutterSize.SMALL}>
    This example has <strong>verticalPadding: SMALL</strong>.
  </Block>
  <Block verticalPadding={GutterSize.XSMALL}>
    This example has <strong>verticalPadding: XSMALL</strong>.
  </Block>
  <Block>
    This example has no padding specified.
  </Block>
</div>
```

With top gutter spacing:

```js { "props": { "data-description": "with top gutter spacing" } }
const { GutterSize } = require('.');

<div>
  <Block topSpacing={GutterSize.XXLARGE}>
    This example has <strong>topSpacing: XXLARGE</strong>.
  </Block>
  <Block topSpacing={GutterSize.XLARGE}>
    This example has <strong>topSpacing: XLARGE</strong>.
  </Block>
  <Block topSpacing={GutterSize.LARGE}>
    This example has <strong>topSpacing: LARGE</strong>.
  </Block>
  <Block topSpacing={GutterSize.MEDIUM}>
    This example has <strong>topSpacing: MEDIUM</strong>.
  </Block>
  <Block topSpacing={GutterSize.SMALL}>
    This example has <strong>topSpacing: SMALL</strong>.
  </Block>
  <Block topSpacing={GutterSize.XSMALL}>
    This example has <strong>topSpacing: XSMALL</strong>.
  </Block>
  <Block>
    This example has no spacing specified.
  </Block>
</div>
```

With bottom gutter spacing:

```js { "props": { "data-description": "with bottom gutter spacing" } }
const { GutterSize } = require('.');

<div>
  <Block bottomSpacing={GutterSize.XXLARGE}>
    This example has <strong>bottomSpacing: XXLARGE</strong>.
  </Block>
  <Block bottomSpacing={GutterSize.XLARGE}>
    This example has <strong>bottomSpacing: XLARGE</strong>.
  </Block>
  <Block bottomSpacing={GutterSize.LARGE}>
    This example has <strong>bottomSpacing: LARGE</strong>.
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>bottomSpacing: MEDIUM</strong>.
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    This example has <strong>bottomSpacing: SMALL</strong>.
  </Block>
  <Block bottomSpacing={GutterSize.XSMALL}>
    This example has <strong>bottomSpacing: XSMALL</strong>.
  </Block>
  <Block>
    This example has no spacing specified.
  </Block>
</div>
```

With text alignment:

```js { "props": { "data-description": "with text alignment" } }
const { GutterSize } = require('.');

<div>
  <Block textAlign="left" bottomSpacing={GutterSize.XXLARGE}>
    This example has <strong>textAlign: "left"</strong>.
  </Block>
  <Block textAlign="center" bottomSpacing={GutterSize.XXLARGE}>
    This example has <strong>textAlign: "center"</strong>.
  </Block>
  <Block textAlign="right" bottomSpacing={GutterSize.XXLARGE}>
    This example has <strong>textAlign: "right"</strong>.
  </Block>
</div>
```

With ellipsis:

```js { "props": { "data-description": "with ellipsis" } }
<div>
  <Block ellipsis={true}>
    This example has <strong>ellipsis: true</strong>. Its text content will be limited to a single line, and any additional content will be hidden while displaying an ellipsis character at the end of the line.
  </Block>
</div>
```

Text colors:

```js { "props": { "data-description": "text colors" } }
const { GutterSize, TextColor } = require('.');

<div>
  <Block textColor={TextColor.PRIMARY} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>textColor: PRIMARY</strong>.
  </Block>
  <Block textColor={TextColor.SECONDARY} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>textColor: SECONDARY</strong>.
  </Block>
  <Block textColor={TextColor.METADATA} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>textColor: METADATA</strong>.
  </Block>
  <Block textColor={TextColor.WHITE} backgroundColor="neutralTertiaryAlt" verticalPadding={GutterSize.LARGE} horizontalPadding={GutterSize.LARGE}>
    This example has <strong>textColor: WHITE</strong>. It should be used where the background is a darker color.
  </Block>
</div>
```

Dividers:

```js { "props": { "data-description": "dividers" } }
const { GutterSize } = require('.');

<div>
  <Block divider={true} backgroundColor="neutralLight" padding={GutterSize.MEDIUM}>
    1
  </Block>
  <Block divider={true} backgroundColor="neutralLight" padding={GutterSize.MEDIUM}>
    2
  </Block>
  <Block backgroundColor="neutralLight" padding={GutterSize.MEDIUM}>
    3
  </Block>
</div>
```

Text sizes:

```js { "props": { "data-description": "text sizes" } }
const { GutterSize, TextSize } = require('.');

<div>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    This is text without a size specified. It will inherit size and line-height via CSS from its parent.
  </Block>
  <Block textSize={TextSize.XXLARGE} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: XXLARGE</strong>.
  </Block>
  <Block textSize={TextSize.XLARGE} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: XLARGE</strong>.
  </Block>
  <Block textSize={TextSize.LARGE} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: LARGE</strong>.
  </Block>
  <Block textSize={TextSize.MEDIUM} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: MEDIUM</strong>.
  </Block>
  <Block textSize={TextSize.MEDIUM_SUB} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: MEDIUM_SUB</strong>.
  </Block>
  <Block textSize={TextSize.SMALL} bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>size: SMALL</strong>.
  </Block>
  <Block textSize={TextSize.XSMALL}>
    This example has <strong>size: XSMALL</strong>.
  </Block>
</div>
```

With positive push:

```js { "props": { "data-description": "with positive push" } }
const { GutterSize } = require('.');
const MarginWrapper = ({ children }) => <div style={{ marginTop: '2rem' }}>{children}</div>;

<MarginWrapper>
  <Block push={3}>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      The <strong>Block</strong> component accepts a <strong>push</strong> prop, a number of pixels to adjust the component's top spacing. A positive value will push the component down, a negative value will pull it up. This is handy when a feature requires manual pixel adjustment between blocks of content to maintain our vertical rhythm.
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      This example shows a <strong>Block</strong> below an existing <em>20px</em> of margin. It specifies <strong>push: 3</strong>, which pushes it down an additional <em>3px</em> and creates a total top spacing of <em>23px</em>.
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      Components should generally only manage their bottom spacing and rely on the component above them to do the same. You should only ever need to provide a <strong>push</strong> value for minor adjustments between <em>-3</em> and <em>3</em>, and you should only need to deal with <strong>push</strong> to reset the vertical rhythm (an imaginary <em>4px</em> grid).
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      Note that YamUI actually uses <em>rem</em> instead of <em>px</em> for its font-related units, and converts the push pixel value to <em>rem</em>. YamUI has set <em>0.1rem</em> equal to <em>1px</em>.
    </Block>
  </Block>
</MarginWrapper>
```

With negative push below margin:

```js { "props": { "data-description": "with negative push below margin" } }
const MarginWrapper = ({ children }) => <div style={{ marginTop: '2rem' }}>{children}</div>;

<MarginWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of margin. It specifies <strong>push: -2</strong> which pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>.
  </Block>
</MarginWrapper>
```

With negative push below padding:

```js { "props": { "data-description": "with negative push below padding" } }
const PaddingWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<PaddingWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of padding. It specifies <strong>push: -2</strong>, which still pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>.
  </Block>
</PaddingWrapper>
```

With negative push below border:

```js { "props": { "data-description": "with negative push below border" } }
const BorderWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<BorderWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of border. It specifies <strong>push: -2</strong>, which still pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>. These three negative push examples show that a <strong>Block</strong> can pull up consistently regardless of the content above it.
  </Block>
</BorderWrapper>
```
