# MediaObject

This component renders an image on the left with blocks of descriptive content on the right. The image area and pieces of text content are passed in as props, with size/layout determined by the `size` prop.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| size * | MediaObjectSize | Determines the size of the image area, vertical gutter, and text sizes. |
| imageContent | ReactNode | Arbitrary JSX for an image, icon, avatar, etc. |
| titleContent | string or ReactNode | The title text. This can be wrapped in a link or other component if necessary. |
| metadataContent | string or ReactNode | The secondary text. This can be wrapped in a link or other component if necessary. May be suppressed at smaller sizes. |
| extraContent | string or ReactNode | Extra 3rd row of text. This can be wrapped in a link or other component if necessary. Only displayed at MediaObjectSize.XLARGE. |

\* indicates property is required

## Examples

### Basic usage

```js
const avatar = <Avatar size={AvatarSize.LARGE} name="Smiley Face">

<MediaObject
  size={MediaObjectSize.LARGE}
  imageContent={avatar}
  titleContent="Smiley Face"
  metadataContent="Marketing Strategy Coordinator"
/>
```
