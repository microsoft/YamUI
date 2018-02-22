/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  IContextualMenuItemProps,
  IContextualMenuItem,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import MenuButtonItem from './MenuButtonItem';

describe('<MenuButtonItem />', () => {
  let props: IContextualMenuItemProps;
  let component: ShallowWrapper<IContextualMenuItemProps, {}>;

  beforeEach(() => {
    props = {
      item: {
        key: 'test1',
        name: 'test',
      } as IContextualMenuItem,
    } as IContextualMenuItemProps;
  });

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
