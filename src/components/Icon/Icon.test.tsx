/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Accounts, IconSize, IconProps } from '.';
import * as allExportedIcons from './icons';

describe('<Icon />', () => {
  let component: ShallowWrapper<IconProps, {}>;

  describe('an Icon', () => {
      
    describe('with minimal options', () => {
      beforeEach(() => {
        component = shallow(<Accounts />);
      });

      it('contains its base className', () => {
        expect(component.hasClass('y-icon')).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with color', () => {
      beforeEach(() => {
        component = shallow(<Accounts color="blue" />);
      });

      it('contains the given color style', () => {
        expect(component.getNode().props.style.color).toEqual('blue');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with block', () => {
      beforeEach(() => {
        component = shallow(<Accounts block={true} />);
      });

      it('contains its block className', () => {
        expect(component.hasClass('y-icon__isBlock')).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with passed size value', () => {
      beforeEach(() => {
        component = shallow(<Accounts size={IconSize.XXLARGE} />);
      });

      it('is the correct height', () => {
        expect(component.getNode().props.style.height).toBe(IconSize.XXLARGE + 'px');
      });

      it('is the correct width', () => {
        expect(component.getNode().props.style.width).toBe(IconSize.XXLARGE + 'px');
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(<Accounts className="TEST_CLASSNAME" />);
      });

      it('includes that className', () => {
        expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
      });

      it('still includes its base className', () => {
        expect(component.hasClass('y-icon')).toBe(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('total number of Icons', () => {
    const totalIcons = Object.keys(allExportedIcons).length;
    it('is correct', () => {
      expect(totalIcons).toBe(1);
    });
  });

  describe('each Icon', () => {
    // TODO: LOOP
    beforeEach(() => {
      component = shallow(<Accounts />);
    });

    it('has the correct viewBox', () => {
      expect(component.getNode().props.viewBox).toBe('0 0 240 240');
    });
  });
});
