/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FakeLink, { FakeLinkProps } from '.';

describe('<FakeLink />', () => {
  let component: ShallowWrapper<FakeLinkProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<FakeLink>link content</FakeLink>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<FakeLink className="TEST_CLASSNAME">test content</FakeLink>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
