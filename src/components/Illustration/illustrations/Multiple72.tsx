/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class Multiple extends BaseIllustration {
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
    <linearGradient id="Multiple72-a" x1="11.231" x2="58.876" y1="8.002" y2="64.783" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Multiple72-b" x1={52} x2={52} y1="24.844" y2="20.146" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".862" stopColor="#303030" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="Multiple72-c" x1="-4893.241" x2="-4938.921" y1="18.969" y2="77.437" gradientTransform="matrix(-1 0 0 1 -4895 0)" xlinkHref="#Multiple72-a" />
    <linearGradient id="Multiple72-d" x1={36} x2={36} y1="67.844" y2="63.146" xlinkHref="#Multiple72-b" />
  </defs>
  <path fill="#fff" d="M47 4H16v5h-5v59h45v-5h5V18L47 4z" />
  <path fill="#949494" d="M47 4H16v5h-5v59h45v-5h5V18zm0 3l11 11H47zm7 59H13V11h3v52h38zm5-5H18V6h27v14h14z" />
  <path fill="url(#Multiple72-a)" d="M47 4H16v59h45V18z" />
  <path fill="url(#Multiple72-b)" d="M45 20h14v5H45z" />
  <path fill="url(#Multiple72-c)" d="M16 9v54h40v5H11V9h5z" />
  <path fill="url(#Multiple72-d)" d="M16 63h40v5H16z" />
      </svg>
    );
  }
}
