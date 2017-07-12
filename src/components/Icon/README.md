# Icon

Adds a single-color SVG icon.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| icon * | IconName | attach, cross, minus, no, plus...  |
| size | IconSize| Optional size. Defaults to IconSize.MEDIUM (16px) |
| color | string | Override inherited color. Can be any valid CSS color. |
| block | boolean | Sets style to display: block. |

* property is required

---

## Content guidelines

No need to pass aria-label; it's either unnecessary or handled by the parent component. For example, a simple 'follow' button will set the aria-label to the translated button text.

## Notes for use

The `block` property may be necessary to remove text descenders space.

---

## Examples

Attach a file

```
<Icon size={IconSize.MEDIUM} icon="attach" />
```
---

## Example implementation

Create a button with an icon. Note you do not have to import Icon.

```
import Button from 'yamui/dist/components/Button';

<Button icon="plus" size={ButtonSize.REGULAR} text="Follow" color={ButtonColor.SECONDARY} />
```
