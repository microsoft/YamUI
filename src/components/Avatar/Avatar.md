### Notes for use

`Avatar` takes care of setting the alt text for you when you pass the one required attribute, `name`.

### Examples

Without image:

```js { "props": { "data-description": "without image" } }
const { AvatarSize } = require('.');

<LayoutList direction="horizontal">
  <LayoutListItem>
    <Avatar size={AvatarSize.XLARGE} name="Xtra Large" />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.LARGE} name="Large" />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.MEDIUM} name="Medium" />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.SMALL} name="Small" />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.XSMALL} name="Xtra Small" />
  </LayoutListItem>
</LayoutList>
```

With image:

```js { "props": { "data-description": "with image" } }
const { AvatarSize } = require('.');

<LayoutList direction="horizontal">
  <LayoutListItem>
    <Avatar size={AvatarSize.XLARGE} name={user.name} imageUrl={user.imageUrl} />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.LARGE} name={user.name} imageUrl={user.imageUrl} />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.MEDIUM} name={user.name} imageUrl={user.imageUrl} />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar size={AvatarSize.XSMALL} name={user.name} imageUrl={user.imageUrl} />
  </LayoutListItem>
</LayoutList>
```

With image and badge:

```js { "props": { "data-description": "with image and badge" } }
const { AvatarSize } = require('.');
const AdminBadge = require('../Icon/icons/BadgeAdmin').default;

const badgeContent = (
  <AdminBadge block={true} />
);

<LayoutList direction="horizontal">
  <LayoutListItem>
    <Avatar
      size={AvatarSize.XLARGE}
      name={user.name}
      imageUrl={user.imageUrl}
      badgeContent={badgeContent}
      badgeDescription="Admin"
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.LARGE}
      name={user.name}
      imageUrl={user.imageUrl}
      badgeContent={badgeContent}
      badgeDescription="Admin"
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.MEDIUM}
      name={user.name}
      imageUrl={user.imageUrl}
      badgeContent={badgeContent}
      badgeDescription="Admin"
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.SMALL}
      name={user.name}
      imageUrl={user.imageUrl}
      badgeContent={badgeContent}
      badgeDescription="Admin"
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.XSMALL}
      name={user.name}
      imageUrl={user.imageUrl}
      badgeContent={badgeContent}
      badgeDescription="Admin"
    />
  </LayoutListItem>
</LayoutList>
```

With image and soft border:

```js { "props": { "data-description": "with image and soft border" } }
const { BorderType, AvatarSize } = require('.');

<LayoutList direction="horizontal">
  <LayoutListItem>
    <Avatar
      size={AvatarSize.XLARGE}
      name={group.name}
      imageUrl={group.imageUrl}
      borderType={BorderType.SOFT}
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.LARGE}
      name={group.name}
      imageUrl={group.imageUrl}
      borderType={BorderType.SOFT}
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.MEDIUM}
      name={group.name}
      imageUrl={group.imageUrl}
      borderType={BorderType.SOFT}
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.SMALL}
      name={group.name}
      imageUrl={group.imageUrl}
      borderType={BorderType.SOFT}
    />
  </LayoutListItem>
  <LayoutListItem>
    <Avatar
      size={AvatarSize.XSMALL}
      name={group.name}
      imageUrl={group.imageUrl}
      borderType={BorderType.SOFT}
    />
  </LayoutListItem>
</LayoutList>
```

Example colors:

```js { "props": { "data-description": "colors" } }
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