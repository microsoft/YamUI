/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount } from 'enzyme';
import TextArea from '.';

describe('<TextArea />', () => {
  let componentHtml: string;

  describe('with default options', () => {
    beforeEach(() => {
      componentHtml = mount(<TextArea />).html();
    });

    it('matches its snapshot', () => {
      expect(componentHtml).toMatchSnapshot();
    });
  });

  describe('with all options', () => {
    beforeEach(() => {
      componentHtml = mount(
        <TextArea
          className="CLASS"
          rows={2}
          autoAdjustHeight={true}
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
        />,
      ).html();
    });

    it('matches its snapshot', () => {
      expect(componentHtml).toMatchSnapshot();
    });
  });

  describe('with description and no error', () => {
    beforeEach(() => {
      componentHtml = mount(
        <TextArea
          description="DESCRIPTION"
        />,
      ).html();
    });

    it('matches its snapshot', () => {
      expect(componentHtml).toMatchSnapshot();
    });
  });
});
