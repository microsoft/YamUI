```js { "props": { "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }

<div style={{ height: '400px' }}>
  <Hovercard
    content={<GroupHovercard group={group} />}
    directionalHint={4}
  >
    <Clickable>{group.name}</Clickable>
  </Hovercard>
</div>
```
