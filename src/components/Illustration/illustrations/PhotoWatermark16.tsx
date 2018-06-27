/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PhotoWatermark extends BaseIllustration {
  public render() {
    const { size = 16 } = this.props;

    return (
      <svg
        viewBox="0 0 16 16"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <path fill="#fff" d="M1 3h14v10H1z" />
  <path fill="#949494" d="M15 12.707v-1.414l-4-4-2.504 2.496L4 5.293l-3 3v1.414l3-3L10.293 13h1.414l-2.503-2.503L11 8.707l4 4zM12 5h1v1h-1z" />
  <path fill="#949494" d="M0 2v12h16V2zm15 11H1V3h14z" />
      </svg>
    );
  }
}
