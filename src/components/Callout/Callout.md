### Examples

Default hover trigger:

```js { "props": { "data-example": "default hover trigger" } }

const content = (
  <div>
    <CalloutHeader>
      Title (nested <strong>CalloutHeader</strong> component)
    </CalloutHeader>
    <CalloutBody>
      Content (nested <strong>CalloutBody</strong> component). Any arbitrary content can be nested here.
    </CalloutBody>
  </div>
);

const handlers = {
  onTriggerHover: action('callout trigger hover'),
  onContentDisplay: action('callout content display'),
  onContentDismiss: action('callout content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Hover over this
  <Callout
    content={content}
    directionalHint={4}
    startVisible={true}
    {...handlers}
  >
    <FakeLink>callout trigger</FakeLink>
  </Callout>
  .
</div>
```

Click trigger:

```js { "props": { "data-example": "click trigger" } }
const { DirectionalHint, TriggerType } = require('.');

const content = (
  <div>
    <CalloutHeader>
      Title (nested <strong>CalloutHeader</strong> component)
    </CalloutHeader>
    <CalloutBody>
      Content (nested <strong>CalloutBody</strong> component). Any arbitrary content can be nested here.
    </CalloutBody>
  </div>
);

const handlers = {
  onTriggerHover: action('callout trigger hover'),
  onContentDisplay: action('callout content display'),
  onContentDismiss: action('callout content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Click this
  <Callout
    content={content}
    directionalHint={4}
    startVisible={true}
    triggerType={TriggerType.CLICK}
    {...handlers}
  >
    <FakeLink>callout trigger</FakeLink>
  </Callout>
  .
</div>
```

Callout without beak:

```js { "props": { "data-example": "without beak" } }


const content = (
  <div>
    <CalloutHeader>
      Title (nested <strong>CalloutHeader</strong> component)
    </CalloutHeader>
    <CalloutBody>
      Content (nested <strong>CalloutBody</strong> component). Any arbitrary content can be nested here.
    </CalloutBody>
  </div>
);

const handlers = {
  onTriggerHover: action('callout trigger hover'),
  onContentDisplay: action('callout content display'),
  onContentDismiss: action('callout content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Hover over this
  <Callout
    content={content}
    directionalHint={4}
    isBeakVisible={false}
    startVisible={true}
    {...handlers}
  >
    <FakeLink>hover trigger</FakeLink>
  </Callout>
  .
</div>
```

Callout with different alignments:

```js { "props": { "data-example": "alignments" } }


const content = (
  <div>
    <CalloutHeader>
      Title (nested <strong>CalloutHeader</strong> component)
    </CalloutHeader>
    <CalloutBody>
      Content (nested <strong>CalloutBody</strong> component). Any arbitrary content can be nested here.
    </CalloutBody>
  </div>
);

const handlers = {
  onTriggerHover: action('callout trigger hover'),
  onContentDisplay: action('callout content display'),
  onContentDismiss: action('callout content dismiss'),
};

const HintedPositionCallout = (props) => (
  <Callout content={content} directionalHint={props.hint} startVisible={true} {...handlers} >
    <Block textAlign={props.align}>
      <FakeLink>
        {props.label}
      </FakeLink>
    </Block>
  </Callout>
);

<div style={{ height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={2} align="left" label="Top right" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={1} align="center" label="Top center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={0} align="right" label="Top left" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={9} align="left" label="Left center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={12} align="right" label="Right center" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={6} align="left" label="Bottom right" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={5} align="center" label="Bottom center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionCallout hint={4} align="right" label="Bottom left" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
</div>
```
