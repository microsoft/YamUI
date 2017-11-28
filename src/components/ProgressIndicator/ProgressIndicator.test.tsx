/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProgressIndicator, { ProgressIndicatorProps } from '.';

describe('<ProgressIndicator />', () => {
  let component: ShallowWrapper<ProgressIndicatorProps, {}>;

  describe('when incomplete', () => {
    beforeEach(() => {
      component = shallow(
        <ProgressIndicator ariaValueText="50% complete" percentComplete={0.5} />,
      );
    });

    it('includes the incomplete classname (for square progress bar corners)', () => {
      expect(component.hasClass('y-progress-indicator__incomplete')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when complete', () => {
    beforeEach(() => {
      component = shallow(
        <ProgressIndicator ariaValueText="100% complete" percentComplete={1} />,
      );
    });

    it('does not include the incomplete classname', () => {
      expect(component.hasClass('y-progress-indicator__incomplete')).toBe(false);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <ProgressIndicator
          ariaValueText="50% complete"
          percentComplete={0.5}
          className="TEST_CLASS"
        />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASS')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-progress-indicator')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
