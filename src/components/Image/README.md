# Image

This component renders an image with some convenient ways to manage aspect ratio and overflow.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| source * | string | Image URL |
| description * | string | The imge's alt text, read aloud by screenreaders and visually rendered by the browser when the image fails to load. |
| height | number | The number of pixels tall the image should be rendered at. Leave empty to auto-scale. |
| width | number | The number of pixels wide the image should be rendered at. Leave empty to auto-scale. |
| imageFit | ImageFit | How to fit the image within the given dimensions. See the [Fabric Image docs](https://dev.office.com/fabric#/components/image) for more info. |
| fullWidth | boolean | If true, height and width will be ignored and the image will grow to 100% wide and auto height (maintaining its aspect ratio). |
| onLoadingStateChange | (loadState: ImageLoadState) => void | Optional callback handler which will receive a Fabric ImageLoadState ('error' | 'loaded' | 'notLoaded'). |

\* indicates property is required

## Notes for use

Try to set a height and width whenever possible, this will keep the browser from calculating reflows on re-render or on image load.

If an image is used as a supplemental icon, or screenreaders should not read it out loud for any other reason, provide an empty string as `description`. This is a required prop because a missing alt attribute means the screenreader will read the URL out loud.

## Examples

### Basic usage

```js
<Image
  source="my_image.png"
  description="My image description"
  height={30}
  width={40}
/>
```

### Reponsive full-width image maintaining aspect ratio

```js
<Image
  source="my_image.png"
  description="My image description"
  fullWidth
/>
```

### Cropping a rectangular image to fill square dimensions

```js
<Image
  source="100x200.png"
  description="Rectangle cropped to thumbnail"
  height={100}
  width={100}
  imageFit={ImageFit.cover}
/>
```
