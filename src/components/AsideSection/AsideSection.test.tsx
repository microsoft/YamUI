/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Clickable from '../Clickable';
import AsideSection, { AsideSectionProps } from '.';

describe('<AsideSection />', () => {
  let component: ShallowWrapper<AsideSectionProps, {}>;
  
  describe('With minimal options', () => {
    beforeEach(() => {
      component = shallow(<AsideSection title="Test title" />);
    });

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with action prop', () => {
    beforeEach(() => {
      const action = <Clickable>Add</Clickable>;
      component = shallow(<AsideSection title="Test title" action={action}/>);
    });

    it('renders the action in its own FixedGridColumn', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with children', () => {
    beforeEach(() => {
      component = shallow(
        <AsideSection title="Test title">
          <div>Child Content</div>
        </AsideSection>,
      );
    });

    it('matches the snapshot', () => {
      expect(component).toMatchSnapshot();      
    });
  });
});
