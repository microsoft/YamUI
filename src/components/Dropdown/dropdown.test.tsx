/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  Dropdown as FabricDropdown,
  IDropdownProps,
} from 'office-ui-fabric-react/lib/components/Dropdown';
import Dropdown, { DropdownProps } from '.';

describe('<Dropdown />', () => {
  let component: ShallowWrapper<DropdownProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Dropdown options={[]} />);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-dropdown')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Dropdown options={[]} className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-dropdown')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Dropdown options={[]} className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-dropdown')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with all props', () => {
    beforeEach(() => {
      component = shallow(
        <Dropdown
          options={[{ key: 'A', text: 'Option a' }, { key: 'B', text: 'Option b' }]}
          className="TEST_CLASSNAME"
          selectedKey="A"
          placeHolder="TEST_PLACEHOLDER"
          label="TEST_LABEL"
          onChanged={jest.fn()}
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
      component = shallow(<Dropdown options={options} onChanged={callback} />);
    });

    describe('when an option is selected', () => {
      let fabricDropdown: ShallowWrapper<IDropdownProps, {}>;

      beforeEach(() => {
        fabricDropdown = component.find(FabricDropdown);
        fabricDropdown.prop<Function>('onChanged')(options[1]);
      });

      it('triggers the onChanged callback with key', () => {
        expect(callback).toHaveBeenCalledWith(options[1].key);
      });
    });
  });
});
