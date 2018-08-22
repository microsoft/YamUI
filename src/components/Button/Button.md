### Notes for use

While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.

Also, use concise, specific, self-explanatory text, usually a single word. They should include a verb. If acting on something, their text should include the noun they're acting on, e.g. *"Create Group"*.

Use `type='submit'` for submitting forms. Doing this will trigger the onClick action when the user presses the enter key within certain form fields.

### Examples

Primary button:

```js { "props": { "data-description": "primary", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-button\"},{\"action\":\"focus\",\"selector\":\".y-button\"},{\"action\":\"mouseDown\",\"selector\":\".y-button\"}]" } }
const { ButtonColor } = require('.');

<Button
  text="Primary"
  color={ButtonColor.PRIMARY}
/>
```

Secondary button:

```js { "props": { "data-description": "secondary", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-button\"},{\"action\":\"focus\",\"selector\":\".y-button\"},{\"action\":\"mouseDown\",\"selector\":\".y-button\"}]" } }
const { ButtonColor } = require('.');

<Button
  text="Secondary"
  color={ButtonColor.Secondary}
/>
```

Default size:

```js { "props": { "data-description": "regular" } }
const { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize } = require('.');
const Add = require('../Icon/icons/Add').default;
const ChevronRightMed = require('../Icon/icons/ChevronRightMed').default;
const ChevronDownMed = require('../Icon/icons/ChevronDownMed').default;

const sampleUrl = 'https://www.yammer.com';

<div>
  Primary Button variations
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With left icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
        icon={Add}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        icon={Add}
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        icon={Add}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        icon={Add}
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With right icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        icon={ChevronDownMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  Secondary Button variations
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        href={sampleUrl}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        status={ButtonStatus.DISABLED}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        status={ButtonStatus.LOADING}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With left icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
        icon={Add}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        icon={Add}
        href={sampleUrl}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        icon={Add}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        icon={Add}
        status={ButtonStatus.LOADING}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With right icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        text="Button"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Link"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        href={sampleUrl}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Disabled"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        text="Loading"
        icon={ChevronDownMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.LOADING}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
  </LayoutList>
</div>
```

Small size:

```js { "props": { "data-description": "small" } }
const { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize } = require('.');
const Add = require('../Icon/icons/Add').default;
const ChevronRightMed = require('../Icon/icons/ChevronRightMed').default;
const ChevronDownMed = require('../Icon/icons/ChevronDownMed').default;

const sampleUrl = 'https://www.yammer.com';

<div>
  Primary Button variations
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With left icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
        icon={Add}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        icon={Add}
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        icon={Add}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        icon={Add}
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With right icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        href={sampleUrl}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        icon={ChevronDownMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.LOADING}
        color={ButtonColor.PRIMARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  Secondary Button variations
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        href={sampleUrl}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        status={ButtonStatus.DISABLED}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        status={ButtonStatus.LOADING}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With left icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
        icon={Add}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        icon={Add}
        href={sampleUrl}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        icon={Add}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        icon={Add}
        status={ButtonStatus.LOADING}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
  </LayoutList>
  <br />
  With right icon
  <LayoutList direction="horizontal">
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Button"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Link"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        href={sampleUrl}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Disabled"
        icon={ChevronRightMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.DISABLED}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
    <LayoutListItem>
      <Button
        size={ButtonSize.SMALL}
        text="Loading"
        icon={ChevronDownMed}
        iconPosition={ButtonIconPosition.RIGHT}
        status={ButtonStatus.LOADING}
        color={ButtonColor.SECONDARY}
      />
    </LayoutListItem>
  </LayoutList>
</div>
```

Bistate button - Join/Leave:

```js { "props": { "data-description": "bistate button join-leave", "data-action-states": "[{\"action\":\"none\"}, {\"action\":\"hover\",\"selector\":\".y-button\"}]" } }
const BistateButton = require('./BistateButton').default;
const CheckMark = require('../Icon/icons/CheckMark').default;
const SignOut = require('../Icon/icons/SignOut').default;

const leaveJoinProps = {
  text: 'Joined',
  icon: CheckMark,
  activeProps: {
    text: 'Leave',
    icon: SignOut,
  },
};

<BistateButton {...leaveJoinProps} />
```

Bistate button - Follow/Unfollow:

```js { "props": { "data-description": "bistate button follow-unfollow", "data-action-states": "[{\"action\":\"none\"}, {\"action\":\"hover\",\"selector\":\".y-button\"}]" } }
const { ButtonColor } = require('.');
const BistateButton = require('./BistateButton').default;
const CheckMark = require('../Icon/icons/CheckMark').default;
const Remove = require('../Icon/icons/Remove').default;

const followUnfollowProps = {
  text: 'Following',
  icon: CheckMark,
  color: ButtonColor.PRIMARY,
  activeProps: {
    text: 'Unfollow',
    icon: Remove,
    color: ButtonColor.SECONDARY,
  },
};

<BistateButton {...followUnfollowProps} />
```

Submit button:

```js { "props": { "data-description": "submit button", "data-action-states": "[]" } }
<Button text="Submit" type="submit" />
```

Loading button:

```js { "props": { "data-description": "loading", "data-action-states": "[]" } }
const { ButtonStatus } = require('.');

class LoadingButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { busy: false };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { busy } = this.state;

    return (
      <Button
        text="I am really busy"
        status={busy ? ButtonStatus.LOADING : ButtonStatus.ENABLED}
        onClick={this.handleClick}
      />
    );
  }

  handleClick(key) {
    this.setState({ busy: true });
    setTimeout(() => {
      this.setState({ busy: false});
    }, 5000);
  }
}

<LoadingButton />
```

Full width:

```js { "props": { "data-description": "full width" } }
const { ButtonColor } = require('.');
const { FixedGridRow, FixedGridColumn, GutterSize } = require('../FixedGrid');

<div>
  <Paragraph>Sometimes a layout can be achieved easier if the button stretches to fill its container's width. Here's an example of <Strong>fullWidth</Strong> buttons in a grid layout.</Paragraph>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Button text="Full width" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Button text="Full width" fullWidth={true} />
    </FixedGridColumn>
  </FixedGridRow>
  <Button text="Full width" fullWidth={true} color={ButtonColor.PRIMARY} />
</div>
```

With supported event handlers:

```js { "props": { "data-description": "with event handlers" } }
<Button
  text="Interact with me"
  onClick={action('button clicked')}
  onMouseEnter={action('button mouse enter')}
  onMouseLeave={action('button mouse leave')}
  onFocus={action('button focused')}
  onBlur={action('button blurred')}
/>
```
