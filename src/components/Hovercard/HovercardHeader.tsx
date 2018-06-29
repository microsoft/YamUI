/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import Block, { GutterSize } from '../Block';
import { getClassNames } from './Hovercard.styles';
import { HovercardHeaderProps } from './Hovercard.types';

/**
 * Header of a `Hovercard` component. Used to maintain a consistent layout.
 */
export class HovercardHeader extends React.Component<HovercardHeaderProps & CustomizableComponentProps> {
  public render() {
    const { className, children, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });

    return (
      <div className={join(['y-hovercard--header', className, classNames.header])}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}

@customizable('HovercardHeader', ['theme'])
export default class CustomizableHovercardHeader extends HovercardHeader {}
