### Notes for use
Note that spacing between horizontal list items is standardized at `4px` and is not adjustable. There is no spacing between vertical list items.

If you're looking for typography-based ordered and unordered lists, please see the List component.

### Examples

Horizontal list of buttons:

```js { "props": { "data-example": "horizontal-left" } }
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

```js { "props": { "data-example": "horizontal-right" } }
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

Vertical list of users:

```js { "props": { "data-example": "vertical" } }
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
