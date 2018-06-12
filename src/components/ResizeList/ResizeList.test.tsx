/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ResizeList, { ResizeListProps, GutterSize } from './index';
import { ResizeGroup } from 'office-ui-fabric-react/lib/ResizeGroup';

describe('<ResizeList />', () => {
  let component: ShallowWrapper<ResizeListProps>;
  let items: React.ReactNode[];
  let actionItem: React.ReactNode;

  beforeEach(() => {
    items = [<div key="1">1</div>, <div key="2">2</div>, <div key="3">3</div>, <div key="4">4</div>];
    actionItem = <div>action></div>;
  });

  describe('with items', () => {
    beforeEach(() => {
      component = shallow(<ResizeList items={items} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with action item', () => {
    beforeEach(() => {
      component = shallow(<ResizeList items={items} actionItem={actionItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<ResizeList items={items} className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with gutter size', () => {
    beforeEach(() => {
      component = shallow(<ResizeList items={items} gutterSize={GutterSize.XLARGE} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when resizing the component', () => {
    let data: { count: number; cacheKey: string } | undefined;

    describe('down to the next smaller size', () => {
      beforeEach(() => {
        data = undefined;
        component = shallow(<ResizeList items={items} />);
        const onReduceData = component.find(ResizeGroup).prop('onReduceData');
        data = onReduceData({ count: 4, cacheKey: '4' });
      });

      it('onReduceData returns the correct object', () => {
        expect(data).toEqual({ count: 3, cacheKey: '3' });
      });
    });

    describe('down to zero', () => {
      beforeEach(() => {
        data = undefined;
        component = shallow(<ResizeList items={items} />);
        const onReduceData = component.find(ResizeGroup).prop('onReduceData');
        data = onReduceData({ count: 0, cacheKey: '0' });
      });

      it('onReduceData returns undefined', () => {
        expect(data).toBeUndefined();
      });
    });

    describe('up to the next larger size', () => {
      beforeEach(() => {
        data = undefined;
        component = shallow(<ResizeList items={items} />);
        const onGrowData = component.find(ResizeGroup).prop('onGrowData') as any;
        data = onGrowData({ count: 3, cacheKey: '3' });
      });

      it('onGrowData returns the correct object', () => {
        expect(data).toEqual({ count: 4, cacheKey: '4' });
      });
    });

    describe('larger than the number of items rendered', () => {
      beforeEach(() => {
        data = undefined;
        component = shallow(<ResizeList items={items} />);
        const onGrowData = component.find(ResizeGroup).prop('onGrowData') as any;
        data = onGrowData({ count: 4, cacheKey: '4' });
      });

      it('onGrowData returns undefined', () => {
        expect(data).toBeUndefined();
      });
    });
  });

  describe('onRenderData prop', () => {
    beforeEach(() => {
      component = shallow(<ResizeList items={items} />);
    });

    it('matches its snapshot', () => {
      expect(component.find(ResizeGroup).prop('onRenderData')({ count: 4, cacheKey: '4' })).toMatchSnapshot();
    });

    describe('with actionItem', () => {
      beforeEach(() => {
        component = shallow(<ResizeList items={items} actionItem={actionItem} />);
      });

      it('matches its snapshot', () => {
        expect(component.find(ResizeGroup).prop('onRenderData')({ count: 4, cacheKey: '4' })).toMatchSnapshot();
      });
    });
  });
});
