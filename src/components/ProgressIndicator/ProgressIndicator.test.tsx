/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProgressIndicator, { ProgressIndicatorProps } from '.';

describe('<ProgressIndicator />', () => {
  let component: ShallowWrapper<ProgressIndicatorProps, {}>;

  describe('when incomplete', () => {
    beforeEach(() => {
      component = shallow(<ProgressIndicator ariaValueText="50% complete" percentComplete={0.5} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when complete', () => {
    beforeEach(() => {
      component = shallow(<ProgressIndicator ariaValueText="100% complete" percentComplete={1} />);
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

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
