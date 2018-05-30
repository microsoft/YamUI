/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Block, { BlockProps, GutterSize, TextColor, TextSize } from '.';

const renderWithoutContext = (jsx: JSX.Element) => {
  const renderedText = renderIntoDocument(jsx) as Block;
  return findRenderedDOMComponentWithClass(renderedText, 'y-block');
};

describe('<Block />', () => {
  let componentWithoutContext: Element;
  let component: ShallowWrapper<BlockProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Block>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block className="TEST_CLASSNAME">block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with xLarge text size', () => {
    beforeEach(() => {
      component = shallow(<Block textSize={TextSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with secondary textColor', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block textColor={TextColor.SECONDARY}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with textAlign', () => {
    describe('right', () => {
      beforeEach(() => {
        componentWithoutContext = renderWithoutContext(<Block textAlign="right">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(componentWithoutContext).toMatchSnapshot();
      });
    });

    describe('center', () => {
      beforeEach(() => {
        componentWithoutContext = renderWithoutContext(<Block textAlign="center">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(componentWithoutContext).toMatchSnapshot();
      });
    });
  });

  describe('with ellipsis', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block ellipsis={true}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with top spacing', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block topSpacing={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with bottom spacing', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block bottomSpacing={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with padding', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block padding={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with horizontal padding', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(
        <Block horizontalPadding={GutterSize.MEDIUM}>block content</Block>,
      );
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with vertical padding', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block verticalPadding={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with positive push', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block push={3}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });

  describe('with negative push', () => {
    beforeEach(() => {
      componentWithoutContext = renderWithoutContext(<Block push={-2}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithoutContext).toMatchSnapshot();
    });
  });
});
