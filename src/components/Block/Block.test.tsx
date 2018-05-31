/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { create as createRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Block, { GutterSize, TextColor, TextSize } from '.';
import Clickable from '../Clickable';

const render = (jsx: JSX.Element) => {
  return createRenderer(jsx).toJSON();
};

describe('<Block />', () => {
  let component: ReactTestRendererJSON | null;
  let componentWithContext: ReactTestRendererJSON | null;

  describe('with default options', () => {
    beforeEach(() => {
      componentWithContext = render(<Block>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithContext).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = render(<Block className="TEST_CLASSNAME">block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with xLarge text size', () => {
    beforeEach(() => {
      componentWithContext = render(<Block textSize={TextSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(componentWithContext).toMatchSnapshot();
    });
  });

  describe('with secondary textColor', () => {
    beforeEach(() => {
      component = render(<Block textColor={TextColor.SECONDARY}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with textAlign', () => {
    describe('right', () => {
      beforeEach(() => {
        component = render(<Block textAlign="right">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('center', () => {
      beforeEach(() => {
        component = render(<Block textAlign="center">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with ellipsis', () => {
    beforeEach(() => {
      component = render(<Block ellipsis={true}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with top spacing', () => {
    beforeEach(() => {
      component = render(<Block topSpacing={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with bottom spacing', () => {
    beforeEach(() => {
      component = render(<Block bottomSpacing={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with padding', () => {
    beforeEach(() => {
      component = render(<Block padding={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with horizontal padding', () => {
    beforeEach(() => {
      component = render(<Block horizontalPadding={GutterSize.MEDIUM}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with vertical padding', () => {
    beforeEach(() => {
      component = render(<Block verticalPadding={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with positive push', () => {
    beforeEach(() => {
      component = render(<Block push={3}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with negative push', () => {
    beforeEach(() => {
      component = render(<Block push={-2}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('within clickable', () => {
    let rendered: Clickable;

    beforeEach(() => {
      rendered = renderIntoDocument(
        <Clickable>
          <Block>block content</Block>
        </Clickable>,
      ) as Clickable;
    });

    it('matches its snapshot', () => {
      expect(findRenderedDOMComponentWithClass(rendered, 'y-block')).toMatchSnapshot();
    });
  });
});
