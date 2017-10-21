# MessageBar

Renders a component that displays relevant status information. You can use a MessageBar to tell the user about a situation and optionally provide actions for them to take.


## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| ariaLabel * | string | A description of the message bar for the benefit of screen readers. |
| type | MessageBarType | Dictates the color scheme of the component. Defaults to `MessageBarType.INFO` |
| actions | ReactNode | A component to render in the actions gutter. Defaults to `null` |

\* indicates property is required

## Notes for use

Text that is too long for the context will wrap to two or more lines but you should aim for short strings. Actions will grow from the right but should also take up as little horizontal space as possible. 

## Examples

### Basic usage

```js
const myIconComponent = <Icon icon="lock" />
<MessageBar
  ariaLabel="Warning that your post will be visible to some outside your network"
  type={MessageBarType.WARNING}
  actions={myIconComponent}
>
  <Text>Your post will be visible to some users outside your network.</Text>
</MessageBar>
```
