/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SuggestionsListItem, { SuggestionsListItemProps } from './SuggestionsListItem';

describe('<SuggestionsListItem />', () => {
  let rendered: ShallowWrapper<SuggestionsListItemProps, {}>;
  let onSelect: jest.Mock;
  let isSelected: boolean;

  const getProps = () => {
    return {
      isSelected,
      onSelect,
      id: '1',
      imageUrl: 'imageUrl',
      name: 'John Smith',
      description: 'Software Engineer',
      searchText: 'Joh',
    };
  };

  beforeEach(() => {
    onSelect = jest.fn();
  });

  describe('when isSelected=true', () => {
    beforeEach(() => {
      isSelected = true;
      rendered = shallow(<SuggestionsListItem {...getProps()} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when isSelected=false', () => {
    beforeEach(() => {
      isSelected = false;
      rendered = shallow(<SuggestionsListItem {...getProps()} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when selecting', () => {
    beforeEach(() => {
      rendered = shallow(<SuggestionsListItem {...getProps()} />);
      rendered.simulate('mouseDown');
    });

    it('calls props.onSelect', () => {
      expect(onSelect).toBeCalled();
    });
  });
});
