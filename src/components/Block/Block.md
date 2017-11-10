### Notes for use

You should generally use a `Block` component instead of a `div` for layouts. By using the component's `padding` and `bottomSpacing` props instead of writing your own CSS, you'll be able to maintain consistent component spacing. For example, YamUI may eventually support more advanced responsive features based on device type or screen width. YamUI could dynamically adjust its gutters, but any UI with its own layout CSS may not conform to new layouts.

#### Spacing

In general UI components should fill their parent container's width. They should also not set their own vertical spacing (outer margin) to make it easier to be rendered in any context. Layout components would generally manage spacing and gutters. You can make it a little easier to achieve consistent spacing if you try to use bottom spacing instead of top spacing whenever possible.

Components should generally only manage their bottom spacing and rely on the component above them to do the same. You should only ever need to provide a `push` value for minor adjustments between *-3* and *3*, and you should only need to deal with `push` to reset the vertical rhythm (an imaginary *4px* grid).

### Examples

Without props:

```js { "props": { "data-example": "without props" } }
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

```js { "props": { "data-example": "with padding" } }
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

With bottom gutter spacing:

```js { "props": { "data-example": "with bottom gutter spacing" } }
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

```js { "props": { "data-example": "with text alignment" } }
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

With positive push:

```js { "props": { "data-example": "with positive push" } }
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

```js { "props": { "data-example": "with negative push below margin" } }
const MarginWrapper = ({ children }) => <div style={{ marginTop: '2rem' }}>{children}</div>;

<MarginWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of margin. It specifies <strong>push: -2</strong> which pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>.
  </Block>
</MarginWrapper>
```

With negative push below padding:

```js { "props": { "data-example": "with negative push below padding" } }
const PaddingWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<PaddingWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of padding. It specifies <strong>push: -2</strong>, which still pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>.
  </Block>
</PaddingWrapper>
```

With negative push below border:

```js { "props": { "data-example": "with negative push below border" } }
const BorderWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<BorderWrapper>
  <Block push={-2}>
    This example shows a <strong>Block</strong> below an existing <em>20px</em> of border. It specifies <strong>push: -2</strong>, which still pulls the component up <em>2px</em>, creating a total top spacing of <em>18px</em>. These three negative push examples show that a <strong>Block</strong> can pull up consistently regardless of the content above it.
  </Block>
</BorderWrapper>
```
