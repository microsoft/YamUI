### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
<Box>This is a Box</Box>
```

With MediaObject child:

```js { "props": { "data-description": "with mediaobject child" } }
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

With absolutely-positioned children:

```js { "props": { "data-description": "with absolutely positioned children" } }
const { IconSize } = require('../Icon');
const CancelIcon = require('../Icon/icons/Cancel').default;
const { GutterSize } = require('../Block');
const { MediaObjectSize } = require('../MediaObject');
const image = <Image source="file.png" description="Excel file icon" fullWidth={true} />;

<Box>
  <Block bottomSpacing={GutterSize.XSMALL}>
    <MediaObject
      size={MediaObjectSize.MEDIUM}
      imageContent={image}
      titleContent="Uploaded file"
      metadataContent="3.4 MB"
    />
    <span style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <Clickable block={true} onClick={action('Close button clicked!')}>
        <CancelIcon size={IconSize.XSMALL} color="#646d7a" block={true} />
      </Clickable>
    </span>
    <span style={{ position: 'absolute', bottom: '-1px', right: '-1px', left: '-1px' }}>
      <ProgressIndicator percentComplete={.68} ariaValueText="68% complete" />
    </span>
  </Block>
</Box>
```
