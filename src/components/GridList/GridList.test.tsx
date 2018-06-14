/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GridList, GridListItem, GridListProps } from './index';

describe('<GridList />', () => {
  let component: ShallowWrapper<GridListProps>;
  let items: React.ReactNode[];

  beforeEach(() => {
    items = [
      <GridListItem key="1">1</GridListItem>,
      <GridListItem key="2">2</GridListItem>,
      <GridListItem key="3">3</GridListItem>,
      <GridListItem key="4">4</GridListItem>,
    ];
  });

  describe('without items', () => {
    beforeEach(() => {
      component = shallow(<GridList columns={1} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with items', () => {
    beforeEach(() => {
      component = shallow(<GridList columns={1}>{items}</GridList>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with more columns and wider gutters', () => {
    beforeEach(() => {
      component = shallow(
        <GridList columns={8} gutterUnits={3}>
          {items}
        </GridList>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <GridList columns={1} className="TEST_CLASSNAME">
          {items}
        </GridList>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
