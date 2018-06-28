/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import Text from '../Text';
import Avatar, { AvatarProps, AvatarSize, BorderType } from '.';
import Customizer, { nullTheme } from '../Customizer';

describe('<Avatar />', () => {
  let component: ShallowWrapper<AvatarProps>;

  describe('with image url', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with too many characters', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="First Last" />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with imageShouldFadeIn', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageShouldFadeIn={true} />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with badge content', () => {
    beforeEach(() => {
      component = shallow(
        <Avatar name="NAME" imageUrl="test.jpg" size={AvatarSize.XSMALL} badgeContent={<Text>badge</Text>} />,
      ).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with soft border type', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" borderType={BorderType.SOFT} />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with size', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" size={AvatarSize.XLARGE} />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" className="TEST_CLASSNAME" />).dive();
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('accessible text', () => {
    describe('without badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />).dive();
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" badgeDescription="BADGE" />).dive();
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with customizer', () => {
    it('receives custom theme', () => {
      const theme = nullTheme;
      const mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <Avatar name="NAME" />
        </Customizer>,
      );
      expect(mountedComponent.find('Avatar').prop('theme')).toBe(theme);
    });
  });
});
