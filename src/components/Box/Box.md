### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
<Box>This is a Box</Box>
```

With onClick:

```js { "props": { "data-description": "with onClick" } }
<Box onClick={action('onClick')}>Click me</Box>
```

Background color:

```js { "props": { "data-description": "background color" } }
<Box backgroundColor="neutralTertiaryAlt" borderColor="black">This is a Box</Box>
```
