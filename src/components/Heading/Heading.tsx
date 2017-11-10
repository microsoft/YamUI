/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { HeadingLevel, HeadingSize } from './enums';
import './Heading.css';


export { HeadingLevel, HeadingSize };

export interface HeadingProps extends NestableBaseComponentProps {
  /**
   * The heading level to render, i.e. h1-h6
   */
  level: HeadingLevel;
  /** An optional */
  size?: HeadingSize;
}

/**
 * A `Heading` component dynamically generates an h1-h6 tag depending on the given level. You can
 * also override its visual styling to match a different level with `size`. Set `size="none"` to
 * render the heading as plain unstyled text.
 */
export default class Heading extends React.PureComponent<HeadingProps, {}> {
  render() {
    const { children, level } = this.props;
    const TagName = `h${level}`;

    return <TagName className={this.getClasses()}>{children}</TagName>;
  }

  private getClasses() {
    const { className, size } = this.props;

    const classes: string[] = ['y-heading'];
    if (size) {
      classes.push(`y-heading__size-${size}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
