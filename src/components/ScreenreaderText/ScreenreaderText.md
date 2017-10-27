This component simply hides its content from sight without hiding it from screenreaders. Use this component whenever a screenreader should be able to read aloud additional context for your UI features.

### Notes for use

Generally just nest text within a `ScreenreaderText` component. It's also possible to nest React nodes, for instance if a screenreader should recognize some text as the page title you could nest an `h1` tag.

### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
<div>
  There is a <strong>ScreenreaderText</strong> component with text after this visible text which is hidden in the browser but still available to screenreaders. <ScreenreaderText>You can't see this but screenreaders can.</ScreenreaderText>
</div>
```
