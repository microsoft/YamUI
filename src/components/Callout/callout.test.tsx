/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import { Key } from '../../util/enums/key';
import { Callout as FabricCallout } from 'office-ui-fabric-react/lib/Callout';
import { Callout, CalloutProps, CalloutState, DirectionalHint, TriggerType } from './index';
import ScreenreaderText from '../ScreenreaderText';

describe('<Callout />', () => {
  jest.useFakeTimers();

  let component: ShallowWrapper<CalloutProps, {}>;
  let fullComponent: ReactWrapper<CalloutProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
    });

    describe('at initial render', () => {
      it('renders its trigger content', () => {
        expect(component.find('.y-callout--trigger').text()).toEqual('Trigger');
      });

      it('contains its base className', () => {
        expect(component.hasClass('y-callout')).toBe(true);
      });

      it('does not show the callout', () => {
        expect(component.find(FabricCallout).length).toBe(0);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Callout content={<div>Callout content</div>} className="TEST_CLASSNAME">
          <span>Trigger</span>
        </Callout>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-callout')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreaderTitle', () => {
    beforeEach(() => {
      component = shallow(
        <Callout content={<div>Callout content</div>} screenreaderTitle="HIDDEN TITLE" triggerType={TriggerType.CLICK}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('click');
    });

    it('renders the hidden title', () => {
      expect(component.find('.y-callout--modal-container ScreenreaderText h1').text()).toEqual('HIDDEN TITLE');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('callout gets displayed', () => {
    it('via click', () => {
      component = shallow(
        <Callout content={<div>Callout content</div>} triggerType={TriggerType.CLICK}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('click');
      expect(component.find('.y-callout--modal-container').length).toBe(1);
    });

    it('via hover after delay', () => {
      component = shallow(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
      expect(component.find('.y-callout--modal-container').length).toBe(1);
    });
  });

  describe('callout properly does not display', () => {
    it('when clicking a hover trigger', () => {
      component = shallow(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('click');
      jest.runTimersToTime(750);
      expect(component.find('.y-callout--modal-container').length).toBe(0);
    });

    it('when hovering over a click trigger', () => {
      component = shallow(
        <Callout content={<div>Callout content</div>} triggerType={TriggerType.CLICK}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
      expect(component.find('.y-callout--modal-container').length).toBe(0);
    });
  });

  describe('mousing over the trigger', () => {
    beforeEach(() => {
      component = shallow(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('mouseEnter');
      jest.runTimersToTime(250);
    });

    it('does not show the callout before the show timeout completes', () => {
      expect(component.find('.y-callout--modal-container').length).toBe(0);
    });

    describe('then mousing back out before the callout is displayed', () => {
      beforeEach(() => {
        component.find('.y-callout--trigger').simulate('mouseLeave');
      });

      it('cancels the callout from being displayed', () => {
        jest.runAllTimers();
        expect(component.find('.y-callout--modal-container').length).toBe(0);
      });
    });
  });

  describe('when visible', () => {
    beforeEach(() => {
      component = shallow(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
      component.find('.y-callout--trigger').simulate('mouseEnter');
      jest.runTimersToTime(750);
    });

    it('is visible', () => {
      expect(component.find('.y-callout--modal-container').length).toBe(1);
    });

    describe('and the mouse hovers out of the trigger', () => {
      beforeEach(() => {
        component.find('.y-callout--trigger').simulate('mouseLeave');
      });

      it('the Callout closes after a delay', () => {
        jest.runTimersToTime(500);
        expect(component.find(FabricCallout).length).toBe(0);
      });

      describe('mousing back in', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          component.find('.y-callout--trigger').simulate('mouseEnter');
        });

        it('prevents the callout from closing', () => {
          jest.runTimersToTime(500);
          expect(component.find(FabricCallout).length).toBe(1);
        });

        describe('and mousing back out', () => {
          beforeEach(() => {
            component.find('.y-callout--trigger').simulate('mouseLeave');
          });

          it('allows the Callout to close', () => {
            jest.runTimersToTime(500);
            expect(component.find(FabricCallout).length).toBe(0);
          });
        });
      });
    });

    describe('and the mouse hovers out of the modal body', () => {
      beforeEach(() => {
        component.find('.y-callout--modal-container').simulate('mouseLeave');
      });

      describe('mousing back in', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          component.find('.y-callout--modal-container').simulate('mouseEnter');
        });

        it('prevents the callout from closing', () => {
          jest.runTimersToTime(500);
          expect(component.find(FabricCallout).length).toBe(1);
        });

        describe('and mousing back out', () => {
          beforeEach(() => {
            component.find('.y-callout--modal-container').simulate('mouseLeave');
          });

          it('allows the Callout to close', () => {
            jest.runTimersToTime(500);
            expect(component.find(FabricCallout).length).toBe(0);
          });
        });
      });
    });

    describe('and the ESC key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', ({ keyCode: Key.Escape } as any));
        document.dispatchEvent(event);
      });

      it('the Callout closes immediately', () => {
        expect(component.find(FabricCallout).length).toBe(0);
      });
    });

    describe('and a non-ESC key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', ({ keyCode: Key.Enter } as any));
        document.dispatchEvent(event);
      });

      it('the Callout remains open', () => {
        expect(component.find(FabricCallout).length).toBe(1);
      });
    });
  });

  describe('does not start visible by default', () => {
    beforeEach(() => {
      // Need to fully render to fire off componentDidMount
      fullComponent = mount(
        <Callout content={<div>Callout content</div>}>
          <span>Trigger</span>
        </Callout>,
      );
    });

    it('renders the Callout', () => {
      expect(fullComponent.find(FabricCallout).length).toBe(0);
    });
  });

  describe('when asked to start visible', () => {
    beforeEach(() => {
      // Need to fully render to fire off componentDidMount
      fullComponent = mount(
        <Callout content={<div>Callout content</div>} startVisible={true}>
          <span>Trigger</span>
        </Callout>,
      );
    });

    it('renders the Callout', () => {
      expect(fullComponent.find(FabricCallout).length).toBe(1);
    });

    describe('when a hover out triggers its close timeout', () => {
      beforeEach(() => {
        fullComponent.find('.y-callout--trigger').simulate('mouseLeave');
      });

      describe('and the component is unmounted before the timeout completes', () => {
        beforeEach(() => {
          jest.runTimersToTime(250);
          fullComponent.unmount();
        });

        it('the timeout has been cleared without throwing an error', () => {
          jest.runTimersToTime(500);
          expect(fullComponent.find('.y-callout--trigger').length).toEqual(0);
        });
      });
    });
  });

  describe('callbacks', () => {
    let onHover: jest.Mock<{}>;
    let onShow: jest.Mock<{}>;
    let onHide: jest.Mock<{}>;
    beforeEach(() => {
      onHover = jest.fn();
      onShow = jest.fn();
      onHide = jest.fn();
      component = shallow(
        <Callout content={<div>Callout content</div>} onTriggerHover={onHover}
                 onContentDisplay={onShow}  onContentDismiss={onHide}>
          <span>Trigger</span>
        </Callout>,
      );
    });

    describe('when trigger content is hovered', () => {
      beforeEach(() => {
        component.find('.y-callout--trigger').simulate('mouseEnter');
      });

      it('onTriggerHover() is called', () => {
        expect(onHover.mock.calls.length).toBe(1);
      });

      describe('when Callout content pops up', () => {
        beforeEach(() => {
          jest.runAllTimers();
        });

        it('onContentDisplay is called when shown', () => {
          expect(onShow.mock.calls.length).toBe(1);
        });

        describe('when Callout content is removed', () => {
          beforeEach(() => {
            component.find('.y-callout--trigger').simulate('mouseLeave');
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
