/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PhotoWatermark extends BaseIllustration {
  public render() {
    const { size = 48 } = this.props;

    return (
      <svg
        viewBox="0 0 48 48"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <path fill="#949494" d="M37 20a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-5a2 2 0 1 1-2 2 2.002 2.002 0 0 1 2-2z" />
  <path fill="#949494" d="M3 9v30h42V9zm1 29v-9.293l10.5-10.5L24.793 28.5l.707.707L34.293 38zm40 0h-8.293l-9.5-9.5 5.293-5.293 12.5 12.5zm0-3.707l-12.5-12.5-6 6-11-11L4 27.293V10h40z" />
      </svg>
    );
  }
}
