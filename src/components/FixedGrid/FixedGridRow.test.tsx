/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FixedGridRow, FixedGridRowProps, GutterSize } from '.';

describe('<FixedGridRow />', () => {
  let component: ShallowWrapper<FixedGridRowProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<FixedGridRow>grid content</FixedGridRow>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<FixedGridRow className="TEST_CLASSNAME">grid content</FixedGridRow>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with gutter size', () => {
    beforeEach(() => {
      component = shallow(<FixedGridRow gutterSize={GutterSize.LARGE}>grid content</FixedGridRow>);
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
