/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBar, { MessageBarType } from '../components/MessageBar';
import FakeLink from '../components/FakeLink';
import Text, { TextSize } from '../components/Text';
import Icon, { IconSize } from '../components/Icon';

storiesOf('MessageBar', module)
  .add('basic usage', () => (
    <div>
      <MessageBar ariaLabel="A sample notice informing you about something">
        Sample notice, something you should know about.
      </MessageBar>
    </div>
  ))
  .add('with a type', () => (
    <div>
      <MessageBar ariaLabel="Error describing what went wrong" type={MessageBarType.WARNING}>
        Watch out, something unexpected might happen.
      </MessageBar>
    </div>
  ))
  .add('with an icon action', () => {
    const icon = (
      <span>
        <Icon icon="lock" size={IconSize.XSMALL} />
        <Text size={TextSize.XSMALL}>+1</Text>
      </span>);
    return (
      <div>
        <MessageBar ariaLabel="Some warning" actions={icon} type={MessageBarType.WARNING}>
          Watch out, something unexpected might happen.
        </MessageBar>
      </div>);
  })
  .add('with a link action', () => {
    const link = <FakeLink>Retry</FakeLink>;
    return (
      <div>
        <MessageBar ariaLabel="Error; a request failed" actions={link} type={MessageBarType.ERROR}>
          Oh no, something bad happened and we couldn't complete your action!
        </MessageBar>
      </div>);
  });
