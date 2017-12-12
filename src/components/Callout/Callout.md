### Notes for use

Callout is simply exported from Fabric, with some minor YamUI styling. It is meant to be used as a utility component by other YamUI components like Hovercard and Tooltip, you probably don't need to use it directly in your application UIs.
https://developer.microsoft.com/en-us/fabric#/components/callout

### Examples

Basic usage:

```js
const visible = true;

<div>
  <span className="myTarget">Target</span>
  {visible && (
    <Callout target=".myTarget">
      This message is displayed in the Callout popover!
    </Callout>
  )}
</div>
```
