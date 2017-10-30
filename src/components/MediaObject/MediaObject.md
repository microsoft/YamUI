This component renders an image on the left with blocks of descriptive content on the right. The image area and pieces of text content are passed in as props, with size/layout determined by the `size` prop.

### Examples

Media object with avatar:

```js
const { AvatarSize } = require('../Avatar');
const { MediaObjectSize } = require('.');

const avatar = (size) => (
  <Avatar imageUrl="smiley.png" name="Smiley Face" size={size} />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={avatar(AvatarSize.XLARGE)}
    titleContent="First name Last name"
    metadataContent="Job Title - Metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={avatar(AvatarSize.LARGE)}
    titleContent="First name Last name"
    metadataContent="Job Title - Metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={avatar(AvatarSize.MEDIUM)}
    titleContent="First name Last name"
    metadataContent="Job Title - Metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={avatar(AvatarSize.SMALL)}
    titleContent="First name Last name"
    metadataContent="Job Title - Metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={avatar(AvatarSize.XSMALL)}
    titleContent="First name Last name"
    metadataContent="Job Title - Metadata"
    extraContent="Extra information"
  />
</div>
```

Media object with image:

```js
const { MediaObjectSize } = require('.');

const image = (
  <Image source="smiley.png" description="" fullWidth />
);

<div>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={image}
    titleContent="Extra large media object title"
    metadataContent="Media object metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.LARGE}
    imageContent={image}
    titleContent="Large media object title"
    metadataContent="Media object metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.MEDIUM}
    imageContent={image}
    titleContent="Medium media object title"
    metadataContent="Media object metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={image}
    titleContent="Small media object title"
    metadataContent="Media object metadata"
    extraContent="Extra information"
  />
  <MediaObject
    size={MediaObjectSize.XSMALL}
    imageContent={image}
    titleContent="Extra small media object title"
    metadataContent="Media object metadata"
    extraContent="Extra information"
  />
</div>
```

Media object with additional UI:

```js
const { AvatarSize } = require('../Avatar');
const { ButtonColor, ButtonSize } = require('../Button');
const { FixedGridColumn, FixedGridRow } = require('../FixedGrid');
const { MediaObjectSize } = require('.');

const avatar = (size) => (
  <Avatar imageUrl="smiley.png" name="Smiley Face" size={size} />
);

<MediaObject
  size={MediaObjectSize.SMALL}
  imageContent={avatar(AvatarSize.SMALL)}
  titleContent="Eddie Eagle"
  metadataContent="Sr. Product Manager"
  extraContent="Extra information"
>
  <Block push={4}>
    <FixedGridRow>
      <FixedGridColumn>
        <Button text="Follow" size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} />
      </FixedGridColumn>
      <FixedGridColumn fixed>
        <Button text="..." size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} />
      </FixedGridColumn>
    </FixedGridRow>
  </Block>
</MediaObject>
```
