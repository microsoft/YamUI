/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Photo extends BaseIllustration {
  public render() {
    return (
      <svg
        viewBox="0 0 40 40"
        height="40"
        width="40"
        className={this.getClassName()}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
          <linearGradient id="Photo40-a" x1="6.162" x2="33.838" y1="3.508" y2="36.492" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
            <stop offset={1} stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="Photo40-b" x1="19.027" x2="36.027" y1="20.925" y2="4.759" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
            <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
            <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
            <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
            <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
            <stop offset={1} stopColor="#fff" stopOpacity=".25" />
          </linearGradient>
        </defs>
        <path fill="#fff" d="M3 8h34v24H3z" />
        <path fill="#949494" d="M2 7v26h36V7zm35 25H3V8h34z" />
        <path
          fill="#7dbab2"
          d="M37 29.707v-1.414l-10.5-10.5-5.5 5.5-9.5-9.5-8.5 8.5v1.414l8.5-8.5L28.293 32h1.414l-8-8 4.793-4.793 10.5 10.5z"
        />
        <path
          fill="#f5ba9d"
          d="M31.5 12a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5m0-1a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5z"
        />
        <path fill="url(#Photo40-a)" d="M2 7h36v26H2z" />
        <path fill="url(#Photo40-b)" d="M38 7H2v1h35v25h1V7z" />
      </svg>
    );
  }
}
