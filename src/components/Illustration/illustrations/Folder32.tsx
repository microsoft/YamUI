/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Folder extends BaseIllustration {
  public render() {
    return (
      <svg
        viewBox="0 0 32 32"
        height="32"
        width="32"
        className={this.getClassName()}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
          <linearGradient id="Folder32-a" x1="6.769" x2="26.709" y1="4.999" y2="28.762" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopOpacity={0} />
            <stop offset=".862" stopOpacity=".126" />
            <stop offset={1} stopOpacity=".2" />
          </linearGradient>
          <linearGradient id="Folder32-b" x1="23.444" x2="22.839" y1="5.426" y2="12.336" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#828282" stopOpacity={0} />
            <stop offset=".859" stopColor="#454545" stopOpacity=".117" />
            <stop offset={1} stopOpacity=".25" />
          </linearGradient>
        </defs>
        <path fill="#a6a6a6" d="M2 26V9h14l3-3h11v20H2z" />
        <path fill="#828282" d="M19 6l-3 3 3 3h11V6H19z" />
        <path fill="url(#Folder32-a)" d="M2 26V9h14l3-3h11v20H2z" />
        <path fill="url(#Folder32-b)" d="M19 6l-3 3 3 3h11V6H19z" />
        <path fill="#fff" d="M30 12v.5H18.771L15.25 9H16l3.021 3H30z" opacity=".15" />
      </svg>
    );
  }
}
