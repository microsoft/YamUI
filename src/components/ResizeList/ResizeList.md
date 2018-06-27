### Examples

Basic usage:

```js { "props": { "data-description": "basic", "data-action-states": "[{\"action\":\"none\",\"wait\":\"50\"}]" } }
const { ButtonColor } = require('../Button');
const { BorderType } = require('../Image');

const items = [
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
];
const actionItem = <Image source="logo.png" description="Some action" borderType={BorderType.ROUND} height={32} width={32} />;

<ResizeList items={items} actionItem={actionItem} />
```

With a custom gutter size:

```js { "props": { "data-description": "large gutter", "data-action-states": "[{\"action\":\"none\",\"wait\":\"50\"}]" } }
const { GutterSize } = require('.');
const { ButtonColor } = require('../Button');
const { BorderType } = require('../Image');

const items = [
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
  <Image source={user.imageUrl} description={user.name} borderType={BorderType.ROUND} height={32} width={32} />,
];
const actionItem = <Image source="logo.png" description="Some action" borderType={BorderType.ROUND} height={32} width={32} />;

<ResizeList items={items} actionItem={actionItem} gutterSize={GutterSize.LARGE} />
```
