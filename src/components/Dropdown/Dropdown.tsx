/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Dropdown as FabricDropdown, IDropdownOption, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { join } from '../../util/classNames';
import { IconSize } from '../Icon';
import ChevronDownMed from '../Icon/icons/ChevronDownMed';
import Block from '../Block';
import Text, { TextSize } from '../Text';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { DropdownProps } from './Dropdown.types';
import './Dropdown.css';

/**
 * A `Dropdown` is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a button.
 */
export default class Dropdown extends React.Component<DropdownProps> {
  public render() {
    const { ariaLabel, className, label, placeHolder, selectedKey } = this.props;
    const calloutProps = {
      directionalHintFixed: false,
      doNotLayer: true,
      preventDismissOnScroll: true,
    };

    return (
      <div className={join(['y-dropdown', className])}>
        <FabricDropdown
          ariaLabel={ariaLabel}
          label={label}
          options={this.getFabricOptions()}
          placeHolder={placeHolder}
          selectedKey={selectedKey}
          onChanged={this.handleChanged}
          onRenderCaretDown={this.getChevronIcon}
          onRenderOption={this.getOption}
          onRenderTitle={this.getSelectedOption}
          onRenderPlaceHolder={this.getPlaceholder}
          calloutProps={calloutProps}
        />
      </div>
    );
  }

  private getChevronIcon = () => {
    return <ChevronDownMed className="y-dropdown__caretDown" size={IconSize.MEDIUM} />;
  };

  private getOptionText(label: string | undefined, text: string): React.ReactNode {
    if (label) {
      return (
        <span>
          <Text bold={true}>{label}:</Text> {text}
        </span>
      );
    }
    return <span>{text}</span>;
  }

  private getOptionContent(item: IDropdownOption) {
    const label = item.data && item.data.label;
    const Icon = item.data && item.data.icon;
    const iconNode = Icon && <Icon size={IconSize.MEDIUM} block={true} />;
    const textContent = this.getOptionText(label, item.text);

    if (iconNode) {
      return (
        <FixedGridRow gutterSize={GutterSize.SMALL}>
          <FixedGridColumn fixed={true} className="y-dropdown--option-icon">
            {iconNode}
          </FixedGridColumn>
          <FixedGridColumn className="y-dropdown--ellipsed-title">{textContent}</FixedGridColumn>
        </FixedGridRow>
      );
    }

    return <div className="y-dropdown--ellipsed-title">{textContent}</div>;
  }

  private getPlaceholder = () => {
    return <Block textSize={TextSize.MEDIUM_SUB}>{this.props.placeHolder}</Block>;
  };

  private getOption = (item?: IDropdownOption) => {
    if (!item) {
      return null;
    }

    const isHeader = item.itemType === DropdownMenuItemType.Header;

    if (isHeader) {
      return (
        <Block className="y-dropdown--item y-dropdown--header" textSize={TextSize.SMALL}>
          {item.text}
        </Block>
      );
    }

    return (
      <Block className="y-dropdown--item" textSize={TextSize.MEDIUM_SUB}>
        {this.getOptionContent(item)}
      </Block>
    );
  };

  // Fabric Dropdown can support multiple selection. Even though we're not supporting it, TypeScript
  // requires we handle these cases. So some branches cannot actually be reached/tested. RIP 100% coverage :(
  private getSelectedOption = (item?: IDropdownOption | IDropdownOption[]) => {
    if (Array.isArray(item)) {
      return item.length > 0 ? this.getOption(item[0]) : this.getOption();
    }
    return this.getOption(item);
  };

  private getFabricOptions() {
    return this.props.options.map(item => {
      return {
        key: item.key,
        text: item.text,
        itemType: item.itemType,
        data: {
          icon: item.icon,
          label: item.label,
        },
      };
    });
  }

  private handleChanged = (option: IDropdownOption) => {
    const { onChanged } = this.props;
    if (onChanged) {
      onChanged(option.key);
    }
  };
}
