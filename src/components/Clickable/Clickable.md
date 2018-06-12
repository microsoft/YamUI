### Notes for use

Clickable should be used in place of NavigationLink when you need click interaction without navigation. By default a Clickable is styled like a link, but you can also set it to `unstyled`.


### Examples

Inline:

```js { "props": { "data-description": "inline", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
<div>
  The following Clickable example looks like a link but is actually rendered as a button: <Clickable onClick={action('clickable clicked')}>Click me</Clickable>
</div>
```

Unstyled:

```js { "props": { "data-description": "unstyled", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
<div>
  The following Clickable example has <strong>unstyled: true</strong>: <Clickable onClick={action('clickable clicked')} unstyled={true}>Click me</Clickable>
</div>
```

Unstyled block with FakeLink:

```js { "props": { "data-description": "unstyled block with fakelink", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
<div>
  <Clickable onClick={action('clickable clicked')} unstyled={true} block={true}>
    This entire area is a Clickable with <strong>unstyled: true</strong> and <strong>block: true</strong>. Here is a nested <FakeLink>FakeLink component</FakeLink>, which looks like a link and shows link hoverstate when any part of the Clickable is hovered. This can work with <FakeLink>multiple nested FakeLinks</FakeLink>.
  </Clickable>
</div>
```

Wrapping block content:

```js { "props": { "data-description": "wrapping block", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }

<Clickable onClick={action('clickable clicked')} block={true}>
  <div>
    This <strong>Clickable</strong> component wraps an entire block of text. By default all text content within a <strong>Clickable</strong> tag will be styled like a link.
  </div>
</Clickable>
```

Wrapping image:

```js { "props": { "data-description": "wrapping image", "data-action-states": "[{\"action\":\"none\"},{\"action\":\"hover\",\"selector\":\".y-clickable\"}]" } }
const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';

<div>
  <Clickable onClick={action('clickable clicked')} unstyled={true} block={true}>
    <Image source={yammerLogo} description={yammerLogoDescription} width={320} height={240} block={true}/>
  </Clickable>
</div>
```
