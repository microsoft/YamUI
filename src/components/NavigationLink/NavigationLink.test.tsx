/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavigationLink, { NavigationLinkProps } from '.';

describe('<NavigationLink />', () => {
  let component: ShallowWrapper<NavigationLinkProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<NavigationLink href="test.html">link content</NavigationLink>);
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with ariaLabel', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" ariaLabel="ARIA LABEL CONTENT">
          link content
        </NavigationLink>,
      );
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with block={true}', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" block={true}>
          test content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
