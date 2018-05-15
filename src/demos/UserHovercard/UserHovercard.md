```js

<div style={{ height: '375px' }}>
  <Hovercard
    content={<UserHovercard user={user} />}
    directionalHint={4}
    startVisible={true}
  >
    <Clickable>{user.name}</Clickable>
  </Hovercard>
</div>
```
