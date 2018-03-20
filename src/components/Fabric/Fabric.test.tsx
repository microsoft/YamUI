/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Fabric from '.';

describe('<Fabric />', () => {
  let component: ShallowWrapper;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Fabric>wrapped content</Fabric>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('wrapped content');
    });

    it('contains its base <Fabric /> component class', () => {
      expect(component.render().find('.ms-Fabric').length).toEqual(1);
    });
  });
});
