/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import Text, { TextSize } from '../../components/Text';
import NavListItemNotification from './NavListItemNotification';

export { default as Fade } from './Fade';
export { default as Slide } from './Slide';
export { default as NavListItemAvatars } from './NavListItemAvatars';
export { default as NavListItemBadge } from './NavListItemBadge';
export { default as NavListItemNotification } from './NavListItemNotification';

export interface NavListItemProps {
  group: string;
  avatars: string[];
  count: number;
}

export interface NavListItemState {
  avatars: string[];
  count: number;
  previousCount?: number;
}

export default class NavListItem extends React.PureComponent<NavListItemProps, NavListItemState> {
  constructor(props: NavListItemProps) {
    super(props);

    this.state = {
      avatars: props.avatars,
      count: props.count,
    };
  }

  componentDidMount() {
    this.updateEverything();
  }

  componentDidUpdate(prevProps: NavListItemProps) {
    if (prevProps === this.props || this.isAnimating()) {
      return;
    }

    if (this.hasCountIncreased()) {
      this.updateAvatarsAndCount();
    } else {
      this.updateEverything();
    }
  }

  render() {
    const { group } = this.props;
    const { avatars, count, previousCount } = this.state;

    const notification = this.shouldShowNotification() && (
      <NavListItemNotification
        avatars={avatars}
        count={count}
        previousCount={previousCount}
        onAnimationEnd={this.updateEverything}
      />
    );

    return (
      <div>
        <FixedGridRow>
          <FixedGridColumn>
            <Text size={TextSize.LARGE}>{group}</Text>
          </FixedGridColumn>
          <FixedGridColumn fixed={true}>
            <Text size={TextSize.XSMALL}>{count}</Text>
          </FixedGridColumn>
        </FixedGridRow>
        {notification}
      </div>
    );
  }

  private shouldShowNotification() {
    return this.hasCountIncreased() || this.isAnimating();
  }

  private hasCountIncreased() {
    const { count } = this.props;
    const { previousCount } = this.state;
    return previousCount && previousCount < count;
  }

  private isAnimating() {
    const { count, previousCount } = this.state;
    return previousCount && count !== previousCount;
  }

  @autobind
  private updateAvatarsAndCount() {
    this.setState({
      avatars: this.props.avatars,
      count: this.props.count,
    });
  }

  @autobind
  private updateEverything() {
    this.setState({
      avatars: this.props.avatars,
      count: this.props.count,
      previousCount: this.props.count,
    });
  }
}
