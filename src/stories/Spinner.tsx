/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Spinner, { SpinnerColor, SpinnerSize } from '../components/Spinner';
import Block from '../components/Block';

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

const darkWrapper = {
  backgroundColor: '#386cbb',
};

storiesOf('Spinner', module)
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
          <tr style={darkWrapper}>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} />
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
              <Spinner size={SpinnerSize.LARGE} label="Loading" />
            </td>
            <td>
              <Spinner size={SpinnerSize.MEDIUM} label="Loading" />
            </td>
            <td>
              <Spinner size={SpinnerSize.SMALL} label="Loading" />
            </td>
            <td>
              <Spinner size={SpinnerSize.XSMALL} label="Loading" />
            </td>
          </tr>
          <tr style={darkWrapper}>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} label="Loading" />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} label="Loading" />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} label="Loading" />
            </td>
            <td>
              <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} label="Loading" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
