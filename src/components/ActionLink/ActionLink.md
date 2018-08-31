### Examples


With onClick (button implementation):

```js { "props": { "data-description": "with onClick", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
const Icon = require('../Icon/icons/Download').default;

<div>
  <ActionLink text="Download" icon={Icon} ariaLabel="Download this file" onClick={action('ActionLink clicked')} />
</div>
```

With long text and onClick:

```js { "props": { "data-description": "with onClick and long text" } }
const Icon = require('../Icon/icons/Upload').default;
const text = 'Upload a new version of this file';

<div style={{ maxWidth: '200px' }}>
  <ActionLink text={text} icon={Icon} ariaLabel={text} onClick={action('ActionLink clicked')} />
</div>
```

With href (link implementation):

```js { "props": { "data-description": "with href" } }
const Icon = require('../Icon/icons/Group').default;

<div>
  <ActionLink text="Group Info" icon={Icon} ariaLabel="Go to group info page" href="https://www.yammer.com" newWindow={true} />
</div>
```

With long text and href:

```js { "props": { "data-description": "with href and long text" } }
const Icon = require('../Icon/icons/SharePointLogoInverse').default;
const text = 'SharePoint Document Library website';

<div style={{ maxWidth: '200px' }}>
  <ActionLink text={text} icon={Icon} ariaLabel={text} href="https://www.yammer.com" newWindow={true} />
</div>
```

Compact:

```js { "props": { "data-description": "with compact" } }
const Like = require('../Icon/icons/Like').default;

<div>
  <ActionLink text="Like" icon={Like} ariaLabel="Like this Post" compact={true} />
</div>
```
