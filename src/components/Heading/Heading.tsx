/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { HeadingLevel, HeadingSize } from './enums';
import './Heading.css';


const textSizes = {
  1: 'y-textSize-xxLarge',
  2: 'y-textSize-xLarge',
  3: 'y-textSize-large',
  4: 'y-textSize-large',
  5: 'y-textSize-medium',
  6: 'y-textSize-mediumSub',
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
export default class Heading extends React.PureComponent<HeadingProps, {}> {
  render() {
    const { children, level } = this.props;
    const TagName = `h${level}`;

    return <TagName className={this.getClasses()}>{children}</TagName>;
  }

  // Add corresponding utility textSize class so nested Icons will scale
  private getTextClass() {
    const { level, size } = this.props;
    if (size === 'none') {
      return '';
    }

    const textSize = size || level;
    return textSizes[textSize];
  }

  private getClasses() {
    const { className, size } = this.props;
    const textClass = this.getTextClass();

    const classes = ['y-heading'];
    if (size) {
      classes.push(`y-heading__size-${size}`);
    }
    if (className) {
      classes.push(className);
    }
    if (textClass) {
      classes.push(textClass);
    }

    return classes.join(' ');
  }
}
