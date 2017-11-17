/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Heading, { HeadingProps } from '.';


describe('<Heading />', () => {
  let component: ShallowWrapper<HeadingProps, {}>;

  describe('with a level', () => {
    beforeEach(() => {
      component = shallow(<Heading level="1">test content</Heading>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('test content');
    });

    it('renders the correct tag', () => {
      expect(component.find('h1').length).toBe(1);
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-heading')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a size', () => {
    beforeEach(() => {
      component = shallow(<Heading level="2" size="3">test content</Heading>);
    });

    it('renders the correct tag level', () => {
      expect(component.find('h2').length).toBe(1);
    });

    it('renders the correct size className', () => {
      expect(component.hasClass('y-heading__size-3')).toBe(true);
    });

    it('has its base className', () => {
      expect(component.hasClass('y-heading')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with size "none"', () => {
    beforeEach(() => {
      component = shallow(<Heading level="5" size="none">test content</Heading>);
    });

    it('renders the correct tag level', () => {
      expect(component.find('h5').length).toBe(1);
    });

    it('renders the size "none" className', () => {
      expect(component.hasClass('y-heading__size-none')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Heading level="4" className="TEST_CLASSNAME">test content</Heading>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-heading')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

});
