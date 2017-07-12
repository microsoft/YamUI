/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FixedGridRow, FixedGridRowProps, GutterSize } from './index';

describe('<FixedGridRow />', () => {
  let component: ShallowWrapper<FixedGridRowProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridRow>grid content</FixedGridRow>,
      );
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('grid content');
    });

    it('defaults to SMALL gutter size (8px)', () => {
      expect(component.hasClass('y-fixedGridRow__gutter-small')).toBe(true);
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-fixedGridRow')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridRow className="TEST_CLASSNAME">grid content</FixedGridRow>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridRow')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with gutter size', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridRow gutterSize={GutterSize.LARGE}>grid content</FixedGridRow>,
      );
    });

    it('includes the gutter size class name', () => {
      expect(component.hasClass('y-fixedGridRow__gutter-large')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridRow')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bottom spacing', () => {
    beforeEach(() => {
      component = shallow(
        <FixedGridRow bottomSpacing={GutterSize.XLARGE}>grid content</FixedGridRow>,
      );
    });

    it('includes the gutter size class name', () => {
      expect(component.hasClass('y-fixedGridRow__bottomSpacing-xLarge')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fixedGridRow')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

});
