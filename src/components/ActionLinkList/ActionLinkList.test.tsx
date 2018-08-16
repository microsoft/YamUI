/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ActionLink from '../ActionLink';
import ActionLinkList, { ActionLinkListProps } from './index';
import Down from '../Icon/icons/Down';
import Up from '../Icon/icons/Up';

describe('<ActionLinkList />', () => {
  let component: ShallowWrapper<ActionLinkListProps>;

  describe('with items', () => {
    beforeEach(() => {
      const items = [
        <ActionLink text="Download" icon={Down} href="https://yammer.com" key="1" />,
        <ActionLink text="Upload" icon={Up} href="https://yammer.com" key="2" />,
      ];
      component = shallow(<ActionLinkList items={items} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
