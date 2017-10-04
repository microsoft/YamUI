/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ScreenreaderText from '../components/ScreenreaderText';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/ScreenreaderText/README');

storiesOf('ScreenreaderText', module)
  .addDecorator(withReadme(readme))
  .add('default', () => (
    <div>
      There is a <strong>ScreenreaderText</strong> component with text after this visible text which
      is hidden in the browser but still available to screenreaders.
      <ScreenreaderText>You can't see this but screenreaders can</ScreenreaderText>
    </div>
  ));
