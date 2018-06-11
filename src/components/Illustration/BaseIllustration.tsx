/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './Illustration.styles';

export interface IllustrationProps extends BaseComponentProps {
  /**
   * Sets illustration style to `display: block`. This is helpful if the inline
   * illustration's `line-height` is taller than the current line's
   * `line-height`, and is creating extra vertical space.
   */
  block?: boolean;
}

/**
 * An `Illustration` renders an SVG illustration. Illustrations come in multiple
 * sizes, so you must import the proper size for your application.
 */
export default class BaseIllustration extends React.Component<IllustrationProps> {
  protected getClassName() {
    return join(['y-illustration', this.props.className, getClassNames({ block: !!this.props.block }).root]);
  }
}
