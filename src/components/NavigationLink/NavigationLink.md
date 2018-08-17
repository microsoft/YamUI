### Notes for use

`NavigationLink` purposefully does not offer an `onClick` event as it should only be used for navigation. Please use a `Clickable` component for event handlers which do not change the current URL.

### Examples

Basic:

```js { "props": { "data-description": "basic", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-navigationLink\"},{\"action\":\"focus\",\"selector\":\".y-navigationLink\"}]" } }
<div>
  Here is a <NavigationLink href="/404.html"><Strong>NavigationLink</Strong> component</NavigationLink> with just an <Strong>href</Strong>, its only required property.
</div>
```

Opens a new window:

```js { "props": { "data-description": "new window" } }
<div>
  Here is a <NavigationLink href="/404.html" newWindow={true}><Strong>NavigationLink</Strong> component</NavigationLink> which opens its link securely in a new window.
</div>
```

Unstyled link:

```js { "props": { "data-description": "unstyled" , "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-navigationLink\"},{\"action\":\"focus\",\"selector\":\".y-navigationLink\"}]" } }
<div>
  Here is a <NavigationLink href="/404.html" unstyled={true}><Strong>NavigationLink</Strong> component</NavigationLink> which removes the link styling and inherits its parent's color.
</div>
```

Link wrapping content:

```js { "props": { "data-description": "wrapping", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-navigationLink\"},{\"action\":\"focus\",\"selector\":\".y-navigationLink\"}]" } }
<NavigationLink href="/404.html" block={true}>
  <div>
    This <Strong>NavigationLink</Strong> component wraps an entire block of text. By default all text content within a <Strong>NavigationLink</Strong> tag will be styled like a link.
  </div>
</NavigationLink>
```

Unstyled link wrapping content:

```js { "props": { "data-description": "unstyled wrapping", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-navigationLink\"},{\"action\":\"focus\",\"selector\":\".y-navigationLink\"}]" } }
const { TextColor } = require('../Text');

<div>
  <NavigationLink href="/404.html" unstyled={true} block={true}>
    <div>
      This is an unstyled <Strong>NavigationLink</Strong> component wrapping an entire block of text.
    </div>
  </NavigationLink>
  <br />
  <NavigationLink href="/404.html" unstyled={true} block={true}>
    <div>
      <Text color={TextColor.METADATA}>
        This is another unstyled <Strong>NavigationLink</Strong> component wrapping a block of text with a different color.
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
