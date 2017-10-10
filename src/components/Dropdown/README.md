# Dropdown

A `Dropdown` is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button.

## Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| options *| [IDropdownOption] | Items to be presented to the user. |
| label | string | Text that will be rendered above the dropdown.
| selectedKey | string | Use to specify an initially selected option. |
| onChanged | function | Function to call when user changes the selected item. Returns the new selected key. |
| placeHolder | string | Input placeholder text. Displayed until option is selected. |

\* indicates property is required

## Notes for use

`Dropdown` can be used as either a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) or [uncontrolled](https://facebook.github.io/react/docs/uncontrolled-components.html) component.

## Examples

### Basic usage

```js
<Dropdown
  options={[
    { key: 'A', text: 'Option a' },
    { key: 'B', text: 'Option b' },
  ]}
/>
```

### Dropdown inside a form

```js
import Dropdown from 'yamui/dist/components/Dropdown';

interface RandomFormState {
  fieldOne: string;
  fieldTwo: string;
}

class RandomForm extends React.PureComponent<{}, ControlledDropdownState> {
  constructor() {
    super();

    this.state = {
      fieldOne: '',
      fieldTwo: '',
    };

    this.onFieldOneChange = this.onFieldChange.bind(this, 'fieldOne');
    this.onFieldTwoChange = this.onFieldChange.bind(this, 'fieldTwo');
  }

  render() {
    const { fieldOne, fieldTwo } = this.state;

    return (
      <form>
        <Dropdown
          options={[
            { key: 'A1', text: 'Option A1' },
            { key: 'A2', text: 'Option A2' },
          ]}
          placeHolder="Field one"
          selectedKey={fieldOne}
          onChanged={this.onFieldOneChange}
        />
        <Dropdown
          options={[
            { key: 'B1', text: 'Option B1' },
            { key: 'B2', text: 'Option B2' },
          ]}
          placeHolder="Field two"
          selectedKey={fieldTwo}
          onChanged={this.onFieldTwoChange}
        />
      </form>
    );
  }

  private onFieldChange(name, key) {
    this.setState({
      [name]: key
    })
  }
}
```