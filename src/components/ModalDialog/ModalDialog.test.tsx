/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ModalDialog, ModalDialogProps } from './index';
import { ModalDialogSize } from './types';
import { KeyCodes } from '../../util/keyCodes';

describe('<ModalDialog />', () => {
  let component: ShallowWrapper<ModalDialogProps>;
  let onDismissed: jest.Mock;

  describe('with default options', () => {
    beforeEach(() => {
      onDismissed = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          isOpen={false}
          onDismissed={onDismissed}
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
      onDismissed = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          className="TEST_CLASSNAME"
          isOpen={false}
          onDismissed={onDismissed}
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
      onDismissed = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          className="TEST_CLASSNAME"
          isOpen={false}
          onDismissed={onDismissed}
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

  describe('when the modal is open', () => {
    beforeEach(() => {
      onDismissed = jest.fn();
      component = shallow(
        <ModalDialog
          title={'Title'}
          className="TEST_CLASSNAME"
          isOpen={true}
          onDismissed={onDismissed}
          size={ModalDialogSize.MEDIUM}
          closeAriaLabel={'close'}
          hideTitle={true}
        />,
      );
    });

    describe('when the escape key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', { keyCode: KeyCodes.escape } as any);
        document.dispatchEvent(event);
        component.update();
      });

      it('closes the modal', () => {
        expect(component.props().isOpen).toBe(false);
      });
    });

    describe('when any other key is pressed', () => {
      beforeEach(() => {
        const event = new KeyboardEvent('keydown', { keyCode: KeyCodes.space } as any);
        document.dispatchEvent(event);
        component.update();
      });

      it('keeps the modal open', () => {
        expect(component.props().isOpen).toBe(true);
      });
    });
  });
});
