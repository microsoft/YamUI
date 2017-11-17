/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProgressIndicator, { ProgressIndicatorProps } from '.';

describe('<ProgressIndicator />', () => {
  let component: ShallowWrapper<ProgressIndicatorProps, {}>;
  const percentComplete = 0.5;

  describe('when rendered', () => {
    beforeEach(() => {
      component = shallow(
        <ProgressIndicator ariaValueText="50% complete" percentComplete={percentComplete} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    const additionalClassname = 'additionalClassname';
    const baseClassname = 'y-progress-indicator';

    beforeEach(() => {
      component = shallow(
        <ProgressIndicator
          ariaValueText="50% complete" 
          percentComplete={percentComplete} 
          className={additionalClassname} 
        />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass(additionalClassname)).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass(baseClassname)).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
