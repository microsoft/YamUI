/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Strong from '.';

describe('<Strong />', () => {
  let component: ShallowWrapper<NestableBaseComponentProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Strong>Strong text</Strong>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with className', () => {
    beforeEach(() => {
      component = shallow(<Strong className="TEST_CLASSNAME">Strong text</Strong>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
