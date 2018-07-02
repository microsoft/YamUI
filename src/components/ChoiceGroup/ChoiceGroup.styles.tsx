/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IChoiceGroupStyles, IChoiceGroupStyleProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/';
import {
  IChoiceGroupOptionStyles,
  IChoiceGroupOptionStyleProps,
} from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption/';
import { fontWeights } from '../../util/styles/fonts';

export const getStyles = (props: IChoiceGroupStyleProps): IChoiceGroupStyles => {
  const { theme } = props;
  return {
    label: {
      color: theme.semanticColors.bodyText,
      fontSize: theme.fonts.smallPlus.fontSize,
      fontWeight: fontWeights.bold,
      paddingBottom: '0.4rem',
    },
  };
};

export const getOptionStyles = (props: IChoiceGroupOptionStyleProps): IChoiceGroupOptionStyles => {
  const { focused, checked, theme } = props;
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
