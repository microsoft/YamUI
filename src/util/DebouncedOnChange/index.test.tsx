/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import DebouncedOnChange, { DebouncedOnChangeProps, DebouncedOnChangePrivateProps } from '.';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

interface InnerComponentProps extends DebouncedOnChangeProps {
  onChange?: ((newValue: any) => void);
}

const InnerComponent: React.StatelessComponent<InnerComponentProps> = props => <input {...props} />;
const TestComponent: React.StatelessComponent<InnerComponentProps & DebouncedOnChangePrivateProps> = props => (
  <InnerComponent onChange={props.unifiedOnChange} />
);
const DebouncedOnChangeTestComponent = (props: InnerComponentProps) => {
  return <DebouncedOnChange {...props} component={TestComponent} />;
};
describe('<BaseTextField />', () => {
  let component: ReactWrapper<DebouncedOnChangeProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = mount(<DebouncedOnChangeTestComponent />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with onChange handler', () => {
    let callback: jest.Mock;

    beforeEach(() => {
      callback = jest.fn();
      component = mount(<DebouncedOnChangeTestComponent onChange={callback} />);
    });

    describe('when a change in made', () => {
      beforeEach(() => {
        const innerComponentWrapper = component.find('input');
        innerComponentWrapper.prop<Function>('onChange')('new value');
      });

      it('triggers the onChange callback', () => {
        expect(callback).toHaveBeenCalledWith('new value');
      });
    });

    describe('unmount', () => {
      let disposeSpy: jest.SpyInstance<() => void>;

      beforeEach(() => {
        disposeSpy = jest.spyOn(Async.prototype, 'dispose');
        component.unmount();
      });

      it('disposes its async instance', () => {
        expect(disposeSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('with debouncedOnChange handler', () => {
    let callback: jest.Mock;

    beforeEach(() => {
      callback = jest.fn();
      component = mount(<DebouncedOnChangeTestComponent debouncedOnChange={callback} debouncedOnChangeTime={0} />);
    });

    describe('when a change is made', () => {
      beforeEach(() => {
        const innerComponentWrapper = component.find('input');
        innerComponentWrapper.prop<Function>('onChange')('new value');
      });

      it('triggers the debouncedOnChange callback', () => {
        expect(callback).toHaveBeenCalledWith('new value');
      });
    });

    describe('unmount', () => {
      let disposeSpy: jest.SpyInstance<() => void>;

      beforeEach(() => {
        disposeSpy = jest.spyOn(Async.prototype, 'dispose');
        component.unmount();
      });

      it('calls async dispose', () => {
        expect(disposeSpy).toHaveBeenCalled();
      });
    });
  });
});
