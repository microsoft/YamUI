/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  IContextualMenuItemProps,
  IContextualMenuItem,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import MenuButtonItem from './MenuButtonItem';
const Reply = require('../Icon/icons/Reply').default;

describe('<MenuButtonItem />', () => {
  let props: IContextualMenuItemProps;
  let component: ShallowWrapper<IContextualMenuItemProps, {}>;

  beforeEach(() => {});

  describe('with default options', () => {
    beforeEach(() => {
      props = {
        item: {
          key: 'test1',
          name: 'test',
        } as IContextualMenuItem,
      } as IContextualMenuItemProps;

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with an href', () => {
    beforeEach(() => {
      props = {
        item: {
          key: 'test1',
          name: 'test',
          href: 'http://test.com',
        } as IContextualMenuItem,
      } as IContextualMenuItemProps;

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when it is disabled', () => {
    beforeEach(() => {
      props = {
        item: {
          key: 'test1',
          name: 'test',
          disabled: true,
        } as IContextualMenuItem,
      } as IContextualMenuItemProps;

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with an icon passed', () => {
    beforeEach(() => {
      props = {
        item: {
          key: 'test1',
          name: 'test',
          data: {
            yamUIIcon: Reply,
          },
        } as IContextualMenuItem,
      } as IContextualMenuItemProps;

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when it is a header type', () => {
    beforeEach(() => {
      props = {
        item: {
          key: 'test1',
          name: 'test',
          itemType: ContextualMenuItemType.Header,
        } as IContextualMenuItem,
      } as IContextualMenuItemProps;

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
