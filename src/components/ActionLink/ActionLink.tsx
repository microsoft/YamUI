/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import Block, { TextSize } from '../Block';
import Clickable from '../Clickable';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { IconSize } from '../Icon';
import NavigationLink from '../NavigationLink';
import { ActionLinkProps, NavigationActionLinkProps, ClickableActionLinkProps } from './ActionLink.types';

/**
 * An actionable element with icon and text which will either render a button with an onClick callback
 * or a navigation link.
 */
export default class ActionLink extends React.Component<ActionLinkProps> {
  public render() {
    const { ariaLabel, className, icon: Icon, text } = this.props;
    // Remove Block around Icon when this is addressed: https://github.com/Microsoft/YamUI/issues/327
    const content = (
      <FixedGridRow gutterSize={GutterSize.SMALL}>
        <FixedGridColumn fixed={true}>
          <Block push={2}>
            <Icon size={IconSize.MEDIUM} block={true} />
          </Block>
        </FixedGridColumn>
        <FixedGridColumn>
          <Block textSize={TextSize.MEDIUM_SUB}>{text}</Block>
        </FixedGridColumn>
      </FixedGridRow>
    );

    if ((this.props as NavigationActionLinkProps).href) {
      return (
        <NavigationLink
          href={(this.props as NavigationActionLinkProps).href}
          newWindow={(this.props as NavigationActionLinkProps).newWindow}
          ariaLabel={ariaLabel}
          className={join(['y-actionLink', className])}
          block={true}
        >
          {content}
        </NavigationLink>
      );
    }
    return (
      <Clickable
        onClick={(this.props as ClickableActionLinkProps).onClick}
        ariaLabel={ariaLabel}
        className={join(['y-actionLink', className])}
        block={true}
      >
        {content}
      </Clickable>
    );
  }
}
