```js { "props": { "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }

<div style={{ height: '275px' }}>
  <Hovercard
    content={<FileHovercard file={file} />}
    directionalHint={4}
  >
    <Clickable>{file.name}</Clickable>
  </Hovercard>
</div>
```
