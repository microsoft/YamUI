/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Block.styles';
import { BlockProps } from './Block.types';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';

export class Block extends React.Component<BlockProps & CustomizableComponentProps> {
  public render() {
    const { children, textSize, className, theme = defaultTheme, ...remainingProps } = this.props;
    const classNames = getClassNames({ theme, textSize, ...remainingProps });
    const rootClassName = join(['y-block', textSize ? `y-textSize-${textSize}` : '', className, classNames.root]);

    return (
      <div className={rootClassName}>
        <div className={`y-block--inner ${classNames.inner}`}>{children}</div>
      </div>
    );
  }
}

/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
@customizable('Block', ['theme'])
export default class CustomizableBlock extends Block {}
