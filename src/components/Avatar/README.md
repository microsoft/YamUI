# Avatar

Avatars show a thumbnail representation of both an individual or group. 


### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size | AvatarSize| Size of avatar. |
| name * | string | The name of the person or object being represented. Will be used as accessible alt text. |
| initials | string | Initials of person to display if no mugshot provided. |
| imageUrl | string| Image src URL |
| borderType | BorderType| Round or soft border. Defaults to round. |
| badgeContent | JSX.Element | Image, SVG, icon, etc. See example below. |
| badgeDescription | string | A short accessible description of the badge. Will be appended to name if provided. |

\* property is required

---

## Notes for use

Avatar takes care of setting the alt text for you when you pass the one required attribute, `name`.

You must provide either an imageUrl property or an initials property.

---

## Examples

### Person avatar no image

Use to present an avatar for a person

```
<Avatar size={AvatarSize.XLARGE} initials="WW" name="Walter White" />
```

### Group avatar

Use to present an avatar for a group

```
<Avatar imageUrl={antelope} size={AvatarSize.XSMALL} name="Annie Antelope"
        borderType={BorderType.SOFT} />
```

## Example implementation

Present an avatar for an admin

```
import Avatar from 'yamui/dist/components/Avatar';
import Image from 'yamui/dist/components/Image';

const badgeImage = <Image source="badge-image.png" description="" fullWidth={true} />;

<Avatar imageUrl="my-image.jpg" size={AvatarSize.XSMALL} name="Smiley Face"
        badgeContent={badgeImage} badgeDescription="Admin" />
```
