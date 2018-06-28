/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import CustomizableAsideSection, { AsideSection } from './AsideSection';
import { AsideSectionProps } from './AsideSection.types';
import Clickable from '../Clickable';
import Customizer, { defaultTheme } from '../Customizer';

describe('<AsideSection />', () => {
  let component: ShallowWrapper<AsideSectionProps>;

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
      component = shallow(<AsideSection title="Test title" action={action} />);
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

  describe('with customizer', () => {
    it('receives custom theme', () => {
      const theme = defaultTheme;
      const mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <CustomizableAsideSection title="TITLE" />
        </Customizer>,
      );
      expect(mountedComponent.find('CustomizableAsideSection').prop('theme')).toBe(theme);
    });
  });
});
