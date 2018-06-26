### Examples

Basic usage:

```js { "props": { "data-description": "basic", "data-action-states": "[{\"action\":\"none\",\"wait\":\"100\"}]" } }
<AsideSection title="Example title">
  <div>Child Content</div>
</AsideSection>
```

With an action:

```js { "props": { "data-description": "with action", "data-action-states": "[{\"action\":\"none\",\"wait\":\"100\"}]" } }
const actionComponent = <Clickable onClick={action('clicked!')}>Add</Clickable>;

<AsideSection title="Example title" action={actionComponent}>
  <div>Child Content</div>
</AsideSection>
```