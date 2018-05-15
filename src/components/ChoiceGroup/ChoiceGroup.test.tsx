/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ChoiceGroup, { ChoiceGroupProps } from '.';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

describe('<ChoiceGroup />', () => {
  let onChange: jest.Mock<Function>;

  const getChoiceGroup = (overrides?: Partial<ChoiceGroupProps>) => {
    onChange = jest.fn();
    const props = {
      onChange,
      options: [
        {
          key: 'A',
          text: 'Option A',
          label: 'Sublabel for A',
        },
        {
          key: 'B',
          text: 'Option B',
        },
      ],
      ...overrides,
    };
    return <ChoiceGroup {...props} />;
  };

  let component: ShallowWrapper<ChoiceGroupProps>;
  let labelWithSublabel: JSX.Element;

  describe('with minimal props', () => {
    beforeEach(() => {
      component = shallow(getChoiceGroup());
      const options = component.find('ChoiceGroup').prop('options');
      const onRenderLabel = (options as IChoiceGroupOption[])[0].onRenderLabel;
      labelWithSublabel = (onRenderLabel as Function)();
    });

    it('renders as expected', () => {
      expect(component).toMatchSnapshot();
    });

    it('sublabel renders as expected', () => {
      expect(labelWithSublabel).toMatchSnapshot();
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
