/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface IllustrationProps extends BaseComponentProps {
  /**
   * Sets illustration style to `display: block`. This is helpful if the inline
   * illustration's `line-height` is taller than the current line's
   * `line-height`, and is creating extra vertical space.
   */
  block?: boolean;

  /**
   *  If provided, this pixel value will override the default size this Illustration is optimized for.
   */
  size?: number;
}
