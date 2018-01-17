### Examples

Controlled:
```js { "props": { "data-example": "controlled" } }
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

<ControlledChoiceGroup />
```

Custom Labels:
```js { "props": { "data-example": "customLabels" } }
const options = [
  {
    key: 'A',
    onRenderField: (props, render) => {
      return (
        <Block>
          { render(props) }
          <Text>
            <strong>Label Bolded:</strong> some extra information goes here
          </Text>
        </Block>
      );
    }
  },
  {
    key: 'B',
    onRenderField: (props, render) => {
      return (
        <Block>
          { render(props) }
          <Text>
            <strong>Other Label Bolded:</strong> some extra information goes here
          </Text>
        </Block>
      );
    }
  },
];

<ChoiceGroup
  options={options}
/>
```

With Images:
```js { "props": { "data-example": "withImages" } }
const options = [
  {
    key: 'A',
    text: 'A',
    imageSrc: 'logo.png',
    selectedImageSrc: 'logo.png',
    imageSize: { width: 32, height: 32 },
  },
  {
    key: 'B',
    text: 'B',
    imageSrc: 'user.png',
    selectedImageSrc: 'user.png',
    imageSize: { width: 32, height: 32 },
  },
];

<ChoiceGroup
  options={options}
/>
```