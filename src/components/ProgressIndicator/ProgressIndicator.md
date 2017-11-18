### Notes for use

`ProgressIndicator` spans the full width of its parent container. If you need to make it appear
a certain width, you have to set the width property of its parent container to the desired
width.

### Examples

zero percent:

```js { "props": { "data-example": "zero percent" } }
<ProgressIndicator percentComplete={0} ariaValueText="Zero percent" />
```

thirty percent:

```js { "props": { "data-example": "thirty percent" } }
<ProgressIndicator percentComplete={0.3} ariaValueText="Thirty percent" />
```

one hundred percent:

```js { "props": { "data-example": "one hundred percent" } }
<ProgressIndicator percentComplete={1} ariaValueText="One hundred percent" />
```