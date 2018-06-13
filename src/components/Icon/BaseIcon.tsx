/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './types';
import { getClassNames } from './Icon.styles';
import { TextSizeContext, TextSize } from '../Block';

export { IconSize, TextSize };

export interface IconProps extends BaseComponentProps {
  /**
   * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
   * taller than the current line's `line-height`, and is creating extra vertical space.
   */
  block?: boolean;

  /**
   * Manual color override (by default the icon inherits its parent's color). Can be any valid CSS
   * color.
   */
  color?: string;

  /**
   * Icon size, which also accounts for `font-size` and `line-height`. If not set, size will
   * match the nearest <Block> or <Text> parent with textSize specified.
   */
  size?: IconSize;
}

/**
 * An `Icon` renders an SVG icon.
 */
export default abstract class BaseIcon extends React.Component<IconProps> {
  public render() {
    return (
      <TextSizeContext.Consumer>
        {textSizeContext => {
          const textSize = textSizeContext.textSize;
          const { block, className, size, color } = this.props;
          const classNames = getClassNames({ block, size, color, textSize });

          return this.renderIcon(join(['y-icon', className, classNames.root]));
        }}
      </TextSizeContext.Consumer>
    );
  }

  protected abstract renderIcon(className: string): JSX.Element;
}
