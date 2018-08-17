### Examples

Basic example:

```js { "props": { "data-description": "basic" } }
<div>
  Here is a <FakeLink><Strong>FakeLink</Strong> component</FakeLink>. It styles text as if it were a <Strong>NavigationLink</Strong>. It does not accept any options.
</div>
```

Inside an unstyled `NavigationLink`:

```js { "props": { "data-description": "inside unstyled navigationlink" } }
<NavigationLink href="/404.html" unstyled={true} block={true}>
  <Block>
    This unstyled link wraps an entire block of text. Here is a nested <FakeLink>FakeLink component</FakeLink>, which imitates link styles when its parent is hovered, focused or active. This allows screenreaders to understand a linked block of UI while also supporting nice visual styles for sighted users.
  </Block>
</NavigationLink>
```

Inside a `Clickable`:

```js { "props": { "data-description": "inside unstyled clickable" } }
<Clickable unstyled={true} block={true} onClick={action('button clicked')}>
  <Block>
    Here is an example of a <FakeLink>FakeLink component</FakeLink> within a Clickable. <FakeLink>Here's another one</FakeLink>.
  </Block>
</Clickable>
```
