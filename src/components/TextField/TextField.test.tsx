/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import TextField, { TextFieldProps } from '.';

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

    it('focus', () => {
      const instance = component.instance() as TextField;
      instance.focus();
      /* TODO: assert something here. */
    });
  });
});
