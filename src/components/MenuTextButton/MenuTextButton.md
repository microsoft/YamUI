### Notes for use

Context menu should be used as a menu button where you want to provide options that are hidden behind a click.

### Examples

MenuTextButton with default Icon, and all applicable children properties

```js { "props": { "data-description": "with default icon and all menu item types" } }
const Audio = require('../Illustration/illustrations/Audio16').default;
const Folder = require('../Illustration/illustrations/Folder16').default;
const Txt = require('../Illustration/illustrations/Txt16').default;
const types = require('../MenuButton/types.ts');

<div>
  <MenuTextButton
    ariaLabel="aria"
    text={'New'}
    menuItems={[{
      key: 'regular',
      icon: Audio,
      text: 'Icon Item',
    }, {
      key: 'noIcon',
      text: 'No Icon',
      onClick: () => action('clicked no icon'),
    }, {
      key: 'disabledIcon',
      text: 'Icon and disabled',
      icon: Folder,
      isDisabled: true,
      onClick: () => action('clicked icon and disabled'),
    }, {
      key: 'header',
      text: 'Header Type',
      type: types.MenuItemType.Header,
    }, {
      key: 'longText',
      icon: Txt,
      text: 'A menu option that has very long text in the item',
    },
    {
      key: 'divider',
      type: types.MenuItemType.Divider,
    }, {
      key: 'link',
      text: 'Link!',
      icon: Audio,
      href: 'http://bing.com',
      newWindow: true,
      onClick: () => action('clicked link'),
    }]}
  />
</div>
```

MenuTextButton with multiple headers in children

```js { "props": { "data-description": "multiple headers" } }
const Audio = require('../Illustration/illustrations/Audio16').default;
const Folder = require('../Illustration/illustrations/Folder16').default;
const Txt = require('../Illustration/illustrations/Txt16').default;
const types = require('../MenuButton/types.ts');

<div>
  <MenuTextButton
    ariaLabel="aria"
    text={'New'}
    menuItems={[{
      key: 'header',
      text: 'Header',
      type: types.MenuItemType.Header,
    },
    {
      key: 'audio',
      text: 'Audio',
      icon: Audio,
    }, {
      key: 'folder',
      text: 'Folder',
      icon: Folder,
    }, {
      key: 'txt',
      text: 'Text',
      icon: Txt,
    }, {
      key: 'anotherHeader',
      text: 'Header',
      type: types.MenuItemType.Header,
    }, {
      key: 'audio1',
      text: 'Audio',
      icon: Audio,
    }, {
      key: 'folder1',
      text: 'Folder',
      icon: Folder,
    }, {
      key: 'txt1',
      text: 'Text',
      icon: Txt,
    }]}
  />
</div>
```

MenuTextButton with custom icon and dividers

```js { "props": { "data-description": "with custom icon and dividers" } }
const Add = require('../Icon/icons/Add').default;
const Audio = require('../Illustration/illustrations/Audio16').default;
const Docx = require('../Illustration/illustrations/Docx16').default;
const Folder = require('../Illustration/illustrations/Folder16').default;
const Txt = require('../Illustration/illustrations/Txt16').default;
const types = require('../MenuButton/types.ts');

<div>
  <MenuTextButton
    ariaLabel="aria"
    icon={Add}
    text={'New'}
    menuItems={[{
      key: 'audio',
      icon: Audio,
      text: 'Audio',
    }, {
      key: 'divider',
      type: types.MenuItemType.Divider,
    }, {
      key: 'folder',
      text: 'Folder',
      icon: Folder,
    }, {
      key: 'txt',
      text: 'Text',
      icon: Txt,
    }, {
      key: 'divider',
      type: types.MenuItemType.Divider,
    }, {
      key: 'docx',
      text: 'Word Doc',
      icon: Docx,
    }]}
  />
</div>
```

MenuTextButton with iconSize specified

```js { "props": { "data-description": "custom icon size" } }
const Audio = require('../Illustration/illustrations/Audio16').default;
const Folder = require('../Illustration/illustrations/Folder16').default;
const Txt = require('../Illustration/illustrations/Txt16').default;
const types = require('../MenuButton/types.ts');
const { IconSize } = require('../Icon');

<div>
  <MenuTextButton
    ariaLabel="aria"
    iconSize={IconSize.XSMALL}
    text={'New'}
    menuItems={[{
      key: 'audio',
      icon: Audio,
      text: 'audio',
    }, {
      key: 'folder',
      text: 'Folder',
      icon: Folder,
    }, {
      key: 'txt',
      text: 'Text',
      icon: Txt,
    }]}
  />
</div>
```
