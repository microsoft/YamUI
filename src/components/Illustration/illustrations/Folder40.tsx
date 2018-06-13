/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Folder extends BaseIllustration {
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
        <defs>
    <linearGradient id="Folder40-a" x1="8.131" x2="33.838" y1="5.855" y2="36.492" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopOpacity={0} />
      <stop offset=".862" stopOpacity=".126" />
      <stop offset={1} stopOpacity=".2" />
    </linearGradient>
    <linearGradient id="Folder40-b" x1="29.589" x2="28.788" y1="6.264" y2="15.419" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".859" stopColor="#454545" stopOpacity=".117" />
      <stop offset={1} stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#a6a6a6" d="M2 33V11h18l4-4h14v26H2z" />
  <path fill="#828282" d="M24 7l-4 4 4 4h14V7H24z" />
  <path fill="url(#Folder40-a)" d="M2 33V11h18l4-4h14v26H2z" />
  <path fill="url(#Folder40-b)" d="M24 7l-4 4 4 4h14V7H24z" />
  <path fill="#fff" d="M38 15v1H23.5l-5-5H20l4 4h14z" opacity=".15" />
      </svg>
    );
  }
}
