/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { addDecorator, StoryDecorator } from '@storybook/react';
import Fabric from '../components/Fabric';
import '../../dist/yamui-base.css';
import './assets/stories.css';

// Wrap all stories in a Fabric component for proper styling
const FabricDecorator: StoryDecorator = (story: Function) => <Fabric>{story()}</Fabric>;

// Pad each story so we can visually diff the body without collapsed component margins
const PaddingDecorator: StoryDecorator = (story: Function) => (
  <div style={{ padding: '10px' }}>{story()}</div>
);

// Disable all animations so we can produce consistent screenshots
const DisableAnimationsDecorator: StoryDecorator = (story: Function) => (
  <div className="animations-disabled">
    {story()}
  </div>
);

addDecorator(FabricDecorator);
addDecorator(PaddingDecorator);

// Only disable animations when we're running visual diffs
if (window.location.href.match(/visualDiff=true/)) {
  addDecorator(DisableAnimationsDecorator);
}

// Import component stories
import './Block';
import './Text';
import './Button';
import './Clickable';
import './Dropdown';
import './NavigationLink';
import './FakeLink';
import './Icon';
import './Image';
import './Spinner';
import './Avatar';
import './MediaObject';
import './Callout';
import './ScreenreaderText';
import './FixedGrid';
import './HorizontalList';
import './MessageBar';

// Import other non-component documentation and demos
import './Hovercard';
