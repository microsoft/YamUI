### Notes for use

Context menu should be used as a menu button where you want to provide options that are hidden behind a click.

### Examples

Inline:

```js { "props": { "text": "Hello" } }
<div>
  <MenuButton menuItems={[{
    key: 'reply',
    name: 'Reply',
    icon: 'Reply',
  }, {
    key: 'edit',
    name: 'Edit',
    icon: 'Edit',
  }]}/>
</div>
```
