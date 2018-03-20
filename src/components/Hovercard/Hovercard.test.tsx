/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Callout from '../Callout';
import { KeyCodes } from '../../util/enums';
import { Hovercard, HovercardProps, HovercardState, TriggerType } from '.';

jest.useFakeTimers();

describe('<Hovercard />', () => {
  let component: ShallowWrapper<HovercardProps, HovercardState>;
  let fullComponent: ReactWrapper<HovercardProps, HovercardState>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>} className="TEST_CLASSNAME">
          <span>Trigger</span>
        </Hovercard>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreaderTitle', () => {
    beforeEach(() => {
      component = shallow(
        <Hovercard
          content={<div>Hovercard content</div>}
          screenreaderTitle="HIDDEN TITLE"
          triggerType={TriggerType.CLICK}
        >
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('click');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('hovercard gets displayed', () => {
    it('via click', () => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>} triggerType={TriggerType.CLICK}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('click');
      expect(component.find('.y-hovercard--modal-container').length).toBe(1);
    });

    it('via hover after delay', () => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
      expect(component.find('.y-hovercard--modal-container').length).toBe(1);
    });
  });

  describe('hovercard properly does not display', () => {
    it('when clicking a hover trigger', () => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('click');
      jest.runTimersToTime(750);
      expect(component.find('.y-hovercard--modal-container').length).toBe(0);
    });

    it('when hovering over a click trigger', () => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>} triggerType={TriggerType.CLICK}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
      expect(component.find('.y-hovercard--modal-container').length).toBe(0);
    });
  });

  describe('mousing over the trigger', () => {
    beforeEach(() => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('mouseEnter');
      jest.runTimersToTime(250);
    });

    it('does not show the hovercard before the show timeout completes', () => {
      expect(component.find('.y-hovercard--modal-container').length).toBe(0);
    });

    describe('then mousing back out before the hovercard is displayed', () => {
      beforeEach(() => {
        component.find('.y-hovercard--trigger').simulate('mouseLeave');
      });

      it('cancels the hovercard from being displayed', () => {
        jest.runAllTimers();
        expect(component.find('.y-hovercard--modal-container').length).toBe(0);
      });
    });
  });

  describe('when visible', () => {
    beforeEach(() => {
      component = shallow(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
      component.find('.y-hovercard--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
    });

    it('is visible', () => {
      expect(component.find('.y-hovercard--modal-container').length).toBe(1);
    });

    describe('and then unmounted', () => {
      beforeEach(() => {
        component.unmount();
      });

      it('should clearTimeout on the window', () => {
        expect(window.clearTimeout).toHaveBeenCalled();
      });
    });

    describe('and the mouse hovers out of the trigger', () => {
      beforeEach(() => {
        component.find('.y-hovercard--trigger').simulate('mouseLeave');
      });

      it('the Hovercard closes after a delay', () => {
        jest.runTimersToTime(500);
        expect(component.find(Callout).length).toBe(0);
      });

      describe('mousing back in', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          component.find('.y-hovercard--trigger').simulate('mouseEnter');
        });

        it('prevents the hovercard from closing', () => {
          jest.runTimersToTime(500);
          expect(component.find(Callout).length).toBe(1);
        });

        describe('and mousing back out', () => {
          beforeEach(() => {
            component.find('.y-hovercard--trigger').simulate('mouseLeave');
          });

          it('allows the Hovercard to close', () => {
            jest.runTimersToTime(500);
            expect(component.find(Callout).length).toBe(0);
          });
        });
      });
    });

    describe('and the mouse hovers out of the modal body', () => {
      beforeEach(() => {
        component.find('.y-hovercard--modal-container').simulate('mouseLeave');
      });

      describe('mousing back in', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          component.find('.y-hovercard--modal-container').simulate('mouseEnter');
        });

        it('prevents the hovercard from closing', () => {
          jest.runTimersToTime(500);
          expect(component.find(Callout).length).toBe(1);
        });

        describe('and mousing back out', () => {
          beforeEach(() => {
            component.find('.y-hovercard--modal-container').simulate('mouseLeave');
          });

          it('allows the Hovercard to close', () => {
            jest.runTimersToTime(500);
            expect(component.find(Callout).length).toBe(0);
          });
        });
      });
    });

    describe('and the ESC key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', { keyCode: KeyCodes.escape } as any);
        document.dispatchEvent(event);
      });

      it('the Hovercard closes immediately', () => {
        expect(component.find(Callout).length).toBe(0);
      });
    });

    describe('and a non-ESC key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', { keyCode: KeyCodes.enter } as any);
        document.dispatchEvent(event);
      });

      it('the Hovercard remains open', () => {
        expect(component.find(Callout).length).toBe(1);
      });
    });
  });

  describe('does not start visible by default', () => {
    beforeEach(() => {
      // Need to fully render to fire off componentDidMount
      fullComponent = mount(
        <Hovercard content={<div>Hovercard content</div>}>
          <span>Trigger</span>
        </Hovercard>,
      );
    });

    it('renders the Hovercard', () => {
      expect(fullComponent.find(Callout).length).toBe(0);
    });
  });

  describe('when asked to start visible', () => {
    beforeEach(() => {
      // Need to fully render to fire off componentDidMount
      fullComponent = mount(
        <Hovercard content={<div>Hovercard content</div>} startVisible={true}>
          <span>Trigger</span>
        </Hovercard>,
      );
    });

    it('renders the Hovercard', () => {
      expect(fullComponent.find(Callout).length).toBe(1);
    });

    describe('when a hover out triggers its close timeout', () => {
      beforeEach(() => {
        fullComponent.find('.y-hovercard--trigger').simulate('mouseLeave');
      });

      describe('and the component is unmounted before the timeout completes', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          fullComponent.unmount();
        });

        it('the timeout has been cleared without throwing an error', () => {
          jest.runTimersToTime(500);
          expect(fullComponent.find('.y-hovercard--trigger').length).toEqual(0);
        });
      });
    });
  });

  describe('callbacks', () => {
    let onHover: jest.Mock;
    let onShow: jest.Mock;
    let onHide: jest.Mock;

    beforeEach(() => {
      onHover = jest.fn();
      onShow = jest.fn();
      onHide = jest.fn();
      component = shallow(
        <Hovercard
          content={<div>Hovercard content</div>}
          onTriggerHover={onHover}
          onContentDisplay={onShow}
          onContentDismiss={onHide}
        >
          <span>Trigger</span>
        </Hovercard>,
      );
    });

    describe('when trigger content is hovered', () => {
      beforeEach(() => {
        component.find('.y-hovercard--trigger').simulate('mouseEnter');
      });

      it('onTriggerHover() is called', () => {
        expect(onHover.mock.calls.length).toBe(1);
      });

      describe('when Hovercard content pops up', () => {
        beforeEach(() => {
          jest.runAllTimers();
        });

        it('onContentDisplay is called when shown', () => {
          expect(onShow.mock.calls.length).toBe(1);
        });

        describe('when Hovercard content is removed', () => {
          beforeEach(() => {
            component.find('.y-hovercard--trigger').simulate('mouseLeave');
            jest.runAllTimers();
          });

          it('onContentDismiss is called', () => {
            expect(onHide.mock.calls.length).toBe(1);
          });
        });
      });
    });
  });
});
