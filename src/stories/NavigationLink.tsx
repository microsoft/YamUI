/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationLink from '../components/NavigationLink';
import Text, { TextColor } from '../components/Text';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/NavigationLink/README');

storiesOf('NavigationLink', module)
  .addDecorator(withReadme(readme))
  .add('default', () => (
    <div>
      Here is a <NavigationLink href="/404.html">NavigationLink component</NavigationLink> with just
      an <strong>href</strong>, its only required prop.
    </div>
  ))
  .add('new window', () => (
    <div>
      Here is a{' '}
      <NavigationLink href="/404.html" newWindow={true}>
        NavigationLink component
      </NavigationLink>{' '}
      which sets <strong>newWindow: true</strong>. This opens its link securely in a new window.
    </div>
  ))
  .add('unstyled', () => (
    <div>
      Here is a{' '}
      <NavigationLink href="/404.html" unstyled={true}>
        NavigationLink component
      </NavigationLink>{' '}
      which sets <strong>unstyled: true</strong>. This removes the link styling and sets color to
      the primary text color.
    </div>
  ))
  .add('wrapped content', () => (
    <div>
      <NavigationLink href="/404.html">
        <div>
          This NavigationLink component wraps an entire block of text. By default all text content
          within a NavigationLink tag will be styled like a link.
        </div>
      </NavigationLink>
    </div>
  ))
  .add('wrapped content unstyled', () => (
    <div>
      <NavigationLink href="/404.html" unstyled={true}>
        <div>
          This NavigationLink component wraps an entire block of text. It sets{' '}
          <strong>unstyled: true</strong> so nested content will not be styled like a
          NavigationLink.
        </div>
      </NavigationLink>
      <br />
      <NavigationLink href="/404.html" unstyled={true}>
        <div>
          <Text color={TextColor.METADATA}>
            This is another unstyled NavigationLink component wrapping a block of text. This text is
            wrapped by a Text component with <strong>color: TextColor.METADATA</strong>, showing
            that other styles can still be achieved within an unstyled link.
          </Text>
        </div>
      </NavigationLink>
    </div>
  ));
