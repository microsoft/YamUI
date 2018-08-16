/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Paragraph from '.';

describe('<TextArea />', () => {
  let component: ShallowWrapper<NestableBaseComponentProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Paragraph>paragraph text</Paragraph>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with className', () => {
    beforeEach(() => {
      component = shallow(<Paragraph className="TEST_CLASSNAME">paragraph text</Paragraph>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
