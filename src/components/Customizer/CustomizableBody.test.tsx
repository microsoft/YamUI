/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Body } from './CustomizableBody';
import { ICustomizerProps } from './Customizer.types';

describe('<Body />', () => {
  let component: ShallowWrapper<ICustomizerProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Body />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Body className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with children passed', () => {
    beforeEach(() => {
      component = shallow(<Body>CHILDREN</Body>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
