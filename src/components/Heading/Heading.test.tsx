/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Heading, { HeadingProps } from '.';

describe('<Heading />', () => {
  let component: ShallowWrapper<HeadingProps, {}>;

  describe('with level 1', () => {
    beforeEach(() => {
      component = shallow(<Heading level="1">test content</Heading>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with level 2 and size 3', () => {
    beforeEach(() => {
      component = shallow(
        <Heading level="2" size="3">
          test content
        </Heading>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with size "none"', () => {
    beforeEach(() => {
      component = shallow(
        <Heading level="5" size="none">
          test content
        </Heading>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Heading level="4" className="TEST_CLASSNAME">
          test content
        </Heading>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
