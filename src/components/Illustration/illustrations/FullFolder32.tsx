/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class FullFolder extends BaseIllustration {
  public render() {
    const { size = 32 } = this.props;

    return (
      <svg
        viewBox="0 0 32 32"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
    <linearGradient id="FullFolder32-a" x1="23.444" x2="22.839" y1="5.426" y2="12.336" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".859" stopColor="#454545" stopOpacity=".117" />
      <stop offset={1} stopOpacity=".25" />
    </linearGradient>
    <linearGradient id="FullFolder32-b" x1="5.292" x2="25.231" y1="6.238" y2="30.001" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopOpacity={0} />
      <stop offset=".862" stopOpacity=".126" />
      <stop offset={1} stopOpacity=".2" />
    </linearGradient>
  </defs>
  <path fill="#828282" d="M19 6l-3 3 3 3h11V6H19z" />
  <path fill="url(#FullFolder32-a)" d="M19 6l-3 3 3 3h11V6H19z" />
  <path fill="#fff" d="M3 7h26v19H3z" />
  <path fill="#a6a6a6" d="M2 26V9h14l3 3h11v14H2z" />
  <path fill="#fff" d="M30 12v.5H18.771L15.25 9H16l3.021 3H30z" opacity=".15" />
  <path fill="url(#FullFolder32-b)" d="M2 26V9h14l3 3h11v14H2z" />
      </svg>
    );
  }
}
