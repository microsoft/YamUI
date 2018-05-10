### Notes for use

You should always render a block-level element within `ContainerQuery`, this is necessary to push its width out so it can recalculate its queries on resize.


### Examples

Responsive styles/class names:

```js { "props": { "data-description": "basic" } }
const query = {
  small: { maxWidth: 500 },
  medium: { minWidth: 501, maxWidth: 700 },
  large: {minWidth: 701 },
};
const renderAt = size => {
  if (!size) {
    return <div />;
  }

  const colors = {
    small: '#A5DA51',
    medium: '#738ADD',
    large: '#DA5552',
  };

  return (
    <div className={`size-${size}`} style={{ padding: '2rem', background: colors[size], transition: 'background-color 1s', fontWeight: 'bold', color: '#fff' }}>
      This div has a different color at breakpoints below 500px (small), between 500px and 700px (medium), and above 700px (large). Currently rendering at size "{size}".
    </div>
  );
};

<div>
  <ContainerQuery query={query} renderAt={renderAt} />
</div>
```

Responsively rendering different components. This will render differently below 500px wide, between 500px and 700px wide, and wider than 700px.

```js { "props": { "data-description": "with responsive component tree" } }
const { AvatarSize } = require('../Avatar');
const { GutterSize, TextSize } = require('../Block');
const { MediaObjectSize } = require('../MediaObject');
const Like = require('../../components/Icon/icons/Like').default;
const Reply = require('../../components/Icon/icons/Reply').default;
const Share = require('../../components/Icon/icons/Share').default;
const MoreVertical = require('../../components/Icon/icons/MoreVertical').default;

const query = {
  small: { maxWidth: 500 },
  medium: { minWidth: 501, maxWidth: 700 },
  large: { minWidth: 701 },
};

const renderAt = size => {
  let avatarSize = AvatarSize.XSMALL;
  let mediaObjectSize = MediaObjectSize.XSMALL;
  let textSize = TextSize.SMALL;
  if (size === 'medium') {
    avatarSize = AvatarSize.MEDIUM;
    mediaObjectSize = MediaObjectSize.MEDIUM;
    textSize = TextSize.MEDIUM_SUB;
  } else if (size === 'large') {
    avatarSize = AvatarSize.XLARGE;
    mediaObjectSize = MediaObjectSize.XLARGE;
    textSize = TextSize.LARGE;
  }
  const avatar = <Avatar size={avatarSize} name={user.name} imageUrl={user.imageUrl} />;

  const bottomActions = size === 'small' ? null : (
    <Block textSize={TextSize.SMALL} topSpacing={GutterSize.MEDIUM}>
      <LayoutList direction="horizontal" gutterSize={GutterSize.MEDIUM}>
        <LayoutListItem>
          <Clickable><Like /> Like</Clickable>
        </LayoutListItem>
        <LayoutListItem>
          <Clickable><Reply /> Reply</Clickable>
        </LayoutListItem>
        <LayoutListItem>
          <Clickable><Share /> Share</Clickable>
        </LayoutListItem>
      </LayoutList>
    </Block>
  );

  const moreActionItems = [
    {
      key: 'like',
      text: 'Like',
      icon: Like,
      onClick: action('like'),
    },
    {
      key: 'reply',
      text: 'Reply',
      icon: Reply,
      onClick: action('reply'),
    },
    {
      key: 'share',
      text: 'Share',
      icon: Share,
      onClick: action('share'),
    },
  ];
  const moreActionsColumn = size !== 'small' ? null : (
    <FixedGridColumn fixed={true}>
      <MenuButton menuItems={moreActionItems} icon={MoreVertical} />
    </FixedGridColumn>
    
  );

  return (
    <Box>
      <FixedGridRow gutterSize={GutterSize.MEDIUM}>
        <FixedGridColumn fixed={true}>{avatar}</FixedGridColumn>
        <FixedGridColumn>
          <Block textSize={textSize}><Text bold={true}>{user.name}</Text></Block>
          <Block textSize={textSize}>hey that's a great idea! let's discuss this further at the next monthly offsite whilte the marketing team is with us.</Block>
          {bottomActions}
        </FixedGridColumn>
        {moreActionsColumn}
      </FixedGridRow>
    </Box>
  )
};

<div>
  <ContainerQuery query={query} renderAt={renderAt} />
</div>
```
