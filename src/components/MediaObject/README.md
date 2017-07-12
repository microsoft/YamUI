# MediaObject

This component renders an image on the left with blocks of descriptive content on the right. The image area and pieces of text content are passed in as props, with size/layout determined by the `size` prop.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size * | MediaObjectSize | Determines the size of the image area, vertical gutter, and text sizes. |
| imageContent | JSX.Element | Arbitrary JSX for an image, icon, Avatar, etc. |
| titleContent | string or JSX.Element | The title text. This can be wrapped in a link or other JSX if necessary. |
| metadataContent | string or JSX.Element | The secondary text. This can be wrapped in a link or other JSX if necessary. May be suppressed at smaller sizes. |
| extraContent | string or JSX.Element | Extra 3rd row of text. This can be wrapped in a link or other JSX if necessary. Only displayed at MediaObjectSize.XLARGE. |

* indicates property is required

---

## Examples

### Basic example

```
const avatar = <Avatar size={AvatarSize.LARGE} name="Smiley Face">
<MediaObject size={MediaObjectSize.LARGE} imageContent={avatar} titleContent="Smiley Face" metadataContent="Marketing Strategy Coordinator" />
```
