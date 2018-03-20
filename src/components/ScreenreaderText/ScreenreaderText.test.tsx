/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ScreenreaderText, { ScreenreaderTextProps } from '.';

describe('<ScreenreaderText />', () => {
  let component: ShallowWrapper<ScreenreaderTextProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<ScreenreaderText>text content</ScreenreaderText>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<ScreenreaderText className="TEST_CLASSNAME">test content</ScreenreaderText>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
