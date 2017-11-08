### Notes for use

Text that is too long for the context will wrap to two or more lines, but you should aim for short strings. Actions will grow from the right but should also take up as little horizontal space as possible.

### Examples

Informational:

```js { "props": { "data-example": "basic" } }
<MessageBar>
  Something you should know about.
</MessageBar>
```

Warning:

```js { "props": { "data-example": "with type" } }
const { MessageBarType } = require('.');

<MessageBar type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Warning with an icon action:

```js { "props": { "data-example": "with icon action" } }
const { IconSize } = require('../Icon');
const { TextSize } = require('../Text');
const { MessageBarType } = require('.');

const icon = (
  <span>
    <Icon icon="lock" size={IconSize.XSMALL} />
    <Text size={TextSize.XSMALL}>+1</Text>
  </span>
);

<MessageBar actions={icon} type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Error with a link action:

```js { "props": { "data-example": "with link action" } }
const { MessageBarType } = require('.');

const link = <FakeLink>Retry</FakeLink>;

<MessageBar actions={link} type={MessageBarType.ERROR}>
  Oh no, something bad happened and we couldn't complete your action!
</MessageBar>
```
