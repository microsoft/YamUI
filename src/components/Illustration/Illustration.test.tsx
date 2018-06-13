/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IllustrationProps } from '.';
import AccDB16 from './illustrations/AccDB16';

describe('<Illustration />', () => {
  let component: ShallowWrapper<IllustrationProps>;

  describe('an illustration', () => {
    describe('with minimal options', () => {
      beforeEach(() => {
        component = shallow(<AccDB16 />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with size', () => {
      beforeEach(() => {
        component = shallow(<AccDB16 size={24} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with block', () => {
      beforeEach(() => {
        component = shallow(<AccDB16 block={true} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with additional className', () => {
      beforeEach(() => {
        component = shallow(<AccDB16 className="TEST_CLASSNAME" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
