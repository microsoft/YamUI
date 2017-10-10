/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Block, { GutterSize } from '../components/Block';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Block/README');

const BorderWrapper: React.StatelessComponent<any> = (props) => {
  return <div style={{ paddingTop: '2rem' }}>{props.children}</div>;
};
const MarginWrapper: React.StatelessComponent<any> = (props) => {
  return <div style={{ marginTop: '2rem' }}>{props.children}</div>;
};
const PaddingWrapper: React.StatelessComponent<any> = (props) => {
  return <div style={{ paddingTop: '2rem' }}>{props.children}</div>;
};

storiesOf('Block', module)
  .addDecorator(withReadme(readme))
  .add('without props', () => (
    <div>
      <Block>
        The <strong>&lt;Block /&gt;</strong> component renders its children in a div. It's a
        convenient way to set consistent bottom gutters and padding, and manage pixel-perfect
        vertical rhythm between components.
      </Block>
      <Block>
        This text is in a second <strong>&lt;Block /&gt;</strong> component. Since there isn't
        a <strong>bottomSpacing</strong> or <strong>padding</strong> prop set the wrapper is just an
        unstyled div.
      </Block>
    </div>
  ))
  .add('bottom gutter spacing', () => (
    <div>
      <Block bottomSpacing={GutterSize.XXLARGE}>
        This example has <strong>bottomSpacing: XXLARGE</strong>
      </Block>
      <Block bottomSpacing={GutterSize.XLARGE}>
        This example has <strong>bottomSpacing: XLARGE</strong>
      </Block>
      <Block bottomSpacing={GutterSize.LARGE}>
        This example has <strong>bottomSpacing: LARGE</strong>
      </Block>
      <Block bottomSpacing={GutterSize.MEDIUM}>
        This example has <strong>bottomSpacing: MEDIUM</strong>
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        This example has <strong>bottomSpacing: SMALL</strong>
      </Block>
      <Block bottomSpacing={GutterSize.XSMALL}>
        This example has <strong>bottomSpacing: XSMALL</strong>
      </Block>
      <Block>This example has no spacing specified</Block>
    </div>
  ))
  .add('padding', () => (
    <div>
      <Block padding={GutterSize.XXLARGE}>
        This example has <strong>padding: XXLARGE</strong>
      </Block>
      <Block padding={GutterSize.XLARGE}>
        This example has <strong>padding: XLARGE</strong>
      </Block>
      <Block padding={GutterSize.LARGE}>
        This example has <strong>padding: LARGE</strong>
      </Block>
      <Block padding={GutterSize.MEDIUM}>
        This example has <strong>padding: MEDIUM</strong>
      </Block>
      <Block padding={GutterSize.SMALL}>
        This example has <strong>padding: SMALL</strong>
      </Block>
      <Block padding={GutterSize.XSMALL}>
        This example has <strong>padding: XSMALL</strong>
      </Block>
      <Block>This example has no padding specified</Block>
    </div>
  ))
  .add('positive push', () => (
    <div>
      <MarginWrapper>
        <Block push={3}>
          <Block bottomSpacing={GutterSize.MEDIUM}>
            The <strong>&lt;Block /&gt;</strong> component accepts a <strong>push</strong> prop, a
            number of pixels to adjust the component's top spacing. A positive value will push the
            component down, a negative value will pull it up. This is handy when a feature requires
            manual pixel adjustment between blocks of content to maintain our vertical rhythm.
          </Block>
          <Block bottomSpacing={GutterSize.MEDIUM}>
            This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of margin.
            It specifies <strong>push: 3</strong>, which pushes it down an additional 3px and
            creates a total top spacing of 23px.
          </Block>
          <Block bottomSpacing={GutterSize.MEDIUM}>
            Components should generally only manage their bottom spacing and rely on the component
            above them to do the same. You should only ever need to provide a{' '}
            <strong>push</strong> value for minor adjustments between -3 and 3, and you should only
            need to deal with <strong>push</strong> to reset the vertical rhythm (an imaginary 4px
            grid).
          </Block>
          <Block bottomSpacing={GutterSize.MEDIUM}>
            Note that YamUI actually uses rem instead of px for its font-related units, and converts
            the push pixel value to rem. YamUI has set 0.1rem equal to 1px.
          </Block>
        </Block>
      </MarginWrapper>
    </div>
  ))
  .add('negative push below margin', () => (
    <div>
      <MarginWrapper>
        <Block push={-2}>
          This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of margin. It
          specifies <strong>push: -2</strong> which pulls the component up 2px, creating a total top
          spacing of 18px.
        </Block>
      </MarginWrapper>
    </div>
  ))
  .add('negative push below padding', () => (
    <div>
      <PaddingWrapper>
        <Block push={-2}>
          This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of padding.
          It specifies <strong>push: -2</strong>, which still pulls the component up 2px, creating a
          total top spacing of 18px.
        </Block>
      </PaddingWrapper>
    </div>
  ))
  .add('negative push below border', () => (
    <div>
      <BorderWrapper>
        <Block push={-2}>
          This example shows a <strong>&lt;Block /&gt;</strong> below an existing 20px of border. It
          specifies <strong>push: -2</strong>, which still pulls the component up 2px, creating a
          total top spacing of 18px. These three negative push examples show that a{' '}
          <strong>&lt;Block /&gt;</strong> can pull up consistently regardless of the content above
          it.
        </Block>
      </BorderWrapper>
    </div>
  ));
