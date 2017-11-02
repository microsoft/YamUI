### Notes for use

`NavigationLink` purposefully does not offer an `onClick` event as it should only be used for navigation. Please use a `Clickable` component for event handlers which do not change the current URL.

### Examples

Basic:

```js { "props": { "data-example": "basic" } }
<div>
  Here is a <NavigationLink href="/404.html"><strong>NavigationLink</strong> component</NavigationLink> with just an <strong>href</strong>, its only required property.
</div>
```

Opens a new window:

```js { "props": { "data-example": "new window" } }
<div>
  Here is a <NavigationLink href="/404.html" newWindow={true}><strong>NavigationLink</strong> component</NavigationLink> which opens its link securely in a new window.
</div>
```

Unstyled link:

```js { "props": { "data-example": "unstyled" } }
<div>
  Here is a <NavigationLink href="/404.html" unstyled={true}><strong>NavigationLink</strong> component</NavigationLink> which removes the link styling and inherits its parent's color.
</div>
```

Link wrapping content:

```js { "props": { "data-example": "wrapping" } }
<NavigationLink href="/404.html">
  <div>
    This <strong>NavigationLink</strong> component wraps an entire block of text. By default all text content within a <strong>NavigationLink</strong> tag will be styled like a link.
  </div>
</NavigationLink>
```

Unstyled link wrapping content:

```js { "props": { "data-example": "unstyled wrapping" } }
const { TextColor } = require('../Text');

<div>
  <NavigationLink href="/404.html" unstyled>
    <div>
      This is an unstyled <strong>NavigationLink</strong> component wrapping an entire block of text.
    </div>
  </NavigationLink>
  <br />
  <NavigationLink href="/404.html" unstyled>
    <div>
      <Text color={TextColor.METADATA}>
        This is another unstyled <strong>NavigationLink</strong> component wrapping a block of text with a different color.
      </Text>
    </div>
  </NavigationLink>
</div>
```
