/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Text, { TextProps, TextColor, TextSize } from '.';

describe('<Text />', () => {
  let component: ReactWrapper<TextProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = mount(<Text>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = mount(<Text className="TEST_CLASSNAME">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size', () => {
    beforeEach(() => {
      component = mount(<Text size={TextSize.XLARGE}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size and maxWidth', () => {
    beforeEach(() => {
      component = mount(
        <Text size={TextSize.XLARGE} maxWidth="200px">
          test content
        </Text>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bold', () => {
    beforeEach(() => {
      component = mount(<Text bold={true}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with uppercase', () => {
    beforeEach(() => {
      component = mount(<Text uppercase={true}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with maxWidth 500px', () => {
    beforeEach(() => {
      component = mount(<Text maxWidth="500px">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with color secondary', () => {
    beforeEach(() => {
      component = mount(<Text color={TextColor.SECONDARY}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text', () => {
    beforeEach(() => {
      component = mount(<Text screenreaderText="SCREENREADER TEXT">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text empty string', () => {
    beforeEach(() => {
      component = mount(<Text screenreaderText="">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
