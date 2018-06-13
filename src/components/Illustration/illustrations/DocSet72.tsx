/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class DocSet extends BaseIllustration {
  public render() {
    const { size = 72 } = this.props;

    return (
      <svg
        viewBox="0 0 72 72"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
    <linearGradient id="DocSet72-a" x1={8} x2={8} y1={12} y2={48} gradientUnits="userSpaceOnUse">
      <stop offset={0} stopOpacity={0} />
      <stop offset=".859" stopOpacity=".07" />
      <stop offset={1} stopOpacity=".15" />
    </linearGradient>
    <linearGradient id="DocSet72-b" x1={17} x2={17} y1={4} y2={48} xlinkHref="#DocSet72-a" />
    <linearGradient id="DocSet72-c" x1={64} x2={64} y1={4} y2={41} xlinkHref="#DocSet72-a" />
    <linearGradient id="DocSet72-d" x1="19.332" x2="56.115" y1="34.135" y2="77.972" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopOpacity={0} />
      <stop offset=".862" stopOpacity=".126" />
      <stop offset={1} stopOpacity=".2" />
    </linearGradient>
  </defs>
  <path fill="#c8c8c8" d="M16 4v8H7v36h2V14h7v34h2V6h45v35h2V4H16z" />
  <path fill="url(#DocSet72-a)" d="M7 12h2v36H7z" />
  <path fill="url(#DocSet72-b)" d="M16 4h2v44h-2z" />
  <path fill="url(#DocSet72-c)" d="M63 4h2v37h-2z" />
  <path fill="#a6a6a6" d="M43 40l-7 7H4v21h64V40H43z" />
  <path fill="url(#DocSet72-d)" d="M4 68V47h32l7-7h25v28H4z" />
  <path fill="#fff" d="M4 47v2h33l9-9h-3l-7 7H4z" opacity=".15" />
      </svg>
    );
  }
}
