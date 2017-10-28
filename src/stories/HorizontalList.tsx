/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalList, HorizontalListItem } from '../components/HorizontalList';
import Button, { ButtonColor } from '../components/Button';

storiesOf('HorizontalList', module)
  .add('list of Buttons', () => (
    <HorizontalList>
      <HorizontalListItem>
        <Button text="1" color={ButtonColor.SECONDARY} />
      </HorizontalListItem>
      <HorizontalListItem>
        <Button text="2" color={ButtonColor.SECONDARY} />
      </HorizontalListItem>
      <HorizontalListItem>
        <Button text="3" />
      </HorizontalListItem>
    </HorizontalList>
  ))
  .add('aligned right', () => (
    <HorizontalList align="right">
      <HorizontalListItem>
        <Button text="1" color={ButtonColor.SECONDARY} />
      </HorizontalListItem>
      <HorizontalListItem>
        <Button text="2" color={ButtonColor.SECONDARY} />
      </HorizontalListItem>
      <HorizontalListItem>
        <Button text="3" />
      </HorizontalListItem>
    </HorizontalList>
  ));
