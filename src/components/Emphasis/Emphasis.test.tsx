/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Emphasis from '.';

describe('<Emphasis />', () => {
  let component: ShallowWrapper<NestableBaseComponentProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Emphasis>Emphasis text</Emphasis>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with className', () => {
    beforeEach(() => {
      component = shallow(<Emphasis className="TEST_CLASSNAME">Emphasis text</Emphasis>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
