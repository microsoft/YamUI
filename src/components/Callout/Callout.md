### Notes for use

Callout is simply [exported from Fabric](https://developer.microsoft.com/en-us/fabric#/components/callout), with some minor YamUI styling. It is meant to be used as a utility component by other YamUI components like Hovercard and Tooltip, you probably don't need to use it directly in your application UIs.


### Examples

Basic usage:

```js
class MyComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };
  }

  render() {
    const callout = this.state.visible && (
      <Callout target={this.triggerElement}>
        <div style={{ padding: '10px' }}>This message is displayed in the Callout popover!</div>
      </Callout>
    );

    return (
      <span>
        <span ref={node => (this.triggerElement = node)} onClick={() => this.setState({ visible: !this.state.visible })}>
          {this.props.children}
        </span>
        {callout}
      </span>
    );
  }
}


<MyComponent>Click me</MyComponent>
```
