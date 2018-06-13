/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { default as SuggestionsList, SuggestionsListProps } from '.';
import { LayoutListItem } from '../LayoutList';

describe('<SuggestionsList />', () => {
  let rendered: ShallowWrapper<SuggestionsListProps>;
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
      groupedItems: [],
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
        rendered = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
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
                  id: 'id',
                  imageUrl: 'imageUrl',
                  name: 'name',
                  description: 'description',
                },
              ],
            },
          ],
        };
        rendered = shallow(<SuggestionsList {...getProps(options)} />);
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
            rendered
              .find(LayoutListItem)
              .at(1)
              .simulate('mouseLeave');
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
      options = {
        ...options,
        isLoading: false,
      };
    });

    describe('without results', () => {
      beforeEach(() => {
        rendered = shallow(<SuggestionsList {...getProps(options)} />);
      });

      it('renders as expected', () => {
        expect(rendered).toMatchSnapshot();
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
                  id: 'id',
                  imageUrl: 'imageUrl',
                  name: 'name',
                  description: 'description',
                },
              ],
            },
          ],
        };
        rendered = shallow(<SuggestionsList {...getProps(options)} />);
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
            rendered
              .find(LayoutListItem)
              .at(1)
              .simulate('mouseLeave');
          });

          it('renders as expected', () => {
            expect(rendered).toMatchSnapshot();
          });
        });
      });
    });
  });
});
