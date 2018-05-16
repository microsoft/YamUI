/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Pivot, { PivotProps, PivotItem } from './index';

describe('<Pivot />', () => {
  let component: ShallowWrapper<PivotProps>;
  let onChange: jest.Mock<Function>;

  const getComponent = (overrides: Partial<PivotProps>) => {
    const pivotItems: PivotItem[] = [
      { key: '1', text: 'Tab 1', ariaLabel: 'test' },
      { key: '2', text: 'Tab 2' },
      { key: '3', text: 'Tab 3' },
    ];

    return shallow(<Pivot selectedKey="1" pivotItems={pivotItems} onChange={jest.fn()} {...overrides} />);
  };

  describe('with default options', () => {
    beforeEach(() => {
      onChange = jest.fn();
      component = getComponent({ onChange });
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when an already selected tab is clicked', () => {
      beforeEach(() => {
        component.find('StyledPivotBase').simulate('linkClick', {
          props: { itemKey: '1' },
        });
      });

      it('calls onChange prop', () => {
        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('when a non selected tab is clicked', () => {
      beforeEach(() => {
        component.find('StyledPivotBase').simulate('linkClick', {
          props: { itemKey: '2' },
        });
      });

      it('calls onChange prop', () => {
        expect(onChange).toHaveBeenCalled();
      });
    });
  });

  describe('with isDark as true', () => {
    beforeEach(() => {
      component = getComponent({ isDark: true });
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
