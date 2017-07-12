/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text, { TextColor, TextSize } from '../components/Text';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Text/README');


storiesOf('Text', module)
  .addDecorator(withReadme(readme))
  .add('without props', () => (
    <div>
      <Text>
        The <b>&lt;Text /&gt;</b> component renders its children in a span. It's a convenient way
        to render a piece of text with a specific size. Text will support more options in the future.
      </Text>
      <br />
      <Text>
        By default the <b>&lt;Text /&gt;</b> component does not render any styling so it can
        inherit styles of its parent.
      </Text>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Text>
        This is text without a size specified. It will inherit its size and line-height from its parent.
      </Text><br />
      <Text size={TextSize.XXLARGE}>This is size XXLARGE</Text><br />
      <Text size={TextSize.XLARGE}>This is size XLARGE</Text><br />
      <Text size={TextSize.LARGE}>This is size LARGE</Text><br />
      <Text size={TextSize.MEDIUM}>This is size MEDIUM</Text><br />
      <Text size={TextSize.MEDIUM_SUB}>This is size MEDIUM_SUB</Text><br />
      <Text size={TextSize.SMALL}>This is size SMALL</Text><br />
      <Text size={TextSize.XSMALL}>This is size XSMALL</Text><br />
    </div>
  ))
  .add('sizes (long text)', () => (
    <div>
      <Text>
        This is text without size specified. It will inherit its size and line-height from its parent.
        This is text without size specified. <strong>It will inherit</strong> its size and line-height from its parent.
        This is text without size specified. It will inherit its size and line-height from its parent.
      </Text><br /><br />
      <Text size={TextSize.XXLARGE}>
        This is size XXLARGE. This is size XXLARGE. This is size XXLARGE. This is size XXLARGE.
        This is size XXLARGE. This is size XXLARGE. <strong>This is size XXLARGE.</strong> This is size XXLARGE.
        This is size XXLARGE. This is size XXLARGE. This is size XXLARGE. This is size XXLARGE.
      </Text><br /><br />
      <Text size={TextSize.XLARGE}>
        This is size XLARGE. This is size XLARGE. This is size XLARGE. This is size XLARGE.
        This is size XLARGE. This is size XLARGE. <strong>This is size XLARGE.</strong> This is size XLARGE.
        This is size XLARGE. This is size XLARGE. This is size XLARGE. This is size XLARGE.
      </Text><br /><br />
      <Text size={TextSize.LARGE}>
        This is size LARGE. This is size LARGE. This is size LARGE. This is size LARGE.
        This is size LARGE. This is size LARGE. <strong>This is size LARGE.</strong> This is size LARGE.
        This is size LARGE. This is size LARGE. This is size LARGE. This is size LARGE.
      </Text><br /><br />
      <Text size={TextSize.MEDIUM}>
        This is size MEDIUM. This is size MEDIUM. This is size MEDIUM. This is size MEDIUM.
        This is size MEDIUM. This is size MEDIUM. <strong>This is size MEDIUM.</strong> This is size MEDIUM.
        This is size MEDIUM. This is size MEDIUM. This is size MEDIUM. This is size MEDIUM.
      </Text><br /><br />
      <Text size={TextSize.MEDIUM_SUB}>
        This is size MEDIUM_SUB. This is size MEDIUM_SUB. This is size MEDIUM_SUB. This is size MEDIUM_SUB.
        This is size MEDIUM_SUB. This is size MEDIUM_SUB. <strong>This is size MEDIUM_SUB.</strong> This is
        size MEDIUM_SUB.
        This is size MEDIUM_SUB. This is size MEDIUM_SUB. This is size MEDIUM_SUB. This is size MEDIUM_SUB.
      </Text><br /><br />
      <Text size={TextSize.SMALL}>
        This is size SMALL. This is size SMALL. This is size SMALL. This is size SMALL.
        This is size SMALL. This is size SMALL. <strong>This is size SMALL.</strong> This is size SMALL.
        This is size SMALL. This is size SMALL. This is size SMALL. This is size SMALL.
      </Text><br /><br />
      <Text size={TextSize.XSMALL}>
        This is size XSMALL. This is size XSMALL. This is size XSMALL. This is size XSMALL.
        This is size XSMALL. This is size XSMALL. <strong>This is size XSMALL.</strong> This is size XSMALL.
        This is size XSMALL. This is size XSMALL. This is size XSMALL. This is size XSMALL.
      </Text>
    </div>
  ))
  .add('colors', () => (
    <div>
      <Text>This is text without a color specified. It will inherit its color from its parent.</Text><br />
      <Text color={TextColor.PRIMARY}>This is color PRIMARY</Text><br />
      <Text color={TextColor.SECONDARY}>This is color SECONDARY</Text><br />
      <Text color={TextColor.METADATA}>This is color METADATA</Text><br />
      <div style={{backgroundColor: '#a8b0bd', padding: '16px'}}>
        <Text color={TextColor.WHITE}>
          This is color WHITE.
          It should be used where the background is a darker color.
        </Text>
      </div>
    </div>
  ));
