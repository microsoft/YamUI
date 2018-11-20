/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavigationLink, { NavigationLinkProps } from '.';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { Focusable } from '../../util/Focusable';

describe('<NavigationLink />', () => {
  let component: ShallowWrapper<NavigationLinkProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<NavigationLink href="test.html">link content</NavigationLink>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when unstyled', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" unstyled={true}>
          link content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with ariaCurrent', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" ariaCurrent="page">
          link content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with ariaLabel', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" ariaLabel="ARIA LABEL CONTENT">
          link content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with title', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" title="TITLE CONTENT">
          link content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when newWindow is true', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" newWindow={true}>
          link content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" className="TEST_CLASSNAME">
          test content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with block={true}', () => {
    beforeEach(() => {
      component = shallow(
        <NavigationLink href="test.html" block={true}>
          test content
        </NavigationLink>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when focusableRef is passed', () => {
    let anchor: HTMLElement;
    let focusable: Focusable;

    beforeEach(() => {
      const setFocusable = (f: Focusable) => {
        focusable = f;
      };
      const rendered = renderIntoDocument(
        <NavigationLink href="test.html" focusableRef={setFocusable}>
          test content
        </NavigationLink>,
      ) as React.Component;
      anchor = findRenderedDOMComponentWithClass(rendered, 'y-navigationLink') as HTMLElement;
    });

    it('matches its snapshot', () => {
      expect(anchor).toMatchSnapshot();
    });

    describe('when focusable is used', () => {
      beforeEach(() => {
        jest.spyOn(anchor, 'focus');

        focusable.focus();
      });

      it('calls focus on underlying button', () => {
        expect(anchor.focus).toHaveBeenCalledTimes(1);
      });
    });
  });
});
