### Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

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
        <Avatar size={AvatarSize.XLARGE} name={user.name} />
      </td>
      <td>
        <Avatar size={AvatarSize.LARGE} name={user.name} />
      </td>
      <td>
        <Avatar size={AvatarSize.MEDIUM} name={user.name} />
      </td>
      <td>
        <Avatar size={AvatarSize.SMALL} name={user.name} />
      </td>
      <td>
        <Avatar size={AvatarSize.XSMALL} name={user.name} />
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
      <Avatar size={AvatarSize.MEDIUM} name="Richie Black" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Sara Michaels" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Charles Blue" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Billy Jean" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="James Woods" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="John Babcock" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Perry McDouglas" />
    </FixedGridColumn>
  </FixedGridRow>
  <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Monte Luther" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Zoe Reynolds" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Jose Monahan" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Sean Johnson" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Toby Edward" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Willie Nelson" />
    </FixedGridColumn>
    <FixedGridColumn>
      <Avatar size={AvatarSize.MEDIUM} name="Joe Johnson" />
    </FixedGridColumn>
  </FixedGridRow>
</div>
```