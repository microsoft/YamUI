/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HighContrastSelector } from './HighContrastSelector';
import { HighContrastSelectorProps } from './HighContrastSelector.types';

describe('<HighContrastSelector />', () => {
  let component: ShallowWrapper<HighContrastSelectorProps>;

  describe('render', () => {
    beforeEach(() => {
      component = shallow(<HighContrastSelector regular={'ReactNode'} highContrast={'High Contrast ReactNode'} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
