# Text

The Text component simply renders a `<span>`. It offers size and color props so UI features don't need to own this CSS - this is both a convenience for engineers and a way to enforce consistency of supported text colors and font-size/line-height combinations.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | TextSize | Sets both font-size and line-height, ensuring text conforms to our vertical rhythm |
| color | TextColor | Sets the text color to one of the supported values |

---

## Notes for use

`<Text>` is an inline element. Note that inline elements cannot set a smaller line-height than what is set or inherited by the nearest block-level parent element. For this reason, it is generally best to set font-size on a parent block-level element (`<Block textSize={TextSize.LARGE}>`) rather than on individual `<Text>` coponents.

---

## Examples

### Basic example

```
<Text color={TextColor.PRIMARY} size={TextSize.LARGE}>
  This example has the primary black text color with size LARGE
</Text>
```
