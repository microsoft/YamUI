/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import Block from '../Block';
import { FixedGridColumn, FixedGridRow, GutterSize } from '../FixedGrid';
import Heading from '../Heading';
import { AsideSectionProps } from './AsideSection.types';
import Text, { TextSize } from '../Text';
import { getClassNames } from './AsideSection.styles';

/**
 * A section component to be used primarily for sidebar modules
 */
export class AsideSection extends React.Component<AsideSectionProps & CustomizableComponentProps> {
  public render() {
    const { title, children, theme = defaultTheme } = this.props;
    const classes = getClassNames({ theme });

    return (
      <div className="y-aside-section">
        <Block textSize={TextSize.SMALL}>
          <FixedGridRow className={classes.header} bottomSpacing={GutterSize.SMALL}>
            <FixedGridColumn>
              <Heading level="2" size="none">
                <Block bottomSpacing={GutterSize.XSMALL}>
                  <Text uppercase={true} bold={true}>
                    {title}
                  </Text>
                </Block>
              </Heading>
            </FixedGridColumn>
            {this.getActionColumn()}
          </FixedGridRow>
        </Block>
        <div>{children}</div>
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

@customizable('AsideSection', ['theme'])
export default class CustomizableAsideSection extends AsideSection {}
