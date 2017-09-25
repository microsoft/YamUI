/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Spinner, { SpinnerSize } from '../components/Spinner';
import Block from '../components/Block';

const readme = require('../components/Spinner/README');

const tableHeader = (
  <thead>
    <tr>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
);

storiesOf('Spinner', module)
  .addDecorator(withReadme(readme))
  .add('without label', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Spinner size={SpinnerSize.LARGE} />
            </td>
            <td>
              <Spinner size={SpinnerSize.MEDIUM} />
            </td>
            <td>
              <Spinner size={SpinnerSize.SMALL} />
            </td>
            <td>
              <Spinner size={SpinnerSize.XSMALL} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('with label', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Spinner size={SpinnerSize.LARGE} label="Loading..." />
            </td>
            <td>
              <Spinner size={SpinnerSize.MEDIUM} label="Loading..." />
            </td>
            <td>
              <Spinner size={SpinnerSize.SMALL} label="Loading..." />
            </td>
            <td>
              <Spinner size={SpinnerSize.XSMALL} label="Loading..." />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
