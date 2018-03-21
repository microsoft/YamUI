/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BaseIllustration, IllustrationProps } from '.';
import * as allExportedIllustrations from './illustrations';
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

  describe('total number of illustrations', () => {
    const totalIcons = Object.keys(allExportedIllustrations).length;
    it('is correct', () => {
      expect(totalIcons).toBe(300);
    });
  });

  describe('each illustration', () => {
    let Illustration: typeof BaseIllustration;

    // tslint:disable-next-line:mocha-no-side-effect-code
    Object.keys(allExportedIllustrations).forEach(name => {
      beforeEach(() => {
        Illustration = (allExportedIllustrations as any)[name];
        component = shallow(<Illustration />);
      });

      it('has a viewbox', () => {
        expect(component.getElement().props.viewBox).toBeDefined();
      });
    });
  });
});
