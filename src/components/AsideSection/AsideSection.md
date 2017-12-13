### Examples

Basic usage:

```js
<AsideSection title="Example title">
  <div>Child Content</div>
</AsideSection>
```

With an action:

```js
const action = <Clickable>Add</Clickable>;

<AsideSection title="Example title" action={action}>
  <div>Child Content</div>
</AsideSection>
```