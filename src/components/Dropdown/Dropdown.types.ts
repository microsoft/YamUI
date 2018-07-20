/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseIcon } from '../Icon';

export type DropdownOptionKey = string | number;
export { DropdownMenuItemType };

export interface DropdownOption {
  /**
   * Unique identifier for the given option.
   */
  key: DropdownOptionKey;

  /**
   * The visible option text.
   */
  text: string;

  /**
   * An optional YamUI Icon to be rendered on the left.
   */
  icon?: typeof BaseIcon;

  /**
   * Optional bold text to be displayed before the main text.
   */
  label?: string;

  /**
   * Type of menu item. Specify this for headers or dividers, leave blank for standard options.
   */
  itemType?: DropdownMenuItemType;
}

export interface DropdownProps extends BaseComponentProps {
  /**
   * aria-label attribute
   */
  ariaLabel?: string;

  /**
   * Items to be presented to the user.
   */
  options: DropdownOption[];

  /**
   * Label text that will be rendered above the dropdown.
   */
  label?: string;

  /**
   * Input placeholder text. Displayed until option is selected.
   */
  placeHolder?: string;

  /**
   * Initially selected option.
   */
  selectedKey?: DropdownOptionKey;

  /**
   * Function to call when user changes the selected item.
   */
  onChanged?: ((key: DropdownOptionKey) => void);
}
