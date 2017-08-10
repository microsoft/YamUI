/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HorizontalList, ListItem } from '../components/HorizontalList';
import Button, { ButtonColor } from '../components/Button';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/HorizontalList/README');


storiesOf('HorizontalList', module)
  .addDecorator(withReadme(readme))
  .add('list of Buttons', () => (
    <HorizontalList>
      <ListItem>
        <Button text="1" color={ButtonColor.SECONDARY} />
      </ListItem>
      <ListItem>
        <Button text="2" color={ButtonColor.SECONDARY} />
      </ListItem>
      <ListItem>
        <Button text="3" />
      </ListItem>
    </HorizontalList>
  ))
.add('aligned right', () => (
    <HorizontalList align="right">
      <ListItem>
        <Button text="1" color={ButtonColor.SECONDARY} />
      </ListItem>
      <ListItem>
        <Button text="2" color={ButtonColor.SECONDARY} />
      </ListItem>
      <ListItem>
        <Button text="3" />
      </ListItem>
    </HorizontalList>
  ));
