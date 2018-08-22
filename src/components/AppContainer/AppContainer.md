### Notes for use

You should wrap your entire app in an `AppContainer` component. It renders a `Fabric` component and some YamUI baseline styles, together this manages our user-scalable font sizing scheme, language-specific font stack, and some special styling for accessible keyboard tabbing.

### Examples

Basic
```js { "props": { "data-description": "basic" } }
<AppContainer>
  Wrap the root of your application in AppContainer.
</AppContainer>
```
