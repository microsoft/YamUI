### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

Default click trigger:

```js { "props": { "data-description": "default click trigger","data-action-states": "[{\"action\":\"click\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }
const types = require('./types.ts');

class ClickableDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleClick = this.handleClick.bind(this);
    this.onDismissed = this.onDismissed.bind(this);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <ModalDialog
          isOpen={isOpen}
          title={'Dialog title'}
          size={types.ModalDialogSize.LARGE}
          closeAriaLabel={'close dialog'}
          onDismissed={this.onDismissed}>
          This is the content!
        </ModalDialog>
        <Clickable onClick={this.handleClick}>Show</Clickable>
      </div>
    );
  }

  onDismissed() {
    this.setState({ isOpen: false });
  }

  handleClick(key) {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }
}

<ClickableDialog />
```

Hidden title:

```js { "props": { "data-description": "default click trigger","data-action-states": "[{\"action\":\"click\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }
const types = require('./types.ts');

class ClickableDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleClick = this.handleClick.bind(this);
    this.onDismissed = this.onDismissed.bind(this);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <ModalDialog
          isOpen={isOpen}
          title={'Dialog title wont be shown'}
          size={types.ModalDialogSize.LARGE}
          closeAriaLabel={'close dialog'}
          hideTitle={true}
          onDismissed={this.onDismissed}>
          This is the content!
        </ModalDialog>
        <Clickable onClick={this.handleClick}>Show</Clickable>
      </div>
    );
  }

  onDismissed() {
    this.setState({ isOpen: false });
  }

  handleClick(key) {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }
}

<ClickableDialog />
```
