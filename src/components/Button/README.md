# Button

A `Button` allows a user to take an action.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| text * | string | Label on the button. |
| color | ButtonColor| Primary or secondary. Defaults to primary. |
| size | ButtonSize| Regular or small. Defaults to regular. |
| disabled | boolean | Whether this button should be disabled or not. Defaults to false. |
| ariaLabel | string | Required if button text is not descriptive enough. |
| icon | IconName | Optional icon. |
| iconPosition | IconPosition | Position icon before or after text. Defaults to left (before). |
| onClick | (event: any) => void | Click callback handler. |
| onMouseEnter | (event: any) => void | Hover callback handler. |
| onMouseLeave | (event: any) => void | Hover out callback handler. |
| onFocus | (event: any) => void | Focus callback handler. |
| onBlur | (event: any) => void | Focus lost callback handler. |

\* property is required

## Notes for use

While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.

Also, use concise, specific, self-explanatory text, usually a single word. Should include a verb. If acting on something, text should include the noun it is acting on. Ex. "Create Group"

## Examples

### Simple button

```js
<Button text="Create Group" />
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
