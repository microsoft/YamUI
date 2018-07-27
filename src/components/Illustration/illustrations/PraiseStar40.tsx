/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PraiseStar extends BaseIllustration {
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
  <path fill="#fff" d="M20.35 27.44l-8.828 4.64 1.68-9.84-7.12-6.96 9.867-1.414 4.4-8.96 4.427 8.96 9.84 1.413-7.12 6.96 1.68 9.84z" />
  <path fill="#ffe98f" d="M20.35 24.853l-6.268 3.28 1.2-6.96-5.067-4.96 7.014-1.014 3.12-6.347 3.147 6.347 6.987 1.013-5.067 4.96 1.2 6.96z" />
  <path fill="#fcd700" d="M20.35 22.08l-3.521 1.84.667-3.92-2.854-2.8 3.947-.56 1.76-3.574 1.76 3.573 3.947.56-2.853 2.8.666 3.92z" />
      </svg>
    );
  }
}
