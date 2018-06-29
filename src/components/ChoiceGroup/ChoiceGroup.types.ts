/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface ChoiceGroupOption {
  /**
   * A required key to uniquely identify the option.
   */
  key: string;

  /**
   * Text for the option.
   */
  text: string;

  /**
   * Label text for the option.
   */
  label?: string;
}

export interface ChoiceGroupProps extends BaseComponentProps {
  /**
   * Items to be presented to the user.
   */
  options: ChoiceGroupOption[];

  /**
   * Label text that will be rendered above the choices.
   */
  label?: string;

  /**
   * The selected option.
   */
  selectedKey?: ChoiceGroupOption['key'];

  /**
   * Function to call when user changes the selected item.
   */
  onChange(key: ChoiceGroupOption['key']): void;
}
