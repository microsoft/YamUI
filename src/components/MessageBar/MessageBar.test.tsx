/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import CustomizableMessageBar, { MessageBar } from './MessageBar';
import { MessageBarType, MessageBarProps } from './MessageBar.types';
import FakeLink from '../../components/FakeLink';
import Customizer, { defaultTheme } from '../Customizer';

describe('<MessageBar />', () => {
  let component: ShallowWrapper<MessageBarProps>;

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

  describe('with customizer', () => {
    let mountedComponent: ReactWrapper;
    const theme = defaultTheme;

    beforeEach(() => {
      mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <CustomizableMessageBar />
        </Customizer>,
      );
    });

    it('receives custom theme', () => {
      expect(mountedComponent.find('CustomizableMessageBar').prop('theme')).toBe(theme);
    });
  });
});
