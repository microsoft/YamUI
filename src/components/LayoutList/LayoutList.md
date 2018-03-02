### Notes for use
Note that spacing between list items uses standard `GutterSize` values. Horizontal list items default to `4px` gutters, while vertical list items default to no gutters.

If you're looking for typography-based ordered and unordered lists, please see the `List` component.

### Examples

Horizontal list of buttons:

```js { "props": { "data-description": "horizontal left" } }
const { ButtonColor } = require('../Button');

<LayoutList direction="horizontal">
  <LayoutListItem>
    <Button text="1" />
  </LayoutListItem>
  <LayoutListItem>
    <Button text="2" />
  </LayoutListItem>
  <LayoutListItem>
    <Button text="3" color={ButtonColor.PRIMARY} />
  </LayoutListItem>
</LayoutList>
```

Horizontal list of buttons aligned to the right:

```js { "props": { "data-description": "horizontal right" } }
const { ButtonColor } = require('../Button');

<LayoutList direction="horizontal" align="right">
  <LayoutListItem>
    <Button text="1" />
  </LayoutListItem>
  <LayoutListItem>
    <Button text="2" />
  </LayoutListItem>
  <LayoutListItem>
    <Button text="3" color={ButtonColor.PRIMARY} />
  </LayoutListItem>
</LayoutList>
```

Horizontal list with different gutter sizes:

```js { "props": { "data-description": "horizontal guttersizes" } }
const { ButtonColor } = require('../Button');
const { GutterSize } = require('.');

const items = [1, 2, 3].map((num) =>
  <LayoutListItem key={num}><Button text={num} /></LayoutListItem>
);

<div>
  <LayoutList direction="vertical" gutterSize={GutterSize.LARGE}>
    <LayoutListItem>
      <Heading level="4">None</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.NONE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XSmall (default)</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.XSMALL}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Small</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.SMALL}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Medium</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.MEDIUM}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Large</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.LARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XLarge</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.XLARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XXLarge</Heading>
      <LayoutList direction="horizontal" gutterSize={GutterSize.XXLARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
  </LayoutList>
</div>
```

Vertical list of users:

```js { "props": { "data-description": "vertical" } }
const { AvatarSize } = require('../Avatar');
const { ButtonSize } = require('../Button');
const Add = require('../Icon/icons/Add').default;
const { MediaObjectSize } = require('../MediaObject');
const { GutterSize } = require('../Block');

const getAvatar = (name) => (
  <Avatar imageUrl={user.imageUrl} name={name} size={AvatarSize.SMALL} />
);

const getListItem = (name, jobTitle) => (
  <MediaObject
    size={MediaObjectSize.SMALL}
    imageContent={getAvatar(name)}
    titleContent={name}
    metadataContent={jobTitle}
  >
    <Block push={4}>
      <Button text="Follow" size={ButtonSize.SMALL} icon={Add} />
    </Block>
  </MediaObject>
);

const people = [
  { name: 'Christie Cline', jobTitle: 'Product Marketing Manager' },
  { name: 'Viktor Lundin', jobTitle: 'Senior Product Marketing Manager' },
  { name: 'Adele Vance', jobTitle: 'Software Engineer' },
];

<LayoutList direction="vertical">
  {people.map((person) => {
    return (
      <LayoutListItem key={person.name}>
        <div style={{ padding: '.4rem 0' }}>
          {getListItem(person.name, person.jobTitle)}
        </div>
      </LayoutListItem>
    )
  })}
</LayoutList>
```

Vertical list with different gutter sizes:

```js { "props": { "data-description": "vertical guttersizes" } }
const { ButtonColor } = require('../Button');
const { GutterSize } = require('.');

const items = [1, 2, 3].map((num) =>
  <LayoutListItem key={num}><Button text={num} /></LayoutListItem>
);

<div>
  <LayoutList direction="vertical" gutterSize={GutterSize.LARGE}>
    <LayoutListItem>
      <Heading level="4">None (default)</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.NONE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XSmall</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.XSMALL}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Small</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.SMALL}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Medium</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.MEDIUM}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">Large</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.LARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XLarge</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.XLARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
    <LayoutListItem>
      <Heading level="4">XXLarge</Heading>
      <LayoutList direction="vertical" gutterSize={GutterSize.XXLARGE}>
        {items}
      </LayoutList>
    </LayoutListItem>
  </LayoutList>
</div>
```
