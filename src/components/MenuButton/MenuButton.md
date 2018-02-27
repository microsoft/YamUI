### Notes for use

Context menu should be used as a menu button where you want to provide options that are hidden behind a click.

### Examples

MenuButton with default Icon, and all applicable children properties

```js { "props": { "data-description": "with deafult icon and children properties" } }
const Reply = require('../Icon/icons/Reply').default;
const Edit = require('../Icon/icons/Edit').default;
const Share = require('../Icon/icons/Share').default;

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
      onClick: () => console.log('no icon'),
    }, {
      key: 'disabledIcon',
      text: 'Icon and disabled',
      icon: Reply,
      isDisabled: true,
      onClick: () => console.log('icon and disabled'),
    }, {
      key: 'header',
      text: 'Header Type with Divider After',
      type: 2,
    }, {
      key: 'divider',
      type: 1,
    }, {
      key: 'link',
      text: 'Link!',
      icon: Share,
      href: 'http://bing.com',
      onClick: () => console.log('link'),
    }]}
  />
</div>
```

MenuButton with specified Icon and basic children

```js { "props": { "data-description": "specified icon and icon size" } }
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
