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
  key: string;
  text: string;
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
 * TODO
 */
export default class ChoiceGroup extends React.Component<ChoiceGroupProps, {}> {
  render() {
    return (
      <FabricChoiceGroup
        className={join(['y-choice-group', this.props.className])}
        options={this.props.options}
        onChange={this.handleChange}
      />
    );
  }

  @autobind
  private handleChange(_: any, option?: IChoiceGroupOption) {
    const { onChange } = this.props;
    onChange && option && onChange(option.key);
  }
}
