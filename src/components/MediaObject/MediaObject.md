### Examples

With avatar:

```js { "props": { "data-example": "with avatar" } }
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

With image:

```js { "props": { "data-example": "with image" } }
const { MediaObjectSize } = require('.');

const image = (
  <Image source={group.imageUrl} description="" fullWidth={true} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={image}
    titleContent={group.name}
    metadataContent={group.privacy}
    extraContent={group.description}
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={image}
    titleContent={group.name}
    metadataContent={group.privacy}
    extraContent={group.description}
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={image}
    titleContent={group.name}
    metadataContent={group.privacy}
    extraContent={group.description}
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={image}
    titleContent={group.name}
    metadataContent={group.privacy}
    extraContent={group.description}
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={image}
    titleContent={group.name}
    metadataContent={group.privacy}
    extraContent={group.description}
  />
</div>
```

With additional arbitrary UI:

```js { "props": { "data-example": "with additional ui" } }
const { AvatarSize } = require('../Avatar');
const { ButtonColor, ButtonSize } = require('../Button');
const { FixedGridColumn, FixedGridRow } = require('../FixedGrid');
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
        <Button text="Follow" size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} icon="plus" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true}>
        <Button text="..." size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} />
      </FixedGridColumn>
    </FixedGridRow>
  </Block>
</MediaObject>
```
