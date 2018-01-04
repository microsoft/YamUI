/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LayoutList, LayoutListProps, GutterSize } from '.';

describe('<LayoutList />', () => {
  let component: ShallowWrapper<LayoutListProps, {}>;

  describe('as horizontal list', () => {
    describe('without props', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="horizontal" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with align "right"', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="horizontal" align="right" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with gutterSize', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="horizontal" gutterSize={GutterSize.LARGE} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="horizontal" className="TEST_CLASSNAME" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with child content', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="horizontal">list content</LayoutList>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('as vertical list', () => {
    describe('without props', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="vertical" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="vertical" className="TEST_CLASSNAME" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with child content', () => {
      beforeEach(() => {
        component = shallow(<LayoutList direction="vertical">list content</LayoutList>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
