/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Clickable } from './Clickable';
import { create as createRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { renderIntoDocument, Simulate, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { Focusable } from '../../util/Focusable';
import { darkTheme } from '../Customizer';

const render = (node: React.ReactElement<any>) => {
  return createRenderer(node).toJSON();
};

describe('<Clickable />', () => {
  let component: ReactTestRendererJSON | null;

  describe('with default options', () => {
    beforeEach(() => {
      component = render(<Clickable>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = render(<Clickable className="TEST_CLASSNAME">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when unstyled', () => {
    beforeEach(() => {
      component = render(<Clickable unstyled={true}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when block is true', () => {
    beforeEach(() => {
      component = render(<Clickable block={true}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when title is passed', () => {
    beforeEach(() => {
      component = render(<Clickable title="extra browser tooltip content">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when ariaLabel is passed', () => {
    beforeEach(() => {
      component = render(<Clickable ariaLabel="aria label content">clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with theme', () => {
    beforeEach(() => {
      component = render(<Clickable theme={darkTheme}>clickable content</Clickable>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when focusableRef is passed', () => {
    let button: HTMLElement;
    let focusable: Focusable;

    beforeEach(() => {
      const setFocusable = (f: Focusable) => {
        focusable = f;
      };
      const rendered = renderIntoDocument(
        <Clickable focusableRef={setFocusable}>clickable content</Clickable>,
      ) as React.Component;
      button = findRenderedDOMComponentWithClass(rendered, 'y-clickable') as HTMLElement;
    });

    it('matches its snapshot', () => {
      expect(button).toMatchSnapshot();
    });

    describe('when focusable is used', () => {
      beforeEach(() => {
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
    let renderedDOM: HTMLElement;
    function clickMe() {
      clicked = true;
    }
    beforeEach(() => {
      clicked = false;
      const renderedInstance = renderIntoDocument(
        <Clickable onClick={clickMe}>clickable content</Clickable>,
      ) as Clickable;
      renderedDOM = findRenderedDOMComponentWithClass(renderedInstance, 'y-clickable') as HTMLElement;
    });

    it('triggers its onClick callback', () => {
      Simulate.click(renderedDOM);
      expect(clicked).toBe(true);
    });
  });
});
