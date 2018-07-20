/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Illustration.styles';
import { IllustrationProps } from './Illustration.types';
/**
 * An `Illustration` renders an SVG illustration. Illustrations come in multiple
 * sizes, so you must import the proper size for your application.
 */
export default class BaseIllustration extends React.Component<IllustrationProps> {
  protected getClassName(size: number) {
    return join(['y-illustration', this.props.className, getClassNames({ block: !!this.props.block, size }).root]);
  }
}
