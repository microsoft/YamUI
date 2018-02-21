/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block from '../Block';
import { FixedGridColumn, FixedGridRow, GutterSize } from '../FixedGrid';
import Heading from '../Heading';
import Text, { TextColor, TextSize } from '../Text';
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
 * A section component to be used primarily for sidebar modules
 */
export default class AsideSection extends React.Component<AsideSectionProps, {}> {
  render() {
    return (
      <div className="y-aside-section">
        <Block>
          <FixedGridRow className="y-aside-section--header" bottomSpacing={GutterSize.XSMALL}>
            <FixedGridColumn fixed={true}>
              <Heading level="2" size="none">
                <Text size={TextSize.MEDIUM_SUB} color={TextColor.SECONDARY} bold={true}>{this.props.title}</Text>
              </Heading>
            </FixedGridColumn>
            {this.getActionColumn()}
          </FixedGridRow>
        </Block>
        <Block textSize={TextSize.MEDIUM_SUB}>
          {this.props.children}
        </Block>
      </div>
    );
  }

  private getActionColumn() {
    if (this.props.action) {
      return (
        <FixedGridColumn className="y-aside-section--action">
          <Text size={TextSize.SMALL}>{this.props.action}</Text>  
        </FixedGridColumn>
      );
    }

    return null;
  }
}
