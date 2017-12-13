/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AsideSection, { AsideSectionProps } from './index';

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
      const action = React.createElement('span');
      component = shallow(<AsideSection title="Test title" action={action}/>);
    });

    it('renders the action in its own FixedGridColumn', () => {
      expect(component).toMatchSnapshot();
    });

    
  });

  describe('with children', () => {
    beforeEach(() => {
      const action = React.createElement('span');
      component = shallow(
        <AsideSection title="Test title" action={action}>
          <div>content</div>
        </AsideSection>,
      );
    });

    it('matches the snapshot', () => {
      expect(component).toMatchSnapshot();      
    });
  });
});
