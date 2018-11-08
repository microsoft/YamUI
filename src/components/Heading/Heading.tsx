/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize, GutterSize } from '../Block';
import { HeadingLevel, HeadingSize } from './enums';
import './Heading.css';

const blockPropsMap = {
  1: {
    textSize: TextSize.XXLARGE,
    bottomSpacing: GutterSize.SMALL,
  },
  2: {
    textSize: TextSize.XLARGE,
    bottomSpacing: GutterSize.SMALL,
  },
  3: {
    textSize: TextSize.LARGE,
    bottomSpacing: GutterSize.MEDIUM,
  },
  4: {
    textSize: TextSize.LARGE,
    bottomSpacing: GutterSize.MEDIUM,
  },
  5: {
    textSize: TextSize.MEDIUM,
    bottomSpacing: GutterSize.MEDIUM,
  },
  6: {
    textSize: TextSize.MEDIUM_SUB,
    bottomSpacing: GutterSize.SMALL,
  },
};

export { HeadingLevel, HeadingSize };

export interface HeadingProps extends NestableBaseComponentProps {
  /**
   * The heading level to render, i.e. h1-h6
   */
  level: HeadingLevel;

  /** Allows a heading tag at a given level to render visually as a different level,
   * or as plain inline text.
   */
  size?: HeadingSize;
}

/**
 * A `Heading` component renders an h1-h6 tag depending on the given level. You can also
 * override its visual styling to match a different level with `size`. Set `size="none"`
 * to render the heading as unstyled inline text.
 */
export default class Heading extends React.Component<HeadingProps> {
  public render() {
    const TagName = `h${this.props.level}`;

    return <TagName className={this.getClasses()}>{this.getSizedContent()}</TagName>;
  }

  private getSizedContent() {
    const { children, level, size } = this.props;
    if (size === 'none') {
      return children;
    }

    const visualSize = size || level;
    return <Block {...blockPropsMap[visualSize]}>{children}</Block>;
  }

  private getClasses() {
    const { className, size } = this.props;

    const classes = ['y-heading'];
    if (size) {
      classes.push(`y-heading__size-${size}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
