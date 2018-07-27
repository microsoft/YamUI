/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class PraisePie extends BaseIllustration {
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
        <circle cx="-19.573" cy="20.418" r={20} fill="#386cbb" transform="rotate(-88.789)" />
  <path fill="#fff" d="M20.505 10.347h-.293c-.613 0-1.12.507-1.12 1.12l.053 5.893c0 .614.507 1.12 1.12 1.12h.294c.613 0 1.12-.506 1.12-1.12l-.054-5.893c0-.64-.506-1.12-1.12-1.12z" />
  <path fill="#ffe7b8" d="M22.025 7.947c0 .96-.773 1.76-1.733 1.787-.96 0-1.76-.773-1.787-1.733 0-.96 1.734-4.107 1.734-4.107s1.786 3.093 1.786 4.053z" />
  <path fill="#f8ae41" d="M21.412 8.614c0 .613-.48 1.12-1.093 1.12-.614 0-1.12-.48-1.12-1.093 0-.614 1.093-2.587 1.093-2.587s1.093 1.92 1.12 2.56z" opacity=".8" />
  <ellipse cx="20.399" cy="21.52" fill="#896146" rx="9.946" ry="5.467" />
  <path fill="#fb7f78" d="M27.945 33.093H12.932l-2.507-11.306h20z" />
      </svg>
    );
  }
}
