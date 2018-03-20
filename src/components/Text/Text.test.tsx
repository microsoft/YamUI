/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Text, { TextProps, TextColor, TextSize } from '.';

describe('<Text />', () => {
  let component: ShallowWrapper<TextProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Text>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Text className="TEST_CLASSNAME">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size', () => {
    beforeEach(() => {
      component = shallow(<Text size={TextSize.XLARGE}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bold', () => {
    beforeEach(() => {
      component = shallow(<Text bold={true}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with uppercase', () => {
    beforeEach(() => {
      component = shallow(<Text uppercase={true}>test content</Text>);
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

  describe('with color secondary', () => {
    beforeEach(() => {
      component = shallow(<Text color={TextColor.SECONDARY}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text', () => {
    beforeEach(() => {
      component = shallow(<Text screenreaderText="SCREENREADER TEXT">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text empty string', () => {
    beforeEach(() => {
      component = shallow(<Text screenreaderText="">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
