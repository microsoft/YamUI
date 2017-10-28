### Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

You must provide either an `imageUrl` property or an `initials` property.

### Examples

Avatar without image:

```js { "props": { "data-description": "without image" } }
const { AvatarSize } = require('.');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Avatar size={AvatarSize.XLARGE} name="Walter White" initials="WW" />
      </td>
      <td>
        <Avatar size={AvatarSize.LARGE} name="Walter White" initials="WW" />
      </td>
      <td>
        <Avatar size={AvatarSize.MEDIUM} name="Walter White" initials="WW" />
      </td>
      <td>
        <Avatar size={AvatarSize.SMALL} name="Walter White" initials="WW" />
      </td>
      <td>
        <Avatar size={AvatarSize.XSMALL} name="Walter White" initials="WW" />
      </td>
    </tr>
  </tbody>
</table>
```

Avatar with image:

```js { "props": { "data-description": "with image" } }
const { AvatarSize } = require('.');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Avatar size={AvatarSize.XLARGE} name="Walter White" imageUrl="smiley.png" />
      </td>
      <td>
        <Avatar size={AvatarSize.LARGE} name="Walter White" imageUrl="smiley.png" />
      </td>
      <td>
        <Avatar size={AvatarSize.MEDIUM} name="Walter White" imageUrl="smiley.png" />
      </td>
      <td>
        <Avatar size={AvatarSize.SMALL} name="Walter White" imageUrl="smiley.png" />
      </td>
      <td>
        <Avatar size={AvatarSize.XSMALL} name="Walter White" imageUrl="smiley.png" />
      </td>
    </tr>
  </tbody>
</table>
```

Avatar with image and badge:

```js { "props": { "data-description": "with image and badge" } }
const { AvatarSize } = require('.');

const badgeContent = (
  <Image source="badge.png" description="" fullWidth={true} />
);

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Avatar
          size={AvatarSize.XLARGE}
          name="Walter White"
          imageUrl="smiley.png"
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.LARGE}
          name="Walter White"
          imageUrl="smiley.png"
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.MEDIUM}
          name="Walter White"
          imageUrl="smiley.png"
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.SMALL}
          name="Walter White"
          imageUrl="smiley.png"
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.XSMALL}
          name="Walter White"
          imageUrl="smiley.png"
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
    </tr>
  </tbody>
</table>
```

Avatar with image and soft border:

```js { "props": { "data-description": "with image and soft border" } }
const { AvatarBorderType, AvatarSize } = require('.');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>
          <Avatar
            size={AvatarSize.XLARGE}
            name="Walter White"
            imageUrl="yammer-logo.png"
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.LARGE}
            name="Walter White"
            imageUrl="yammer-logo.png"
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.MEDIUM}
            name="Walter White"
            imageUrl="yammer-logo.png"
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.SMALL}
            name="Walter White"
            imageUrl="yammer-logo.png"
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.XSMALL}
            name="Walter White"
            imageUrl="yammer-logo.png"
            borderType={AvatarBorderType.SOFT}
          />
        </td>
      </tr>
    </tbody>
</table>
```

Example colors:

```js { "props": { "data-description": "colors" } }
const { GutterSize } = require('../Block');
const { AvatarSize } = require('.');

<div>
  <Block bottomSpacing={GutterSize.SMALL}>
    A background color will be automatically set when an <em>imageUrl</em> is not provided. Fabric handles this behind the scenes for us, based on the <em>name</em> prop passed in.
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="DDD DDD" initials="LG" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="GGG GGG" initials="LB" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="SSS SSS" initials="LP" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="BBB BBB" initials="GR" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="AAA AAA" initials="DG" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="OOO OOO" initials="PI" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="LLL LLL" initials="MA" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="CCC CCC" initials="PU" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="ZZZ ZZZ" initials="BL" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="NNN NNN" initials="TE" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="MMM MMM" initials="BL" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="ooo ooo" initials="DB" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="EEE EEE" initials="OR" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="FFF FFF" initials="DR" />
  </Block>
  <Block bottomSpacing={GutterSize.SMALL}>
    <Avatar size={AvatarSize.MEDIUM} name="HHH HHH" initials="RE" />
  </Block>
</div>
```