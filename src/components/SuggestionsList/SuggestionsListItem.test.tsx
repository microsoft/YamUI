/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SuggestionsListItem, { SuggestionsListItemProps } from './SuggestionsListItem';
import { BorderType } from '../Avatar';

describe('<SuggestionsListItem />', () => {
  let rendered: ShallowWrapper<SuggestionsListItemProps>;
  let onSelect: jest.Mock;

  const getProps = (overrides?: Partial<SuggestionsListItemProps>) => {
    onSelect = jest.fn();

    return {
      onSelect,
      isSelected: false,
      id: '1',
      imageUrl: 'imageUrl',
      name: 'John Smith',
      description: 'Software Engineer',
      searchText: 'Joh',
      ...overrides,
    };
  };

  beforeEach(() => {
    onSelect = jest.fn();
  });

  describe('when isSelected=true', () => {
    beforeEach(() => {
      rendered = shallow(<SuggestionsListItem {...getProps({ isSelected: true })} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when isSelected=false', () => {
    beforeEach(() => {
      rendered = shallow(<SuggestionsListItem {...getProps({ isSelected: false })} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when searchText has a "("', () => {
    beforeEach(() => {
      rendered = shallow(<SuggestionsListItem {...getProps({ name: 'Jo(hn)', searchText: 'Jo(' })} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('with avatarProps', () => {
    beforeEach(() => {
      const avatarProps = { borderType: BorderType.SOFT };
      rendered = shallow(<SuggestionsListItem {...getProps({ avatarProps })} />);
    });

    it('renders as expected', () => {
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('when selecting', () => {
    let preventDefault: jest.Mock;

    beforeEach(() => {
      rendered = shallow(<SuggestionsListItem {...getProps()} />);
      preventDefault = jest.fn();
      rendered.simulate('mouseDown', { preventDefault });
    });

    it('calls props.onSelect', () => {
      expect(onSelect).toBeCalled();
    });

    it('calls event preventDefault', () => {
      expect(preventDefault).toBeCalled();
    });
  });
});
