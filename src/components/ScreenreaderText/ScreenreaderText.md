### Notes for use

Generally just nest text within a `ScreenreaderText` component.

### Examples

Basic:

```js { "props": { "data-description": "basic" } }
<div>
  There is a <Strong>ScreenreaderText</Strong> component with text after this visible text which is hidden in the browser but still available to screenreaders. <ScreenreaderText>You can't see this but screenreaders can.</ScreenreaderText>
</div>
```
