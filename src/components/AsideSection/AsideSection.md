### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
<AsideSection title="Example title">
  <div>Child Content</div>
</AsideSection>
```

With an action:

```js { "props": { "data-description": "with action" } }
const actionComponent = <Clickable onClick={action('clicked!')}>Add</Clickable>;

<AsideSection title="Example title" action={actionComponent}>
  <div>Child Content</div>
</AsideSection>
```