/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IModalProps } from 'office-ui-fabric-react/lib/Modal';
export { IModalProps };

export enum ModalDialogSize {
  /**
   * 350px wide.
   */
  XSMALL = 350,

  /**
   * 420px wide.
   */
  SMALL = 420,

  /**
   * 580px wide.
   */
  MEDIUM = 580,

  /**
   * 680px wide.
   */
  LARGE = 680,
}

export interface ModalDialogProps extends BaseComponentProps {
  /**
   * The title text to display at the top of the dialog.
   */
  title: string;

  /**
   * Replace the title with a hidden ScreenreaderText title.
   * @default false
   */
  hideTitle?: boolean;

  /**
   * Determines whether the dialog is displayed or not.
   */
  isOpen: boolean;

  /**
   * A callback function for when the Dialog is dismissed from the close button or light dismiss.
   */
  onDismiss: IModalProps['onDismiss'];

  /**
   * The close button's aria label.
   */
  closeAriaLabel: string;

  /**
   * The size of the ModalDialog
   */
  size: ModalDialogSize;
}
