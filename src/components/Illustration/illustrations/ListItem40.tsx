/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class ListItem extends BaseIllustration {
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
    <linearGradient id="ListItem40-a" x1="3.383" x2="32.678" y1="4.196" y2="39.109" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="ListItem40-b" x1={29} x2={29} y1="13.906" y2="11.088" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".862" stopColor="#303030" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="ListItem40-c" x1="23.792" x2="28.73" y1="9.708" y2="4.77" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#fff" d="M7 3h19l7 7v27H7V3z" />
  <path fill="#949494" d="M26 2H6v36h28V10zm0 1.5l6.5 6.5H26zM33 37H7V3h18v8h8z" />
  <path fill="#c8c8c8" d="M13 32h17v1H13zM13 29h11v1H13zM13 26h11v1H13zM13 23h14v1H13zM13 20h14v1H13zM13 17h17v1H13zM13 14h17v1H13z" />
  <path fill="#69afe5" d="M10 14h1v1h-1zM10 17h1v1h-1zM10 20h1v1h-1zM10 23h1v1h-1zM10 26h1v1h-1zM10 29h1v1h-1zM10 32h1v1h-1z" />
  <path fill="url(#ListItem40-a)" d="M34 10l-8-8H6v36h28z" />
  <path fill="url(#ListItem40-b)" d="M25 11h8v3h-8z" />
  <path fill="url(#ListItem40-c)" d="M26 2H6v1h19v8h8v14h1V10l-8-8z" />
      </svg>
    );
  }
}
