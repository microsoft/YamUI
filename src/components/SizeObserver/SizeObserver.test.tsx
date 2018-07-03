/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SizeObserver, { SizeObserverProps } from './index';

describe('<SizeObserver />', () => {
  let component: ReactWrapper<SizeObserverProps>;
  let onSizeChange: ResizeObserverCallback;

  beforeEach(() => {
    // tslint:disable-next-line:no-function-expression
    (window as any).ResizeObserver = function(callback: ResizeObserverCallback) {
      onSizeChange = callback;
    };
    ResizeObserver.prototype.disconnect = jest.fn();
    ResizeObserver.prototype.observe = jest.fn();
    ResizeObserver.prototype.unobserve = jest.fn();

    const query = {
      small: {
        maxWidth: 500,
        maxHeight: 500,
      },
      large: {
        minWidth: 501,
        minHeight: 501,
      },
    };

    const renderAt = jest.fn((size?: string) => {
      switch (size) {
        case 'large':
          return <span>Large</span>;
        case 'small':
          return <span>Small</span>;
        default:
          return <span>Other</span>;
      }
    });

    component = mount(<SizeObserver query={query} renderAt={renderAt} />);
  });

  it('observes the element', () => {
    expect(window.ResizeObserver.prototype.observe).toHaveBeenCalled();
  });

  it('renders at the default size on first render', () => {
    expect(component.find('span')).toMatchSnapshot();
  });

  describe('when its size changes', () => {
    beforeEach(() => {
      const entries: ResizeObserverEntry[] = [
        {
          target: component.getDOMNode(),
          contentRect: {
            height: 500,
            width: 500,
          } as any,
        },
      ];
      onSizeChange(entries, {} as any);
    });

    it('renders at the corresponding size', () => {
      expect(component.update().find('span')).toMatchSnapshot();
    });
  });

  describe('when its size changes twice but both changes match the same query', () => {
    beforeEach(() => {
      const entries: ResizeObserverEntry[] = [
        {
          target: component.getDOMNode(),
          contentRect: {
            height: 501,
            width: 501,
          } as any,
        },
      ];
      onSizeChange(entries, {} as any);
      onSizeChange(entries, {} as any);
    });

    it('renders at the corresponding size', () => {
      expect(component.update().find('span')).toMatchSnapshot();
    });

    it('calls renderAt once for initialize and once for the first size change', () => {
      expect(component.prop('renderAt')).toHaveBeenCalledTimes(2);
    });
  });

  describe('when unmounted', () => {
    beforeEach(() => {
      component.unmount();
    });

    it('disconnects', () => {
      expect(window.ResizeObserver.prototype.disconnect).toHaveBeenCalled();
    });
  });
});
