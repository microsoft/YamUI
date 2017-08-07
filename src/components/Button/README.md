# Button

Allows user to take an action. Is based on Office Fabric UI's [Button](https://dev.office.com/fabric#/components/button)

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| text * | string | The button's label. |
| color | ButtonColor| Primary or secondary. Defaults to primary. |
| size | ButtonSize| Regular or small. Defaults to regular. |
| disabled | boolean | Whether this button should be disabled or not. Defaults to false. |
| ariaLabel | string | Required if button text is not descriptive enough. |
| icon | IconName | Optional icon. |
| onClick | (event: any) => void | Click callback handler. |
| onMouseEnter | (event: any) => void | Hover callback handler. |
| onMouseLeave | (event: any) => void | Hover out callback handler. |
| onFocus | (event: any) => void | Focus callback handler. |
| onBlur | (event: any) => void | Focus lost callback handler. |

\* property is required

---

## Content guidelines

Use concise, specific, self-explanatory text, usually a single word. Should include a verb. If acting on something, text should include the noun it is acting on. Ex. "Create Group"

## Notes for use

While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.

---

## Examples

### Default button

```
<Button text="Create Group" />
```
---

## Example implementation

Create a button with an icon

```
import Button from 'yamui/dist/components/Button';
```
```
<Button icon="plus" size={ButtonSize.REGULAR} text="Follow" color={ButtonColor.SECONDARY} />
```
