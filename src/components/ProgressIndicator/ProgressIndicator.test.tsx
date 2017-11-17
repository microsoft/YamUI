/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  ProgressIndicator as OfficeFabricProgressIndicator,
} from 'office-ui-fabric-react/lib/ProgressIndicator';
import ProgressIndicator, { ProgressIndicatorProps } from '.';

describe('<ProgressIndicator />', () => {
  let component: ShallowWrapper<ProgressIndicatorProps, {}>;

  describe('when rendered', () => {
    beforeEach(() => {
      component = shallow(<ProgressIndicator ariaValueText="50% complete" percentComplete={50} />);
    });

    it('renders <OfficeFabricProgressIndicator />', () => {
      expect(component.find(OfficeFabricProgressIndicator).length).toEqual(1);
    });

    it('passes its percentComplete prop to <OfficeFabricProgressIndicator />', () => {
      expect(component.find(OfficeFabricProgressIndicator).prop('percentComplete')).toEqual(50);
    });

    it('passes a translated ariaTextValue to <OfficeFabricProgressIndicator />', () => {
      expect(component.find(OfficeFabricProgressIndicator).prop('ariaValueText')).
        toEqual('translated equivalent');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
