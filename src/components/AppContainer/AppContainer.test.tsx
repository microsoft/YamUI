/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import AppContainer from '.';

describe('<AppContainer />', () => {
  let component: ShallowWrapper<NestableBaseComponentProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<AppContainer>paragraph text</AppContainer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with className', () => {
    beforeEach(() => {
      component = shallow(<AppContainer className="TEST_CLASSNAME">paragraph text</AppContainer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
