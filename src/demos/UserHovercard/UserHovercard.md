```js

<div style={{ height: '375px' }}>
  <Hovercard
    content={<UserHovercard user={user} />}
    directionalHint={4}
    startVisible={true}
  >
    <FakeLink>{user.name}</FakeLink>
  </Hovercard>
</div>
```
