A `Clickable` is an accessible, clickable area that accepts arbitrary content. Under the hood `Clickable` simply wraps content in a button element.

### Notes for use

Used to add a click handler to an area that is not styled as a button and is not a link.

If you need to control spacing, you can wrap children in a `Block` component. You can also wrap text in `Clickable`, making it an inline clickable area.

### Examples

Inline:

```js { "props": { "data-example": "inline" } }
const { GutterSize } = require('../Block')
const action = (msg) => () => { console.log(msg) };

<div>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    Here is some plain text, followed by text in a clickable component:
  </Block>
  <Block>
    This is some content. <Clickable onClick={action('clicked')}>This part is clickable</Clickable>.
  </Block>
</div>
```

Block:

```js { "props": { "data-example": "block" } }
const { GutterSize } = require('../Block')
const action = (msg) => () => { console.log(msg) };

<Clickable block onClick={action('clicked')}>
  <Block>
    This is a block of text entirely inside a clickable component. When wrapping an entire component like this be sure to set <strong>block: true</strong>, otherwise the button element might constrict the width of its contents.
  </Block>
</Clickable>
```
