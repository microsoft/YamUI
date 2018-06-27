/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Customizer, { CustomizerProps, createTheme } from './index';
import Button from '../Button/';

describe('<Customizer />', () => {
  let component: ShallowWrapper<CustomizerProps>;

  describe('with default options', () => {
    beforeEach(() => {
      const grayTheme = createTheme({
        palette: {
          themeDark: '#333',
          neutralDark: '#666',
          themeLighter: '#999',
        },
      });
      component = shallow(
        <Customizer theme={grayTheme}>
          <Button text="I'm Gray" />
        </Customizer>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
