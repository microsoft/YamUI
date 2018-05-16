

### Notes for use

Note that `ellipsis={true}` should only be used for things like file names or other user-supplied text. UI text should never truncate, and should only wrap.

### Examples


With onClick (button implementation):

```js { "props": { "data-description": "with onClick" } }
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

With ellipsed text and onClick:

```js { "props": { "data-description": "with onClick and ellipsed text" } }
const Icon = require('../Illustration/illustrations/Docx16').default;
const text = 'Word file with really long name.doc';

<div style={{ maxWidth: '200px' }}>
  <ActionLink text={text} icon={Icon} ariaLabel={text} onClick={action('ActionLink clicked')} ellipsis={true} />
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

With ellipsed text and href:

```js { "props": { "data-description": "with href and ellipsed text" } }
const Icon = require('../Illustration/illustrations/Docx16').default;
const text = 'Word file with really long name.doc';

<div style={{ maxWidth: '200px' }}>
  <ActionLink text={text} icon={Icon} ariaLabel={text} href="https://www.yammer.com" newWindow={true} ellipsis={true} />
</div>
```
