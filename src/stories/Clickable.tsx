/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Block, { GutterSize } from '../components/Block';
import Clickable from '../components/Clickable';

storiesOf('Clickable', module)
  .add('text with button', () => (
    <div>
      <Block bottomSpacing={GutterSize.MEDIUM}>
        Here is some plain text, followed by text in a Clickable component:
      </Block>
      <Block>
        This is some content.{' '}
        <Clickable onClick={action('button clicked')}>Blah blah blah blah</Clickable>.
      </Block>
    </div>
  ))
  .add('text inside button', () => (
    <div>
      <Block bottomSpacing={GutterSize.MEDIUM}>
        Here is some plain text entirely inside a Clickable component:
      </Block>
      <Block>
        <Clickable onClick={action('button clicked')}>
          This is some content. Blah blah blah blah
        </Clickable>.
      </Block>
    </div>
  ))
  .add('block inside button', () => (
    <div>
      <Clickable block={true} onClick={action('button clicked')}>
        <Block>
          This is a block of text entirely inside a Clickable. When wrapping an entire component
          like this be sure to set <strong>block: true</strong>, otherwise the button element might
          constrict the width of its contents.
        </Block>
      </Clickable>
    </div>
  ));
