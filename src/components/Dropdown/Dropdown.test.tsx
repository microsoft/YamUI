/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import {
  Dropdown as FabricDropdown,
  IDropdownProps,
} from 'office-ui-fabric-react/lib/components/Dropdown';
import Dropdown, { DropdownProps, DropdownMenuItemType } from '.';
import AddIcon from '../Icon/icons/Add';

describe('<Dropdown />', () => {
  let component: ShallowWrapper<DropdownProps, {}>;
  let fullComponent: ReactWrapper<DropdownProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Dropdown options={[]} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Dropdown options={[]} className="TEST_CLASSNAME" />);
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

  describe('option templates', () => {
    describe('with icon', () => {
      beforeEach(() => {
        const options = [{ key: 'A', text: 'with icon', icon: AddIcon }];
        fullComponent = mount(<Dropdown options={options} />);
        fullComponent.find('.ms-Dropdown').simulate('click');
      });

      it('matches its snapshot', () => {
        expect(fullComponent.find('.ms-Dropdown-items .y-dropdown--item')).toMatchSnapshot();
      });
    });

    describe('with label', () => {
      beforeEach(() => {
        const options = [{ key: 'A', text: 'with icon', label: 'label' }];
        fullComponent = mount(<Dropdown options={options} />);
        fullComponent.find('.ms-Dropdown').simulate('click');
      });

      it('matches its snapshot', () => {
        expect(fullComponent.find('.ms-Dropdown-items .y-dropdown--item')).toMatchSnapshot();
      });
    });
  });

  describe('with divider', () => {
    beforeEach(() => {
      const options = [
        { key: 'divider', text: 'divider1', itemType: DropdownMenuItemType.Divider },
      ];
      fullComponent = mount(<Dropdown options={options} />);
      fullComponent.find('.ms-Dropdown').simulate('click');
    });

    it('matches its snapshot', () => {
      expect(fullComponent.find('.ms-Dropdown-items .y-dropdown--item')).toMatchSnapshot();
    });
  });

  describe('with section header', () => {
    beforeEach(() => {
      const options = [{ key: 'header', text: 'header1', itemType: DropdownMenuItemType.Header }];
      fullComponent = mount(<Dropdown options={options} />);
      fullComponent.find('.ms-Dropdown').simulate('click');
    });

    it('matches its snapshot', () => {
      expect(fullComponent.find('.ms-Dropdown-items .y-dropdown--item')).toMatchSnapshot();
    });
  });

  describe('when fully rendered', () => {
    beforeEach(() => {
      fullComponent = mount(<Dropdown options={[]} />);
    });

    it('displays our custom caret icon', () => {
      expect(fullComponent.find('.y-dropdown__caretDown').length).toBe(1);
    });
  });

  describe('with onChanged handler', () => {
    let callback: jest.Mock;
    const options = [{ key: 'A', text: 'Option a' }, { key: 'B', text: 'Option b' }];

    beforeEach(() => {
      callback = jest.fn();
      component = shallow(<Dropdown options={options} onChanged={callback} />);
    });

    describe('when an option is selected', () => {
      let fabricDropdown: ShallowWrapper<IDropdownProps, {}>;

      beforeEach(() => {
        fabricDropdown = component.find(FabricDropdown);
        fabricDropdown.simulate('changed', options[1]);
      });

      it('triggers the onChanged callback with key', () => {
        expect(callback).toHaveBeenCalledWith(options[1].key);
      });
    });
  });

  describe('when onRenderTitle is called with null', () => {
    let result: React.ReactNode | null;

    beforeEach(() => {
      const fabricDropdown = component.find(FabricDropdown);
      const onRenderTitle = fabricDropdown.prop('onRenderTitle');
      if (onRenderTitle) {
        result = onRenderTitle(undefined);
      }
    });

    it('returns the expected value', () => {
      expect(result).toMatchSnapshot();
    });
  });

  describe('when onRenderTitle is called with an empty array', () => {
    let result: React.ReactNode | null;

    beforeEach(() => {
      const fabricDropdown = component.find(FabricDropdown);
      const onRenderTitle = fabricDropdown.prop('onRenderTitle');
      if (onRenderTitle) {
        result = onRenderTitle([]);
      }
    });

    it('renders as expected', () => {
      expect(result).toMatchSnapshot();
    });
  });

  describe('when onRenderTitle is called with an array of items', () => {
    let result: React.ReactNode | null;

    beforeEach(() => {
      const fabricDropdown = component.find(FabricDropdown);
      const onRenderTitle = fabricDropdown.prop('onRenderTitle');
      if (onRenderTitle) {
        result = onRenderTitle([
          { itemType: DropdownMenuItemType.Header, key: '1', text: 'foo' },
          { key: '2', text: 'bar' },
        ]);
      }
    });

    it('renders as expected', () => {
      expect(result).toMatchSnapshot();
    });
  });
});
