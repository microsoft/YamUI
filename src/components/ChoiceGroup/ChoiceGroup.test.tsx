/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ChoiceGroup, { ChoiceGroupProps } from './index';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupProps,
} from 'office-ui-fabric-react/lib/components/ChoiceGroup';

describe('<ChoiceGroup />', () => {
  let component: ShallowWrapper<ChoiceGroupProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<ChoiceGroup options={[]} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all props', () => {
    beforeEach(() => {
      component = shallow(
        <ChoiceGroup
          options={[{ key: 'A', text: 'Option a' }, { key: 'B', text: 'Option b' }]}
          className="TEST_CLASSNAME"
          selectedKey="A"
          label="TEST_LABEL"
          onChange={jest.fn().mockName('onChanged')}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with onChanged handler', () => {
    let callback: jest.Mock<{}>;
    const options = [{ key: 'A', text: 'Option a' }, { key: 'B', text: 'Option b' }];

    beforeEach(() => {
      callback = jest.fn();
      component = shallow(<ChoiceGroup options={options} onChange={callback} />);
    });

    describe('when an option is selected', () => {
      let fabricDropdown: ShallowWrapper<IChoiceGroupProps, {}>;

      beforeEach(() => {
        fabricDropdown = component.find(FabricChoiceGroup);
        fabricDropdown.simulate('change', undefined, options[1]);
      });

      it('triggers the onChange callback with key', () => {
        expect(callback).toHaveBeenCalledWith(options[1].key);
      });
    });
  });
});
