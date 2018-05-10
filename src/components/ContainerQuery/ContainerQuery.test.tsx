/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import ContainerQuery, { ContainerQueryProps } from '.';

describe('<ContainerQuery />', () => {
  let component: ShallowWrapper<ContainerQuery, {}>;
  let mounted: ReactWrapper<ContainerQuery, {}>;

  beforeEach(() => {
    const props: ContainerQueryProps = {
      query: {
        small: { maxWidth: 500 },
        large: { minWidth: 501 },
      },
      renderAt: selected => <span>{selected}</span>,
    };
    component = shallow(<ContainerQuery {...props} />);
  });

  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when mounted at small size', () => {
    beforeEach(() => {
      const props: ContainerQueryProps = {
        query: {
          small: { maxWidth: 500 },
          large: { minWidth: 501 },
        },
        renderAt: selected => <div className="content">{selected}</div>,
        initialSize: { width: 400 },
      };
      mounted = mount(<ContainerQuery {...props} />);
    });

    it('matches its snapshot', () => {
      expect(mounted.find('.content').last()).toMatchSnapshot();
    });
  });

  describe('when mounted at large size', () => {
    beforeEach(() => {
      const props: ContainerQueryProps = {
        query: {
          small: { maxWidth: 500 },
          large: { minWidth: 501 },
        },
        renderAt: selected => <div className="content">{selected}</div>,
        initialSize: { width: 600 },
      };
      mounted = mount(<ContainerQuery {...props} />);
    });

    it('matches its snapshot', () => {
      expect(mounted.find('.content').last()).toMatchSnapshot();
    });
  });
});
