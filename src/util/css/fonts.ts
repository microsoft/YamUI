/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IRawStyle } from 'office-ui-fabric-react/lib/Styling';

export const fontStyles = {
  xxLarge: {
    fontSize: '2.4rem',
    lineHeight: '2.8rem',
  },
  xLarge: {
    fontSize: '2.2rem',
    lineHeight: '2.8rem',
  },
  large: {
    fontSize: '1.8rem',
    lineHeight: '2.4rem',
  },
  medium: {
    fontSize: '1.5rem',
    lineHeight: '2.0rem',
  },
  mediumSub: {
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
  },
  small: {
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
  },
  xSmall: {
    fontSize: '1.0rem',
    lineHeight: '1.6rem',
  },
};

export const ellipsisStyles: IRawStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
