# Icon

Adds a single-color SVG icon.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| icon * | IconName | attach, cross, minus, no, plus...  |
| size | IconSize| Optional size. Defaults to IconSize.MEDIUM (16px) |
| color | string | Override inherited color. Can be any valid CSS color. |
| block | boolean | Sets style to display: block. |

\* property is required

## Content guidelines

No need to pass `aria-label`; it's either unnecessary or handled by the parent component. For example, a simple *Follow* button will set the `aria-label` to the translated button text.

The `block` property may be necessary to remove text descenders space.

## Examples

### Basic usage

```js
<Icon size={IconSize.MEDIUM} icon="attach" />
```

### Button with icon

```js
<Button
  text="Follow"
  color={ButtonColor.SECONDARY}
  size={ButtonSize.REGULAR}
  icon="plus"
/>
```
