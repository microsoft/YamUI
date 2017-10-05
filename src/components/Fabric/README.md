# Fabric

The `<Fabric />` component is provided directly by the Fabric library and manages typography and other styles for the entire nested app. It manages styles dynamically, changing some classes as elements receive and lose focus. Eventually, as Fabric continues to adopt Glamor, it will set language-specific fonts. All visible markup should be wrapped in a single `Fabric` component.

## Properties

(none)

## Notes for use

You should wrap your entire app in a `<Fabric>` component. The Fabric library relies on this component to manage some overall styling, a language-specific font stack, and some special styling for accessible keyboard tabbing. By wrapping your entire app you can ensure that all content conforms to the same baseline styles.

NOTE: Some codebases are not purely React and cannot be wrapped in a React component like that. We will need to contribute directly back to the Fabric library to extract the `<Fabric>` component's functionality into a utility module so it can also be used to manage CSS classes on a static wrapper DOM node.

Also note that any legacy (non-React) overlays in your app which render at the end of the body outside of your wrapping `<Fabric>` component, like a jQuery ToolTip or Lightbox, should wrap their own content in a `<Fabric>` component to ensure proper styling and typography. This is not necessary for any YamUI/Fabric popup-type components because they automatically nest their content in another`<Fabric>` component.

## Examples

### Basic usage

```html
<!doctype html>
<html dir="ltr">
  <body>
    <Fabric>
      Entire application
    </Fabric>

    <!-- Legacy lightbox etc. rendering at the end of the body outside our Fabric component would
         also need its own Fabric wrapper. -->
    <div id="lightbox">
      <Fabric>
        Lightbox content
      </Fabric>
    </div>
  </body>
</html>
```
