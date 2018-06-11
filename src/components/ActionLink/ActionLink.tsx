/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import Block, { TextSize } from '../Block';
import Clickable from '../Clickable';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { BaseIcon, IconSize } from '../Icon';
import NavigationLink from '../NavigationLink';
import { getClassNames } from './ActionLink.styles';

export interface BaseActionLinkProps extends BaseComponentProps {
  /**
   * The icon component class to be rendered.
   */
  icon: typeof BaseIcon;

  /**
   * A well-curated string describing the action for screen readers.
   */
  ariaLabel?: string;

  /**
   * The visible text.
   */
  text: string;
}

export interface NavigationActionLinkProps extends BaseActionLinkProps {
  /**
   * A valid URL.
   */
  href: string;

  /**
   * Whether the link should open in a new window. It securely removes access to the opening window.
   */
  newWindow?: boolean;
}

export interface ClickableActionLinkProps extends BaseActionLinkProps {
  /**
   * A click handler.
   */
  onClick: ((e: React.MouseEvent<HTMLButtonElement | HTMLLinkElement>) => void);
}

export type ActionLinkProps = NavigationActionLinkProps | ClickableActionLinkProps;

/**
 * An actionable element with icon and text which will either render a button with an onClick callback
 * or a navigation link.
 */
export default class ActionLink extends React.Component<ActionLinkProps> {
  public render() {
    const { ariaLabel, className, icon: Icon, text } = this.props;
    const classNames = getClassNames();

    // Remove Block around Icon when this is addressed: https://github.com/Microsoft/YamUI/issues/327
    const content = (
      <FixedGridRow gutterSize={GutterSize.SMALL} className={classNames.wrapper}>
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
