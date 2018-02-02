/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Observer from 'react-intersection-observer';
import { shallow, ShallowWrapper } from 'enzyme';
import VisibilityObserver, { VisibilityObserverProps } from './index';

type CallbackProp = ((inView: boolean) => void);
type RenderProp = ((inView: boolean) => React.ReactNode);

describe('<VisibilityObserver />', () => {
  let component: ShallowWrapper<VisibilityObserverProps, {}>;
  const renderInView = () => <span>IN VIEW</span>;
  const renderOutOfView = () => <span>OUT OF VIEW</span>;
  let onEnterCallback: jest.Mock<{}>;
  let onLeaveCallback: jest.Mock<{}>;
  let renderProp: RenderProp;
  let callbackProp: CallbackProp;

  beforeEach(() => {
    onEnterCallback = jest.fn();
    onLeaveCallback = jest.fn();
  });

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<VisibilityObserver />);
      renderProp = component.find(Observer).prop('render') as RenderProp;
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders empty content via its in-view render prop', () => {
      expect(renderProp(true)).toMatchSnapshot();
    });
  });

  describe('with render, callback, rootMargin and tag options', () => {
    beforeEach(() => {
      component = shallow(
        <VisibilityObserver
          renderInView={renderInView}
          renderOutOfView={renderOutOfView}
          onEnterView={onEnterCallback}
          onLeaveView={onLeaveCallback}
          rootMargin="100px"
          tag="span"
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('Observer rendering', () => {
      let renderProp: RenderProp;

      beforeEach(() => {
        renderProp = component.find(Observer).prop('render') as RenderProp;
      });

      it('in view render matches its snapshot', () => {
        expect(renderProp(true)).toMatchSnapshot();
      });

      it('out of view render matches its snapshot', () => {
        expect(renderProp(false)).toMatchSnapshot();
      });
    });

    describe('Observer callbacks', () => {
      beforeEach(() => {
        callbackProp = component.find(Observer).prop('onChange') as CallbackProp;
        renderProp = component.find(Observer).prop('render') as RenderProp;
      });

      describe('when in view', () => {
        beforeEach(() => {
          callbackProp(true);
        });

        it('in view callback is properly called', () => {
          expect(onEnterCallback).toHaveBeenCalled();
        });

        describe('and scrolled back out of view', () => {
          beforeEach(() => {
            callbackProp(false);
          });

          it('the in-view render prop remains rendered', () => {
            expect(renderProp(true)).toMatchSnapshot();
          });
        });
      });

      describe('when out of view', () => {
        beforeEach(() => {
          callbackProp(false);
        });

        it('out of view callback is properly called', () => {
          expect(onLeaveCallback).toHaveBeenCalled();
        });
      });
    });
  });
});
