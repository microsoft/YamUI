/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../components/FixedGrid';
import Image from '../components/Image';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/FixedGrid/README');


const yammerLogo = require('./assets/img/yammer-logo.png');

storiesOf('FixedGrid', module)
  .addDecorator(withReadme(readme))
  .add('fixed left column with width', () => (
    <div>
      <FixedGridRow>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          The left column is fixed with <strong>width: 100</strong>. Its Image has
          set <strong>fullWidth</strong> to fill that 100px. The right column is not set to fixed
          and will grow or shrink to fill the grid's container.
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ))
  .add('fixed left column without width', () => (
    <div>
      <FixedGridRow>
        <FixedGridColumn fixed>
          <Image source={yammerLogo} description="test" width={100} />
        </FixedGridColumn>
        <FixedGridColumn>
          The left column is fixed without a width, so it will shrink to fit its content. Its Image is set to
          100px wide. The right column is not set to fixed and will grow or shrink to fill the grid's container.
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ))
  .add('fixed right column with width', () => (
    <div>
      <FixedGridRow>
        <FixedGridColumn>
          The right column is fixed with <strong>width: 100</strong>. Its Image has
          set <strong>fullWidth</strong> to fill that 100px. The left column is not set to fixed
          and will grow or shrink to fill the grid's container.
        </FixedGridColumn>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ))
  .add('fixed right column without width', () => (
    <div>
      <FixedGridRow>
        <FixedGridColumn>
          The right column is fixed without a width, so it will shrink to fit its content. Its Image is set to
          100px wide. The left column is not set to fixed and will grow or shrink to fill the grid's container.
        </FixedGridColumn>
        <FixedGridColumn fixed>
          <Image source={yammerLogo} description="test" width={100} />
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ))
  .add('two fixed columns', () => (
    <div>
      <FixedGridRow>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This example has three columns. The left and right are both fixed, while the center column
          will grow or shrink to fit the grid's container.
        </FixedGridColumn>
        <FixedGridColumn fixed>
          <Image source={yammerLogo} description="test" width={100} />
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ))
  .add('gutters', () => (
    <div>
      <FixedGridRow gutterSize={GutterSize.XXLARGE} bottomSpacing={GutterSize.XXLARGE}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: XXLARGE</strong> and <strong>bottomSpacing: XXLARGE</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.XLARGE} bottomSpacing={GutterSize.XLARGE}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: XLARGE</strong> and <strong>bottomSpacing: XLARGE</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.LARGE} bottomSpacing={GutterSize.LARGE}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: LARGE</strong> and <strong>bottomSpacing: LARGE</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.MEDIUM} bottomSpacing={GutterSize.MEDIUM}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: MEDIUM</strong> and <strong>bottomSpacing: MEDIUM</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.SMALL}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: SMALL</strong> and <strong>bottomSpacing: SMALL</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.XSMALL} bottomSpacing={GutterSize.XSMALL}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: XSMALL</strong> and <strong>bottomSpacing: XSMALL</strong>.
        </FixedGridColumn>
      </FixedGridRow>

      <FixedGridRow gutterSize={GutterSize.XSMALL}>
        <FixedGridColumn fixed width={100}>
          <Image source={yammerLogo} description="test" fullWidth />
        </FixedGridColumn>
        <FixedGridColumn>
          This is an example with <strong>gutterSize: XSMALL</strong> and no bottomSpacing.
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  ));
