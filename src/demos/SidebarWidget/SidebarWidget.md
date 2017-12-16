```js
const { AvatarSize, AvatarBorderType } = require('../../components/Avatar');
const { MediaObjectSize } = require('../../components/MediaObject');

const actionComponent = <Clickable onClick={action('Added!')}>Add</Clickable>;
const groupNames = [
  'User Feedback',
  'Marketing Campaigns',
  'Engineering team',
  'Interesting Articles and Videos',
  'Cycling Enthusiasts',
  'Birdwatchers anonymous',
];
const groupItems = groupNames.map((name) => {
  const avatar = (
    <Avatar
      size={AvatarSize.XSMALL}
      name={name}
      imageUrl="group.png"
      borderType={AvatarBorderType.SOFT}
    />
  );
  return (
    <div style={{ padding: '.4rem 0' }} key={name}>
      <MediaObject
        size={MediaObjectSize.XSMALL}
        imageContent={avatar}
        titleContent={name}
      />
    </div>
  );
});

<AsideSection title="Related Groups" action={actionComponent}>
  {groupItems}
</AsideSection>
```
