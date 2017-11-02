/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FixedGridColumn, FixedGridColumnProps } from '.';

describe('<FixedGridColumn />', () => {
  let component: ShallowWrapper<FixedGridColumnProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn>grid content</FixedGridColumn>);
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('grid content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-fixedGridColumn')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridColumn className="TEST_CLASSNAME">grid content</FixedGridColumn>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridColumn')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when set to fixed', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn fixed={true}>grid content</FixedGridColumn>);
    });

    it('includes the fixed class name', () => {
      expect(component.hasClass('y-fixedGridColumn__isFixed')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridColumn')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when set to fixed and given a width', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridColumn fixed={true} width={150}>
          grid content
        </FixedGridColumn>,
      );
    });

    it('includes the fixed class name', () => {
      expect(component.hasClass('y-fixedGridColumn__isFixed')).toBe(true);
    });

    it('includes the hasWidth class name', () => {
      expect(component.hasClass('y-fixedGridColumn__hasWidth')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridColumn')).toBe(true);
    });

    it('has a width set in pixels', () => {
      expect(component.first().getNode().props.style.width).toEqual('150px');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when given a width but not fixed', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn width={150}>grid content</FixedGridColumn>);
    });

    it('does not include the fixed class name', () => {
      expect(component.hasClass('y-fixedGridColumn__isFixed')).not.toBe(true);
    });

    it('includes the hasWidth class name', () => {
      expect(component.hasClass('y-fixedGridColumn__hasWidth')).toBe(true);
    });

    it('does not have a width set', () => {
      expect(component.first().getNode().props.style).toEqual({});
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
