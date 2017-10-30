The `Image` component renders an img element within a wrapper div. This div is displayed as inline-block so it behaves like a standard inline image. Height and width actually get applied to the wrapper div, and the image will get scaled/positioned within the wrapper depending on which props you provide.

### Notes for use

Try to set a height and width whenever possible, this will keep the browser from calculating reflows on re-render or on image load.

If an image is used as a supplemental icon, or screenreaders should not read it out loud for any other reason, provide an empty string as `description`. This is a required prop because a missing alt attribute means the screenreader will read the URL out loud.

### Examples

Basic:

```js { "props": { "data-example": "basic" } }
const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Image source={yammerLogo} description={yammerLogoDescription} width={250} height={140} />
</div>
```

Image fit cover:

```js { "props": { "data-example": "fit cover" } }
const { ImageFit } = require('.');

const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <p>
    The <strong>cover</strong> option can be used to nicely fill the desired image area while hiding any overflow.
  </p>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={250}
    width={250}
    imageFit={ImageFit.cover}
  />
</div>
```

Image fit contain:

```js { "props": { "data-example": "fit contain" } }
const { ImageFit } = require('.');

const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <p>
    The <strong>contain</strong> option displays the entire image within our image area and leaves whitespace.
  </p>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={250}
    width={250}
    imageFit={ImageFit.contain}
  />
</div>
```

Image fit center:

```js { "props": { "data-example": "fit center" } }
const { ImageFit } = require('.');

const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <p>
    The <strong>center</strong> option centers the image horizontally and vertically, using the image's original size and cropping its overflow.
  </p>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={250}
    width={250}
    imageFit={ImageFit.center}
  />
</div>
```

Image fit not provided:

```js { "props": { "data-example": "fit not provided" } }
const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <p>
    If we don't specify a fit option, the image will get stretched.
  </p>
  <Image source={yammerLogo} description={yammerLogoDescription} height={250} width={250} />
</div>
```

Image fit none:

```js { "props": { "data-example": "fit none" } }
const { ImageFit } = require('.');

const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <p>
    The <strong>none</strong> option places the image at the top left of its <strong>div</strong> wrapper. It will render at its original size, possibly showing whitespace or hiding its overflow. This is generally not an option you will want to use.
  </p>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={250}
    width={250}
    imageFit={ImageFit.none}
  />
</div>
```

Full width:

```js { "props": { "data-example": "full width" } }
const { ImageFit } = require('.');
const { FixedGridColumn, FixedGridRow, GutterSize } = require('../FixedGrid')

const yammerLogo = 'yammer-logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

const fullWidthImage = (
  <Image source={yammerLogo} description={yammerLogoDescription} fullWidth />
);

<div style={{ maxWidth: '500px' }}>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    Your image will grow to fit the width of its container. Use this option when you have a grid or other layout component determining the space an image should fill. Any provided height and width will be ignored in this case, replaced with width: 100% and height: auto.
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImage}</FixedGridColumn>
  </FixedGridRow>
</div>
```

Handling load state:

```js { "props": { "data-example": "load state" } }
const { ImageFit, ImageLoadState } = require('.');

const badImage = '404.png';
const yammerLogoOrange = 'yammer-logo-orange.jpg';
const yammerLogoDescription = 'Yammer "y" logo';

class StateChangeDemo extends React.PureComponent {
  constructor() {
    super();
    this.state = { source: badImage };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  render() {
    return (
      <Image
        source={this.state.source}
        description={yammerLogoDescription}
        height={150}
        width={250}
        imageFit={ImageFit.cover}
        onLoadingStateChange={this.handleStateChange}
      />
    );
  }

  handleStateChange(loadState) {
    if (loadState === ImageLoadState.error) {
      this.setState({ source: yammerLogoOrange });
    }
  }
}

<div>
  <p>
    When an image's loading state changes, it will trigger the <em>onLoadingStateChange</em> callback. This example updates the source URL passed to the image when its <em>onLoadingStateChange</em> is called with an error.
  </p>
  <StateChangeDemo />
</div>
```