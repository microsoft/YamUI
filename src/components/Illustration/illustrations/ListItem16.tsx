/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class ListItem extends BaseIllustration {
  public render() {
    const { size = 16 } = this.props;

    return (
      <svg
        viewBox="0 0 16 16"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <path fill="#fff" d="M13 15H3V1h8l2 2v12z" />
  <path fill="#949494" d="M11 0H2v16h12V3zm0 1.5L12.5 3H11zM13 15H3V1h7v3h3z" />
  <path fill="#c8c8c8" d="M6 12h6v1H6zM6 10h4v1H6zM6 8h5v1H6zM6 6h6v1H6z" />
  <path fill="#69afe5" d="M4 6h1v1H4zM4 8h1v1H4zM4 10h1v1H4zM4 12h1v1H4z" />
      </svg>
    );
  }
}
