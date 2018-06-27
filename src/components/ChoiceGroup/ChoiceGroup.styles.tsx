/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getTheme } from '../../util/colors';
import { IChoiceGroupStyles } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.types';
import {
  IChoiceGroupOptionStyles,
  IChoiceGroupOptionStyleProps,
} from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/ChoiceGroupOption.types';
import { textColors, fontWeights } from '../../util/styles/fonts';

export const getStyles = (): IChoiceGroupStyles => {
  const theme = getTheme();
  return {
    label: {
      color: textColors.secondary,
      fontSize: theme.fonts.smallPlus.fontSize,
      fontWeight: fontWeights.bold,
      paddingBottom: '0.4rem',
    },
  };
};

export const getOptionStyles = (props: IChoiceGroupOptionStyleProps): IChoiceGroupOptionStyles => {
  const { focused, checked } = props;
  const theme = getTheme();
  return {
    root: {
      marginBottom: '1.2rem',
      minHeight: 0,
    },
    field: {
      paddingLeft: '2.6rem',
      selectors: {
        ':before': {
          borderColor: checked || focused ? theme.palette.themePrimary : theme.palette.neutralDark,
          borderWidth: checked ? '2px' : '1px',
        },
      },
    },
  };
};
