/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Folder extends BaseIllustration {
  public render() {
    const { size = 48 } = this.props;

    return (
      <svg
        viewBox="0 0 48 48"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
    <linearGradient id="Folder48-a" x1="10.399" x2="40.063" y1="7.791" y2="43.143" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopOpacity={0} />
      <stop offset=".862" stopOpacity=".126" />
      <stop offset={1} stopOpacity=".2" />
    </linearGradient>
    <linearGradient id="Folder48-b" x1="35.231" x2="34.241" y1="8.145" y2="19.459" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".859" stopColor="#454545" stopOpacity=".117" />
      <stop offset={1} stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#a6a6a6" d="M3 39V14h21l5-5h16v30H3z" />
  <path fill="#828282" d="M29 9l-5 5 5 5h16V9H29z" />
  <path fill="url(#Folder48-a)" d="M3 39V14h21l5-5h16v30H3z" />
  <path fill="url(#Folder48-b)" d="M29 9l-5 5 5 5h16V9H29z" />
  <path fill="#fff" d="M44.958 19v1H28.5l-6-6H24l5 5h15.958z" opacity=".15" />
      </svg>
    );
  }
}
