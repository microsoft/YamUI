/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PhotoWatermark extends BaseIllustration {
  public render() {
    const { size = 20 } = this.props;

    return (
      <svg
        viewBox="0 0 20 20"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <path fill="#fff" d="M2 4h16v12H2z" />
  <path fill="#949494" d="M1 3v14h18V3zm17 13H2V4h16z" />
  <path fill="#949494" d="M18 14.707v-1.414l-4.5-4.5-3 3-5-5-3.5 3.5v1.414l3.5-3.5L13.293 16h1.414l-3.5-3.5 2.293-2.293 4.5 4.5zM15 6h1v1h-1z" />
      </svg>
    );
  }
}
