/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IconSize, IconProps } from '.';
import * as allExportedIcons from './icons';
import Accounts from './icons/Accounts';

describe('<Icon />', () => {
  let component: ShallowWrapper<IconProps, {}>;

  describe('an Icon', () => {
    describe('with minimal options', () => {
      beforeEach(() => {
        component = shallow(<Accounts />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with color', () => {
      beforeEach(() => {
        component = shallow(<Accounts color="blue" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with block', () => {
      beforeEach(() => {
        component = shallow(<Accounts block={true} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with passed size value', () => {
      beforeEach(() => {
        component = shallow(<Accounts size={IconSize.XXLARGE} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(<Accounts className="TEST_CLASSNAME" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('total number of Icons', () => {
    const totalIcons = Object.keys(allExportedIcons).length;
    it('is correct', () => {
      expect(totalIcons).toBe(116);
    });
  });

  describe('each Icon', () => {
    let Icon: any;

    Object.keys(allExportedIcons).forEach((name) => {
      beforeEach(() => {
        Icon = (allExportedIcons as any)[name];
        component = shallow(<Icon />);
      });

      it('has a 240x240 viewbox', () => {
        expect(component.getNode().props.viewBox).toBe('0 0 240 240');
      });
    });
  });
});
