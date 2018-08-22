/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { LayoutList, LayoutListItem, GutterSize } from '../LayoutList';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { PostActionLinkListProps, PostActionLinkListItem } from './PostActionLinkList.types';
import { getClassNames } from './PostActionLinkList.styles';
import MenuButton from '../MenuButton';
import Clickable from '../Clickable';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import Block, { TextSize } from '../Block';
import { IconSize } from '../Icon';

interface ItemLinkProps {
  item: PostActionLinkListItem;
}

class PostActionLink extends React.Component<ItemLinkProps> {
  public render() {
    const { text, onClick, icon: Icon } = this.props.item;
    return (
      <Clickable onClick={onClick}>
        <FixedGridRow gutterSize={GutterSize.XSMALL}>
          <FixedGridColumn fixed={true}>
            <Block push={2}>
              <Icon block={true} size={IconSize.SMALL} />
            </Block>
          </FixedGridColumn>
          <FixedGridColumn>
            <strong>{text}</strong>
          </FixedGridColumn>
        </FixedGridRow>
      </Clickable>
    );
  }
}
/**
 * A set of links that dispaly in a horizontal list below a message post.
 */
export class PostActionLinkList extends React.Component<PostActionLinkListProps & CustomizableComponentProps> {
  public render() {
    const { className, overFlowMenuAriaLabel, items = [], maxVisibleItemCount, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });

    const visibleItems = items.slice(0, maxVisibleItemCount);
    const overflowItems = items.slice(maxVisibleItemCount);

    return (
      <LayoutList
        direction="horizontal"
        className={join(['y-postActionLinkList', className])}
        gutterSize={GutterSize.MEDIUM}
      >
        {visibleItems.map((item, key) => (
          <LayoutListItem key={key}>
            <Block textSize={TextSize.MEDIUM_SUB}>
              <FixedGridRow gutterSize={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>
                  <PostActionLink item={item} />
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
            <MenuButton ariaLabel={overFlowMenuAriaLabel} menuItems={overflowItems} />
          </LayoutListItem>
        )}
      </LayoutList>
    );
  }
}

@customizable('PostActionLinkList', ['theme'])
export default class CustomizablePostActionLinkList extends PostActionLinkList {}
