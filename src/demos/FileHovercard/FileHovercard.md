```js
const { DirectionalHint } = require('../../components/Callout');

<div style={{ height: '275px' }}>
  <Callout
    content={<FileHovercard file={file} />}
    directionalHint={DirectionalHint.bottomLeftEdge}
    startVisible={true}
  >
    <FakeLink>{file.name}</FakeLink>
  </Callout>
</div>
```
