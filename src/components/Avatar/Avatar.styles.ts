/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IPersonaCoinStyles } from 'office-ui-fabric-react/lib/PersonaCoin';
import { AvatarSize, BorderType } from './Avatar.types';
import { borders } from '../../util/styles/borders';

export interface AvatarStyleProps {
  borderType: BorderType;
  size: AvatarSize;
}

export const getPersonaCoinStyles = memoizeFunction(
  (props: AvatarStyleProps): (() => Partial<IPersonaCoinStyles>) => {
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
  },
);

export interface AvatarClassNameProps {
  size: AvatarSize;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: AvatarClassNameProps) => {
  const { size, theme } = props;
  return mergeStyleSets({
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
      border: `solid 2px ${theme.palette.white}`,
      background: theme.palette.white,
      color: theme.palette.themeDark,
      selectors: {
        /* Remove when this is addressed: https://github.com/Microsoft/YamUI/issues/327 */
        '> .y-icon': {
          top: 0,
        },
      },
    },
  });
});
