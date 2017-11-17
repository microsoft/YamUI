### Notes for use

`ProgressIndicator` spans the full width of its parent container. If you need to make it appear
a certain width, you have to set the width property of its parent container to the desired
width.

If you need your ariaValueText translated, you'll have to do translation in the parent component and
pass a translated string as `ProgressIndicator` will not be able to do it for you.

### Examples

Basic:

```js { "props": { "data-example": "basic" } }
<ProgressIndicator percentComplete={0.3} ariaValueText="Thirty percent" />
```