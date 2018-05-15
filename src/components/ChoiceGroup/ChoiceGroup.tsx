/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ChoiceGroup as FabricChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { join } from '../../util/classNames';
import Text from '../Text';
import './ChoiceGroup.css';

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

const getTextWithLabel = (label: string, sublabel: string) => {
  return () => (
    <span className="ms-Label">
      <Text bold={true}>{`${label}:`}</Text>
      <Text>&nbsp;{sublabel}</Text>
    </span>
  );
};

const mapOption = (option: ChoiceGroupOption) => {
  const { text, label } = option;
  const onRenderLabel = label ? getTextWithLabel(text, label) : undefined;

  return {
    key: option.key,
    text: text,
    onRenderLabel,
  };
};

/**
 * The ChoiceGroup component, also known as radio buttons, let users select one
 * option from two or more choices. Each option is represented by one ChoiceGroup
 * button; a user can select only one ChoiceGroup in a button group.
 */
export default class ChoiceGroup extends React.Component<ChoiceGroupProps> {
  public render() {
    const { label, className, options, selectedKey } = this.props;
    return (
      <FabricChoiceGroup
        label={label}
        className={join(['y-choice-group', className])}
        options={options.map(mapOption)}
        onChange={this.onChange}
        selectedKey={selectedKey}
      />
    );
  }

  private onChange = (_: any, option: IChoiceGroupOption | undefined) => {
    if (option) {
      this.props.onChange(option.key);
    }
  };
}
