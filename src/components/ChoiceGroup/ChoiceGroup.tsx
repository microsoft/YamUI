/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { ChoiceGroup as FabricChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { IChoiceGroupOptionProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroupOption';
import { join } from '../../util/classNames';
import Text from '../Text';
import { getStyles, getOptionStyles } from './ChoiceGroup.styles';
import { ChoiceGroupOption, ChoiceGroupProps } from './ChoiceGroup.types';

const getTextWithLabel = (text: string, label?: string) => {
  const labelContent = label ? <Text bold={true}>{label}: </Text> : null;
  return ({ labelId }: { labelId?: string }) => (
    <span id={labelId}>
      {labelContent} {text}
    </span>
  );
};

const mapOption = (option: ChoiceGroupOption): IChoiceGroupOptionProps => {
  const { text, label, key } = option;
  const onRenderLabel = getTextWithLabel(text, label);

  return {
    styles: getOptionStyles,
    key,
    text,
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
        styles={getStyles}
      />
    );
  }

  private onChange = (_: any, option: IChoiceGroupOption | undefined) => {
    if (option) {
      this.props.onChange(option.key);
    }
  };
}
