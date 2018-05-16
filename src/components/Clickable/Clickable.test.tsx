/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Clickable, { ClickableProps } from '.';
import { Focusable } from '../../util/Focusable';

describe('<Clickable />', () => {
  let component: ShallowWrapper<ClickableProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Clickable>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Clickable className="TEST_CLASSNAME">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when unstyled', () => {
    beforeEach(() => {
      component = shallow(<Clickable unstyled={true}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when block is true', () => {
    beforeEach(() => {
      component = shallow(<Clickable block={true}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when title is passed', () => {
    beforeEach(() => {
      component = shallow(<Clickable title="extra browser tooltip content">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when ariaLabel is passed', () => {
    beforeEach(() => {
      component = shallow(<Clickable ariaLabel="aria label content">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when focusableRef is passed', () => {
    let mounted: ReactWrapper<ClickableProps>;

    let focusable: Focusable;

    beforeEach(() => {
      const setFocusable = (f: Focusable) => {
        focusable = f;
      };
      mounted = mount(<Clickable focusableRef={setFocusable}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(mounted).toMatchSnapshot();
    });

    describe('when focusable is used', () => {
      let button: HTMLElement;

      beforeEach(() => {
        button = mounted.find('button').getDOMNode() as HTMLElement;
        jest.spyOn(button, 'focus');

        focusable.focus();
      });

      it('calls focus on underlying button', () => {
        expect(button.focus).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when clicked', () => {
    let clicked: boolean;
    function clickMe() {
      clicked = true;
    }
    beforeEach(() => {
      clicked = false;
      component = shallow(<Clickable onClick={clickMe}>clickable content</Clickable>);
    });

    it('triggers its onClick callback', () => {
      component.simulate('click');
      expect(clicked).toBe(true);
    });
  });
});
