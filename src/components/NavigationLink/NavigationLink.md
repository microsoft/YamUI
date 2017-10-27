This renders an `<a>` tag for navigation between web pages.

### Notes for use

`NavigationLink` purposefully does not offer an `onClick` event as it should only be used for navigation. Please use a `Clickable` component for event handlers.

### Examples

Basic navigation link:

```js { "props": { "data-description": "basic" } }
<div>
  Here is a <NavigationLink href="/404.html"><em>NavigationLink</em> component</NavigationLink> with just an <em>href</em>, its only required property.
</div>
```

Navigation link that opens a new window:

```js { "props": { "data-description": "new window" } }
<div>
  Here is a <NavigationLink href="/404.html" newWindow={true}><em>NavigationLink</em> component</NavigationLink> that opens its link securely in a new window.
</div>
```

Unstyled navigation link:

```js { "props": { "data-description": "unstyled" } }
<div>
  Here is a <NavigationLink href="/404.html" unstyled={true}><em>NavigationLink</em> component</NavigationLink> that removes the link styling and sets color to the primary text color.
</div>
```

Navigation link wrapping content:

```js { "props": { "data-description": "wrapping" } }
<NavigationLink href="/404.html">
  <div>
    This <em>NavigationLink</em> component wraps an entire block of text. By default all text content within a <em>NavigationLink</em> tag will be styled like a link.
  </div>
</NavigationLink>
```

Unstyled navigation link wrapping content:

```js { "props": { "data-description": "unstyled wrapping" } }
const { TextColor } = require('../Text');

<div>
  <NavigationLink href="/404.html" unstyled={true}>
    <div>
      This is an unstyled <em>NavigationLink</em> component wrapping an entire block of text.
    </div>
  </NavigationLink>
  <br />
  <NavigationLink href="/404.html" unstyled={true}>
    <div>
      <Text color={TextColor.METADATA}>
        This is another unstyled <em>NavigationLink</em> component wrapping a block of text with a different color.
      </Text>
    </div>
  </NavigationLink>
</div>
```
