/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ChoiceGroup, { ChoiceGroupProps } from '.';
import { defaultTheme as theme } from '../Customizer';
import { IChoiceGroupOptionProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption';

describe('<ChoiceGroup />', () => {
  let component: ShallowWrapper<ChoiceGroupProps>;
  let labelWithSublabel: JSX.Element;
  let firstOption: IChoiceGroupOptionProps;
  let onChange: jest.Mock<Function>;

  const options = [
    {
      key: 'A',
      text: 'Option A',
      label: 'Sublabel for A',
    },
    {
      key: 'B',
      text: 'Option B',
    },
  ];

  const getChoiceGroup = (overrides?: Partial<ChoiceGroupProps>) => {
    onChange = jest.fn();

    const props = {
      onChange,
      options,
      ...overrides,
    };
    return <ChoiceGroup {...props} />;
  };

  describe('with minimal props', () => {
    beforeEach(() => {
      component = shallow(getChoiceGroup());
      const componentOptions = component.find('StyledCustomizedChoiceGroup').prop('options');
      firstOption = (componentOptions as IChoiceGroupOptionProps[])[0];
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });

    it('sublabel renders as expected', () => {
      const onRenderLabel = firstOption.onRenderLabel;
      labelWithSublabel = (onRenderLabel as Function)();
      expect(labelWithSublabel).toMatchSnapshot();
    });

    it('styled as expected', () => {
      const getStyles = component.find('StyledCustomizedChoiceGroup').prop('styles');
      expect((getStyles as Function)({ theme })).toMatchSnapshot();
    });

    it('option styled as expected', () => {
      const getOptionStyles = firstOption.styles as Function;
      expect(getOptionStyles({ theme })).toMatchSnapshot();
    });

    it('when checked, option styled as expected', () => {
      const getOptionStyles = firstOption.styles as Function;
      expect(getOptionStyles({ checked: true, theme })).toMatchSnapshot();
    });

    describe('when a change is triggered with an option', () => {
      beforeEach(() => {
        component.simulate('change', null, { key: 'B' });
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });

      it('calls `props.onChange`', () => {
        expect(onChange).toBeCalledWith('B');
      });
    });

    describe('when a change is triggered with an option that is `undefined`', () => {
      beforeEach(() => {
        component.simulate('change', null, undefined);
      });

      it('renders as expected', () => {
        expect(component).toMatchSnapshot();
      });

      it('does not call `props.onChange`', () => {
        expect(onChange).not.toBeCalled();
      });
    });
  });

  describe('when `props.selectedKey` is set', () => {
    beforeEach(() => {
      component = shallow(getChoiceGroup({ selectedKey: 'B' }));
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
