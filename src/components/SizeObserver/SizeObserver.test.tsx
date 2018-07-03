/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SizeObserver, { SizeObserverProps } from './index';

describe('<SizeObserver />', () => {
  let component: ReactWrapper<SizeObserverProps>;
  let onSizeChange: ResizeObserverCallback;

  beforeEach(() => {
    (window as any).ResizeObserver = class {
      constructor(callback: ResizeObserverCallback) {
        onSizeChange = callback;
      }
    };
    ResizeObserver.prototype.disconnect = jest.fn();
    ResizeObserver.prototype.observe = jest.fn();
    ResizeObserver.prototype.unobserve = jest.fn();

    const query = {
      small: {
        maxWidth: 500,
      },
      large: {
        minWidth: 501,
      },
    };

    const renderAt = (size?: string) => {
      switch (size) {
        case 'large':
          return <span>Large</span>;
        case 'small':
          return <span>Small</span>;
        default:
          return <span>Other</span>;
      }
    };

    component = mount(<SizeObserver query={query} renderAt={renderAt} />);
  });

  it('observes the element', () => {
    expect(window.ResizeObserver.prototype.observe).toHaveBeenCalled();
  });

  it('renders at the default size on first render', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when its size changes', () => {
    beforeEach(() => {
      const entries: ResizeObserverEntry[] = [
        {
          target: component.getDOMNode(),
          contentRect: {
            height: 0,
            width: 0,
          } as any,
        },
      ];
      onSizeChange(entries, {} as any);
    });

    it('renders at the corresponding size', () => {
      expect(component).toMatchSnapshot();
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
