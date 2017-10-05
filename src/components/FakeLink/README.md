# FakeLink

This component imitates the styling of an `<a>` tag, or `NavigationLink` component. It is mean to be nested within `<NavigationLink unstyled>` and `<Clickable>` components, allowing an entire block of content to be an accessible tabbable element while still showing individual "links" for sighted users.

## Properties

(no props)

## Examples

### Basic usage

```js
<FakeLink>this text looks like a link</FakeLink>, but it isn't actually tabbable or clickable.
```

### Used within a NavigationLink

```js
<NavigationLink href="#" unstyled>
  This whole section of text is a link but is unstyled. <FakeLink>This text looks like a link and
  becomes underlined if the parent NavigationLink is hovered over.</FakeLink>
</NavigationLink>.
```
