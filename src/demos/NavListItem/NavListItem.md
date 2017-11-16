Badge with short value:

```js
const { Fade, NavListItemBadge } = require('./NavListItem');

<div>
  <Fade showAfter={500} duration={250}>
    <NavListItemBadge value={5} />
  </Fade>
</div>
```

Badge with long value that disappears:

```js
const { Fade, NavListItemBadge } = require('./NavListItem');

<div>
  <Fade showAfter={500} duration={250} hideAfter={4000}>
    <NavListItemBadge previousValue={18} value={20} />
  </Fade>
</div>
```

Minimum number of avatars:

```js
const { Slide, NavListItemAvatars } = require('./NavListItem');

const avatars = [
  'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg'
];

<div style={{ position: 'relative', width: '250px', overflow: 'hidden', backgroundColor: '#eee' }}>
  <Text>Yammer Frontend Team</Text>
  <Slide showAfter={500} duration={500}>
    <NavListItemAvatars avatars={avatars} />
  </Slide>
</div>
```

Maximum number of avatars that disappear:

```js
const { Slide, NavListItemAvatars } = require('./NavListItem');

const avatars = [
  'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg'
];

<div style={{ position: 'relative', width: '250px', overflow: 'hidden', backgroundColor: '#eee' }}>
  <Text>Yammer Frontend Team</Text>
  <Slide showAfter={500} duration={500} hideAfter={4000}>
    <NavListItemAvatars avatars={avatars} />
  </Slide>
</div>
```


Full item:

```js
const avatars = [
  'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg'
];

<div style={{ position: 'relative', width: '250px', overflow: 'hidden', backgroundColor: '#eee' }}>
  <NavListItem group="Yammer Frontend Team" count={10} avatars={avatars} />
</div>
```
