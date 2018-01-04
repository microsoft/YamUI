/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount } from 'enzyme';
import TextField from '.';

describe('<TextField />', () => {
  let componentHtml: string;

  describe('with default options', () => {
    beforeEach(() => {
      componentHtml = mount(<TextField />).html();
    });

    it('matches its snapshot', () => {
      expect(componentHtml).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      componentHtml = mount(
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
          onFocus={jest.fn()}
          onBlur={jest.fn()}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          unifiedOnChange={jest.fn()}
        />,
      ).html();
    });

    it('matches its snapshot', () => {
      expect(componentHtml).toMatchSnapshot();
    });
  });
});
