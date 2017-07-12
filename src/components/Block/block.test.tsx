/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Block, { BlockProps, GutterSize, TextSize } from './index';

describe('<Block />', () => {
  let component: ShallowWrapper<BlockProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Block>block content</Block>,
      );
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('block content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-block')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Block className="TEST_CLASSNAME">block content</Block>,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-block')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with xLarge text size', () => {
    beforeEach(() => {
      component = shallow(
        <Block textSize={TextSize.XLARGE}>block content</Block>,
      );
    });

    it('includes the xLarge className', () => {
      expect(component.hasClass('y-block__textSize-xLarge')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-block')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with textAlign right', () => {
    beforeEach(() => {
      component = shallow(
        <Block textAlign="right">block content</Block>,
      );
    });

    it('includes the aligned right className', () => {
      expect(component.hasClass('y-block__textAlign-right')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-block')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with spacing', () => {
    beforeEach(() => {
      component = shallow(
        <Block bottomSpacing={GutterSize.XLARGE}>block content</Block>,
      );
    });

    it('contains the bottomSpacing className', () => {
      expect(component.hasClass('y-block__bottomSpacing-xLarge')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with padding', () => {
    beforeEach(() => {
      component = shallow(
        <Block padding={GutterSize.SMALL}>block content</Block>,
      );
    });

    it('contains the padding className', () => {
      expect(component.find('.y-block--inner__padding-small').length).toEqual(1);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with positive push', () => {
    beforeEach(() => {
      component = shallow(
        <Block push={3}>block content</Block>,
      );
    });

    it('adds top outer padding', () => {
      expect(component.first().getNode().props.style.paddingTop).toEqual('0.3rem');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with negative push', () => {
    beforeEach(() => {
      component = shallow(
        <Block push={-2}>block content</Block>,
      );
    });

    it('adds a negative top margin', () => {
      expect(component.first().getNode().props.style.marginTop).toEqual('-0.2rem');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

});
