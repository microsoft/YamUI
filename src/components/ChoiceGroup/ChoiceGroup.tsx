/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import {
  ChoiceGroup as FabricChoiceGroup,
  IChoiceGroupOption,
} from 'office-ui-fabric-react/lib/ChoiceGroup';
import { join } from '../../util/classNames';
import './ChoiceGroup.css';

export interface ChoiceGroupOption extends React.HTMLAttributes<HTMLElement | HTMLInputElement> {
  /**
   * A required key to uniquely identify the option.
   */
  key: string;

  /**
   * The text string for the option.
   */
  text: string;

  /**
   * The src of image for choice field.
   */
  imageSrc?: string;

  /**
   * The src of image for choice field which is selected.
   */
  selecededImageSrc?: string;

  /**
   * The width and height of the image in px for choice field.
   */
  imageSize?: { width: number; height: number };

  /**
   * Optional override of option render
   */
  onRenderLabel?: (option: IChoiceGroupOption) => JSX.Element;
}

export interface ChoiceGroupProps extends BaseComponentProps {
  /**
   * Items to be presented to the user.
   */
  options: ChoiceGroupOption[];

  /**
   * Label text that will be rendered above the dropdown.
   **/
  label?: string;

  /**
   * Function to call when user changes the selected item.
   **/
  onChange?: (key: string) => void;

  /**
   * Selected option.
   **/
  selectedKey?: string;
}

/**
 * The ChoiceGroup component, also known as radio buttons, let users select one
 * option from two or more choices. Each option is represented by one ChoiceGroup
 * button; a user can select only one ChoiceGroup in a button group.
 */
export default class ChoiceGroup extends React.Component<ChoiceGroupProps, {}> {
  render() {
    return (
      <FabricChoiceGroup
        label={this.props.label}
        className={join(['y-choice-group', this.props.className])}
        options={this.props.options}
        onChange={this.handleChange}
        selectedKey={this.props.selectedKey}
      />
    );
  }

  @autobind
  private handleChange(_: any, option?: IChoiceGroupOption) {
    const { onChange } = this.props;
    onChange && option && onChange(option.key);
  }
}
