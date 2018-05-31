/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { createRenderer as createShallowRenderer } from 'react-test-renderer/shallow';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Block, { GutterSize, TextColor, TextSize } from '.';

const shallowWithContext = (jsx: JSX.Element) => {
  const renderer = createShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

const renderWithoutContext = (jsx: JSX.Element) => {
  const renderedText = renderIntoDocument(jsx) as Block;
  return findRenderedDOMComponentWithClass(renderedText, 'y-block');
};

describe('<Block />', () => {
  let component: Element;
  let componentWithContext: React.ReactElement<Block>;

  describe('with default options', () => {
    beforeEach(() => {
      componentWithContext = shallowWithContext(<Block>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithContext).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block className="TEST_CLASSNAME">block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with xLarge text size', () => {
    beforeEach(() => {
      componentWithContext = shallowWithContext(<Block textSize={TextSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithContext).toMatchSnapshot();
    });
  });

  describe('with secondary textColor', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block textColor={TextColor.SECONDARY}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with textAlign', () => {
    describe('right', () => {
      beforeEach(() => {
        component = renderWithoutContext(<Block textAlign="right">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('center', () => {
      beforeEach(() => {
        component = renderWithoutContext(<Block textAlign="center">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with ellipsis', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block ellipsis={true}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with top spacing', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block topSpacing={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bottom spacing', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block bottomSpacing={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with padding', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block padding={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with horizontal padding', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block horizontalPadding={GutterSize.MEDIUM}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with vertical padding', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block verticalPadding={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with positive push', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block push={3}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with negative push', () => {
    beforeEach(() => {
      component = renderWithoutContext(<Block push={-2}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
