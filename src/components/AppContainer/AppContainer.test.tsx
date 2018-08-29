/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import AppContainer from '.';
import { darkTheme } from '../Customizer';

describe('<AppContainer />', () => {
  let component: ShallowWrapper<NestableBaseComponentProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<AppContainer>app container text</AppContainer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with className', () => {
    beforeEach(() => {
      component = shallow(<AppContainer className="TEST_CLASSNAME">app container text</AppContainer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with theme', () => {
    beforeEach(() => {
      component = shallow(<AppContainer theme={darkTheme}>app container text</AppContainer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
