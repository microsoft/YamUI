

### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

With href:

```js { "props": { "data-description": "with href" } }
const Down = require('../Icon/icons/Down').default;

<ActionLink text="Download" icon={Down} ariaLabel="Download the file" href="https://yammer.com" newWindow={true}/>
```

With onClick:

```js { "props": { "data-description": "with onClick" } }
const Down = require('../Icon/icons/Down').default;

<ActionLink text="Download" icon={Down} ariaLabel="Download the file" onClick={action('action clicked')}/>
```

With long text:

```js { "props": { "data-description": "with long text" } }
const Down = require('../Icon/icons/Down').default;
const text = 'The quick brown fox jumps over the lazy dog.';

<ActionLink text={text} icon={Down} ariaLabel="Download the file" onClick={action('action clicked')}/>
```

With ellipsed text:

```js { "props": { "data-description": "with ellipsed text" } }
const Down = require('../Icon/icons/Down').default;
const text = 'The quick brown fox jumps over the lazy dog.';

<div style={{maxWidth: "200px"}}>
  <ActionLink text={text} icon={Down} ariaLabel="Download the file" onClick={action('action clicked')} ellipsis={true}/>
</div>
```