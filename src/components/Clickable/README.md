# Clickable

A accessible, clickable area that accepts arbitrary content. Under the hood Clickable simply wraps content in a button element.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| block | boolean | Defaults to false. |
| onClick | (event: any) => void | Click callback handler. |


## Notes for use

Used to add a click handler to an area that is not styled as a button and is not a link.

If you need to control spacing, you can wrap children in a Block component. You can also wrap text in Clickable, making it an inline clickable area.

## Examples

### Simple example

```
<Block>
  Here is some content, and <Clickable onClick={action('button-clicked')}>this is some text within a Clickable component</Clickable>.
</Block>
```

### Example wrapping a block of content

```
<Clickable onClick={action('button-clicked')}>
  <Block>
    This entire block of content is wrapped in a Clickable component. Tabbing through the element will focus-highlight the entire square,
    and individual nested <FakeLink>FakeLink components</FakeLink> will be underlined like links on mouse hover.
  </Block>
</Clickable>
```
