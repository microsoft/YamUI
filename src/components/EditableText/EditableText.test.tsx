/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import Clickable from '../Clickable';
import TextField from '../TextField';
import CustomizableEditableText, { EditableText } from './EditableText';
import { EditableTextProps } from './EditableText.types';
import { Focusable } from '../../util/Focusable';
import Customizer, { defaultTheme } from '../Customizer';

type SetFocusableRef = (focusable: Focusable) => void;
type EventHandler = (event: any) => void;
type ChangeHandler = (text: string) => void;

describe('<EditableText />', () => {
  let component: ShallowWrapper<EditableTextProps>;
  let fakeEvent: any;

  beforeEach(() => {
    fakeEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };
  });

  describe('with promptText', () => {
    beforeEach(() => {
      component = shallow(<EditableText promptText="PROMPT TEXT" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<EditableText className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all props except promptText', () => {
    let updateCallback: jest.Mock;
    let beginCallback: jest.Mock;
    let endCallback: jest.Mock;

    beforeEach(() => {
      updateCallback = jest.fn();
      beginCallback = jest.fn();
      endCallback = jest.fn();

      component = shallow(
        <EditableText
          text="TEXT"
          placeHolder="PLACEHOLDER"
          maxLength={120}
          onUpdate={updateCallback}
          onBeginEditing={beginCallback}
          onEndEditing={endCallback}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.find(Clickable).simulate('click', fakeEvent);
      });

      it('enters edit mode', () => {
        expect(component).toMatchSnapshot();
      });

      it('triggers the onBeginEditing callback', () => {
        expect(beginCallback).toHaveBeenCalledTimes(1);
      });

      // Getting coverage on componentDidUpdate, necessary because of https://github.com/airbnb/enzyme/issues/1452
      describe('when triggered to enter edit mode again', () => {
        beforeEach(() => {
          (component.instance() as any).componentDidUpdate({}, { isEditing: true });
        });

        it('remains in edit mode', () => {
          expect(component).toMatchSnapshot();
        });
      });

      // Getting coverage on setTextFieldFocus, necessary because of https://github.com/airbnb/enzyme/issues/1452
      describe('when triggered to enter edit mode without private textFieldRef', () => {
        beforeEach(() => {
          (component.instance() as any).componentDidUpdate({}, { isEditing: false });
        });

        it('remains in edit mode', () => {
          expect(component).toMatchSnapshot();
        });
      });

      describe('and text is changed', () => {
        beforeEach(() => {
          const onChange = component.find(TextField).prop('onChange') as ChangeHandler;
          onChange('new text');
        });

        describe('and ENTER is pressed', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 13, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });

          it('triggers the update callback with the correct value', () => {
            expect(updateCallback).toHaveBeenCalledWith('new text');
          });

          it('triggers the onEndEditing callback', () => {
            expect(endCallback).toHaveBeenCalledTimes(1);
          });
        });

        describe('and ESC is pressed', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 27, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });

          it('does not trigger the update callback', () => {
            expect(updateCallback).not.toHaveBeenCalled();
          });

          it('triggers the onEndEditing callback', () => {
            expect(endCallback).toHaveBeenCalledTimes(1);
          });
        });

        describe('and an unimportant key is pressed', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 65, preventDefault: jest.fn() });
            component.update();
          });

          it('remains in edit mode', () => {
            expect(component).toMatchSnapshot();
          });

          it('does not trigger the update callback', () => {
            expect(updateCallback).not.toHaveBeenCalled();
          });

          it('does not trigger the onEndEditing callback', () => {
            expect(endCallback).not.toHaveBeenCalled();
          });
        });
      });
    });
  });

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<EditableText />);
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.find(Clickable).simulate('click', fakeEvent);
      });

      describe('and text is changed', () => {
        beforeEach(() => {
          const onChange = component.find(TextField).prop('onChange') as ChangeHandler;
          onChange('new text');
        });

        describe('and ENTER is pressed', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 13, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });
        });

        describe('and ESC is pressed', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 27, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });
        });
      });
    });

    describe('when focusableRefs are provided', () => {
      let clickableFocusable: Focusable;
      let textFieldFocusable: Focusable;

      beforeEach(() => {
        // Populate the mock focus listeners. We need to force the control into
        // edit mode, and then close it back up again, just so that we can inject
        // both of these ahead of testing.

        clickableFocusable = { focus: jest.fn() };
        const setClickableFocusable = component.find(Clickable).prop('focusableRef') as SetFocusableRef;
        setClickableFocusable(clickableFocusable);

        // Force the component open...
        component.find(Clickable).simulate('click', fakeEvent);

        // Now we can hook up the focusable ref for the TextField...
        textFieldFocusable = { focus: jest.fn() };
        const setTextFieldFocusable = component.find(TextField).prop('focusableRef') as SetFocusableRef;
        setTextFieldFocusable(textFieldFocusable);

        // Now close the component to get back to initial state for the actual testing...
        const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
        onKeyDown({ which: 27, preventDefault: jest.fn() });
        component.update();
      });

      describe('when the component enters edit mode', () => {
        beforeEach(() => {
          component.find(Clickable).simulate('click', fakeEvent);

          // Force componentDidUpdate() since enzyme isn't allowing internal setState to trigger componentDidUpdate
          // https://github.com/airbnb/enzyme/issues/1452
          (component.instance() as any).componentDidUpdate({}, { isEditing: false });
        });

        it('focuses its text input', () => {
          expect(textFieldFocusable.focus).toHaveBeenCalledTimes(1);
        });

        describe('when the component leaves edit mode', () => {
          beforeEach(() => {
            const onKeyDown = component.find(TextField).prop('onKeyDown') as EventHandler;
            onKeyDown({ which: 27, preventDefault: jest.fn() });
            component.update();

            // Force componentDidUpdate() since enzyme isn't allowing internal setState to trigger componentDidUpdate
            // https://github.com/airbnb/enzyme/issues/1452
            (component.instance() as any).componentDidUpdate({}, { isEditing: true });
          });

          it('restores focus to the clickable', () => {
            expect(clickableFocusable.focus).toHaveBeenCalledTimes(1);
          });
        });
      });
    });
  });

  describe('with customizer', () => {
    let mountedComponent: ReactWrapper;
    const theme = defaultTheme;

    beforeEach(() => {
      mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <CustomizableEditableText />
        </Customizer>,
      );
    });

    it('receives custom theme', () => {
      expect(mountedComponent.find('CustomizableEditableText').prop('theme')).toBe(theme);
    });
  });
});
