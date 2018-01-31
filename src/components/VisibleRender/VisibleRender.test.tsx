/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Observer from 'react-intersection-observer';
import { shallow, ShallowWrapper } from 'enzyme';
import VisibleRender, { VisibleRenderProps } from './index';

type CallbackProp = ((inView: boolean) => void);
type RenderProp = ((inView: boolean) => React.ReactNode);

describe('<VisibleRender />', () => {
  let component: ShallowWrapper<VisibleRenderProps, {}>;
  const renderInView = () => <span>IN VIEW</span>;
  const renderOutOfView = () => <span>OUT OF VIEW</span>;
  let onEnterCallback: jest.Mock<{}>;
  let onLeaveCallback: jest.Mock<{}>;
  let renderProp: RenderProp;
  let callbackProp: CallbackProp;

  describe('with minimal options', () => {
    beforeEach(() => {
      component = shallow(<VisibleRender />);
      renderProp = component.find(Observer).prop('render') as RenderProp;
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders empty content', () => {
      expect(renderProp(true)).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      onEnterCallback = jest.fn();
      onLeaveCallback = jest.fn();

      component = shallow(
        <VisibleRender
          whenInView={renderInView}
          whenOutOfView={renderOutOfView}
          onEnter={onEnterCallback}
          onLeave={onLeaveCallback}
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
      });

      describe('when in view', () => {
        beforeEach(() => {
          callbackProp(true);
        });

        it('in view callback is properly called', () => {
          expect(onEnterCallback).toHaveBeenCalled();
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
