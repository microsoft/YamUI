# Block

A `Block` is a layout component, allowing us to build consistent paddings and vertical spacing between components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in our 4px vertical rhythm. It's also the primary place you should set `textSize` in your UIs, providing enumerated options for our supported font-size/line-height combinations.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| textSize | TextSize | Sets both font-size and line-height, ensuring text conforms to our vertical rhythm. |
| padding | GutterSize | Uniform padding around the block's content. |
| bottomSpacing | GutterSize | Spacing/margin to be added below the block. |
| push | number | The number of pixels to push the block down (postive value) or pull the block up (negative value). Generally avoid this unless you need to adjust a few pixels to achieve our 4px typography vertical rhythm. |

## Notes for use

You should generally use a `Block` component instead of a `div` for layouts. By using the component's `padding` and `bottomSpacing` props instead of writing your own CSS we can maintain component spacings easier. For example, YamUI may eventually support more advanced responsive features based on device type or screen width. YamUI could dynamically adjust its gutters, but any UI with its own layout CSS may not conform to new layouts.

### Spacing

In general UI components should fill their parent container's width. They should also not set their own vertical spacing (outer margin) to make it easier to be rendered in any context. Layout components would generally manage spacing and gutters. You can make it a little easier to achieve consistent spacing if you try to use bottom spacing instead of top spacing whenever possible.

## Examples

### Adding medium padding around line of text

```js
<Block padding={GutterSize.MEDIUM}>
  This example has <strong>padding: MEDIUM</strong>
</Block>
```

### Using blocks to achieve consistent spacing between stacked components

```js
const MessageStack = (props) => {
  return (
    <Block bottomSpacing={GutterSize.MEDIUM} className="messageWrapper">
      {text1}
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM} className="messageWrapper">
      {text2}
    </Block>
    <Block bottomSpacing={GutterSize.MEDIUM} className="messageWrapper">
      {text3}
    </Block>
  );
}

const RandomComponent = () => (
  <div>
    {this.messages.map((message, index) => (
      <Message key={index}>{message}</Message>
    ))}
  </div>
);
```
