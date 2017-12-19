/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextArea, { TextAreaProps } from '.';
import { TextField as FabricTextField, ITextFieldProps }
  from 'office-ui-fabric-react/lib/TextField';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

describe('<TextArea />', () => {
  let component: ShallowWrapper<TextAreaProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<TextArea />);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-text-field')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      component = shallow(
        <TextArea
          className="CLASS"
          value="VALUE"
          placeHolder="PLACEHOLDER"
          disabled={false}
          label="LABEL"
          description="DESCRIPTION"
          rows={2}
          autoAdjustHeight={true}
          required={true}
          onChange={jest.fn()}
          onChangeDebounceTime={500}
        />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('unmount', () => {
      let disposeSpy: jest.SpyInstance<() => void>;

      beforeEach(() => {
        disposeSpy = jest.spyOn(Async.prototype, 'dispose');
        component.unmount();
      });

      it('calls async dispose', () => {
        expect(disposeSpy).toHaveBeenCalled();
      });
    });
  });

  describe('with error message and description', () => {
    beforeEach(() => {
      component = shallow(
        <TextArea
          description="DESCRIPTION"
          errorMessage="ERROR"
        />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with event callbacks', () => {
    let onMouseEnter: jest.Mock<{}>;
    let onMouseLeave: jest.Mock<{}>;
    let onFocus: jest.Mock<{}>;
    let onBlur: jest.Mock<{}>;

    beforeEach(() => {
      onMouseEnter = jest.fn();
      onMouseLeave = jest.fn();
      onFocus = jest.fn();
      onBlur = jest.fn();
      component = shallow(
        <TextArea
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />,
      );
    });

    describe('when hovered', () => {
      beforeEach(() => {
        component.simulate('mouseEnter');
      });

      it('triggers its onMouseEnter callback', () => {
        expect(onMouseEnter).toHaveBeenCalled();
      });
    });

    describe('when hovered out', () => {
      beforeEach(() => {
        component.simulate('mouseLeave');
      });

      it('triggers its onMouseLeave callback', () => {
        expect(onMouseLeave).toHaveBeenCalled();
      });
    });

    describe('when focused', () => {
      beforeEach(() => {
        component.simulate('focus');
      });

      it('triggers its onFocus callback', () => {
        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('when blurred', () => {
      beforeEach(() => {
        component.simulate('blur');
      });

      it('triggers its onBlur callback', () => {
        expect(onBlur).toHaveBeenCalled();
      });
    });
  });

  describe('with onChange handler', () => {
    let callback: jest.Mock<{}>;

    beforeEach(() => {
      callback = jest.fn();
      component = shallow(<TextArea onChange={callback} />);
    });

    describe('when a change in made', () => {
      let fabricTextArea: ShallowWrapper<ITextFieldProps, {}>;

      beforeEach(() => {
        fabricTextArea = component.find(FabricTextField);
        fabricTextArea.prop<Function>('onChanged')('a');
      });

      it('triggers the onChange callback', () => {
        expect(callback).toHaveBeenCalledWith('a');
      });
    });
  });
});
