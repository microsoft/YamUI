This component imitates the styling of an `<a>` tag, or `NavigationLink` component. It is mean to be nested within `<NavigationLink unstyled>` and `<Clickable>` components, allowing an entire block of content to be an accessible tabbable element while still showing individual "links" for sighted users.

### Examples

Basic fake link:

```js { "props": { "data-description": "basic" } }
<div>
  Here is a <FakeLink>FakeLink component</FakeLink>. It styles text as if it were a NavigationLink. It does not accept any options.
</div>
```

Fake link inside an unstyled link:

```js { "props": { "data-description": "inside unstyled link" } }
<NavigationLink href="/404.html" unstyled={true}>
  <Block>
    This unstyled <code>NavigationLink</code> component wraps an entire block of text. Here is a <FakeLink><code>FakeLink</code> component</FakeLink> nested in that block of text. Notice that it reflects the hover styles when its parent is hovered, focused or active. This allows screenreaders to understand an entire block of text within a <code>NavigationLink</code> while also supporting nice visual styles for sighted users.
  </Block>
</NavigationLink>
```
