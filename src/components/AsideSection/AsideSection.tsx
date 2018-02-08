/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block from '../Block';
import { FixedGridColumn, FixedGridRow, GutterSize } from '../FixedGrid';
import Heading from '../Heading';
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
 * A section component to be used primarily for sidebar modules
 */
export default class AsideSection extends React.Component<AsideSectionProps> {
  public render() {
    return (
      <div className="y-aside-section">
        <Block textSize={TextSize.SMALL}>
          <FixedGridRow className="y-aside-section--header" bottomSpacing={GutterSize.SMALL}>
            <FixedGridColumn>
              <Heading level="2" size="none">
                <Text uppercase={true} bold={true}>
                  {this.props.title}
                </Text>
              </Heading>
            </FixedGridColumn>
            {this.getActionColumn()}
          </FixedGridRow>
        </Block>
        <div>{this.props.children}</div>
      </div>
    );
  }

  private getActionColumn() {
    if (this.props.action) {
      return <FixedGridColumn fixed={true}>{this.props.action}</FixedGridColumn>;
    }

    return null;
  }
}
