/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Pivot, { PivotProps, PivotItem, PivotLinkSize } from './index';

describe('<Pivot />', () => {
  let component: ShallowWrapper<PivotProps>;
  let onChange: jest.Mock<Function>;

  const getComponent = (overrides: Partial<PivotProps>) => {
    const pivotItems: PivotItem[] = [
      { key: '1', text: 'Tab 1', ariaLabel: 'test' },
      { key: '2', text: 'Tab 2' },
      { key: '3', text: 'Tab 3' },
    ];

    const props: PivotProps = {
      selectedKey: '1',
      pivotItems,
      onChange: jest.fn(),
      linkSize: PivotLinkSize.normal,
      ...overrides,
    };

    return shallow<PivotProps>(<Pivot {...props} />);
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

  describe('with overDarkBackground as true', () => {
    beforeEach(() => {
      component = getComponent({ overDarkBackground: true });
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when given a className', () => {
    beforeEach(() => {
      component = getComponent({ className: 'Test' });
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when a PivotItem is given an itemCount', () => {
    beforeEach(() => {
      const pivotItems: PivotItem[] = [{ key: '4', text: 'Tab 4', itemCount: 15 }];
      component = shallow(<Pivot selectedKey="1" pivotItems={pivotItems} onChange={jest.fn()} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with large pivot items', () => {
    beforeEach(() => {
      component = getComponent({ linkSize: PivotLinkSize.large });
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
