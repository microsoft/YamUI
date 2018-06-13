/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SuggestionsListItem, { SuggestionsListItemProps } from './SuggestionsListItem';
import { SuggestionItem, SuggestionsListItemTemplate } from './types';

describe('<SuggestionsListItem />', () => {
  let component: ShallowWrapper<SuggestionsListItemProps>;
  let onSelect: jest.Mock;

  const textItem: SuggestionItem = {
    template: SuggestionsListItemTemplate.TEXT,
    id: '1',
    name: 'John Smith',
  };

  const baseProps = (overrides?: Partial<SuggestionsListItemProps>) => {
    onSelect = jest.fn();

    return {
      onSelect,
      isSelected: false,
      searchText: 'Joh',
      ...overrides,
    };
  };

  beforeEach(() => {
    onSelect = jest.fn();
  });

  describe('when isSelected=true', () => {
    beforeEach(() => {
      component = shallow(<SuggestionsListItem {...baseProps({ isSelected: true })} item={textItem} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when selecting', () => {
    let preventDefault: jest.Mock;

    beforeEach(() => {
      component = shallow(<SuggestionsListItem {...baseProps()} item={textItem} />);
      preventDefault = jest.fn();
      component.simulate('mouseDown', { preventDefault });
    });

    it('calls props.onSelect', () => {
      expect(onSelect).toBeCalled();
    });

    it('calls event preventDefault', () => {
      expect(preventDefault).toBeCalled();
    });
  });
});
