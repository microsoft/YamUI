/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import Block, { GutterSize } from '../Block';
import { join } from '../../util/classNames';
import { getClassNames } from './Box.styles';
import { BoxProps } from './Box.types';

/**
 * A Box is a div with a border and fixed padding. It also has `display: relative` so you can
 * absolutely-position elements like a close button. Boxes will primarily be used for card views.
 */
export class Box extends React.Component<BoxProps & CustomizableComponentProps> {
  public render() {
    const { children, onClick, className, backgroundColor, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ hasOnClick: !!onClick, theme });
    const rootClassNames = join(['y-box', classNames.root, className]);

    return (
      <div className={rootClassNames} onClick={onClick} role={onClick ? 'button' : undefined}>
        <Block className={classNames.inner} padding={GutterSize.SMALL} backgroundColor={backgroundColor}>
          {children}
        </Block>
      </div>
    );
  }
}

@customizable('Box', ['theme'])
export default class CustomizableBox extends Box {}
