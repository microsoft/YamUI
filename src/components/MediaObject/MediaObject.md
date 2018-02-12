### Examples

With avatar:

```js { "props": { "data-description": "with avatar" } }
const { AvatarSize } = require('../Avatar');
const { MediaObjectSize } = require('.');

const avatar = (size) => (
  <Avatar imageUrl={user.imageUrl} name={user.name} size={size} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={avatar(AvatarSize.XLARGE)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={avatar(AvatarSize.LARGE)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={avatar(AvatarSize.MEDIUM)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={avatar(AvatarSize.SMALL)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={avatar(AvatarSize.XSMALL)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
</div>
```

With long text:

```js { "props": { "data-description": "with long text" } }
const { AvatarSize } = require('../Avatar');
const { MediaObjectSize } = require('.');

const name = 'Hubert Blaine Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz';
const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
const status = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque';

const avatar = (size) => (
  <Avatar imageUrl={user.imageUrl} name={user.name} size={size} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={avatar(AvatarSize.XLARGE)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={avatar(AvatarSize.LARGE)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={avatar(AvatarSize.MEDIUM)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={avatar(AvatarSize.SMALL)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={avatar(AvatarSize.XSMALL)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
  />
</div>
```

With allow text wrap:

```js { "props": { "data-description": "with allow text wrap" } }
const { AvatarSize } = require('../Avatar');
const { MediaObjectSize } = require('.');

const name = 'Hubert Blaine Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz';
const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
const status = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque';

const avatar = (size) => (
  <Avatar imageUrl={user.imageUrl} name={user.name} size={size} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={avatar(AvatarSize.XLARGE)}
    titleContent={name}
    metadataContent={title}
    extraContent={status}
    allowTextWrap={true}
  />
</div>
```

With image:

```js { "props": { "data-description": "with image" } }
const { MediaObjectSize } = require('.');

const image = (
  <Image source={file.imageUrl} description="" fullWidth={true} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={image}
    titleContent={file.name}
    metadataContent={file.location}
    extraContent={file.description}
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={image}
    titleContent={file.name}
    metadataContent={file.location}
    extraContent={file.description}
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={image}
    titleContent={file.name}
    metadataContent={file.location}
    extraContent={file.description}
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={image}
    titleContent={file.name}
    metadataContent={file.location}
    extraContent={file.description}
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={image}
    titleContent={file.name}
    metadataContent={file.location}
    extraContent={file.description}
  />
</div>
```

With additional arbitrary UI:

```js { "props": { "data-description": "with additional ui" } }
const { AvatarSize } = require('../Avatar');
const { ButtonColor, ButtonSize } = require('../Button');
const { FixedGridColumn, FixedGridRow } = require('../FixedGrid');
const Add = require('../Icon/icons/Add').default;
const { MediaObjectSize } = require('.');

const avatar = (size) => (
  <Avatar imageUrl={user.imageUrl} name={user.name} size={size} />
);

<MediaObject
  size={MediaObjectSize.SMALL}
  imageContent={avatar(AvatarSize.SMALL)}
  titleContent={user.name}
  metadataContent={user.jobTitle}
  extraContent={user.status}
>
  <Block push={4}>
    <FixedGridRow>
      <FixedGridColumn>
        <Button text="Follow" size={ButtonSize.SMALL} icon={Add} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true}>
        <Button text="..." size={ButtonSize.SMALL} />
      </FixedGridColumn>
    </FixedGridRow>
  </Block>
</MediaObject>
```
