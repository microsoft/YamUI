/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Clickable, { ClickableProps } from '.';

describe('<Clickable />', () => {
  let component: ShallowWrapper<ClickableProps, {}>;

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
      component = shallow(
        <Clickable title="extra browser tooltip content">clickable content</Clickable>,
      );
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
