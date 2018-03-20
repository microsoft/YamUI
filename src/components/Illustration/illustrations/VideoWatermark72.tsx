/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class VideoWatermark extends BaseIllustration {
  public render() {
    return (
      <svg
        viewBox="0 0 72 72"
        height="72"
        width="72"
        className={this.getClassName()}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
          <linearGradient
            id="VideoWatermark72-a"
            x1="11.453"
            x2="60.547"
            y1="6.746"
            y2="65.254"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
            <stop offset={1} stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="VideoWatermark72-b" x1="30.5" x2="63.5" y1="41.5" y2="8.5" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
            <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
            <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
            <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
            <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
            <stop offset={1} stopColor="#fff" stopOpacity=".25" />
          </linearGradient>
        </defs>
        <path fill="#949494" d="M4 13v46h64V13zm62 44H6V15h60z" />
        <path
          fill="#949494"
          d="M9 18h3v3H9zm0 6h3v3H9zm0 6h3v3H9zm0 6h3v3H9zm0 6h3v3H9zm0 6h3v3H9zm0 6h3v3H9zm51-36h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zm0 6h3v3h-3zM27 25v22l20-11-20-11z"
        />
        <path fill="url(#VideoWatermark72-a)" d="M4 13h64v46H4z" />
        <path fill="url(#VideoWatermark72-b)" d="M68 13H4v2h62v44h2V13z" />
      </svg>
    );
  }
}
