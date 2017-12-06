/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavigationLink, { NavigationLinkProps } from '.';

describe('<NavigationLink />', () => {
  let component: ShallowWrapper<NavigationLinkProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<NavigationLink href="test.html">link content</NavigationLink>);
    });

    it('renders its given content', () => {
      expect(component.text()).toBe('link content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-navigationLink')).toBe(true);
    });

    it('uses the given href', () => {
      expect(component.getNode().props.href).toBe('test.html');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when unstyled', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" unstyled={true}>
          link content
        </NavigationLink>,
      );
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-navigationLink')).toBe(true);
    });

    it('contains its unstyled className', () => {
      expect(component.hasClass('y-navigationLink__unstyled')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with title', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" title="TITLE CONTENT">
          link content
        </NavigationLink>,
      );
    });

    it('contains the given title', () => {
      expect(component.getNode().props.title).toBe('TITLE CONTENT');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when newWindow is true', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" newWindow={true}>
          link content
        </NavigationLink>,
      );
    });

    it('contains the correct rel attribute', () => {
      expect(component.getNode().props.rel).toBe('nofollow noreferrer');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" className="TEST_CLASSNAME">
          test content
        </NavigationLink>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBeTruthy();
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-navigationLink')).toBeTruthy();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
