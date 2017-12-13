/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Text, { TextProps, TextColor, TextSize } from '.';

describe('<Text />', () => {
  let component: ShallowWrapper<TextProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Text>test content</Text>);
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('test content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-text')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Text className="TEST_CLASSNAME">test content</Text>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-text')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size', () => {
    beforeEach(() => {
      component = shallow(<Text size={TextSize.XLARGE}>test content</Text>);
    });

    it('renders the correct size className', () => {
      expect(component.hasClass('y-textSize-xLarge')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-text')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bold', () => {
    beforeEach(() => {
      component = shallow(<Text bold={true}>test content</Text>);
    });

    it('renders the bold className', () => {
      expect(component.hasClass('y-text__bold')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with uppercase', () => {
    beforeEach(() => {
      component = shallow(<Text uppercase={true}>test content</Text>);
    });

    it('renders the uppercase className', () => {
      expect(component.hasClass('y-text__uppercase')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with maxWidth 500px', () => {
    beforeEach(() => {
      component = shallow(<Text maxWidth="500px">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid color', () => {
    beforeEach(() => {
      component = shallow(<Text color={TextColor.SECONDARY}>test content</Text>);
    });

    it('renders the correct color className', () => {
      expect(component.hasClass('y-text__color-secondary')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
