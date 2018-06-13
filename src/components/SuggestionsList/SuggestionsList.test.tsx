/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { default as SuggestionsList, SuggestionsListProps } from '.';
import { LayoutListItem } from '../LayoutList';
import { SuggestionsListItemTemplate } from './types';

describe('<SuggestionsList />', () => {
  let component: ShallowWrapper<SuggestionsListProps>;
  let onItemSelected: jest.Mock;
  let options: Partial<SuggestionsListProps>;

  const getProps = (overrides: Partial<SuggestionsListProps>) => {
    onItemSelected = jest.fn();

    const defaultProps = {
      onItemSelected,
      searchText: 'searchText',
      loadingText: 'loadingText',
      noResultsText: 'noResultsText',
      isLoading: false,
      selectedId: 2,
    };

    return {
      ...defaultProps,
      ...overrides,
    };
  };

  beforeEach(() => {
    options = {};
  });

  describe('when isLoading=true', () => {
    beforeEach(() => {
      options = {
        ...options,
        isLoading: true,
      };
    });

    describe('without results', () => {
      beforeEach(() => {
        component = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with results', () => {
      beforeEach(() => {
        options = {
          ...options,
          groupedItems: [
            {
              title: 'groupTitle',
              items: [
                {
                  template: SuggestionsListItemTemplate.TEXT,
                  id: 'id',
                  name: 'name',
                },
              ],
            },
          ],
        };
        component = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      describe('when onHover is called', () => {
        beforeEach(() => {
          component.find('SuggestionsListItem').simulate('hover', '1');
        });

        it('updates the state', () => {
          expect(component.state()).toMatchSnapshot();
        });
      });

      describe('with state.hoveredId=id', () => {
        beforeEach(() => {
          component.setState({ hoveredId: 'id' });
        });

        it('matches its snapshot', () => {
          expect(component).toMatchSnapshot();
        });

        describe('when the mouse leaves', () => {
          beforeEach(() => {
            component
              .find(LayoutListItem)
              .at(1)
              .simulate('mouseLeave');
          });

          it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
          });
        });
      });
    });
  });

  describe('when isLoading=false', () => {
    beforeEach(() => {
      options = {
        ...options,
        isLoading: false,
      };
    });

    describe('without results', () => {
      beforeEach(() => {
        component = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with results', () => {
      beforeEach(() => {
        options = {
          ...options,
          groupedItems: [
            {
              title: 'groupTitle',
              items: [
                {
                  template: SuggestionsListItemTemplate.TEXT,
                  id: 'id',
                  name: 'name',
                },
              ],
            },
          ],
        };
        component = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      describe('when onHover is called', () => {
        beforeEach(() => {
          component.find('SuggestionsListItem').simulate('hover', '1');
        });

        it('updates the state', () => {
          expect(component.state()).toMatchSnapshot();
        });
      });

      describe('with state.hoveredId=id', () => {
        beforeEach(() => {
          component.setState({ hoveredId: 'id' });
        });

        it('matches its snapshot', () => {
          expect(component).toMatchSnapshot();
        });

        describe('when the mouse leaves', () => {
          beforeEach(() => {
            component
              .find(LayoutListItem)
              .at(1)
              .simulate('mouseLeave');
          });

          it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
          });
        });
      });
    });
  });
});
