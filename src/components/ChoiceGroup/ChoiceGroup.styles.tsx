/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { IChoiceGroupStyles } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.types';
import {
  IChoiceGroupOptionStyles,
  IChoiceGroupOptionStyleProps,
} from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.types';
import { textColors, fontSizes, fontWeights } from '../../util/styles/fonts';

export const getStyles = (): IChoiceGroupStyles => {
  return {
    label: {
      color: textColors.secondary,
      fontSize: fontSizes.mediumSub,
      fontWeight: fontWeights.bold,
      paddingBottom: '0.4rem',
    },
  };
};

export const getOptionStyles = (props: IChoiceGroupOptionStyleProps): IChoiceGroupOptionStyles => {
  const { focused, checked } = props;
  return {
    root: {
      marginBottom: '1.2rem',
      minHeight: 0,
    },
    field: {
      selectors: {
        ':before': {
          borderColor: checked || focused ? palette.themePrimary : palette.neutralDark,
          borderWidth: checked ? '2px' : '1px',
        },
      },
    },
  };
};
