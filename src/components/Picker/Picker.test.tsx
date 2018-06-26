/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SuggestionItem, SuggestionsListItemTemplate } from '../SuggestionsList/types';
import Picker, { PickerProps } from './index';
import { IPickerItemProps } from 'office-ui-fabric-react/lib/Pickers';

describe('<Picker />', () => {
  let component: ShallowWrapper<PickerProps>;
  let onChange: jest.Mock<Function>;

  const suggestions: SuggestionItem[] = [
    {
      template: SuggestionsListItemTemplate.AVATAR_ROUND,
      id: 1,
      name: 'Cristiana Cline',
      description: 'Data Analyst',
    },
    {
      template: SuggestionsListItemTemplate.AVATAR_ROUND,
      id: 2,
      name: 'Cristian Sayers',
      description: 'Front-End Developer',
      imageUrl: 'user.png',
    },
  ];

  const getPicker = (overrides?: Partial<PickerProps>) => {
    onChange = jest.fn();
    const props = {
      onChange,
      onResolveSuggestions: () => suggestions,
      selectedItems: [],
      inputAriaLabel: 'People to mention',
      removeItemAriaLabel: 'Remove this item',
      suggestionsHeaderText: 'People',
      noResultsFoundText: 'No results found',
      ...overrides,
    };
    return <Picker {...props} />;
  };

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(getPicker());
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(getPicker({ className: 'TEST_CLASSNAME' }));
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when rendering a suggestion item', () => {
    beforeEach(() => {
      component = shallow(getPicker());
    });

    it('matches its snapshot', () => {
      const onRenderSuggestionsItem = component
        .find('SuggestionListBasePicker')
        .prop<(item: SuggestionItem) => React.ReactNode>('onRenderSuggestionsItem');
      const someItem = suggestions[0];
      expect(onRenderSuggestionsItem(someItem)).toMatchSnapshot();
    });
  });

  describe('when rendering a selected item', () => {
    beforeEach(() => {
      component = shallow(getPicker());
    });

    it('matches its snapshot', () => {
      const onRenderItem = component
        .find('SuggestionListBasePicker')
        .prop<(props: IPickerItemProps<SuggestionItem>) => React.ReactNode>('onRenderItem');
      const someItem: IPickerItemProps<SuggestionItem> = { index: 0, item: suggestions[0] };
      expect(onRenderItem(someItem)).toMatchSnapshot();
    });
  });

  describe('when a suggestion is selected', () => {
    beforeEach(() => {
      component = shallow(getPicker());
      component.find('SuggestionListBasePicker').simulate('change');
    });

    it('matches its snapshot', () => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
