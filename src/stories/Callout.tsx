/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Callout, CalloutHeader, CalloutBody, DirectionalHint, TriggerType } from '../components/Callout';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Callout/README');


const HeightDecorator: StoryDecorator = (story: Function) => (
  <div style={{ minHeight: '500px' }}>
    {story()}
  </div>
);

const actions = {
  onTriggerHover: action('onTriggerHover event fired'),
  onContentDisplay: action('onContentDisplay event fired'),
  onContentDismiss: action('onContentDismiss event fired'),
};

const fakeContent = (
  <div>
    <CalloutHeader>Callout Header</CalloutHeader>
    <CalloutBody>Callout body content. Callout body content. Callout body content. Callout body content.</CalloutBody>
  </div>
);

interface HintedProps {
  hint: DirectionalHint;
}
const HintedPositionCallout = (props: HintedProps) => {
  // NOTE: We can clean this up with layout components when they exist
  return (
    <div style={{position: 'relative', height: '500px'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%'}}>
        <Callout content={fakeContent} directionalHint={props.hint} startVisible={true} {...actions}>
          <a>Hover over me</a>
        </Callout>
      </div>
    </div>
  );
};

storiesOf('Callout', module)
  .addDecorator(withReadme(readme))
  .addDecorator(HeightDecorator)
  .add('default display (hidden)', () => {
    return (
      <div>
        This is a Callout component with default props. It's hidden by default and is triggered with mouse hover.
        <br />
        <br />
        <Callout content={fakeContent} {...actions}>
          <a>Hover over me</a>
        </Callout>
      </div>
    );
  })
  .add('default display', () => {
    return (
      <div>
        This is a Callout component with default props.
        It has a beak and is triggered by hover.
        <br />
        Note that the rest of these examples set startVisible=true, which will probably not be used often in production.
        <br />
        <br />
        <Callout content={fakeContent} startVisible={true} {...actions}>
          <a>Hover over me</a>
        </Callout>
      </div>
    );
  })
  .add('click trigger', () => {
    return (
      <div>
        This is a Callout component triggered by a click.
        <br />
        <br />
        <Callout content={fakeContent} triggerType={TriggerType.CLICK} startVisible={true} {...actions}>
          <a>Click me</a>
        </Callout>
      </div>
    );
  })
  .add('no beak', () => {
    return (
      <div>
        This is a Callout component without a beak.
        <br />
        <br />
        <Callout content={fakeContent} isBeakVisible={false} startVisible={true} {...actions}>
          <a>Hover over me</a>
        </Callout>
      </div>
    );
  })
  .add('top right edge', () => {
    return (
      <div>
        This is a callout aligned to the top right edge of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.topRightEdge} />
      </div>
    );
  })
  .add('top center', () => {
    return (
      <div>
        This is a callout aligned to the top center of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.topCenter} />
      </div>
    );
  })
  .add('top left edge', () => {
    return (
      <div>
        This is a callout aligned to the top left edge of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.topLeftEdge} />
      </div>
    );
  })
  .add('right center', () => {
    return (
      <div>
        This is a callout aligned to the right and center of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.rightCenter} />
      </div>
    );
  })
  .add('bottom left edge', () => {
    return (
      <div>
        This is a callout aligned to the bottom left edge of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.bottomLeftEdge} />
      </div>
    );
  })
  .add('bottom center', () => {
    return (
      <div>
        This is a callout aligned to the bottom center of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.bottomCenter} />
      </div>
    );
  })
  .add('bottom right edge', () => {
    return (
      <div>
        This is a callout aligned to the bottom right edge of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.bottomRightEdge} />
      </div>
    );
  })
  .add('left center', () => {
    return (
      <div>
        This is a callout aligned to the left and center of its trigger
        (when screen width permits).
        <HintedPositionCallout hint={DirectionalHint.leftCenter} />
      </div>
    );
  });
