/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ModalDialog, ModalDialogProps } from './index';
import { ModalDialogSize } from './types';

describe('<ModalDialog />', () => {
  let component: ShallowWrapper<ModalDialogProps>;
  let onDismiss: jest.Mock;

  describe('with default options', () => {
    beforeEach(() => {
      onDismiss = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          isOpen={false}
          onDismiss={onDismiss}
          size={ModalDialogSize.MEDIUM}
          closeAriaLabel={'close'}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      onDismiss = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          className="TEST_CLASSNAME"
          isOpen={false}
          onDismiss={onDismiss}
          size={ModalDialogSize.MEDIUM}
          closeAriaLabel={'close'}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the title is hidden', () => {
    beforeEach(() => {
      onDismiss = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          className="TEST_CLASSNAME"
          isOpen={false}
          onDismiss={onDismiss}
          size={ModalDialogSize.MEDIUM}
          closeAriaLabel={'close'}
          hideTitle={true}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
