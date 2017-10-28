A `Dropdown` is a list in which the selected item is always visible, and the others are visible on demand by clicking a drop-down button.

### Notes for use

`Dropdown` can be used as either a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) or [uncontrolled](https://facebook.github.io/react/docs/uncontrolled-components.html) component.

### Examples

Uncontrolled dropdown:

```js { "props": { "data-description": "uncontrolled" } }
const { GutterSize } = require('../Block')
const action = (msg) => (...args) => { console.log(msg, ...args) };

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    In this example, the state of the Dropdown is maintained within the component, rather than being set using <em>selectedKey</em>.
  </Block>
  <Dropdown
    placeHolder="Please select..."
    options={options}
    onChanged={action('changed')}
  />
</div>
```

Controlled dropdown:

```js { "props": { "data-description": "controlled" } }
const { GutterSize } = require('../Block')
const action = (msg) => (...args) => { console.log(msg, ...args) };

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

class ControlledDropdown extends React.PureComponent {
  constructor() {
    super();

    this.state = {};

    this.handleChanged = this.handleChanged.bind(this);
  }

  render() {
    const { selectedKey } = this.state;

    return (
      <Dropdown
        options={options}
        placeHolder="Please select..."
        selectedKey={selectedKey}
        onChanged={this.onChanged}
      />
    );
  }

  handleChanged(key) {
    action('changed')(key);
    this.setState({ selectedKey: key });
  }
}

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    In this example, the state of the dropdown is controlled by the parent component using the <em>selectedKey</em> and <em>onChanged</em> props.
  </Block>
  <ControlledDropdown />
</div>
```

Dropdown with a label:

```js { "props": { "data-description": "with label" } }
const { GutterSize } = require('../Block')
const action = (msg) => (...args) => { console.log(msg, ...args) };

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    This dropdown renders its own label text.
  </Block>
  <Dropdown
    label="Please choose from the following options:"
    placeHolder="Please select..."
    options={options}
    onChanged={action('changed')}
  />
</div>
```

Dropdown in a grid:

```js { "props": { "data-description": "in grid" } }
const { GutterSize } = require('../Block')
const { FixedGridColumn, FixedGridRow } = require('../FixedGrid')
const action = (msg) => (...args) => { console.log(msg, ...args) };

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    To manage the dropdown's width, use a container; it will expand to fill the entire width.
  </Block>
  <FixedGridRow>
    <FixedGridColumn fixed={true} width={100}>
      <Dropdown
        placeHolder="Prefix"
        options={options}
        onChanged={action('changed')}
      />
    </FixedGridColumn>
    <FixedGridColumn>
      <Dropdown
        placeHolder="Suffix"
        options={options}
        onChanged={action('changed')}
      />
    </FixedGridColumn>
  </FixedGridRow>
</div>
```
