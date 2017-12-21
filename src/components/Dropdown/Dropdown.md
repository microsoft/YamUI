### Notes for use

A `Dropdown` can be used in a <a href="https://facebook.github.io/react/docs/forms.html#controlled-components" target="_blank">controlled</a> or <a href="https://facebook.github.io/react/docs/uncontrolled-components.html" target="_blank">uncontrolled</a> manner.

### Examples

Controlled dropdown:

```js { "props": { "data-example": "controlled" } }
const { GutterSize } = require('../Block');

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

class ControlledDropdown extends React.Component {
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
        onChanged={this.handleChanged}
      />
    );
  }

  handleChanged(key) {
    action('dropdown changed')(key);
    this.setState({ selectedKey: key });
  }
}

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    In this example, the state of the <strong>Dropdown</strong> is controlled by the parent component using the <strong>selectedKey</strong> and <strong>onChanged</strong> props.
  </Block>
  <ControlledDropdown />
</div>
```

Uncontrolled dropdown:

```js { "props": { "data-example": "uncontrolled" } }
const { GutterSize } = require('../Block');

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    In this example, the state of the <strong>Dropdown</strong> is maintained within the component, rather than being set using <strong>selectedKey</strong>. This might be used when a parent component is listening to the <strong>onChanged</strong> event and doesn't need to manage the dropdown's visual state, but this is generally not recommended.
  </Block>
  <Dropdown
    placeHolder="Please select..."
    options={options}
    onChanged={action('dropdown changed')}
  />
</div>
```

With a label:

```js { "props": { "data-example": "with label" } }
const { GutterSize } = require('../Block');

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    This <strong>Dropdown</strong> renders its own label text.
  </Block>
  <Dropdown
    label="Please choose from the following options:"
    placeHolder="Please select..."
    options={options}
    onChanged={action('dropdown changed')}
  />
</div>
```

With option templates, dividers and headers:

```js { "props": { "data-example": "with templates dividers headers" } }
const { GutterSize } = require('../Block');
const { DropdownMenuItemType } = require('.');
const AttachIcon = require('../Icon/icons/Attach').default;
const GroupIcon = require('../Icon/icons/Group').default;
const FlagIcon = require('../Icon/icons/Flag').default;
const LockIcon = require('../Icon/icons/Lock').default;
const PhoneIcon = require('../Icon/icons/Phone').default;
const text = 'The quick brown fox jumped over the lazy dog.';

const options = [
  { key: 'section1', text: 'Icon, Label and Text', itemType: DropdownMenuItemType.Header},
  { key: 'A', icon: GroupIcon, label: 'Group', text: 'Option A' },
  { key: 'B', icon: PhoneIcon, label: 'Phone', text: 'Option B' },
  { key: 'C', icon: AttachIcon, label: 'Attachment', text: `${text} ${text} ${text} ${text}` },
  { key: 'divider1', text: 'Section', itemType: DropdownMenuItemType.Divider},
  { key: 'section2', text: 'Label and Text', itemType: DropdownMenuItemType.Header},
  { key: 'D', label: 'Group', text: 'Option D' },
  { key: 'E', label: 'Group', text: 'Option E' },
  { key: 'F', label: 'Group', text: `${text} ${text} ${text} ${text}` },
  { key: 'divider2', text: 'Section', itemType: DropdownMenuItemType.Divider},
  { key: 'section3', text: 'Plain Text', itemType: DropdownMenuItemType.Header},
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: `${text} ${text} ${text} ${text}` },
];

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    This <strong>Dropdown</strong> renders section headers and dividers, and uses icons and labels in options.
  </Block>
  <Dropdown
    label="Please choose from the following options:"
    placeHolder="Please select..."
    options={options}
    onChanged={action('dropdown changed')}
  />
</div>
```

In a grid:

```js { "props": { "data-example": "in grid" } }
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
    A <strong>Dropdown</strong> fills 100% of its container's width. To manage its width, nest it within a layout component.
  </Block>
  <FixedGridRow>
    <FixedGridColumn fixed={true} width={100}>
      <Dropdown
        placeHolder="Prefix"
        options={options}
        onChanged={action('dropdown changed')}
      />
    </FixedGridColumn>
    <FixedGridColumn>
      <Dropdown
        placeHolder="Suffix"
        options={options}
        onChanged={action('dropdown changed')}
      />
    </FixedGridColumn>
  </FixedGridRow>
</div>
```
