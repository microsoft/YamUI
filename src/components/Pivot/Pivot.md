### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
const pivotItems = [
  { text: 'Tab 1', key: '0' },
  { text: 'Tab 2', key: '1' },
  { text: 'Tab 3', key: '2' }
];

<Pivot onChange={action('onChange')} pivotItems={pivotItems} />
```

With Dark theme:

```js { "props": { "data-description": "basic" } }
const pivotItems = [
  { text: 'Tab 1', key: '0' },
  { text: 'Tab 2', key: '1' },
  { text: 'Tab 3', key: '2' }
];
<div style={{ backgroundColor: '#386cbb' }}>
  <Pivot onChange={action('onChange')} isDark={true} pivotItems={pivotItems}  />
</div>
```
