### Examples

```js { "props": { "data-description": "no selected key" } }
const options = [
  { key: 'A', text: 'Option A', label: 'optional sublabel for A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<ChoiceGroup label="No Selected Key Provided" options={options} onChange={console.log} />;
```

```js { "props": { "data-description": "selected key provided" } }
const options = [
  { key: 'A', text: 'Option A', label: 'optional sublabel for A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<ChoiceGroup label="Selected Key Provided" options={options} onChange={console.log} selectedKey="B" />;
```
