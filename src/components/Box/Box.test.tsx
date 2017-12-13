/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Box, { BoxBorderType, BoxPaddingSize, BoxProps } from './index';

describe('<Box />', () => {
  let component: ShallowWrapper<BoxProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Box />);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-box')).toBe(true);
    });

    it('has correct default border class', () => {
      expect(component.hasClass(`y-box__borderType-${BoxBorderType.SQUARE}`)).toBe(true);
    });

    it('has correct default padding class', () => {
      expect(component.hasClass(`y-box__padding-${BoxPaddingSize.SMALL}`)).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Box className="TEST_CLASSNAME" />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-box')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with border type', () => {
    describe('square', () => {
      beforeEach(() => {
        component = shallow(
          <Box borderType={BoxBorderType.SQUARE} />,
        );
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__borderType-${BoxBorderType.SQUARE}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('soft', () => {
      beforeEach(() => {
        component = shallow(<Box borderType={BoxBorderType.SOFT} />);
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__borderType-${BoxBorderType.SOFT}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('round', () => {
      beforeEach(() => {
        component = shallow(<Box borderType={BoxBorderType.ROUND} />);
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__borderType-${BoxBorderType.ROUND}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with padding', () => {
    describe('large', () => {
      beforeEach(() => {
        component = shallow(<Box padding={BoxPaddingSize.LARGE} />);
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__padding-${BoxPaddingSize.LARGE}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('medium', () => {
      beforeEach(() => {
        component = shallow(<Box padding={BoxPaddingSize.MEDIUM} />);
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__padding-${BoxPaddingSize.MEDIUM}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('small', () => {
      beforeEach(() => {
        component = shallow(<Box padding={BoxPaddingSize.SMALL} />);
      });

      it('includes the correct class', () => {
        expect(component.hasClass(`y-box__padding-${BoxPaddingSize.SMALL}`)).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with children passed', () => {
    const child = 'child test';
    beforeEach(() => {
      component = shallow(<Box>{child}</Box>);
    });

    it('renders the correct child', () => {
      expect(component.text()).toEqual('child test');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
