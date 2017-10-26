An `Avatar` shows a thumbnail representation of both an individual or group.

### Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

You must provide either an `imageUrl` property or an `initials` property.

### Examples

Avatar without image:

```js { "props": { "data-description": "without image" } }
const { AvatarSize } = require('.');

<table>
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
const { AvatarBorderType, AvatarSize } = require('.');

<table>
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
const { AvatarBorderType, AvatarSize } = require('.');
const badgeContent = <Image source="badge.png" description="" fullWidth={true} />;

<table>
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
