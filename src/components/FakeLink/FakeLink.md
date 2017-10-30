This component imitates the styling of an `a` tag, or `NavigationLink` component. It is mean to be nested within an unstyled `NavigationLink` or `Clickable` components, allowing an entire block of content to be an accessible tabbable element while still showing individual "links" for sighted users.

### Examples

Basic example:

```js { "props": { "data-example": "basic" } }
<div>
  Here is a <FakeLink>FakeLink component</FakeLink>. It styles text as if it were a NavigationLink. It does not accept any options.
</div>
```

Inside an unstyled link:

```js { "props": { "data-example": "inside unstyled link" } }
<NavigationLink href="/404.html" unstyled>
  <Block>
    This unstyled <em>NavigationLink</em> component wraps an entire block of text. Here is a <FakeLink><em>FakeLink</em> component</FakeLink> nested in that block of text. Notice that it reflects the hover styles when its parent is hovered, focused or active. This allows screenreaders to understand an entire block of text within a <em>NavigationLink</em> while also supporting nice visual styles for sighted users.
  </Block>
</NavigationLink>
```
