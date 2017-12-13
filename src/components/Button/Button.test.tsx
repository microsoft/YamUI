/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { ButtonProps, ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize } from '.';
import { Accounts as AccountsIcon } from '../Icon';

const sampleText = 'Click Me';
const sampleAriaLabel = 'Aria description';

describe('<Button />', () => {
  let component: ShallowWrapper<ButtonProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with aria label', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} ariaLabel={sampleAriaLabel} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with fullWidth', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} fullWidth={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('set as disabled', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} status={ButtonStatus.DISABLED} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('set as loading', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} status={ButtonStatus.LOADING} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with icon', () => {
    beforeEach(() => {
      component = shallow(<Button icon={AccountsIcon} text={sampleText} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('on the right', () => {
      beforeEach(() => {
        component = shallow(
          <Button
            icon={AccountsIcon}
            text={sampleText}
            iconPosition={ButtonIconPosition.RIGHT}
          />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with primary color', () => {
    beforeEach(() => {
      component = shallow(<Button color={ButtonColor.PRIMARY} text={sampleText} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('set as loading', () => {
      beforeEach(() => {
        component = shallow(
          <Button color={ButtonColor.PRIMARY} text={sampleText} status={ButtonStatus.LOADING} />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with small size', () => {
    beforeEach(() => {
      component = shallow(<Button size={ButtonSize.SMALL} text={sampleText} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('with icon', () => {
      beforeEach(() => {
        component = shallow(
          <Button icon={AccountsIcon} size={ButtonSize.SMALL} text={sampleText} />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('set as loading', () => {
      beforeEach(() => {
        component = shallow(
          <Button size={ButtonSize.SMALL} text={sampleText} status={ButtonStatus.LOADING} />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with valid href', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} href="https://www.yammer.com" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with invalid href', () => {
    beforeEach(() => {
      component = shallow(<Button text={sampleText} href="#" />);
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
        <Button
          text={sampleText}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />,
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
