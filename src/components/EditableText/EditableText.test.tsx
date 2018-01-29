/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import Clickable from '../Clickable';
import TextField from '../TextField';
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
      });
    });
  });
});
