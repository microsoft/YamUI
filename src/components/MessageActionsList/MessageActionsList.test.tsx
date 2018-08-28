/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { MessageActionsList } from './MessageActionsList';
import { MessageActionsListItem, MessageActionsListProps } from './MessageActionsList.types';
import Reply from '../Icon/icons/Reply';
import Like from '../Icon/icons/Like';
import { darkTheme } from '../Customizer';

describe('<MessageActionsList />', () => {
  let component: ShallowWrapper<MessageActionsListProps>;
  let items: MessageActionsListItem[];

  beforeEach(() => {
    items = [
      {
        icon: Like,
        text: 'like',
        ariaLabel: 'like',
        key: 'like',
        unlinkedText: '1',
        unlinkedTextAriaLabel: '1 person has like this post',
        onClick: jest.fn().mockName('likeOnClick'),
      },
      {
        icon: Reply,
        text: 'reply',
        ariaLabel: 'reply',
        key: 'reply',
        onClick: jest.fn().mockName('replyOnClick'),
      },
    ];
  });

  describe('with one item', () => {
    beforeEach(() => {
      component = shallow(<MessageActionsList items={items.slice(0, 1)} overflowMenuAriaLabel="more items" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all items', () => {
    beforeEach(() => {
      component = shallow(<MessageActionsList items={items} overflowMenuAriaLabel="more items" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all items, and maxVisibleItemCount of 1', () => {
    beforeEach(() => {
      component = shallow(
        <MessageActionsList items={items} maxVisibleItemCount={1} overflowMenuAriaLabel="more items" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a theme', () => {
    beforeEach(() => {
      component = shallow(<MessageActionsList items={items} theme={darkTheme} overflowMenuAriaLabel="more items" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
