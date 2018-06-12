/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PhotoWatermark extends BaseIllustration {
  public render() {
    const { size = 40 } = this.props;

    return (
      <svg
        viewBox="0 0 40 40"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <path fill="#949494" d="M31.5 16a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm0-4a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5z" />
  <path fill="#949494" d="M2 7v26h36V7zm1 25v-8.293l8.5-8.5L28.293 32zm34 0h-7.293l-8-8 4.793-4.793 10.5 10.5zm0-3.707l-10.5-10.5-5.5 5.5-9.5-9.5-8.5 8.5V8h34z" />
      </svg>
    );
  }
}
