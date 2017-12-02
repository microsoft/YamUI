/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import ScreenreaderText from '../ScreenreaderText';
import Text from '../Text';
import Avatar, { AvatarProps, AvatarSize, AvatarBorderType } from '.';

describe('<Avatar />', () => {
  let component: ShallowWrapper<AvatarProps, {}>;

  describe('with image url', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />);
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-avatar')).toBe(true);
    });

    it('renders the given image', () => {
      expect(
        component
          .render()
          .find('img')
          .attr('src'),
      ).toEqual('test.jpg');
    });

    it('defaults to medium size', () => {
      expect(component.find(Persona).prop('size')).toEqual(PersonaSize.size40);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with initials', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" initials="AB" />);
    });

    it('renders the initials', () => {
      expect(
        component
          .find(Persona)
          .render()
          .text(),
      ).toEqual('AB');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with too many characters', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" initials="ABCD" />);
    });

    it('only renders 2 letters', () => {
      expect(
        component
          .find(Persona)
          .render()
          .text(),
      ).toEqual('AB');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with too many characters and size XSMALL', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" initials="ABCD" size={AvatarSize.XSMALL} />);
    });

    it('only renders 1 letter', () => {
      expect(
        component
          .find(Persona)
          .render()
          .text(),
      ).toEqual('A');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with badge content', () => {
    beforeEach(() => {
      component = shallow(
        <Avatar
          name="NAME"
          imageUrl="test.jpg"
          size={AvatarSize.XSMALL}
          badgeContent={<Text>badge</Text>}
        />,
      );
    });

    it('renders the given badge content', () => {
      expect(component.find('.y-avatar--badge').find(Text).length).toEqual(1);
    });

    it('renders the size class on the badge', () => {
      expect(component.find('.y-avatar--badge').hasClass('y-avatar__size-xSmall--badge')).toBe(
        true,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with soft border type', () => {
    beforeEach(() => {
      component = shallow(
        <Avatar name="NAME" imageUrl="test.jpg" borderType={AvatarBorderType.SOFT} />,
      );
    });

    it('contains the soft border class', () => {
      expect(component.hasClass('y-avatar__borderType-soft')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with size', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" size={AvatarSize.XLARGE} />);
    });

    it('contains the correct size class', () => {
      expect(component.hasClass('y-avatar__size-xLarge')).toBe(true);
    });

    it('renders a Persona component with the correct size', () => {
      expect(component.find(Persona).prop('size')).toEqual(PersonaSize.size72);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Avatar name="NAME" imageUrl="test.jpg" className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-avatar')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('accessible text', () => {
    describe('without badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" />);
      });

      it('renders the name in a ScreenreaderText component', () => {
        expect(
          component
            .find(ScreenreaderText)
            .matchesElement(<ScreenreaderText>NAME</ScreenreaderText>),
        ).toEqual(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with badge description', () => {
      beforeEach(() => {
        component = shallow(<Avatar name="NAME" imageUrl="test.jpg" badgeDescription="BADGE" />);
      });

      it('renders the name and badge description in a ScreenreaderText component', () => {
        expect(
          component
            .find(ScreenreaderText)
            .matchesElement(<ScreenreaderText>NAME - BADGE</ScreenreaderText>),
        ).toEqual(true);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
