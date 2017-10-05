# Avatar

An `Avatar` shows a thumbnail representation of both an individual or group.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | AvatarSize | Size of avatar. |
| name * | string | Name of the person or object being represented. Will be used as accessible alt text. |
| initials | string | Initials of person to display if no mugshot provided. |
| imageUrl | string | Image source URL. |
| borderType | BorderType | Round or soft border. Defaults to round. |
| badgeContent | ReactNode | Image, SVG, icon, etc. See example below. |
| badgeDescription | string | A short accessible description of the badge. Will be appended to name if provided. |

\* property is required

## Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

You must provide either an `imageUrl` property or an `initials` property.

## Examples

### Person avatar without image

```js
<Avatar
  size={AvatarSize.XLARGE}
  name="Walter White"
  initials="WW"
/>
```

### Group avatar with image

```js
<Avatar
  size={AvatarSize.XSMALL}
  name="Marketing Team"
  imageUrl={antelope}
  borderType={BorderType.SOFT}
/>
```

## Avatar with image and badge

```js
import Avatar from 'yamui/dist/components/Avatar';
import Image from 'yamui/dist/components/Image';

const badgeImage = <Image source="badge-image.png" description="" fullWidth={true} />;

<Avatar
  size={AvatarSize.XSMALL}
  name="Smiley Face"
  imageUrl="my-image.jpg"
  badgeContent={badgeImage}
  badgeDescription="Admin"
/>
```
