### Examples

Basic example:

```js { "props": { "data-example": "basic" } }
<div>
  Here is a <FakeLink><strong>FakeLink</strong> component</FakeLink>. It styles text as if it were a <strong>NavigationLink</strong>. It does not accept any options.
</div>
```

Inside an unstyled `NavigationLink`:

```js { "props": { "data-example": "inside unstyled navigationlink" } }
<NavigationLink href="/404.html" unstyled={true}>
  <Block>
    This unstyled <strong>NavigationLink</strong> component wraps an entire block of text. Here is a <FakeLink><strong>FakeLink</strong> component</FakeLink> nested in that block of text. Notice that it reflects the hover styles when its parent is hovered, focused or active. This allows screenreaders to understand an entire block of text within a <strong>NavigationLink</strong> while also supporting nice visual styles for sighted users.
  </Block>
</NavigationLink>
```

Inside a `Clickable`:

```js { "props": { "data-example": "inside clickable" } }
<Clickable block={true} onClick={action('button clicked')}>
  <Block>
    Here is an example of a <FakeLink><strong>FakeLink</strong> component</FakeLink> within a <strong>Clickable</strong> block. <FakeLink>Here's another one</FakeLink>. Hover anywhere over this block to see the <strong>FakeLink</strong> components get underlined.
  </Block>
</Clickable>
```
