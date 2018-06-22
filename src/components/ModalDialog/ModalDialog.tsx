/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { Modal as OfficeFabricModal, IModalProps } from 'office-ui-fabric-react/lib/Modal';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import Heading from '../Heading';
import Clickable from '../Clickable';
import Block, { GutterSize } from '../Block';
import CloseIcon from '../Icon/icons/Cancel';
import { IconSize } from '../Icon';
import ScreenreaderText from '../ScreenreaderText';
import { join } from '../../util/classNames';
import { getClassNames } from './ModalDialog.styles';
import { ModalDialogSize } from './types';

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

/**
 * A `ModalDialog` is a temporary, modal UI overlay that generally provides contextual app
 * information or requires user confirmation/input.
 */
export default class ModalDialog extends React.Component<ModalDialogProps> {
  constructor(props: ModalDialogProps) {
    super(props);
  }

  public render() {
    const { children, className, isOpen, onDismiss, size } = this.props;
    const classNames = getClassNames(size);

    return (
      <OfficeFabricModal
        isOpen={isOpen}
        onDismiss={onDismiss}
        titleAriaId="y-modalDialog--title"
        containerClassName={join(['y-modalDialog', className, classNames.container])}
      >
        <Block verticalPadding={GutterSize.MEDIUM} horizontalPadding={GutterSize.XLARGE}>
          {this.getHeader()}
          {children}
        </Block>
      </OfficeFabricModal>
    );
  }

  private getHeader = (): JSX.Element => {
    const { hideTitle, title, onDismiss, closeAriaLabel } = this.props;
    if (hideTitle) {
      return (
        <ScreenreaderText>
          <div id="y-modalDialog--title">
            <h1>{title}</h1>
          </div>
        </ScreenreaderText>
      );
    }
    return (
      <FixedGridRow bottomSpacing={GutterSize.XSMALL}>
        <FixedGridColumn>
          <div id="y-modalDialog--title">
            <Heading level="1" size="5">
              {title}
            </Heading>
          </div>
        </FixedGridColumn>
        <FixedGridColumn fixed={true}>
          <Clickable onClick={onDismiss} unstyled={true} ariaLabel={closeAriaLabel} block={true}>
            <CloseIcon size={IconSize.XSMALL} block={true} />
          </Clickable>
        </FixedGridColumn>
      </FixedGridRow>
    );
  };
}
