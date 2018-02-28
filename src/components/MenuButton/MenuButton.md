### Notes for use

Context menu should be used as a menu button where you want to provide options that are hidden behind a click.

### Examples

MenuButton with default Icon, and all applicable children properties

```js { "props": { "data-description": "with default icon and all menu item types" } }
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;
const enums = require('./enums.ts');

<div>
  <MenuButton
    ariaLabel="aria"
    menuItems={[{
      key: 'regular',
      icon: Edit,
      text: 'Icon Item',
    }, {
      key: 'noIcon',
      text: 'No Icon',
      onClick: () => action('clicked no icon'),
    }, {
      key: 'disabledIcon',
      text: 'Icon and disabled',
      icon: Reply,
      isDisabled: true,
      onClick: () => action('clicked icon and disabled'),
    }, {
      key: 'header',
      text: 'Header Type',
      type: enums.MenuItemType.Header,
    }, {
      key: 'anotherRegular',
      icon: Edit,
      text: 'Another Icon Item',
    },
    {
      key: 'divider',
      type: enums.MenuItemType.Divider,
    }, {
      key: 'link',
      text: 'Link!',
      icon: Share,
      href: 'http://bing.com',
      onClick: () => action('clicked link'),
    }]}
  />
</div>
```

MenuButton with specified Icon and basic children

```js { "props": { "data-description": "custom icon" } }
const Home = require('../Icon/icons/Home').default;
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;

<div>
  <MenuButton
    ariaLabel="aria"
    icon={Home}
    menuItems={[{
      key: 'edit',
      icon: Edit,
      text: 'Edit',
    }, {
      key: 'reply',
      text: 'Reply',
      icon: Reply,
    }, {
      key: 'share',
      text: 'Share',
      icon: Share,
    }]}
  />
</div>
```
