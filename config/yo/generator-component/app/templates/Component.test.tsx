/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import <%= name %>, { <%= name %>Type, <%= name %>Props } from './index';

describe('<<%= name %> />', () => {
  let component: ShallowWrapper<<%= name %>Props, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<<%= name %> />);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('<%= className %>')).toBe(true);
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

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('<%= className %>')).toBe(true);
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
