/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import ContainerQuery from '.';
import { create as createRenderer, ReactTestRendererJSON } from 'react-test-renderer';

const render = (jsx: JSX.Element) => {
  return createRenderer(jsx).toJSON();
};

describe('<ContainerQuery />', () => {
  let component: ReactTestRendererJSON | null;
  let renderAt: (size: string) => JSX.Element;

  describe('with a query', () => {
    beforeEach(() => {
      const query = {
        small: {
          maxWidth: 500,
        },
        large: {
          minWidth: 501,
        },
      };

      renderAt = size => {
        switch (size) {
          case 'large':
            return <div>Large</div>;
          case 'small':
            return <div>Small</div>;
          default:
            return <div>Other</div>;
        }
      };

      component = render(<ContainerQuery query={query} renderAt={renderAt} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('calls renderAt with the current size', () => {
      expect(renderAt).toHaveBeenCalledWith('large');
    });
  });
});
