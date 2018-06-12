/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Video extends BaseIllustration {
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
    <linearGradient id="Video40-a" x1="6.162" x2="33.838" y1="3.508" y2="36.492" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Video40-b" x1="19.027" x2="36.027" y1="20.925" y2="4.759" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="url(#Video40-a)" d="M2 7h36v26H2z" />
  <path fill="url(#Video40-b)" d="M38 7H2v1h35v25h1V7z" />
  <path fill="#fff" d="M3 8h34v24H3z" />
  <path fill="#949494" d="M2 7v26h36V7zm35 25H3V8h34z" />
  <path fill="#69afe5" d="M15 14v12l11-6-11-6z" />
  <path fill="#c8c8c8" d="M5 29h2v2H5zM5 25h2v2H5zM5 21h2v2H5zM5 17h2v2H5zM5 13h2v2H5zM5 9h2v2H5zM33 29h2v2h-2zM33 25h2v2h-2zM33 21h2v2h-2zM33 17h2v2h-2zM33 13h2v2h-2zM33 9h2v2h-2z" />
      </svg>
    );
  }
}
