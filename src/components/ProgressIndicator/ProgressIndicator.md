### Notes for use

`ProgressIndicator` spans the full width of its parent container. If you need to make it appear
a certain width, you have to set the width property of its parent container into the desired
width.

If you need your ariaValueText translated, you have to pass ariaValueText a translated string as `ProgressIndicator` will not be able to do it for you.

### Examples

Basic:

```js { "props": { "data-example": "basic" } }
let percentComplete = 0;
const interval = setInterval(() => {
  percentComplete++;
  <ProgressIndicator 
    percentComplete={10} 
    ariaValueText={`${percentComplete} percent`} 
  />
  if (percentComplete === 100) {
    clearInterval(interval);
  }
}, 1000);

<ProgressIndicator percentComplete={percentComplete} ariaValueText="Zero percent" />
```