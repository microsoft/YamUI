/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { Pivot as FabricPivot, PivotItem as FabricPivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { join } from '../../util/classNames';

import './Pivot.css';

export interface PivotItem {
  ariaLabel?: string;
  key: string;
  text: string;
}

export interface PivotProps extends BaseComponentProps {
  /**
   * Indicates whether the text on the tabs will be rendered on white colors
   * to be used with dark backgrounds.
   */
  overDarkBackground?: boolean;
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

export default class Pivot extends React.Component<PivotProps> {
  public render() {
    return (
      <FabricPivot
        className={this.getClasses()}
        selectedKey={this.props.selectedKey}
        onLinkClick={this.onLinkClick}
        headersOnly={true}
      >
        {this.getFabricPivotItems()}
      </FabricPivot>
    );
  }

  private getFabricPivotItems() {
    return this.props.pivotItems.map((child: PivotItem) => (
      <FabricPivotItem ariaLabel={child.ariaLabel} itemKey={child.key} headerText={child.text} key={child.key} />
    ));
  }

  private onLinkClick = (item?: FabricPivotItem) => {
    if (item && item.props.itemKey && item.props.itemKey !== this.props.selectedKey) {
      this.props.onChange(item.props.itemKey);
    }
  };

  private getClasses() {
    return join([
      'y-pivot',
      this.props.className,
      this.props.overDarkBackground ? 'y-pivot__overDarkBackground' : undefined,
    ]);
  }
}
