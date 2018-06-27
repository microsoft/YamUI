/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BistateButton, BistateButtonProps, BistateButtonState } from '.';

describe('<BistateButton />', () => {
  let component: ShallowWrapper<BistateButtonProps, BistateButtonState>;

  const getProps = () => {
    return {
      text: 'Joined',
      activeProps: {
        text: 'Leave',
      },
    };
  };

  beforeEach(() => {
    component = shallow(<BistateButton {...getProps()} />).dive();
  });

  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when mouse enters', () => {
    beforeEach(() => {
      component.simulate('mouseEnter');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when blurs', () => {
      beforeEach(() => {
        component.simulate('blur');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when mouse leaves', () => {
      beforeEach(() => {
        component.simulate('mouseLeave');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('when focuses', () => {
    beforeEach(() => {
      component.simulate('focus');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when mouse leaves', () => {
      beforeEach(() => {
        component.simulate('mouseLeave');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when blurs', () => {
      beforeEach(() => {
        component.simulate('blur');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with an onMouseEnter prop', () => {
    let onMouseEnter: jest.Mock;

    beforeEach(() => {
      onMouseEnter = jest.fn();
      component = shallow(<BistateButton {...getProps()} onMouseEnter={onMouseEnter} />);
    });

    describe('when the mouse enters', () => {
      beforeEach(() => {
        component.simulate('mouseEnter');
      });

      it('calls onMouseEnter', () => {
        expect(onMouseEnter).toBeCalled();
      });
    });
  });

  describe('with an onMouseLeave prop', () => {
    let onMouseLeave: jest.Mock;

    beforeEach(() => {
      onMouseLeave = jest.fn();
      component = shallow(<BistateButton {...getProps()} onMouseLeave={onMouseLeave} />);
    });

    describe('when the mouse leaves', () => {
      beforeEach(() => {
        component.simulate('mouseLeave');
      });

      it('calls onMouseLeave', () => {
        expect(onMouseLeave).toBeCalled();
      });
    });
  });

  describe('with an onFocus prop', () => {
    let onFocus: jest.Mock;

    beforeEach(() => {
      onFocus = jest.fn();
      component = shallow(<BistateButton {...getProps()} onFocus={onFocus} />);
    });

    describe('when focusing', () => {
      beforeEach(() => {
        component.simulate('focus');
      });

      it('calls onFocus', () => {
        expect(onFocus).toBeCalled();
      });
    });
  });

  describe('with an onBlur prop', () => {
    let onBlur: jest.Mock;

    beforeEach(() => {
      onBlur = jest.fn();
      component = shallow(<BistateButton {...getProps()} onBlur={onBlur} />);
    });

    describe('when blurring', () => {
      beforeEach(() => {
        component.simulate('blur');
      });

      it('calls onBlur', () => {
        expect(onBlur).toBeCalled();
      });
    });
  });
});
