### Notes for use

Clickable should be used in place of NavigationLink when you need click interaction without navigation. By default a Clickable is styled like a link, but you can also set it to `unstyled`.


### Examples

Inline:

```js { "props": { "data-example": "inline" } }
<div>
  The following Clickable example looks like a link but is actually rendered as a button: <Clickable onClick={action('clickable clicked')}>Click me</Clickable>
</div>
```

Unstyled:

```js { "props": { "data-example": "unstyled" } }
<div>
  The following Clickable example has <strong>unstyled: true</strong>: <Clickable onClick={action('clickable clicked')} unstyled={true}>Click me</Clickable>
</div>
```

Unstyled block with FakeLink:

```js { "props": { "data-example": "unstyled block with fakelink" } }
<div>
  <Clickable onClick={action('clickable clicked')} unstyled={true} block={true}>
    This entire area is a Clickable with <strong>unstyled: true</strong> and <strong>block: true</strong>. Here is a nested <FakeLink>FakeLink component</FakeLink>, which looks like a link and shows link hoverstate when any part of the Clickable is hovered. This can work with <FakeLink>multiple nested FakeLinks</FakeLink>.
  </Clickable>
</div>
```
