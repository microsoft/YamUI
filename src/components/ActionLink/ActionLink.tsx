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
import './ActionLink.css';

export interface BaseActionLinkProps extends BaseComponentProps {
  /**
   * The icon component class to be rendered.
   */
  icon: typeof BaseIcon;

  /**
   * A well-curated string describing the action for screen readers.
   */
  ariaLabel: string;

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
    const classNames = join(['y-actionLink', className]);

    const content = (
      <FixedGridRow gutterSize={GutterSize.SMALL} className="y-actionLink--wrapper">
        <FixedGridColumn fixed={true}>
          <Icon size={IconSize.MEDIUM} block={true} className="y-actionLink--icon" />
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
          className={classNames}
        >
          {content}
        </NavigationLink>
      );
    }
    return (
      <Clickable
        onClick={(this.props as ClickableActionLinkProps).onClick}
        ariaLabel={ariaLabel}
        className={classNames}
        block={true}
      >
        {content}
      </Clickable>
    );
  }
}
