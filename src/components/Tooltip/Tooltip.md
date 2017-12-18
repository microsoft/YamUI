### Notes for use


### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
<Tooltip text="This is the tooltip content.">
  <Clickable>Hover over me</Clickable>
</Tooltip>
```

Very long text:

```js { "props": { "data-example": "long text" } }
const text = "The quick brown fox jumped over the lazy dog.";

<Tooltip text={`${text} ${text} ${text} ${text} ${text}`}>
  <Clickable>Hover over me</Clickable>
</Tooltip>
```

With directionalHint:

```js { "props": { "data-example": "with directional hint" } }
const text = "The quick brown fox jumped over the lazy dog.";

<Tooltip text={text} directionalHint={3}>
  <Clickable>Hover over me</Clickable>
</Tooltip>
```
