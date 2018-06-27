/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Link extends BaseIllustration {
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
    <linearGradient id="Link32-a" x1="5.292" x2="26.709" y1="3.238" y2="28.762" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Link32-b" x1={13} x2={28} y1={19} y2={4} gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#fff" d="M2 6h28v20H2z" />
  <path fill="#949494" d="M2 6v20h28V6zm27 19H3V7h26z" />
  <path fill="#949494" d="M6 7h1v1H6zM4 7h1v1H4zM8 7h21v1H8z" />
  <path fill="#a6a6a6" d="M16 11a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm3.975 3h-1.38a6.871 6.871 0 0 0-.679-1.615A5.014 5.014 0 0 1 19.976 14zM18 17a10.443 10.443 0 0 1-.188 2h-3.625a10.761 10.761 0 0 1 0-4h3.625A10.443 10.443 0 0 1 18 17zm-2 5c-.499 0-1.133-.735-1.553-2h3.106c-.42 1.265-1.054 2-1.553 2zm-1.553-8c.42-1.265 1.054-2 1.553-2s1.133.735 1.553 2zm-.363-1.615a6.871 6.871 0 0 0-.68 1.615h-1.379a5.014 5.014 0 0 1 2.059-1.615zM11.423 15h1.75a11.56 11.56 0 0 0 0 4h-1.75a4.93 4.93 0 0 1 0-4zm.601 5h1.38a6.871 6.871 0 0 0 .679 1.615A5.014 5.014 0 0 1 12.024 20zm5.891 1.615a6.871 6.871 0 0 0 .68-1.615h1.379a5.014 5.014 0 0 1-2.059 1.615zM20.576 19h-1.75a11.56 11.56 0 0 0 0-4h1.75a4.93 4.93 0 0 1 0 4z" />
  <path fill="url(#Link32-a)" d="M2 6h28v20H2z" />
  <path fill="url(#Link32-b)" d="M30 6H2v2h27v18h1V6z" />
      </svg>
    );
  }
}
