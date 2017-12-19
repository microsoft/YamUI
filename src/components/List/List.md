### Examples

Default size:

```js { "props": { "data-example": "default size" } }
const { GutterSize } = require('../Block');
const text = 'The quick brown fox jumps over the lazy dog.';

<div>
  <Block bottomSpacing={GutterSize.XLARGE}>{text} {text} {text}</Block>
  <List type="unordered">
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>

  <List type="ordered">
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>
</div>
```

Medium size (identical to default):

```js { "props": { "data-example": "text size medium" } }
const { GutterSize, TextSize } = require('../Block');
const text = 'The quick brown fox jumps over the lazy dog.';

<div>
  <Block bottomSpacing={GutterSize.XLARGE} textSize={TextSize.MEDIUM}>{text} {text} {text}</Block>
  <List type="unordered" textSize={TextSize.MEDIUM}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>

  <List type="ordered" textSize={TextSize.MEDIUM}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>
</div>
```

MediumSub size:

```js { "props": { "data-example": "text size mediumsub" } }
const { GutterSize, TextSize } = require('../Block');
const text = 'The quick brown fox jumps over the lazy dog.';

<div>
  <Block bottomSpacing={GutterSize.LARGE} textSize={TextSize.MEDIUM_SUB}>{text} {text} {text}</Block>
  <List type="unordered" textSize={TextSize.MEDIUM_SUB}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>

  <List type="ordered" textSize={TextSize.MEDIUM_SUB}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>
</div>
```

Small size:

```js { "props": { "data-example": "text size small" } }
const { GutterSize, TextSize } = require('../Block');
const text = 'The quick brown fox jumps over the lazy dog.';

<div>
  <Block bottomSpacing={GutterSize.LARGE} textSize={TextSize.SMALL}>{text} {text} {text}</Block>
  <List type="unordered" textSize={TextSize.SMALL}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>

  <List type="ordered" textSize={TextSize.SMALL}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>
</div>
```

Extra small size:

```js { "props": { "data-example": "text size xsmall" } }
const { GutterSize, TextSize } = require('../Block');
const text = 'The quick brown fox jumps over the lazy dog.';

<div>
  <Block bottomSpacing={GutterSize.MEDIUM} textSize={TextSize.XSMALL}>{text} {text} {text}</Block>
  <List type="unordered" textSize={TextSize.XSMALL}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>

  <List type="ordered" textSize={TextSize.XSMALL}>
    <ListItem>{text} {text} {text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
    <ListItem>{text}</ListItem>
  </List>
</div>
```
