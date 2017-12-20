/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { List, ListProps, TextSize } from '.';

describe('<List />', () => {
  let component: ShallowWrapper<ListProps, {}>;

  describe('ordered', () => {
    describe('without textSize', () => {
      beforeEach(() => {
        component = shallow(<List type="ordered" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with textSize', () => {
      beforeEach(() => {
        component = shallow(<List type="ordered" textSize={TextSize.SMALL} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(
          <List type="ordered" className="TEST_CLASSNAME" />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('unordered', () => {
    describe('without textSize', () => {
      beforeEach(() => {
        component = shallow(<List type="unordered" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with textSize', () => {
      beforeEach(() => {
        component = shallow(<List type="unordered" textSize={TextSize.SMALL} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(
          <List type="unordered" className="TEST_CLASSNAME" />,
        );
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
