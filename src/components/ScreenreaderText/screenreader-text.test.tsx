/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ScreenreaderText, { ScreenreaderTextProps } from '.';

describe('<ScreenreaderText />', () => {
  let component: ShallowWrapper<ScreenreaderTextProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<ScreenreaderText>text content</ScreenreaderText>);
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('text content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-screenreaderText')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <ScreenreaderText className="TEST_CLASSNAME">test content</ScreenreaderText>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-screenreaderText')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
