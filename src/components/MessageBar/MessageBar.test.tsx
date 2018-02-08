/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MessageBar, { MessageBarType, MessageBarProps } from './index';
import FakeLink from '../../components/FakeLink';

describe('<MessageBar />', () => {
  let component: ShallowWrapper<MessageBarProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<MessageBar>content</MessageBar>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<MessageBar className="TEST_CLASSNAME">content</MessageBar>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a type', () => {
    beforeEach(() => {
      component = shallow(<MessageBar type={MessageBarType.WARNING}>content</MessageBar>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with actions', () => {
    beforeEach(() => {
      const link = <FakeLink>Link</FakeLink>;
      component = shallow(<MessageBar actions={link}>content</MessageBar>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
