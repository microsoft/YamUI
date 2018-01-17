### Examples
```js { "props": { "data-example": "controlled" } }
const { GutterSize } = require('../Block');

class ControlledChoiceGroup extends React.Component {
  constructor() {
    super();
    this.state = { selectedKey: 'A' };
    this.handleChanged = this.handleChanged.bind(this);
  }

  render() {
    const { selectedKey } = this.state;
    return (
      <ChoiceGroup
        label={this.props.label}
        options={this.props.options}
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

<Block>
  <Block bottomSpacing={GutterSize.XXLARGE}>
    <ControlledChoiceGroup
      options={[
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
      ]}
      label="Basic Choice Group"
    />
  </Block>

  <Block bottomSpacing={GutterSize.XXLARGE}>
    <ControlledChoiceGroup
      label="Custom Labels"
      options={[
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
      ]}
    />
  </Block>

  <Block bottomSpacing={GutterSize.XXLARGE}>
    <ControlledChoiceGroup
      label="With Images"
      options={[
        {
          key: 'A',
          text: 'Logo',
          imageSrc: 'logo.png',
          selectedImageSrc: 'logo.png',
          imageSize: { width: 32, height: 32 },
        },
        {
          key: 'B',
          text: 'User',
          imageSrc: 'user.png',
          selectedImageSrc: 'user.png',
          imageSize: { width: 32, height: 32 },
        },
      ]}
    />
  </Block>
</Block>
```