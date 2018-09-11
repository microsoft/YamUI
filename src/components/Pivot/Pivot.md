### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
const pivotItems = [{ text: 'DISCOVERY', key: '0' }, { text: 'ALL', key: '1' }, { text: 'FOLLOWING', key: '2' }];

<Pivot onChange={action('onChange')} pivotItems={pivotItems} />;
```

With Dark theme:

```js { "props": { "data-description": "with dark background" } }
const pivotItems = [
  { text: 'NEW CONVERSATIONS', key: '0' },
  { text: 'ALL CONVERSATIONS', key: '1' },
  { text: 'FILES', key: '2' },
];
<div style={{ backgroundColor: '#386cbb' }}>
  <Pivot onChange={action('onChange')} overDarkBackground={true} pivotItems={pivotItems} />
</div>;
```

With itemCount prop:

```js { "props": { "data-description": "with itemCount prop in pivotItems" } }
const pivotItems = [
  { text: 'USERS', key: '0', itemCount: 1 },
  { text: 'GROUPS', key: '1', itemCount: 0 },
  { text: 'FILES', key: '2', itemCount: 5437253445 },
];

<Pivot onChange={action('onChange')} pivotItems={pivotItems} />;
```
