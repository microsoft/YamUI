### Notes for use

Text that is too long for the context will wrap to two or more lines, but you should aim for short strings. Actions will grow from the right but should also take up as little horizontal space as possible.

### Examples

Informational:

```js { "props": { "data-description": "basic" } }
<MessageBar>
  Something you should know about.
</MessageBar>
```

Warning:

```js { "props": { "data-description": "with type" } }
const { MessageBarType } = require('.');

<MessageBar type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Warning with an icon action:

```js { "props": { "data-description": "with icon action" } }
const { IconSize } = require('../Icon');
const Lock = require('../Icon/icons/Lock').default;
const { TextSize } = require('../Text');
const { MessageBarType } = require('.');

const action = (
  <span>
    <Lock size={IconSize.XSMALL} />
    <Text size={TextSize.SMALL}>+1</Text>
  </span>
);

<MessageBar actions={action} type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen.
</MessageBar>
```

Warning with an icon action and multiple lines:

```js { "props": { "data-description": "with icon action" } }
const { IconSize } = require('../Icon');
const Lock = require('../Icon/icons/Lock').default;
const { TextSize } = require('../Text');
const { MessageBarType } = require('.');

const action = (
  <span>
    <Lock size={IconSize.XSMALL} />
    <Text size={TextSize.SMALL}>+1</Text>
  </span>
);

<MessageBar actions={action} type={MessageBarType.WARNING}>
  Watch out, something unexpected might happen. This is an example on how a pretty long copy is going to scale. As you can see it keeps the proper margin between the main copy text and the icon on the right.
</MessageBar>
```

Error with a link action:

```js { "props": { "data-description": "with link action" } }
const { MessageBarType } = require('.');

const link = <Clickable>Retry</Clickable>;

<MessageBar actions={link} type={MessageBarType.ERROR}>
  Oh no, something bad happened and we couldn't complete your action!
</MessageBar>
```
