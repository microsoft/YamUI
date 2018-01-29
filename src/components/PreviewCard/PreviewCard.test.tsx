/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PreviewCard, { PreviewCardProps } from './index';

describe('<PreviewCard />', () => {
  let component: ShallowWrapper<PreviewCardProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" loadingText="" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<PreviewCard name="Filename.gif" loadingText="" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
