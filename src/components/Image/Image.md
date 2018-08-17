### Notes for use

Try to set a height and width whenever possible, as this will keep the browser from calculating reflows on re-render or on image load.

If an image is used as a supplemental icon, or screenreaders should not read it out loud for any other reason, provide an empty string as `description`. This is a required prop because a missing `alt` attribute means the screenreader will read the URL out loud.

### Examples

Basic:

```js { "props": { "data-description": "basic" } }
const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<Image source={yammerLogo} description={yammerLogoDescription} width={320} height={240} />
```

Fit cover:

```js { "props": { "data-description": "fit cover" } }
const { ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Paragraph>
    The <Strong>imageFit: cover</Strong> option can be used to nicely fill the desired image area while hiding any overflow.
  </Paragraph>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={240}
    width={240}
    imageFit={ImageFit.cover}
  />
</div>
```

Fit contain:

```js { "props": { "data-description": "fit contain" } }
const { ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Paragraph>
    The <Strong>imageFit: contain</Strong> option displays the entire image within our image area and leaves whitespace.
  </Paragraph>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={240}
    width={240}
    imageFit={ImageFit.contain}
  />
</div>
```

Fit center:

```js { "props": { "data-description": "fit center" } }
const { ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Paragraph>
    The <Strong>imageFit: center</Strong> option centers the image horizontally and vertically, using the image's original size and cropping its overflow.
  </Paragraph>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={240}
    width={240}
    imageFit={ImageFit.center}
  />
</div>
```

Fit not provided:

```js { "props": { "data-description": "fit not provided" } }
const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Paragraph>
    The <Strong>imageFit: none</Strong> option places the image at the top left of its <em>div</em> wrapper. It will render at its original size, possibly showing whitespace or hiding its overflow. This is generally not an option you will want to use.
  </Paragraph>
  <Image source={yammerLogo} description={yammerLogoDescription} height={240} width={240} />
</div>
```

Fit none:

```js { "props": { "data-description": "fit none" } }
const { ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Paragraph>
    The <Strong>imageFit: none</Strong> option places the image at the top left of its <em>div</em> wrapper. It will render at its original size, possibly showing whitespace or hiding its overflow. This is generally not an option you will want to use.
  </Paragraph>
  <Image
    source={yammerLogo}
    description={yammerLogoDescription}
    height={240}
    width={320}
    imageFit={ImageFit.none}
  />
</div>
```

Full width:

```js { "props": { "data-description": "full width" } }
const { GutterSize } = require('../FixedGrid');
const { ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

const fullWidthImage = (
  <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} />
);
const fullWidthImageWithHeight = (
  <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} height={75} imageFit={ImageFit.cover} />
);

<div style={{ maxWidth: '500px' }}>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      Use <Strong>fullWidth: true</Strong> when your layout should determine the image width. If <Strong>height</Strong> is not provided then the image will maintain its aspect ratio:
    </FixedGridColumn>
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

  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <br />
      If <Strong>height</Strong> is also provided then the height will remain fixed while the width stretches to fill its container. In this case you will probably want to set an <Strong>imageFit</Strong> value to prevent a skewed aspect ratio:
    </FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>{fullWidthImageWithHeight}</FixedGridColumn>
  </FixedGridRow>
</div>
```

Border types:

```js { "props": { "data-description": "border types" } }
const { GutterSize } = require('../FixedGrid');
const { BorderType, ImageFit } = require('.');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';


<div>
  <Block bottomSpacing={GutterSize.MEDIUM}>
    Images have square corners by default. They can also have a soft or fully-rounded border:
  </Block>
  <FixedGridRow gutterSize={GutterSize.LARGE}>
    <FixedGridColumn fixed={true}>
      <Image source={yammerLogo} description={yammerLogoDescription} height={100} width={100} imageFit={ImageFit.cover} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true}>
      <Image source={yammerLogo} description={yammerLogoDescription} borderType={BorderType.SOFT} height={100} width={100} imageFit={ImageFit.cover} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true}>
      <Image source={yammerLogo} description={yammerLogoDescription} borderType={BorderType.ROUND} height={100} width={100} imageFit={ImageFit.cover} />
    </FixedGridColumn>
  </FixedGridRow>
</div>
```

Handling load state:

```js { "props": { "data-description": "load state" } }
const { ImageFit, ImageLoadState } = require('.');

const badImage = 'logoNotFound.png';
const yammerLogo = 'logoFallback.png';
const yammerLogoDescription = 'Yammer "y" logo';

class StateChangeDemo extends React.Component {
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
        height={240}
        width={240}
        imageFit={ImageFit.cover}
        onLoadingStateChange={this.handleStateChange}
      />
    );
  }

  handleStateChange(loadState) {
    if (loadState === ImageLoadState.error) {
      this.setState({ source: yammerLogo });
    }
  }
}

<div>
  <Paragraph>
    When an image's loading state changes, it will trigger the <Strong>onLoadingStateChange</Strong> callback. This example updates the source URL passed to the image when its <Strong>onLoadingStateChange</Strong> is called with an error.
  </Paragraph>
  <StateChangeDemo />
</div>
```