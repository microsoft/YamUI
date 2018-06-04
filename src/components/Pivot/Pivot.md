### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
const pivotItems = [
  { text: 'DISCOVERY', key: '0' },
  { text: 'ALL', key: '1' },
  { text: 'FOLLOWING', key: '2' }
];

<Pivot onChange={action('onChange')} pivotItems={pivotItems} />
```

With Dark theme:

```js { "props": { "data-description": "with dark background" } }
const pivotItems = [
  { text: 'NEW CONVERSATIONS', key: '0' },
  { text: 'ALL CONVERSATIONS', key: '1' },
  { text: 'FILES', key: '2' }
];
<div style={{ backgroundColor: '#386cbb' }}>
  <Pivot onChange={action('onChange')} overDarkBackground={true} pivotItems={pivotItems}  />
</div>
```
