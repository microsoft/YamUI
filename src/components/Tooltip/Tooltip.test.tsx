/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Tooltip, { DirectionalHint, TooltipProps } from './index';

describe('<Tooltip />', () => {
  let component: ShallowWrapper<TooltipProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Tooltip text="text content">text</Tooltip>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Tooltip text="text content" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with directionalHint', () => {
    beforeEach(() => {
      component = shallow(<Tooltip text="text content" directionalHint={DirectionalHint.bottomLeftEdge} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
