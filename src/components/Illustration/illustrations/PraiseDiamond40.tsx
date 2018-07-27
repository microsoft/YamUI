/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PraiseDiamond extends BaseIllustration {
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
        <circle cx="-19.386" cy="20.596" r={20} fill="#f8ae41" transform="rotate(-88.267)" />
  <path fill="#fff" d="M34.43 17.146H5.682l5.813-6.694h16.241z" />
  <path fill="#6c98d9" d="M19.682 32.666l-14-15.52h28.774z" />
  <path fill="#9ac3ff" d="M11.495 10.399h8.134l-4.56 6.773zm8.134 0h8.134l-2.987 6.88z" />
  <path fill="#9ac3ff" d="M15.069 17.066h9.787l-5.174 15.6z" />
      </svg>
    );
  }
}
