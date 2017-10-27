/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Block from '../components/Block';
import FakeLink from '../components/FakeLink';
import Clickable from '../components/Clickable';
import NavigationLink from '../components/NavigationLink';

storiesOf('FakeLink', module)
  .add('default', () => (
    <div>
      Here is a <FakeLink>FakeLink component</FakeLink>. It styles text as if it were a
      NavigationLink. It does not accept any options.
    </div>
  ))
  .add('in unstyled link', () => (
    <div>
      <NavigationLink href="/404.html" unstyled={true}>
        <Block>
          This unstyled NavigationLink component wraps an entire block of text. Here is a{' '}
          <FakeLink>FakeLink component</FakeLink> nested in that block of text. Notice that it
          reflects the hover styles when its parent NavigationLink is hovered, focused or active.
          This allows screenreaders to understand an entire block of text within a NavigationLink
          while also supporting nice visual styles for sighted users.
        </Block>
      </NavigationLink>
    </div>
  ))
  .add('in Clickable', () => (
    <div>
      <Clickable block={true} onClick={action('button clicked')}>
        <Block>
          Here is an example of a <FakeLink>FakeLink component</FakeLink> within a{' '}
          <strong>Clickable</strong> block. <FakeLink>Here's another one</FakeLink>. Hover anywhere
          over this block to see the <strong>FakeLink</strong> components get underlined.
        </Block>
      </Clickable>
    </div>
  ));
