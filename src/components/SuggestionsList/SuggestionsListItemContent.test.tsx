/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SuggestionsListItemContent, { SuggestionsListItemContentProps } from './SuggestionsListItemContent';
import { SuggestionItem, SuggestionsListItemTemplate } from './types';

describe('<SuggestionsListItemContentContent />', () => {
  let component: ShallowWrapper<SuggestionsListItemContentProps>;

  const textItem: SuggestionItem = {
    template: SuggestionsListItemTemplate.TEXT,
    id: '1',
    name: 'John Smith',
  };
  const avatarItem: SuggestionItem = {
    template: SuggestionsListItemTemplate.AVATAR_ROUND,
    id: '1',
    name: 'John Smith',
    description: 'description',
    imageUrl: 'user.png',
    avatarProps: { badgeContent: 'badge' },
  };
  const mediaSoftItem: SuggestionItem = {
    template: SuggestionsListItemTemplate.MEDIA_SOFT,
    id: '1',
    name: 'John Smith',
    description: 'description',
    imageUrl: 'user.png',
  };
  const mediaSquareItem: SuggestionItem = {
    template: SuggestionsListItemTemplate.MEDIA_SQUARE,
    id: '1',
    name: 'John Smith',
    description: 'description',
    imageUrl: 'user.png',
  };
  const mediaSquareItemWithoutImage: SuggestionItem = {
    template: SuggestionsListItemTemplate.MEDIA_SQUARE,
    id: '1',
    name: 'John Smith',
    description: 'description',
  };

  describe('with text item', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={textItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with avatar item', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={avatarItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with media soft item', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={mediaSoftItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with media square item', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={mediaSquareItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with media item without image', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={mediaSquareItemWithoutImage} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with search text', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItemContent item={avatarItem} searchText="Joh" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
