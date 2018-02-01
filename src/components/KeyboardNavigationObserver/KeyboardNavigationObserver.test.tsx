/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
// jest.mock('../../util/accessibility/keyboardNavigation', () => ({
//   getMode: () => 'mouse',
//   subscribe: (callback: any) => callback('mouse'),
//   unsubscribe: () => 'noop',
// }));

import * as React from 'react';
import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import KeyboardNavigationObserver, {
  KeyboardNavigationObserverProps,
  KeyboardNavigationObserverState,
} from './index';
import * as keyboardNavigation from '../../util/accessibility/keyboardNavigation';

describe('<KeyboardNavigationObserver />', () => {
  let component: ShallowWrapper<KeyboardNavigationObserverProps, KeyboardNavigationObserverState>;
  let mounted: ReactWrapper<KeyboardNavigationObserverProps, KeyboardNavigationObserverState>;

  const renderInKeyboardMode = () => <span>KEYBOARD</span>;
  const renderInMouseMode = () => <span>MOUSE</span>;

  let onEnterKeyboardModeCallback: jest.Mock<{}>;
  let onEnterMouseModeCallback: jest.Mock<{}>;

  beforeEach(() => {
    onEnterKeyboardModeCallback = jest.fn();
    onEnterMouseModeCallback = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('in mouse mode', () => {
    beforeEach(() => {
      jest.spyOn(keyboardNavigation, 'getMode').mockReturnValue('mouse');
    });

    describe('with minimal options', () => {
      beforeEach(() => {
        component = shallow(<KeyboardNavigationObserver />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with all options', () => {
      beforeEach(() => {
        component = shallow(
          <KeyboardNavigationObserver
            renderInKeyboardMode={renderInKeyboardMode}
            renderInMouseMode={renderInMouseMode}
            onEnterKeyboardMode={onEnterKeyboardModeCallback}
            onEnterMouseMode={onEnterMouseModeCallback}
          />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when mounted and mode is switched to keyboard', () => {
      beforeEach(() => {
        jest
          .spyOn(keyboardNavigation, 'subscribe')
          .mockImplementation((callback: any) => callback('keyboard'));

        mounted = mount(
          <KeyboardNavigationObserver
            renderInKeyboardMode={renderInKeyboardMode}
            renderInMouseMode={renderInMouseMode}
            onEnterKeyboardMode={onEnterKeyboardModeCallback}
            onEnterMouseMode={onEnterMouseModeCallback}
          />,
        );
      });

      afterEach(() => {
        if (mounted) {
          mounted.unmount();
        }
      });

      it('triggers its onEnterKeyboardMode callback', () => {
        expect(onEnterKeyboardModeCallback).toHaveBeenCalled();
      });

      it('matches its snapshot', () => {
        expect(mounted).toMatchSnapshot();
      });
    });
  });

  describe('in keyboard mode', () => {
    beforeEach(() => {
      jest.spyOn(keyboardNavigation, 'getMode').mockReturnValue('keyboard');
    });

    describe('with all options', () => {
      beforeEach(() => {
        component = shallow(
          <KeyboardNavigationObserver
            renderInKeyboardMode={renderInKeyboardMode}
            renderInMouseMode={renderInMouseMode}
            onEnterKeyboardMode={onEnterKeyboardModeCallback}
            onEnterMouseMode={onEnterMouseModeCallback}
          />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('when mounted and mode is switched to mouse', () => {
      beforeEach(() => {
        jest
          .spyOn(keyboardNavigation, 'subscribe')
          .mockImplementation((callback: any) => callback('mouse'));

        mounted = mount(
          <KeyboardNavigationObserver
            renderInKeyboardMode={renderInKeyboardMode}
            renderInMouseMode={renderInMouseMode}
            onEnterKeyboardMode={onEnterKeyboardModeCallback}
            onEnterMouseMode={onEnterMouseModeCallback}
          />,
        );
      });

      afterEach(() => {
        if (mounted) {
          mounted.unmount();
        }
      });

      it('triggers its onEnterMouseMode callback', () => {
        expect(onEnterMouseModeCallback).toHaveBeenCalled();
      });

      it('matches its snapshot', () => {
        expect(mounted).toMatchSnapshot();
      });
    });
  });
});
