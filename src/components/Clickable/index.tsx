/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './clickable.css';

export interface ClickableProps extends NestableBaseComponentProps {
  ariaLabel?: string;
  block?: boolean;
  title?: string;
  onClick?: (event: any) => void;
}

export default class Clickable extends React.PureComponent<ClickableProps, {}> {
  render() {
    const { ariaLabel, title, onClick, children } = this.props;

    return (
      <button className={this.getClasses()} aria-label={ariaLabel} title={title} onClick={onClick}>
        {children}
      </button>
    );
  }

  private getClasses() {
    const { block, className } = this.props;

    const classes: string[] = ['y-clickable'];
    if (block) {
      classes.push('y-clickable__block');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
