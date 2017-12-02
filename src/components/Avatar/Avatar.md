### Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

You must provide either an `imageUrl` property or an `initials` property.

### Examples

Without image:

```js { "props": { "data-example": "without image" } }
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
        <Avatar size={AvatarSize.XLARGE} name={user.name} initials={user.initials} />
      </td>
      <td>
        <Avatar size={AvatarSize.LARGE} name={user.name} initials={user.initials} />
      </td>
      <td>
        <Avatar size={AvatarSize.MEDIUM} name={user.name} initials={user.initials} />
      </td>
      <td>
        <Avatar size={AvatarSize.SMALL} name={user.name} initials={user.initials} />
      </td>
      <td>
        <Avatar size={AvatarSize.XSMALL} name={user.name} initials={user.initials} />
      </td>
    </tr>
  </tbody>
</table>
```

With image:

```js { "props": { "data-example": "with image" } }
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
        <Avatar size={AvatarSize.XLARGE} name={user.name} imageUrl={user.imageUrl} />
      </td>
      <td>
        <Avatar size={AvatarSize.LARGE} name={user.name} imageUrl={user.imageUrl} />
      </td>
      <td>
        <Avatar size={AvatarSize.MEDIUM} name={user.name} imageUrl={user.imageUrl} />
      </td>
      <td>
        <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />
      </td>
      <td>
        <Avatar size={AvatarSize.XSMALL} name={user.name} imageUrl={user.imageUrl} />
      </td>
    </tr>
  </tbody>
</table>
```

With image and badge:

```js { "props": { "data-example": "with image and badge" } }
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
          name={user.name}
          imageUrl={user.imageUrl}
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.LARGE}
          name={user.name}
          imageUrl={user.imageUrl}
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.MEDIUM}
          name={user.name}
          imageUrl={user.imageUrl}
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.SMALL}
          name={user.name}
          imageUrl={user.imageUrl}
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
      <td>
        <Avatar
          size={AvatarSize.XSMALL}
          name={user.name}
          imageUrl={user.imageUrl}
          badgeContent={badgeContent}
          badgeDescription="Admin"
        />
      </td>
    </tr>
  </tbody>
</table>
```

With image and soft border:

```js { "props": { "data-example": "with image and soft border" } }
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
            name={group.name}
            imageUrl={group.imageUrl}
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.LARGE}
            name={group.name}
            imageUrl={group.imageUrl}
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.MEDIUM}
            name={group.name}
            imageUrl={group.imageUrl}
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.SMALL}
            name={group.name}
            imageUrl={group.imageUrl}
            borderType={AvatarBorderType.SOFT}
          />
        </td>
        <td>
          <Avatar
            size={AvatarSize.XSMALL}
            name={group.name}
            imageUrl={group.imageUrl}
            borderType={AvatarBorderType.SOFT}
          />
        </td>
      </tr>
    </tbody>
</table>
```

Example colors:

```js { "props": { "data-example": "colors" } }
const { GutterSize } = require('../Block');
const { AvatarSize } = require('.');

<div>
  <Block bottomSpacing={GutterSize.SMALL}>
    A background color will be automatically set when an <em>imageUrl</em> is not provided. Fabric handles this behind the scenes for us, based on the <em>name</em> prop passed in.
  </Block>
  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="A" initials="TE" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="B" initials="LB" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="C" initials="DB" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="D" initials="OR" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="E" initials="DR" />
    </FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="F" initials="LG" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="G" initials="LB" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="H" initials="LP" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="I" initials="GR" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="J" initials="DG" />
    </FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="K" initials="PI" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="L" initials="MA" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="M" initials="PU" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="N" initials="BL" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="O" initials="TE" />
    </FixedGridColumn>
  </FixedGridRow>
</div>
```