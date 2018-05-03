/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Clickable from '../Clickable';
import TextField, { TextFieldComponent } from '../TextField';
import EditableText, { EditableTextProps } from './index';

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

      describe('and text is changed', () => {
        beforeEach(() => {
          const onChange: (text: string) => void = component.find(TextField).prop('onChange') as (text: string) => void;
          onChange('new text');
        });

        describe('and ENTER is pressed', () => {
          beforeEach(() => {
            const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (event: any) => void;
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
            const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (event: any) => void;
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
            const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (event: any) => void;
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

        describe('when the underlying TextField provides its ref', () => {
          let fakeRef: Partial<TextFieldComponent>;

          beforeEach(() => {
            // Get a reference to our fakeRef so we can check its focus() spy
            fakeRef = { focus: jest.fn() };
            const setRef: (node: Partial<TextFieldComponent>) => void = component
              .find(TextField)
              .prop('componentRef') as (node: Partial<TextFieldComponent>) => void;
            setRef(fakeRef);
          });

          describe('and the textfield enters edit mode', () => {
            beforeEach(() => {
              // Exit edit mode...
              const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (
                event: any,
              ) => void;
              onKeyDown({ which: 27, preventDefault: jest.fn() });
              component.update();

              //  ...and re-enter edit mode to trigger focus now that we have a spy in place
              component.find(Clickable).simulate('click', fakeEvent);
            });

            it('focuses its text input', () => {
              expect(fakeRef.focus).toHaveBeenCalledTimes(1);
            });
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
          const onChange: (text: string) => void = component.find(TextField).prop('onChange') as (text: string) => void;
          onChange('new text');
        });

        describe('and ENTER is pressed', () => {
          beforeEach(() => {
            const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (event: any) => void;
            onKeyDown({ which: 13, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });
        });

        describe('and ESC is pressed', () => {
          beforeEach(() => {
            const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (event: any) => void;
            onKeyDown({ which: 27, preventDefault: jest.fn() });
            component.update();
          });

          it('exits edit mode', () => {
            expect(component).toMatchSnapshot();
          });
        });

        describe('when the underlying TextField provides its ref', () => {
          let fakeRef: Partial<TextFieldComponent>;

          beforeEach(() => {
            // Get a reference to our fakeRef so we can check its focus() spy
            fakeRef = { focus: jest.fn() };
            const setRef: (node: Partial<TextFieldComponent>) => void = component
              .find(TextField)
              .prop('componentRef') as (node: Partial<TextFieldComponent>) => void;
            setRef(fakeRef);
          });

          describe('and the textfield enters edit mode', () => {
            beforeEach(() => {
              // Exit edit mode and re-enter edit mode to trigger focus now that we have a spy in place
              const onKeyDown: (event: any) => void = component.find(TextField).prop('onKeyDown') as (
                event: any,
              ) => void;
              onKeyDown({ which: 27, preventDefault: jest.fn() });
              component.update();

              component.find(Clickable).simulate('click', fakeEvent);
            });

            it('focuses its text input', () => {
              expect(fakeRef.focus).toHaveBeenCalledTimes(1);
            });
          });
        });
      });
    });
  });
});
