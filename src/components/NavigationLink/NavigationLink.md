### Notes for use

`NavigationLink` purposefully does not offer an `onClick` event as it should only be used for navigation. Please use a `Clickable` component for event handlers which do not change the current URL.

### Examples

Basic:

```js { "props": { "data-description": "basic" } }
<div>
  Here is a <NavigationLink href="/404.html"><strong>NavigationLink</strong> component</NavigationLink> with just an <strong>href</strong>, its only required property.
</div>
```

Opens a new window:

```js { "props": { "data-description": "new window" } }
<div>
  Here is a <NavigationLink href="/404.html" newWindow={true}><strong>NavigationLink</strong> component</NavigationLink> which opens its link securely in a new window.
</div>
```

Unstyled link:

```js { "props": { "data-description": "unstyled" } }
<div>
  Here is a <NavigationLink href="/404.html" unstyled={true}><strong>NavigationLink</strong> component</NavigationLink> which removes the link styling and inherits its parent's color.
</div>
```

Link wrapping content:

```js { "props": { "data-description": "wrapping" } }
<NavigationLink href="/404.html" block={true}>
  <div>
    This <strong>NavigationLink</strong> component wraps an entire block of text. By default all text content within a <strong>NavigationLink</strong> tag will be styled like a link.
  </div>
</NavigationLink>
```

Unstyled link wrapping content:

```js { "props": { "data-description": "unstyled wrapping" } }
const { TextColor } = require('../Text');

<div>
  <NavigationLink href="/404.html" unstyled={true} block={true}>
    <div>
      This is an unstyled <strong>NavigationLink</strong> component wrapping an entire block of text.
    </div>
  </NavigationLink>
  <br />
  <NavigationLink href="/404.html" unstyled={true} block={true}>
    <div>
      <Text color={TextColor.METADATA}>
        This is another unstyled <strong>NavigationLink</strong> component wrapping a block of text with a different color.
      </Text>
    </div>
  </NavigationLink>
</div>
```

Wrapping image:

```js { "props": { "data-description": "wrapping image" } }
const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <NavigationLink href="/404.html" unstyled={true} block={true}>
    <Image source={yammerLogo} description={yammerLogoDescription} width={320} height={240} block={true} />
  </NavigationLink>
</div>
```
