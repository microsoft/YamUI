/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Heading from '../Heading';
import { FixedGridColumn, FixedGridRow, GutterSize } from '../FixedGrid';
import Text, { TextSize } from '../Text';
import './AsideSection.css';

export interface AsideSectionProps extends NestableBaseComponentProps {
  /**
   * The title of the aside section
   */
  title: string;

  /**
   * An actionable react component to the right of the title
   */
  action?: React.ReactNode;
}

/**
 * Describe what `AsideSection` does. This will also appear as part of this component's
 * documentation.
 */
export default class AsideSection extends React.Component<AsideSectionProps, {}> {
  render() {
    return (
      <div className="y-aside-section">
        <FixedGridRow className="y-aside-section--header" bottomSpacing={GutterSize.XSMALL}>
          <FixedGridColumn>
            <Heading level="2" size="none">
              <Text uppercase={true} size={TextSize.SMALL} bold={true}>{this.props.title}</Text>
            </Heading>
          </FixedGridColumn>
          {this.getActionColumn()}
        </FixedGridRow>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

  private getActionColumn() {
    if (this.props.action) {
      return (
        <FixedGridColumn fixed={true}>
          {this.props.action}
        </FixedGridColumn>
      );
    }

    return null;
  }
}
