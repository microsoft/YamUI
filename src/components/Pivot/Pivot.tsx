/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { Pivot as FabricPivot, PivotItem as FabricPivotItem } from 'office-ui-fabric-react/lib/Pivot';

import './Pivot.css';

export interface PivotItem {
  ariaLabel?: string;
  key: string;
  text: string;
}

export interface PivotProps extends NestableBaseComponentProps {
  /**
   * Indicates whether the text on the tabs will be rendered on white colors
   * to be used with dark backgrounds.
   */
  isDark?: boolean;
  /**
   * Indicates the key of the initially selected tab or pivot item.
   */
  selectedKey: string;
  /**
   * Contains the information of the pivot items that will be rendered within this component.
   */
  pivotItems: PivotItem[];
  /**
   * Callback that will be executed every time there is a change in the selected pivot item.
   */
  onChange(key: string): void;
}

export interface PivotState {
  /**
   * Key of the selected pivot item at a certain point.
   */
  selectedKey: string;
}

export default class Pivot extends React.Component<PivotProps, PivotState> {
  constructor(props: PivotProps) {
    super(props);
    this.onLinkClick = this.onLinkClick.bind(this);

    this.state = {
      selectedKey: this.props.selectedKey,
    };
  }

  public render() {
    return (
      <FabricPivot className={this.getClasses()} selectedKey={this.props.selectedKey} onLinkClick={this.onLinkClick}>
        {this.getFabricPivotItems()}
      </FabricPivot>
    );
  }

  private getFabricPivotItems() {
    return this.props.pivotItems.map((child: PivotItem) => (
      <FabricPivotItem
        ariaLabel={child.ariaLabel}
        className="y-pivot-item"
        itemKey={child.key}
        headerText={child.text}
        key={child.key}
      />
    ));
  }

  private onLinkClick(item?: FabricPivotItem) {
    if (item && item.props.itemKey && item.props.itemKey !== this.state.selectedKey) {
      this.props.onChange(item.props.itemKey);
      this.setState({
        selectedKey: item.props.itemKey,
      });
    }
  }

  private getClasses() {
    const classes: string[] = ['y-pivot'];
    const { className, isDark } = this.props;

    if (isDark) {
      classes.push('is-dark');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
