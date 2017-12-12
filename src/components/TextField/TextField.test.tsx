/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextField, { TextFieldProps } from '.';
import { TextField as FabricTextField,
  ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

describe('<TextField />', () => {
  let component: ShallowWrapper<TextFieldProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<TextField />);
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
        <TextField
          value="VALUE"
          placeHolder="PLACEHOLDER"
          disabled={false}
          label="LABEL"
          description="DESCRIPTION"
          prefix="PREFIX"
          suffix="SUFFIX"
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

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<TextField className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-text-field')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with prefix', () => {
    beforeEach(() => {
      component = shallow(<TextField prefix="PREFIX" />);
    });

    it('includes prefix className', () => {
      expect(component.hasClass('y-text-field--with-prefix')).toBe(true);
    });
  });

  describe('with suffix', () => {
    beforeEach(() => {
      component = shallow(<TextField suffix="SUFFIX" />);
    });

    it('includes suffix className', () => {
      expect(component.hasClass('y-text-field--with-suffix')).toBe(true);
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
        <TextField
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
      component = shallow(<TextField onChange={callback} />);
    });

    describe('when a change in made', () => {
      let fabricTextField: ShallowWrapper<ITextFieldProps, {}>;

      beforeEach(() => {
        fabricTextField = component.find(FabricTextField);
        fabricTextField.prop<Function>('onChanged')('a');
      });

      it('triggers the onChange callback', () => {
        expect(callback).toHaveBeenCalledWith('a');
      });
    });
  });
});
