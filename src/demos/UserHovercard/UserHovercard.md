```js { "props": { "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }

<div style={{ height: '375px' }}>
  <Hovercard
    content={<UserHovercard user={user} />}
    directionalHint={4}
  >
    <Clickable>{user.name}</Clickable>
  </Hovercard>
</div>
```
