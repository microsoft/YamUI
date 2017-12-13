### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
<AsideSection title="Example title">
  <div>Child Content</div>
</AsideSection>
```

With an action:

```js { "props": { "data-example": "with-action" } }
const action = <Clickable>Add</Clickable>;

<AsideSection title="Example title" action={action}>
  <div>Child Content</div>
</AsideSection>
```