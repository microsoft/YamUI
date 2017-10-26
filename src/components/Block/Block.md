A `Block` is a layout component, allowing us to build consistent paddings and vertical spacing between components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in our 4px vertical rhythm. It's also the primary place you should set `textSize` in your UIs, providing enumerated options for our supported font-size/line-height combinations.

### Notes for use

You should generally use a `Block` component instead of a `div` for layouts. By using the component's `padding` and `bottomSpacing` props instead of writing your own CSS we can maintain component spacings easier. For example, YamUI may eventually support more advanced responsive features based on device type or screen width. YamUI could dynamically adjust its gutters, but any UI with its own layout CSS may not conform to new layouts.

#### Spacing

In general UI components should fill their parent container's width. They should also not set their own vertical spacing (outer margin) to make it easier to be rendered in any context. Layout components would generally manage spacing and gutters. You can make it a little easier to achieve consistent spacing if you try to use bottom spacing instead of top spacing whenever possible.

### Examples

Plain block:

```js { "props": { "data-description": "plain" } }
<div>
  <Block>
    The <strong>&lt;Block /&gt;</strong> component renders its children in a div. It's a convenient way to set consistent bottom gutters and padding, and manage pixel-perfect vertical rhythm between components.
  </Block>
  <Block>
    This text is in a second <strong>&lt;Block /&gt;</strong> component. Since there isn't a <strong>bottomSpacing</strong> or <strong>padding</strong> prop set the wrapper is just an unstyled div.
  </Block>
</div>
```

Block with bottom gutter spacing:

```js { "props": { "data-description": "with bottom gutter spacing" } }
const { GutterSize } = require('.');

<div>
  <Block bottomSpacing={GutterSize.XXLARGE}>
    This example has <strong>bottomSpacing: XXLARGE</strong>
  </Block>
  <Block bottomSpacing={GutterSize.XLARGE}>
    This example has <strong>bottomSpacing: XLARGE</strong>
  </Block>
  <Block bottomSpacing={GutterSize.LARGE}>
    This example has <strong>bottomSpacing: LARGE</strong>
  </Block>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    This example has <strong>bottomSpacing: MEDIUM</strong>
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    This example has <strong>bottomSpacing: SMALL</strong>
  </Block>
  <Block bottomSpacing={GutterSize.XSMALL}>
    This example has <strong>bottomSpacing: XSMALL</strong>
  </Block>
  <Block>This example has no spacing specified</Block>
</div>
```

Block with padding:

```js { "props": { "data-description": "with padding" } }
const { GutterSize } = require('.');

<div>
  <Block padding={GutterSize.XXLARGE}>
    This example has <strong>padding: XXLARGE</strong>
  </Block>
  <Block padding={GutterSize.XLARGE}>
    This example has <strong>padding: XLARGE</strong>
  </Block>
  <Block padding={GutterSize.LARGE}>
    This example has <strong>padding: LARGE</strong>
  </Block>
  <Block padding={GutterSize.MEDIUM}>
    This example has <strong>padding: MEDIUM</strong>
  </Block>
  <Block padding={GutterSize.SMALL}>
    This example has <strong>padding: SMALL</strong>
  </Block>
  <Block padding={GutterSize.XSMALL}>
    This example has <strong>padding: XSMALL</strong>
  </Block>
  <Block>This example has no padding specified</Block>
</div>
```

Block with positive push:

```js { "props": { "data-description": "with positive push" } }
const { GutterSize } = require('.');
const MarginWrapper = ({ children }) => <div style={{ marginTop: '2rem' }}>{children}</div>;

<MarginWrapper>
  <Block push={3}>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      The <strong>&lt;Block /&gt;</strong> component accepts a <strong>push</strong> prop, a number of pixels to adjust the component's top spacing. A positive value will push the component down, a negative value will pull it up. This is handy when a feature requires manual pixel adjustment between blocks of content to maintain our vertical rhythm.
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of margin. It specifies <strong>push: 3</strong>, which pushes it down an additional 3px and creates a total top spacing of 23px.
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      Components should generally only manage their bottom spacing and rely on the component above them to do the same. You should only ever need to provide a <strong>push</strong> value for minor adjustments between -3 and 3, and you should only need to deal with <strong>push</strong> to reset the vertical rhythm (an imaginary 4px grid).
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM}>
      Note that YamUI actually uses rem instead of px for its font-related units, and converts the push pixel value to rem. YamUI has set 0.1rem equal to 1px.
    </Block>
  </Block>
</MarginWrapper>
```

Block with negative push below margin:

```js { "props": { "data-description": "with negative push below margin" } }
const MarginWrapper = ({ children }) => <div style={{ marginTop: '2rem' }}>{children}</div>;

<MarginWrapper>
  <Block push={-2}>
    This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of margin. It specifies <strong>push: -2</strong> which pulls the component up 2px, creating a total top spacing of 18px.
  </Block>
</MarginWrapper>
```

Block with negative push below padding:

```js { "props": { "data-description": "with negative push below padding" } }
const PaddingWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<PaddingWrapper>
  <Block push={-2}>
    This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of padding. It specifies <strong>push: -2</strong>, which still pulls the component up 2px, creating a total top spacing of 18px.
  </Block>
</PaddingWrapper>
```

Block with negative push below border:

```js { "props": { "data-description": "with negative push below border" } }
const BorderWrapper = ({ children }) => <div style={{ paddingTop: '2rem' }}>{children}</div>;

<BorderWrapper>
  <Block push={-2}>
    This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of border. It specifies <strong>push: -2</strong>, which still pulls the component up 2px, creating a total top spacing of 18px. These three negative push examples show that a{' '} <strong>&lt;Block /&gt;</strong> can pull up consistently regardless of the content above it.
  </Block>
</BorderWrapper>
```
