/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextField, { TextFieldProps } from '.';
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

    describe('update onChangeDebounceTime', () => {
      beforeEach(() => {
        component.setProps({ onChangeDebounceTime: 1000 });
      });
      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('update value', () => {
      beforeEach(() => {
        component.setProps({ value: 'VALUE2' });
      });
      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with suffix', () => {
    beforeEach(() => {
      component = shallow(<TextField suffix="SUFFIX" />);
    });

    it('includes suffix className', () => {
      expect(component.hasClass('y-text-field--with-suffix')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with prefix and suffix', () => {
    beforeEach(() => {
      component = shallow(<TextField prefix="PREFIX" suffix="SUFFIX" />);
    });

    it('includes prefix className', () => {
      expect(component.hasClass('y-text-field--with-prefix')).toBe(true);
    });

    it('includes suffix className', () => {
      expect(component.hasClass('y-text-field--with-suffix')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
