# Dropdown

A Dropdown is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| options *| [IDropdownOption] | Items to be presented to the user. |
| label | string | Text that will be rendered above the dropdown.
| selectedKey | string | Use to specify an initially selected option. |
| onChanged | function | Function to call when user changes the selected item. Returns the new selected key. |
| placeHolder | string | Input placeholder text. Displayed until option is selected. |

* indicates property is required

---

## Notes for use
Dropdown can be used as either a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) or [uncontrolled](https://facebook.github.io/react/docs/uncontrolled-components.html) component.

---

## Examples

### Default component

```
<Dropdown
  options={[
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
  ]}
/>
```
---

## Example implementation

```
import Dropdown, { DropdownOptionKey } from 'yamui/dist/components/Dropdown';

interface ControlledDropdownState {
  selectedKey?: DropdownOptionKey;
}

class ControlledDropdown extends React.Component<{}, ControlledDropdownState> {
  constructor() {
    super();
    this.state = {};
  }

  public render() {
    const { selectedKey } = this.state;

    return (<Dropdown
      options={[
        { key: 'A', text: 'Option a' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c' },
      ]}
      placeHolder="Please Select"
      selectedKey={ selectedKey }
      onChanged={ key => this.setState({ selectedKey: key }) }
    />);
  }
}

<ControlledDropdown />
```