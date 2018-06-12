/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Vector extends BaseIllustration {
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
    <linearGradient id="Vector32-a" x1="3.084" x2="25.961" y1="3.608" y2="30.872" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Vector32-b" x1="20.148" x2="24.114" y1="9.102" y2="5.136" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
    <linearGradient id="Vector32-c" x1={23} x2={23} y1="10.938" y2="9.058" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".862" stopColor="#303030" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
  </defs>
  <path fill="#fff" d="M26 29H6V3h15l5 5v21z" />
  <path fill="#949494" d="M21 2H5v28h22V8zm0 1.5L25.5 8H21zM26 29H6V3h14v6h6z" />
  <path fill="#0078d7" d="M16 19l8 3-4 1-1 4-3-8z" />
  <circle cx={13} cy={16} r={2} fill="#0078d7" />
  <path fill="#0078d7" d="M11 24v2H9v-2h2m1-1H8v4h4v-4zM23 12v2h-2v-2h2m1-1h-4v4h4v-4z" />
  <path fill="#c8c8c8" d="M15.558 14.454A10.899 10.899 0 0 1 19 13.19v-1.01a11.912 11.912 0 0 0-4.11 1.509 3.006 3.006 0 0 1 .668.764zM11.454 18.558a3.006 3.006 0 0 1-.764-.667A11.912 11.912 0 0 0 9.18 22h1.01a10.899 10.899 0 0 1 1.264-3.442z" />
  <path fill="url(#Vector32-a)" d="M27 8l-6-6H5v28h22z" />
  <path fill="url(#Vector32-b)" d="M5 2v1h15v6h6v15.5h1V8l-6-6H5z" />
  <path fill="url(#Vector32-c)" d="M20 9h6v2h-6z" />
      </svg>
    );
  }
}
