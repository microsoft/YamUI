### Examples

Basic examples:

```js { "props": { "data-example": "basic" } }
<div>
  <Heading level="1">This text is rendered in an h1 tag</Heading>
  <Heading level="2">This text is rendered in an h2 tag</Heading>
  <Heading level="3">This text is rendered in an h3 tag</Heading>
  <Heading level="4">This text is rendered in an h4 tag</Heading>
  <Heading level="5">This text is rendered in an h5 tag</Heading>
  <Heading level="6">This text is rendered in an h6 tag</Heading>
</div>
```

Size overrides:

```js { "props": { "data-example": "size overrides" } }
<div>
  <Heading level="2" size="1">This h2 is rendered at the size of an h1 tag</Heading>
  <Heading level="2" size="2">This h2 is rendered at the size of an h2 tag</Heading>
  <Heading level="2" size="3">This h2 is rendered at the size of an h3 tag</Heading>
  <Heading level="2" size="4">This h2 is rendered at the size of an h4 tag</Heading>
  <Heading level="2" size="5">This h2 is rendered at the size of an h5 tag</Heading>
  <Heading level="2" size="6">This h2 is rendered at the size of an h6 tag</Heading>
  <Heading level="2" size="none">This h2 is rendered as plain text</Heading>
</div>
```
