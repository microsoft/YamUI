/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { Fade, SlideInLeft, NavListItemBadge, NavListItemAvatars } from './NavListItem';
import './NavListItemNotification.css';
import { NavListItemAvatarsProps } from './NavListItemAvatars';

export interface NavListItemNotificationProps {
  avatars: string[];
  count: number;
}

export interface NavListItemNotificationState {
  avatars: string[];
  count: number;
  previousCount?: number;
}

const maxBadgeCount = 20;
const maxAvatars = 5;

export default class NavListItemNotification extends React.PureComponent<
  NavListItemNotificationProps,
  NavListItemNotificationState
> {
  constructor(props: NavListItemNotificationProps) {
    super(props);

    this.state = {
      avatars: this.getLimitedAvatars(props.avatars),
      count: this.getLimitedBadgeCount(props.count),
    };
  }

  componentDidMount() {
    // Updating everything on initial render so that we do not render the first time a value is
    // received
    this.updateEverything();
  }

  componentDidUpdate(prevProps: NavListItemAvatarsProps) {
    // Check that props did not change to avoid infinitely updating state
    const didPropsChange = this.props !== prevProps;
    if (!didPropsChange || this.isAnimating()) {
      return;
    }

    if (this.hasCountIncreased()) {
      this.updateAvatarsAndCount();
    } else {
      this.updateEverything();
    }
  }

  shouldComponentUpdate() {
    return !this.isAnimating();
  }

  render() {
    const { avatars, count, previousCount } = this.state;

    return (
      this.shouldShowNotification() && (
        <div className="y-nav-list-item-notification">
          <div className="y-nav-list-item-notification-wrapper">
            <Fade
              showAfter={500}
              duration={500}
              hideAfter={6000}
              onAnimationEnd={this.updateEverything}
            >
              <FixedGridRow>
                <FixedGridColumn>
                  <div className="y-nav-list-item-notification__avatars">
                    <SlideInLeft showAfter={1000} duration={500} hideAfter={4000} translateX="130">
                      <NavListItemAvatars avatars={avatars} />
                    </SlideInLeft>
                  </div>
                </FixedGridColumn>
                <FixedGridColumn fixed={true}>
                  <div className="y-nav-list-item-notification__badge">
                    <NavListItemBadge value={count} previousValue={previousCount || undefined} />
                  </div>
                </FixedGridColumn>
              </FixedGridRow>
            </Fade>
          </div>
        </div>
      )
    );
  }

  private shouldShowNotification() {
    return this.hasCountIncreased() || this.isAnimating();
  }

  private hasCountIncreased() {
    const { count } = this.props;
    const { previousCount } = this.state;
    return previousCount !== undefined && previousCount < this.getLimitedBadgeCount(count);
  }

  private isAnimating() {
    const { count, previousCount } = this.state;
    return previousCount !== undefined && count !== previousCount;
  }

  private getLimitedAvatars(avatars: string[]) {
    return avatars.slice(0, maxAvatars);
  }

  private getLimitedBadgeCount(count: number) {
    return Math.min(count, maxBadgeCount);
  }

  @autobind
  private updateAvatarsAndCount() {
    this.setState({
      avatars: this.getLimitedAvatars(this.props.avatars),
      count: this.getLimitedBadgeCount(this.props.count),
    });
  }

  @autobind
  private updateEverything() {
    this.setState({
      avatars: this.getLimitedAvatars(this.props.avatars),
      count: this.getLimitedBadgeCount(this.props.count),
      previousCount: this.getLimitedBadgeCount(this.props.count),
    });
  }
}
