/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid/enums';
import { TextSize } from '../Text/enums';
import './Block.css';

export { GutterSize, TextSize };

export interface BlockProps extends NestableBaseComponentProps {
  /**
   * Gutter spacing to be added below this block.
   */
  bottomSpacing?: GutterSize;

  /**
   * Padding to be added uniformly within this block.
   */
  padding?: GutterSize;

  /**
   * Number of pixels to finely adjust the gutter spacing above this block. Positive pushes the
   * component down, negative pulls it up. Only use this to adjust for vertical rhythm in text.
   */
  push?: number;

  /**
   * Convenience prop to align text left or right. Defaults to left.
   */
  textAlign?: 'left' | 'right' | 'center';

  /**
   * Determines the font-size/line-height combination within this block.
   */
  textSize?: TextSize;
}

interface BlockStyles {
  marginTop?: string;
  paddingTop?: string;
}

export default class Block extends React.PureComponent<BlockProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <div className={this.getClasses()} style={this.getStyle()}>
        <div className={this.getInnerClasses()}>{children}</div>
      </div>
    );
  }

  private getClasses() {
    const { bottomSpacing, textSize, textAlign, className } = this.props;

    const classes: string[] = ['y-block'];
    if (bottomSpacing) {
      classes.push(`y-block__bottomSpacing-${bottomSpacing}`);
    }
    if (textSize) {
      classes.push(`y-block__textSize-${textSize}`);
    }
    if (textAlign === 'center' || textAlign === 'right') {
      classes.push(`y-block__textAlign-${textAlign}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getInnerClasses() {
    const { padding } = this.props;

    const classes: string[] = ['y-block--inner'];
    if (padding) {
      classes.push(`y-block--inner__padding-${padding}`);
    }

    return classes.join(' ');
  }

  private getStyle() {
    const { push } = this.props;
    const styles: BlockStyles = {};

    if (!push) {
      return styles;
    }

    // If `push` is negative, set negative top margin to "pull" it up.
    // If positive, "push" it down with top padding (because margins can collapse).
    const rems = push / 10;
    const value = `${rems}rem`;
    if (rems < 0) {
      styles.marginTop = value;
    } else {
      styles.paddingTop = value;
    }

    return styles;
  }
}
