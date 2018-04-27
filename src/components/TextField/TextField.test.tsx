/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import TextField, { TextFieldProps } from '.';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';

describe('<TextField />', () => {
  let component: ShallowWrapper<TextFieldProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<TextField />)
        .dive()
        .dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      component = shallow(
        <TextField
          prefix="PREFIX"
          suffix="SUFFIX"
          underlined={true}
          className="CLASS"
          value="VALUE"
          label="LABEL"
          description="DESCRIPTION"
          disabled={true}
          required={true}
          errorMessage="ERROR MESSAGE"
          placeHolder="PLACEHOLDER"
          onFocus={jest.fn().mockName('onFocus')}
          onBlur={jest.fn().mockName('onBlur')}
          onMouseEnter={jest.fn().mockName('onMouseEnter')}
          onMouseLeave={jest.fn().mockName('onMouseLeave')}
          componentRef={jest.fn().mockName('componentRef')}
        />,
      )
        .dive()
        .dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});

describe('TextField#focus', () => {
  let ref: any;
  const setRef = (i: any) => (ref = i);

  describe('with default options', () => {
    beforeEach(() => {
      mount(<TextField componentRef={setRef} />);
    });

    it('focus', () => {
      const focusSpy = jest.spyOn(FabricTextField.prototype, 'focus');
      const setSelectionRangeSpy = jest.spyOn(FabricTextField.prototype, 'setSelectionRange');

      ref.focus();

      expect(focusSpy).toHaveBeenCalled();
      expect(setSelectionRangeSpy).toHaveBeenCalledWith(0, 0);
    });
  });

  describe('with value', () => {
    const value = 'VALUE';

    beforeEach(() => {
      mount(<TextField value={value} componentRef={setRef} />);
    });

    it('focus', () => {
      const focusSpy = jest.spyOn(FabricTextField.prototype, 'focus');
      const setSelectionRangeSpy = jest.spyOn(FabricTextField.prototype, 'setSelectionRange');

      ref.focus();

      expect(focusSpy).toHaveBeenCalled();
      expect(setSelectionRangeSpy).toHaveBeenCalledWith(value.length, value.length);
    });
  });
});
