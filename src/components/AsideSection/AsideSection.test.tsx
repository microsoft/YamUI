/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import AsideSection, { AsideSectionProps } from '.';
import Clickable from '../Clickable';
import Customizer, { nullTheme } from '../Customizer';

describe('<AsideSection />', () => {
  let component: ShallowWrapper<AsideSectionProps>;

  describe('With minimal options', () => {
    beforeEach(() => {
      component = shallow(<AsideSection title="Test title" />).dive();
    });

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with action prop', () => {
    beforeEach(() => {
      const action = <Clickable>Add</Clickable>;
      component = shallow(<AsideSection title="Test title" action={action} />).dive();
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
      ).dive();
    });

    it('matches the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with customizer', () => {
    it('receives custom theme', () => {
      const theme = nullTheme;
      const mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <AsideSection title="TITLE" />
        </Customizer>,
      );
      expect(mountedComponent.find('AsideSection').prop('theme')).toBe(theme);
    });
  });
});
