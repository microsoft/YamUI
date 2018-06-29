/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { IProgressIndicatorStyles } from 'office-ui-fabric-react/lib/ProgressIndicator';

export interface ProgressIndicatorStyleProps {
  percentComplete: number;
  theme: ITheme;
}

export const getProgressIndicatorStyles = memoizeFunction((styleProps: ProgressIndicatorStyleProps): (() => Partial<
  IProgressIndicatorStyles
>) => {
  const { percentComplete, theme } = styleProps;
  const progressBarBorderRightRadius = percentComplete === 1 ? undefined : '0';

  return () => ({
    itemName: { display: 'none' },
    itemProgress: {
      padding: 0,
    },
    progressTrack: {
      borderRadius: '1px',
      backgroundColor: theme.palette.neutralDark,
    },
    progressBar: {
      borderRightRadius: progressBarBorderRightRadius,
      backgroundColor: theme.palette.themeDark,
    },
  });
});
