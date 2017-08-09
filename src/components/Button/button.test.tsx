/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { ButtonProps, ButtonColor, ButtonSize } from './index';
import Icon, { IconSize } from '../Icon';
import { BaseButton } from 'office-ui-fabric-react/lib/Button';

const sampleText = 'Click Me';
const sampleAriaLabel = 'Aria description';

describe('<Button />', () => {
  let component: ShallowWrapper<ButtonProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} />,
      );
    });

    it('renders a Fabric BaseButton', () => {
      expect(component.find(BaseButton).length).toBe(1);
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-button')).toBe(true);
    });

    it('is the default button size', () => {
      expect(component.hasClass('y-button__size-regular')).toBe(true);
    });

    it('is the default button color', () => {
      expect(component.hasClass('y-button__color-primary')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} className="TEST_CLASSNAME" />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-button')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with icon', () => {
    beforeEach(() => {
      component = shallow(
        <Button icon="plus" text={sampleText} />,
      );
    });

    it('adds icon with class name to button', () => {
      expect(component.find(Icon).hasClass('y-button--icon')).toBe(true);
    });

    it('renders the correct icon size', () => {
      expect(component.find(Icon).props().size).toEqual(IconSize.SMALL);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with SMALL size', () => {
    beforeEach(() => {
      component = shallow(
        <Button size={ButtonSize.SMALL} text={sampleText} />,
      );
    });

    it('renders the correct size className', () => {
      expect(component.hasClass('y-button__size-small')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-button')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('with icon', () => {
      beforeEach(() => {
        component = shallow(
          <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} />,
        );
      });

      it('renders the correct icon size', () => {
        expect(component.find(Icon).props().size).toEqual(IconSize.XSMALL);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with color set to SECONDARY', () => {
    beforeEach(() => {
      component = shallow(
        <Button color={ButtonColor.SECONDARY} text={sampleText} />,
      );
    });

    it('renders the correct color className', () => {
      expect(component.hasClass('y-button__color-secondary')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('set as disabled', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} disabled />,
      );
    });

    it('prop is set', () => {
      expect(component.find(BaseButton).prop('disabled')).toEqual(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with aria label', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} ariaLabel={sampleAriaLabel} />,
      );
    });

    it('prop is set', () => {
      expect(component.find(BaseButton).prop('ariaLabel')).toEqual(sampleAriaLabel);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with valid href', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} href="https://www.yammer.com" />,
      );
    });

    it('renders a link instead of a button', () => {
      expect(component.render().find('a.y-button').attr('href')).toBe('https://www.yammer.com');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with invalid href', () => {
    beforeEach(() => {
      component = shallow(
        <Button text={sampleText} href="#" />,
      );
    });

    it('complains via proptypes but does not throw an error', () => {
      expect(component.render().find('a.y-button').attr('href')).toBe('#');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with event callbacks', () => {
    let onClick: jest.Mock<{}>;
    let onMouseEnter: jest.Mock<{}>;
    let onMouseLeave: jest.Mock<{}>;
    let onFocus: jest.Mock<{}>;
    let onBlur: jest.Mock<{}>;

    beforeEach(() => {
      onClick = jest.fn();
      onMouseEnter = jest.fn();
      onMouseLeave = jest.fn();
      onFocus = jest.fn();
      onBlur = jest.fn();
      component = shallow(
        <Button text={sampleText} onClick={onClick} onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} onFocus={onFocus} onBlur={onBlur} />,
      );
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.simulate('click');
      });

      it('triggers its onClick callback', () => {
        expect(onClick).toHaveBeenCalled();
      });
    });

    describe('when hovered', () => {
      beforeEach(() => {
        component.simulate('mouseEnter');
      });

      it('triggers its onMouseEnter callback', () => {
        expect(onMouseEnter).toHaveBeenCalled();
      });
    });

    describe('when hovered out', () => {
      beforeEach(() => {
        component.simulate('mouseLeave');
      });

      it('triggers its onMouseLeave callback', () => {
        expect(onMouseLeave).toHaveBeenCalled();
      });
    });

    describe('when focused', () => {
      beforeEach(() => {
        component.simulate('focus');
      });

      it('triggers its onFocus callback', () => {
        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('when blurred', () => {
      beforeEach(() => {
        component.simulate('blur');
      });

      it('triggers its onBlur callback', () => {
        expect(onBlur).toHaveBeenCalled();
      });
    });
  });

});
