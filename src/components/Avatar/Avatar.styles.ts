/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { IPersonaCoinStyles } from 'office-ui-fabric-react/lib/PersonaCoin';
import { AvatarSize, BorderType } from './Avatar';
import { borders } from '../../util/styles/borders';

export interface AvatarStyleProps {
  borderType: BorderType;
  size: AvatarSize;
}

export const getPersonaCoinStyles = memoizeFunction((props: AvatarStyleProps): (() => Partial<IPersonaCoinStyles>) => {
  const { borderType, size } = props;
  const borderRadius = borders[borderType];
  const initials = size === AvatarSize.XLARGE ? { lineHeight: '70px' } : {};
  return () => ({
    initials,
    image: {
      borderRadius,
    },
    imageArea: {
      borderRadius,
    },
  });
});

export const getClassNames = memoizeFunction((size: AvatarSize) =>
  mergeStyleSets({
    root: {
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      height: size === AvatarSize.SMALL || size === AvatarSize.XSMALL ? '16px' : '20px',
      width: size === AvatarSize.SMALL || size === AvatarSize.XSMALL ? '16px' : '20px',
      bottom: '-2px',
      right: '-2px',
      borderRadius: borders.round,
      border: `solid 2px ${palette.white}`,
      background: palette.white,
      color: palette.themeDark,
      selectors: {
        /* Remove when this is addressed: https://github.com/Microsoft/YamUI/issues/327 */
        '> .y-icon': {
          top: 0,
        },
      },
    },
  }),
);
