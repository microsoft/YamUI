### Notes for use

Context menu should be used as a menu button where you want to provide options that are hidden behind a click.

### Examples

Inline:

```js { "props": { "text": "Hello" } }
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;

<div>
  <MenuButton
    ariaLabel="aria"
    menuItems={[{
      key: 'reply',
      text: 'Reply',
      icon: Reply,
      isDisabled: true,
      onClick: () => console.log('reply'),
    }, {
      key: 'edit',
      text: 'Edit',
      icon: Edit,
      onClick: () => console.log('edit'),
    },  {
      key: 'share',
      text: 'Share',
      icon: Share,
      onClick: () => console.log('share'),
    }]}
  />
</div>
```
