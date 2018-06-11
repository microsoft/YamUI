/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { memoizeFunction } from '@uifabric/utilities';
import { IProgressIndicatorStyles } from 'office-ui-fabric-react/lib/ProgressIndicator';

export interface ProgressIndicatorStyleProps {
  percentComplete: number;
}

export const getProgressIndicatorStyles = memoizeFunction((props: ProgressIndicatorStyleProps): (() => Partial<
  IProgressIndicatorStyles
>) => {
  const progressBarBorderRightRadius = props.percentComplete === 1 ? undefined : '0';

  return () => ({
    itemName: { display: 'none' },
    itemProgress: {
      padding: 0,
    },
    progressTrack: {
      borderRadius: '1px',
      backgroundColor: palette.neutralDark,
    },
    progressBar: {
      borderRightRadius: progressBarBorderRightRadius,
      backgroundColor: palette.themeDark,
    },
  });
});
