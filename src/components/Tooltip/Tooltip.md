### Notes for use
You should always wrap Tooltip around a tabbable element, ensuring keyboard navigation can focus on a nested element to trigger the tooltip.

### Examples

Basic usage:

```js { "props": { "data-description": "basic", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\"}]"  } }
<div style={{ padding: '30px 15px 15px 50px' }}>
  <Tooltip text="This is the tooltip content.">
    <Clickable>Hover over me</Clickable>
  </Tooltip>
</div>
```

Dark Background and block-level child:

```js { "props": { "data-description": "dark background", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-button\"}]" } }
<div style={{ backgroundColor: '#666', padding: '50px 15px 15px 50px' }}>
  <Tooltip text="This is the tooltip content.">
    <Button text='Hover over me' />
  </Tooltip>
</div>
```

Very long text:

```js { "props": { "data-description": "long text", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\"}]"  } }
const text = "The quick brown fox jumped over the lazy dog.";
<div style={{ padding: '80px 15px 15px 140px' }}>
  <Tooltip text={`${text} ${text} ${text} ${text} ${text}`}>
    <Clickable>Hover over me</Clickable>
  </Tooltip>
</div>
```

With directionalHint:

```js { "props": { "data-description": "with directional hint", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\"}]"  } }
const text = "The quick brown fox jumped over the lazy dog.";

<div style={{ padding: '50px 15px 15px 15px' }}>
  <Tooltip text={text} directionalHint={3}>
    <Clickable>Hover over me</Clickable>
  </Tooltip>
</div>
```
