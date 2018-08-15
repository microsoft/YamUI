### Notes for use

`Tile` is a container with a certain aspect ratio.

### Examples

With images rendered with different aspect ratios:

```js { "props": { "data-description": "with images" } }
const { TileAspectRatio } = require('.');
const { ImageFit } = require('../Image');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

const image = <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} imageFit={ImageFit.cover} />;

<div>
  <FixedGridRow>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
  </FixedGridRow>

  <br />

  <FixedGridRow>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.SixteenNine}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.SixteenNine}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.SixteenNine}>{image}</Tile>
    </FixedGridColumn>
  </FixedGridRow>

  <br />

  <FixedGridRow>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.TwentyOneNine}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.TwentyOneNine}>{image}</Tile>
    </FixedGridColumn>
  </FixedGridRow>
</div>
```

With text:

```js { "props": { "data-description": "with text" } }
const { TileAspectRatio } = require('.');
const { ImageFit } = require('../Image');
const { TextColor } = require('../Text');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

const image = <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} imageFit={ImageFit.cover} />;

<div>
  <FixedGridRow>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile aspectRatio={TileAspectRatio.FourThree}>
        <Clickable unstyled={true} block={true} onClick={action('button clicked')}>
          <Text color={TextColor.METADATA}>+ 2 MORE</Text>
        </Clickable>
      </Tile>
    </FixedGridColumn>
  </FixedGridRow>
</div>
```

With border color:

```js { "props": { "data-description": "with border color" } }
const { TileAspectRatio } = require('.');
const { ImageFit } = require('../Image');
const { TextColor } = require('../Text');

const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

const image = <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} />;

<div>
  <FixedGridRow>
    <FixedGridColumn>
      <Tile borderColor="themeDarker" aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile borderColor="themeDarker" aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile borderColor="themeDarker" aspectRatio={TileAspectRatio.FourThree}>{image}</Tile>
    </FixedGridColumn>
    <FixedGridColumn>
      <Tile borderColor="themeDarker" aspectRatio={TileAspectRatio.FourThree}>
        <Clickable unstyled={true} block={true} onClick={action('button clicked')}>
          <Text color={TextColor.METADATA}>+ 2 MORE</Text>
        </Clickable>
      </Tile>
    </FixedGridColumn>
  </FixedGridRow>
</div>
```