/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { LayoutList, LayoutListItem, GutterSize } from '../LayoutList';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { HorizontalActionListProps } from './HorizontalActionList.types';
import { getClassNames } from './HorizontalActionList.styles';
import MenuButton from '../MenuButton';
import ActionLink from '../ActionLink';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import Block, { TextSize } from '../Block';
import { IconSize } from '../Icon';

export class HorizontalActionList extends React.Component<HorizontalActionListProps & CustomizableComponentProps> {
  public render() {
    const { className, overflowMenuAriaLabel, items, maxVisibleItemCount, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });

    const visibleItems = items.slice(0, maxVisibleItemCount);
    const overflowItems = items.slice(maxVisibleItemCount || items.length);

    return (
      <LayoutList
        direction="horizontal"
        className={join(['y-HorizontalActionList', className])}
        gutterSize={GutterSize.MEDIUM}
      >
        {visibleItems.map((item, key) => (
          <LayoutListItem key={key}>
            <Block textSize={TextSize.MEDIUM_SUB}>
              <FixedGridRow gutterSize={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>
                  <ActionLink
                    icon={item.icon}
                    text={item.text}
                    compact={true}
                    onClick={item.onClick}
                    ariaLabel={item.ariaLabel}
                  />
                </FixedGridColumn>
                {item.unlinkedText && (
                  <FixedGridColumn className={classNames.unlinkedText}>{item.unlinkedText}</FixedGridColumn>
                )}
              </FixedGridRow>
            </Block>
          </LayoutListItem>
        ))}
        {overflowItems.length > 0 && (
          <LayoutListItem key="overflowMenu">
            <MenuButton
              ariaLabel={overflowMenuAriaLabel}
              iconSize={IconSize.SMALL}
              menuItems={overflowItems}
              className={classNames.menuButton}
            />
          </LayoutListItem>
        )}
      </LayoutList>
    );
  }
}

/**
 * A set of links that dispaly in a horizontal list.  When a maxVisibleItemCount
 * prop is provided, items that exceed this value will show in a overflow menu.
 */
@customizable('HorizontalActionList', ['theme'])
export default class CustomizableHorizontalActionList extends HorizontalActionList {}
