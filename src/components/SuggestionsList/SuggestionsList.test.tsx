/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  default as SuggestionsList,
  SuggestionsListProps,
  SuggestionItemGroupProps,
  SuggestionsListState,
} from './SuggestionsList';

describe('<SuggestionsList />', () => {
  let rendered: ShallowWrapper<SuggestionsListProps, SuggestionsListState>;
  let onItemSelected: jest.Mock<{}>;
  let isLoading: boolean;
  let groupedItems: SuggestionItemGroupProps[];
  const target = document.createElement('div');

  const getProps = () => {
    return {
      target,
      isLoading,
      groupedItems,
      onItemSelected,
      loadingText: 'loadingText',
      noResultsText: 'noResultsText',
      selectedId: 2,
      searchText: 'searchText',
    };
  };

  beforeEach(() => {
    onItemSelected = jest.fn();
    groupedItems = [];
    isLoading = false;
  });

  describe('when isLoading=true', () => {
    beforeEach(() => {
      isLoading = true;
    });

    describe('without results', () => {
      beforeEach(() => {
        rendered = shallow(<SuggestionsList {...getProps()} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
      });
    });

    describe('with results', () => {
      beforeEach(() => {
        groupedItems = [{
          title: 'groupTitle',
          items: [{
            id: 'id',
            imageUrl: 'imageUrl',
            name: 'name',
            description: 'description',
          }],
        }];
        rendered = shallow(<SuggestionsList {...getProps()} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
      });

      describe('when onHover is called', () => {
        beforeEach(() => {
          rendered.find('SuggestionsListItem').simulate('hover', '1');
        });

        it('updates the state', () => {
          expect(rendered.state()).toMatchSnapshot();
        });
      });

      describe('with state.hoveredId=id', () => {
        beforeEach(() => {
          rendered.setState({ hoveredId: 'id' });
        });

        it('renders as expected', () => {
          expect(rendered).toMatchSnapshot();
        });

        describe('when the mouse leaves', () => {
          beforeEach(() => {
            rendered.find('ul').at(1).simulate('mouseOut');
          });

          it('renders as expected', () => {
            expect(rendered).toMatchSnapshot();
          });
        });
      });
    });
  });

  describe('when isLoading=false', () => {
    beforeEach(() => {
      isLoading = false;
    });

    describe('without results', () => {
      beforeEach(() => {
        rendered = shallow(<SuggestionsList {...getProps()} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
      });
    });

    describe('with results', () => {
      beforeEach(() => {
        groupedItems = [{
          title: 'groupTitle',
          items: [{
            id: 'id',
            imageUrl: 'imageUrl',
            name: 'name',
            description: 'description',
          }],
        }];
        rendered = shallow(<SuggestionsList {...getProps()} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
      });

      describe('when onHover is called', () => {
        beforeEach(() => {
          rendered.find('SuggestionsListItem').simulate('hover', '1');
        });

        it('updates the state', () => {
          expect(rendered.state()).toMatchSnapshot();
        });
      });

      describe('with state.hoveredId=id', () => {
        beforeEach(() => {
          rendered.setState({ hoveredId: 'id' });
        });

        it('renders as expected', () => {
          expect(rendered).toMatchSnapshot();
        });

        describe('when the mouse leaves', () => {
          beforeEach(() => {
            rendered.find('ul').at(1).simulate('mouseOut');
          });

          it('renders as expected', () => {
            expect(rendered).toMatchSnapshot();
          });
        });
      });
    });
  });
});
