```js
const { DirectionalHint } = require('../../components/Callout');

<div style={{ height: '400px' }}>
  <Callout
    content={<GroupHovercard group={group} />}
    directionalHint={DirectionalHint.bottomLeftEdge}
    startVisible={true}
  >
    <FakeLink>{group.name}</FakeLink>
  </Callout>
</div>
```
