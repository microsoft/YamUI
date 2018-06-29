### Examples

Click trigger:

```js { "props": { "data-description": "click trigger","data-action-states": "[{\"action\":\"click\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]", "data-preview-selector": ".y-modalDialog" } }
const ModalDialogSize = require('.').ModalDialogSize;

class ModalDialogExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Clickable onClick={this.toggleOpen}>Show</Clickable>
        <ModalDialog
          isOpen={isOpen}
          title={'Dialog title'}
          size={ModalDialogSize.LARGE}
          closeAriaLabel={'close dialog'}
          onDismiss={this.toggleOpen}>
          This is the content!
        </ModalDialog>
      </div>
    );
  }

  toggleOpen() {
    this.setState((prevState, props) => ({
      isOpen: !prevState.isOpen
    }))
  }
}

<ModalDialogExample />
```

Hidden title:

```js { "props": { "data-description": "hidden title","data-action-states": "[{\"action\":\"click\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]", "data-preview-selector": ".y-modalDialog" } }
const ModalDialogSize = require('.').ModalDialogSize;

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
          size={ModalDialogSize.LARGE}
          closeAriaLabel={'close dialog'}
          hideTitle={true}
          onDismiss={this.onDismissed}>
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
