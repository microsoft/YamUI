### Examples

Basic example:

```js { "props": { "data-description": "basic" } }
const Download = require('../Icon/icons/Download').default;
const Upload = require('../Icon/icons/Upload').default;
const Group = require('../Icon/icons/Group').default;
const SharePoint = require('../Icon/icons/SharePointLogoInverse').default;

const items = [
  <ActionLink text="Download" icon={Download} ariaLabel="Download this file" onClick={action('ActionLink clicked')} />,
  <ActionLink text="Upload a new version" icon={Upload} onClick={action('ActionLink clicked')} />,
  <ActionLink text="Group Info" icon={Group} ariaLabel="Go to group info page" href="https://www.yammer.com" newWindow={true} />,
  <ActionLink text="SharePoint Document Library website" icon={SharePoint} href="https://www.yammer.com" newWindow={true} />,
];

<div style={{ maxWidth: '200px' }}>
  <ActionLinkList items={items} />
</div>
```
