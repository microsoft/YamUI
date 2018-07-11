/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { shallow, ShallowWrapper } from 'enzyme';
import VisibilityObserver, { VisibilityObserverProps } from './index';

describe('<VisibilityObserver />', () => {
  let component: ShallowWrapper<VisibilityObserverProps>;
  const renderInView = () => <span>IN VIEW</span>;
  const renderOutOfView = () => <span>OUT OF VIEW</span>;
  let onEnterCallback: jest.Mock;
  let onLeaveCallback: jest.Mock;
  let inViewEntry: IntersectionObserverEntry;
  let outOfViewEntry: IntersectionObserverEntry;

  beforeEach(() => {
    onEnterCallback = jest.fn();
    onLeaveCallback = jest.fn();
    /* tslint:disable:no-object-literal-type-assertion */
    inViewEntry = {
      boundingClientRect: {} as DOMRect,
      intersectionRatio: 0,
      intersectionRect: {} as DOMRect,
      isIntersecting: true,
      rootBounds: {} as DOMRect,
      target: {} as Element,
      time: 0,
    };
    /* tslint:enable:no-object-literal-type-assertion */
    outOfViewEntry = { ...inViewEntry, isIntersecting: false };
  });

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<VisibilityObserver />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with render, callback and rootMargin options', () => {
    beforeEach(() => {
      component = shallow(
        <VisibilityObserver
          renderInView={renderInView}
          renderOutOfView={renderOutOfView}
          onEnterView={onEnterCallback}
          onLeaveView={onLeaveCallback}
          rootMargin="100px"
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('enters view', () => {
      beforeEach(() => {
        const onChange = component.find(Observer).prop('onChange');
        onChange(inViewEntry, () => {});
        component.update();
      });

      it('matches its snapshot', () => {
        expect(component.children()).toMatchSnapshot();
      });

      it('calls onEnterCallback', () => {
        expect(onEnterCallback).toHaveBeenCalled();
      });

      describe('then leaves view', () => {
        beforeEach(() => {
          const onChange = component.find(Observer).prop('onChange');
          onChange(outOfViewEntry, () => {});
          component.update();
        });

        it('matches its snapshot', () => {
          expect(component.children()).toMatchSnapshot();
        });

        it('calls onLeaveCallback', () => {
          expect(onLeaveCallback).toHaveBeenCalled();
        });
      });
    });

    describe('leaves view', () => {
      beforeEach(() => {
        const onChange = component.find(Observer).prop('onChange');
        onChange(outOfViewEntry, () => {});
        component.update();
      });

      it('matches its snapshot', () => {
        expect(component.children()).toMatchSnapshot();
      });

      it('calls onLeaveCallback', () => {
        expect(onLeaveCallback).toHaveBeenCalled();
      });

      describe('then re-enters view', () => {
        beforeEach(() => {
          const onChange = component.find(Observer).prop('onChange');
          onChange(inViewEntry, () => {});
          component.update();
        });

        it('matches its snapshot', () => {
          expect(component.children()).toMatchSnapshot();
        });

        it('calls onEnterCallback', () => {
          expect(onEnterCallback).toHaveBeenCalled();
        });
      });
    });
  });

  describe('without callbacks', () => {
    beforeEach(() => {
      component = shallow(<VisibilityObserver renderInView={renderInView} renderOutOfView={renderOutOfView} />);
    });

    it('matches snapshot', () => {
      expect(component.children()).toMatchSnapshot();
    });

    describe('enters view', () => {
      beforeEach(() => {
        const onChange = component.find(Observer).prop('onChange');
        onChange(inViewEntry, () => {});
        component.update();
      });

      it('matches snapshot', () => {
        expect(component.children()).toMatchSnapshot();
      });

      describe('and scrolled out of view', () => {
        beforeEach(() => {
          const onChange = component.find(Observer).prop('onChange');
          onChange(outOfViewEntry, () => {});
          component.update();
        });

        it('matches snapshot', () => {
          expect(component.children()).toMatchSnapshot();
        });
      });
    });
  });
});
