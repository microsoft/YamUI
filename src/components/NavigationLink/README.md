# NavigationLink

This renders an `<a>` tag for navigation between web pages.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| href * | string | The URL |
| newWindow | boolean | If true, will open the URL in a new window and securely break any reference back to this window. |
| unstyled | boolean | If true, will render the content as if it were not nested in an `<a>` tag. |

---


## Content guidelines

NavigationLink purposefully does not offer an onClick event as it should only be used for navigation. Please use a Clickable component for event handlers.

---

## Examples

### Basic example

```
<NavigationLink href="my_page.html">This NavigationLink is tabbable and navigates to the given href when clicked</NavigationLink>.
```
