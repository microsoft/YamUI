/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import <%= name %>, { <%= name %>Type, <%= name %>Props } from './index';

describe('<<%= name %> />', () => {
  let component: ShallowWrapper<<%= name %>Props>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<<%= name %> />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <<%= name %> className="TEST_CLASSNAME" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a type', () => {
    beforeEach(() => {
      component = shallow(
        <<%= name %> type={<%= name %>Type.WHITE} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
