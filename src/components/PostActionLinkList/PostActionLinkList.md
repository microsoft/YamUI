### Examples

```js { "props": { "data-description": "basic" } }
const Like = require('../Icon/icons/Like').default;
const Reply = require('../Icon/icons/Reply').default;
const Share = require('../Icon/icons/Share').default;
const Flag = require('../Icon/icons/Flag').default;

const items = [
  {
    key: 'like',
    icon: Like,
    text: 'Like',
    onClick: () => action('clicked like'),
  },
  {
    key: 'reply',
    icon: Reply,
    text: 'Reply',
    onClick: () => action('clicked reply'),
  },
  {
    key: 'share',
    icon: Share,
    text: 'Share',
    onClick: () => action('clicked share'),
  },
  {
    key: 'flag',
    icon: Flag,
    text: 'Follow in Inbox',
    onClick: () => action('clicked follow'),
  },
];

<div style={{ maxWidth: '400px' }}>
  <PostActionLinkList items={items} maxVisibleItemCount={3} />
</div>;
```

```js { "props": { "data-description": "counts", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
const Like = require('../Icon/icons/Like').default;
const Reply = require('../Icon/icons/Reply').default;
const Share = require('../Icon/icons/Share').default;

const items = [
  {
    key: 'like',
    icon: Like,
    text: 'Like',
    unlinkedText: '4',
    onClick: () => action('clicked like'),
  },
  {
    key: 'reply',
    icon: Reply,
    text: 'Reply',
    unlinkedText: '2',
    onClick: () => action('clicked reply'),
  },
  {
    key: 'share',
    icon: Share,
    text: 'Share',
    onClick: () => action('clicked share'),
  },
];

<div style={{ maxWidth: '400px' }}>
  <PostActionLinkList items={items} maxVisibleItemCount={2} />
</div>;
```

```js { "props": { "data-description": "no overflow" } }
const Like = require('../Icon/icons/Like').default;
const Reply = require('../Icon/icons/Reply').default;
const Share = require('../Icon/icons/Share').default;

const items = [
  {
    key: 'like',
    icon: Like,
    text: 'Like',
    unlinkedText: '8',
    onClick: () => action('clicked like'),
  },
  {
    key: 'reply',
    icon: Reply,
    text: 'Reply',
    onClick: () => action('clicked reply'),
  },
];

<div style={{ maxWidth: '400px' }}>
  <PostActionLinkList items={items} maxVisibleItemCount={2} />
</div>;
```
