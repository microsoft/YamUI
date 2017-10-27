Renders a component that displays relevant status information. You can use a MessageBar to tell the user about a situation and optionally provide actions for them to take.

### Notes for use

Text that is too long for the context will wrap to two or more lines but you should aim for short strings. Actions will grow from the right but should also take up as little horizontal space as possible.

### Examples

Basic usage:

```js
<MessageBar ariaLabel="A sample notice informing you about something">
  Sample notice, something you should know about.
</MessageBar>
```

Message bar with a type:

```js
const { MessageBarType } = require('.');

<MessageBar ariaLabel="A sample notice warning you about something" type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Message bar with an icon action:

```js
const { IconSize } = require('../Icon');
const { TextSize } = require('../Text');
const { MessageBarType } = require('.');

const icon = (
  <span>
    <Icon icon="lock" size={IconSize.XSMALL} />
    <Text size={TextSize.XSMALL}>+1</Text>
  </span>
);

<MessageBar ariaLabel="A sample notice informing you about something" actions={icon} type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Message bar with a link action:

```js
const { MessageBarType } = require('.');

const link = <FakeLink>Retry</FakeLink>;

<MessageBar ariaLabel="A sample notice informing you " actions={link} type={MessageBarType.ERROR}>
  Oh no, something bad happened and we couldn't complete your action!
</MessageBar>
```
