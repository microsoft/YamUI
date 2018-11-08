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
      key: 'longText',
      icon: Edit,
      text: 'A menu option that has very long text in the item',
    },
    {
      key: 'divider',
      type: enums.MenuItemType.Divider,
    }, {
      key: 'link',
      text: 'Link!',
      icon: Share,
      href: 'http://bing.com',
      newWindow: true,
      onClick: () => action('clicked link'),
    }]}
  />
</div>
```

MenuButton with multiple headers in children

```js { "props": { "data-description": "multiple headers" } }
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;
const enums = require('./enums.ts');

<div>
  <MenuButton
    ariaLabel="aria"
    menuItems={[{
      key: 'header',
      text: 'Header',
      type: enums.MenuItemType.Header,
    },
    {
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
    }, {
      key: 'anotherHeader',
      text: 'Header',
      type: enums.MenuItemType.Header,
    }, {
      key: 'edit1',
      icon: Edit,
      text: 'Edit',
    }, {
      key: 'reply1',
      text: 'Reply',
      icon: Reply,
    }, {
      key: 'share1',
      text: 'View',
      icon: Share,
    }]}
  />
</div>
```

MenuButton with custom icon and dividers

```js { "props": { "data-description": "with custom icon and dividers" } }
const Home = require('../Icon/icons/Home').default;
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;
const View = require('../Icon/icons/View').default;
const enums = require('./enums.ts');

<div>
  <MenuButton
    ariaLabel="aria"
    icon={Home}
    menuItems={[{
      key: 'edit',
      icon: Edit,
      text: 'Edit',
    }, {
      key: 'divider',
      type: enums.MenuItemType.Divider,
    }, {
      key: 'reply',
      text: 'Reply',
      icon: Reply,
    }, {
      key: 'share',
      text: 'Share',
      icon: Share,
    }, {
      key: 'divider',
      type: enums.MenuItemType.Divider,
    }, {
      key: 'view',
      text: 'View',
      icon: View,
    }]}
  />
</div>
```

MenuButton with iconSize specified

```js { "props": { "data-description": "custom icon size" } }
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;
const { IconSize } = require('../Icon');

<div>
  <MenuButton
    ariaLabel="aria"
    iconSize={IconSize.XSMALL}
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
