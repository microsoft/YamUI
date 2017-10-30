Renders a component that displays relevant status information. You can use a `MessageBar` to tell the user about a situation and optionally provide actions for them to take.

### Notes for use

Text that is too long for the context will wrap to two or more lines but you should aim for short strings. Actions will grow from the right but should also take up as little horizontal space as possible.

### Examples

Default info type:

```js { "props": { "data-example": "info" } }
<MessageBar ariaLabel="A sample notice informing you about something">
  Sample notice, something you should know about.
</MessageBar>
```

Warning:

```js { "props": { "data-example": "warning" } }
const { MessageBarType } = require('.');

<MessageBar ariaLabel="A sample notice warning you about something" type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Error:

```js { "props": { "data-example": "error" } }
const { MessageBarType } = require('.');

<MessageBar ariaLabel="A sample notice about an error" type={MessageBarType.ERROR}>
  Something bad has happened.
</MessageBar>
```

With a link action:

```js { "props": { "data-example": "with link action" } }
const { MessageBarType } = require('.');

const link = <FakeLink>Dismiss</FakeLink>;

<MessageBar ariaLabel="A thing happened" actions={link}>
  A thing happened
</MessageBar>
```
