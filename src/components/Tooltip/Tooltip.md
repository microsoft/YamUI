### Notes for use
You should always wrap Tooltip around a tabbable element, ensuring keyboard navigation can focus on a nested element to trigger the tooltip.

### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
<Tooltip text="This is the tooltip content.">
  <Clickable>Hover over me</Clickable>
</Tooltip>
```

Very long text:

```js { "props": { "data-description": "long text" } }
const text = "The quick brown fox jumped over the lazy dog.";

<Tooltip text={`${text} ${text} ${text} ${text} ${text}`}>
  <Clickable>Hover over me</Clickable>
</Tooltip>
```

With directionalHint:

```js { "props": { "data-description": "with directional hint" } }
const text = "The quick brown fox jumped over the lazy dog.";

<Tooltip text={text} directionalHint={3}>
  <Clickable>Hover over me</Clickable>
</Tooltip>
```
