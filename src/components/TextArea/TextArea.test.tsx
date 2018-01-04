/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextArea, { TextAreaProps } from '.';

describe('<TextArea />', () => {
  let component: ShallowWrapper<TextAreaProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<TextArea />).dive().dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      component = shallow(
        <TextArea
          rows={2}
          autoAdjustHeight={true}
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
        />,
      ).dive().dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with description and no error', () => {
    beforeEach(() => {
      component = shallow(
        <TextArea
          description="DESCRIPTION"
        />,
      ).dive().dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
