### Notes for use
EditableText will inherit the text size of the nearest Block component.

### Examples

With text and max length:

```js { "props": { "data-description": "with text and maxLength" } }
const { TextSize } = require('../Block');

<Block textSize={TextSize.SMALL}>
  <EditableText text="A spreadsheet of business requirements" maxLength={40} />
</Block>
```

With prompt text and placeholder text:

```js { "props": { "data-description": "with promptText and placeHolder" } }
const { TextSize } = require('../Block');

<Block textSize={TextSize.SMALL}>
  <EditableText promptText="Click to edit..." placeHolder="Attachment description" />
</Block>
```

With onBeginEditing, onEndEditing and onUpdate callbacks:

```js { "props": { "data-description": "with callbacks" } }
const { TextSize } = require('../Block');

<Block textSize={TextSize.SMALL}>
  <EditableText
    text="Document description"
    onUpdate={action('onUpdate')}
    onBeginEditing={action('onBeginEditing')}
    onEndEditing={action('onEndEditing')}
  />
</Block>
```
