### Examples
Basic usage:

```js { "props": { "data-example": "controlled" } }
const { GutterSize } = require('../Block');

const options = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
];

class ControlledChoiceGroup extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleChanged = this.handleChanged.bind(this);
  }

  render() {
    const { selectedKey } = this.state;

    return (
      <ChoiceGroup
        options={options}
        selectedKey={selectedKey}
        onChange={this.handleChanged}
      />
    );
  }

  handleChanged(key) {
    action('choice group changed')(key);
    this.setState({ selectedKey: key });
  }
}

<div>
  <Block bottomSpacing={GutterSize.LARGE}>
    In this example, the state of the <strong>ChoiceGroup</strong> is controlled by the parent component using the <strong>selectedKey</strong> and <strong>onChange</strong> props.
  </Block>
  <ControlledChoiceGroup />
</div>
```
