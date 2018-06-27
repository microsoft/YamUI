### Examples

Small size with links to documents:

```js { "props": { "data-description": "small", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-sidebarList > li:nth-child(2) .y-sidebarList--item\"}]" } }
const Docx32 = require('../Illustration/illustrations/Docx32').default;
const One32 = require('../Illustration/illustrations/One32').default;
const Xlsx32 = require('../Illustration/illustrations/Xlsx32').default;
const Pptx32 = require('../Illustration/illustrations/Pptx32').default;

const items = [
  {
    key: '1',
    title: 'Financial outlook',
    illustration: Docx32,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '2',
    title: 'Goals for Q3',
    illustration: One32,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '3',
    title: 'Previous year financial records',
    illustration: Xlsx32,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '4',
    title: 'AllHands financial slides',
    illustration: Pptx32,
    href: "https://www.yammer.com",
    newWindow: true,
  },
];

<SidebarList items={items} size="small" />
```

Medium size with links to related groups:

```js { "props": { "data-description": "medium", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-sidebarList > li:nth-child(2) .y-sidebarList--item\"}]" } }
const { BorderType, ImageFit } = require('../Image');

const items = [
  {
    key: '1',
    title: 'Model Rocket Enthusiasts',
    imageContent: <Image source="group.png" description="Model Rocket Enthusiasts group logo" width={24} height={24} borderType={BorderType.SOFT} imageFit={ImageFit.cover} block={true} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '2',
    title: 'Super Fun Happy Times Group',
    imageContent: <Image source="user.png" description="Super Fun Happy Times Group group logo" width={24} height={24} borderType={BorderType.SOFT} imageFit={ImageFit.cover} block={true} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '3',
    title: 'Product Management',
    imageContent: <Image source="logo.png" description="Product Management group logo" width={24} height={24} borderType={BorderType.SOFT} imageFit={ImageFit.cover} block={true} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '4',
    title: 'Engineering',
    imageContent: <Image source="logoFallback.png" description="Engineering group logo" width={24} height={24} borderType={BorderType.SOFT} imageFit={ImageFit.cover} block={true} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
];

<SidebarList items={items} size="medium" />
```

Large size with links to related groups:

```js { "props": { "data-description": "large", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-sidebarList > li:nth-child(2) .y-sidebarList--item\"}]" } }
const { AvatarSize } = require('../Avatar');

const items = [
  {
    key: '1',
    title: user.name,
    description: user.jobTitle,
    imageContent: <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '2',
    title: user.name,
    description: user.jobTitle,
    imageContent: <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '3',
    title: user.name,
    description: user.jobTitle,
    imageContent: <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '4',
    title: user.name,
    description: user.jobTitle,
    imageContent: <Avatar size={AvatarSize.SMALL} name={user.name} imageUrl={user.imageUrl} />,
    href: "https://www.yammer.com",
    newWindow: true,
  },
];

<SidebarList items={items} size="large" />
```

Items can provide <strong>href</strong> to render as a link, or <strong>onClick</strong> to render as a button:

```js { "props": { "data-description": "interaction options" } }
const Docx32 = require('../Illustration/illustrations/Docx32').default;
const One32 = require('../Illustration/illustrations/One32').default;
const Xlsx32 = require('../Illustration/illustrations/Xlsx32').default;

const items = [
  {
    key: '1',
    title: 'This is a link',
    illustration: Docx32,
    href: "https://www.yammer.com",
  },
  {
    key: '2',
    title: 'This is a link which opens in a new window',
    illustration: One32,
    href: "https://www.yammer.com",
    newWindow: true,
  },
  {
    key: '3',
    title: 'This is a button',
    illustration: Xlsx32,
    onClick: action('clicked!'),
  },
];

<SidebarList items={items} size="small" />
```