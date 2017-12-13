### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

Basic usage:

```js
<AsideSection title="Example title">
  <div>Child Content</div>
</AsideSection>
```

Basic usage with action:

```js
const action = <Clickable>Add</Clickable>;

<AsideSection title="Example title" action={action}>
  <div>Child Content</div>
</AsideSection>
```