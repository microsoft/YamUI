### Notes for use

A Box component can be used with any number of children and all of them will be inside the box.
Use it in cases where you would consider using a Block but need a border.

### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
<Box>This is a Box</Box>
```

Box with MediaObject child:

```js { "props": { "data-example": "with-mediaobject-child" } }
const { AvatarSize } = require('../Avatar');
const { MediaObjectSize } = require('../MediaObject');
const avatar = (size) => (
  <Avatar imageUrl={user.imageUrl} name={user.name} size={size} />
);

<Box>
  <MediaObject
    size={MediaObjectSize.XLARGE}
    imageContent={avatar(AvatarSize.XLARGE)}
    titleContent={user.name}
    metadataContent={user.jobTitle}
    extraContent={user.status}
  />
</Box>
```
