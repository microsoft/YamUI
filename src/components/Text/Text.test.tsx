/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Text, { TextColor, TextSize } from '.';

const render = (jsx: JSX.Element) => {
  const renderedText = renderIntoDocument(jsx) as Text;
  return findRenderedDOMComponentWithClass(renderedText, 'y-text');
};

describe('<Text />', () => {
  let component: Element;

  describe('with default options', () => {
    beforeEach(() => {
      component = render(<Text>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = render(<Text className="TEST_CLASSNAME">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size', () => {
    beforeEach(() => {
      component = render(<Text size={TextSize.XLARGE}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a valid size and maxWidth', () => {
    beforeEach(() => {
      component = render(
        <Text size={TextSize.XLARGE} maxWidth="200px">
          test content
        </Text>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bold', () => {
    beforeEach(() => {
      component = render(<Text bold={true}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with uppercase', () => {
    beforeEach(() => {
      component = render(<Text uppercase={true}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with maxWidth 500px', () => {
    beforeEach(() => {
      component = render(<Text maxWidth="500px">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with color secondary', () => {
    beforeEach(() => {
      component = render(<Text color={TextColor.SECONDARY}>test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text', () => {
    beforeEach(() => {
      component = render(<Text screenreaderText="SCREENREADER TEXT">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with screenreader text empty string', () => {
    beforeEach(() => {
      component = render(<Text screenreaderText="">test content</Text>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
