### Examples

Default hover trigger:

```js { "props": { "data-description": "default hover trigger", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }

const content = (
  <div>
    <HovercardHeader>
      Title (nested <strong>HovercardHeader</strong> component)
    </HovercardHeader>
    <HovercardBody>
      Content (nested <strong>HovercardBody</strong> component). Any arbitrary content can be nested here.
    </HovercardBody>
  </div>
);

const handlers = {
  onTriggerHover: action('hovercard trigger hover'),
  onContentDisplay: action('hovercard content display'),
  onContentDismiss: action('hovercard content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Hover over this
  <Hovercard
    content={content}
    directionalHint={4}
    {...handlers}
  >
    <Clickable>hovercard trigger</Clickable>
  </Hovercard>
  .
</div>
```

Click trigger:

```js { "props": { "data-description": "click trigger", "data-action-states": "[{\"action\":\"click\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }
const { DirectionalHint, TriggerType } = require('.');

const content = (
  <div>
    <HovercardHeader>
      Title (nested <strong>HovercardHeader</strong> component)
    </HovercardHeader>
    <HovercardBody>
      Content (nested <strong>HovercardBody</strong> component). Any arbitrary content can be nested here.
    </HovercardBody>
  </div>
);

const handlers = {
  onTriggerHover: action('hovercard trigger hover'),
  onContentDisplay: action('hovercard content display'),
  onContentDismiss: action('hovercard content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Click this
  <Hovercard
    content={content}
    directionalHint={4}
    triggerType={TriggerType.CLICK}
    {...handlers}
  >
    <Clickable>hovercard trigger</Clickable>
  </Hovercard>
  .
</div>
```

Hovercard without beak:

```js { "props": { "data-description": "without beak", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }


const content = (
  <div>
    <HovercardHeader>
      Title (nested <strong>HovercardHeader</strong> component)
    </HovercardHeader>
    <HovercardBody>
      Content (nested <strong>HovercardBody</strong> component). Any arbitrary content can be nested here.
    </HovercardBody>
  </div>
);

const handlers = {
  onTriggerHover: action('hovercard trigger hover'),
  onContentDisplay: action('hovercard content display'),
  onContentDismiss: action('hovercard content dismiss'),
};

<div style={{ minHeight: '200px' }}>
  Hover over this
  <Hovercard
    content={content}
    directionalHint={4}
    isBeakVisible={false}
    {...handlers}
  >
    <Clickable>hover trigger</Clickable>
  </Hovercard>
  .
</div>
```

Hovercard with different alignments:

```js { "props": { "data-description": "alignments", "data-action-states": "[{\"action\":\"hover\",\"selector\":\".y-clickable\",\"wait\":\"1000\"}]" } }


const content = (
  <div>
    <HovercardHeader>
      Title (nested <strong>HovercardHeader</strong> component)
    </HovercardHeader>
    <HovercardBody>
      Content (nested <strong>HovercardBody</strong> component). Any arbitrary content can be nested here.
    </HovercardBody>
  </div>
);

const handlers = {
  onTriggerHover: action('hovercard trigger hover'),
  onContentDisplay: action('hovercard content display'),
  onContentDismiss: action('hovercard content dismiss'),
};

const HintedPositionHovercard = (props) => (
  <Hovercard content={content} directionalHint={props.hint} {...handlers} >
    <Block textAlign={props.align}>
      <Clickable>
        {props.label}
      </Clickable>
    </Block>
  </Hovercard>
);

<div style={{ height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={2} align="left" label="Top right" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={1} align="center" label="Top center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={0} align="right" label="Top left" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={9} align="left" label="Left center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={12} align="right" label="Right center" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
  <div>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={6} align="left" label="Bottom right" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={5} align="center" label="Bottom center" />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <HintedPositionHovercard hint={4} align="right" label="Bottom left" />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
</div>
```
