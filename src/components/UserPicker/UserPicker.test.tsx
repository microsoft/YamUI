/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UserPicker, { IBasePickerProps, IPersona } from '.';

describe('<PeoplePicker />', () => {
  let component: ShallowWrapper<IBasePickerProps<IPersona>>;

  describe('when given only required prop', () => {
    beforeEach(() => {
      const onResolveSuggestions = jest.fn();
      component = shallow(<UserPicker onResolveSuggestions={onResolveSuggestions} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
