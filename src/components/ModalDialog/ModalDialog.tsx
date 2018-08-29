/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { Modal as OfficeFabricModal } from 'office-ui-fabric-react/lib/Modal';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import Heading from '../Heading';
import Clickable from '../Clickable';
import Block, { GutterSize } from '../Block';
import CloseIcon from '../Icon/icons/Cancel';
import { IconSize } from '../Icon';
import ScreenreaderText from '../ScreenreaderText';
import { join } from '../../util/classNames';
import { getClassNames } from './ModalDialog.styles';
import { ModalDialogProps } from './ModalDialog.types';

export class ModalDialog extends React.Component<ModalDialogProps & CustomizableComponentProps> {
  public render() {
    const { children, className, isOpen, onDismiss, size, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ size, theme });

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

  private getHeader = (): React.ReactNode => {
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

/**
 * A `ModalDialog` is a temporary, modal UI overlay that generally provides contextual app
 * information or requires user confirmation/input.
 */
@customizable('ModalDialog', ['theme'])
export default class CustomizableModalDialog extends ModalDialog {}
