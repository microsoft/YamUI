/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Email extends BaseIllustration {
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
    <linearGradient id="Email32-a" x1="5.292" x2="26.709" y1="3.238" y2="28.762" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Email32-b" x1="13.5" x2={28} y1="18.5" y2={4} gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#fff" d="M2.5 6.5h27v19h-27z" />
  <path fill="#949494" d="M2 6v20h28V6zm27 19H3V7h26z" />
  <path fill="#c8c8c8" d="M10 18h12v1H10zM10 16h12v1H10zM10 20h12v1H10zM5 9h5v1H5zM5 11h5v1H5z" />
  <path fill="#69afe5" d="M26 10v3h-3v-3h3m1-1h-5v5h5V9z" />
  <path fill="url(#Email32-a)" d="M2 6h28v20H2z" />
  <path fill="url(#Email32-b)" d="M30 6H2v1h27v19h1V6z" />
      </svg>
    );
  }
}
