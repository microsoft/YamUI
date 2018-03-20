/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FixedGridColumn, FixedGridColumnProps } from '.';

describe('<FixedGridColumn />', () => {
  let component: ShallowWrapper<FixedGridColumnProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn>grid content</FixedGridColumn>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn className="TEST_CLASSNAME">grid content</FixedGridColumn>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when set to fixed', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn fixed={true}>grid content</FixedGridColumn>);
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when given a width but not fixed', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn width={150}>grid content</FixedGridColumn>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with vertical align middle', () => {
    beforeEach(() => {
      component = shallow(<FixedGridColumn verticalAlign="middle">grid content</FixedGridColumn>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
