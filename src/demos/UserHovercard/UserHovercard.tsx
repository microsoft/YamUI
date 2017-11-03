/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import {
  CalloutHeader,
  CalloutBody,
} from '../../components/Callout';
import FakeLink from '../../components/FakeLink';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { HorizontalList, HorizontalListItem } from '../../components/HorizontalList';
import Icon, { IconSize } from '../../components/Icon';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

const iconMail = <Icon size={IconSize.MEDIUM} icon="mail" block={true} color="#a8b0bd" />;
const iconPhone = <Icon size={IconSize.MEDIUM} icon="phone" block={true} color="#a8b0bd" />;
const iconGroup = <Icon size={IconSize.MEDIUM} icon="group" block={true} color="#a8b0bd" />;

const userGroups = (
  <span>
    Groups: <FakeLink>Frontend Team</FakeLink>, <FakeLink>Engineering Team</FakeLink>,{' '}
    <FakeLink>Yammer Team</FakeLink>, <FakeLink>Performance Domain</FakeLink>,{' '}
    <FakeLink>Mobile Signup Project</FakeLink> and 95 more
  </span>
);

export interface UserHovercardProps {
  user: any;
}

export default class UserHovercard extends React.PureComponent<UserHovercardProps, {}> {
  render() {
    const { user } = this.props;

    const userEmailLink = <FakeLink>{user.email}</FakeLink>;
    const userAvatar = <Avatar imageUrl={user.imageUrl} name={user.name} size={AvatarSize.LARGE} />;

    return (
      <div>
        <CalloutHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={userAvatar}
            titleContent={user.name}
            metadataContent={user.jobTitle}
          />
        </CalloutHeader>
        <CalloutBody>
          <Block textSize={TextSize.MEDIUM_SUB}>
            <Block bottomSpacing={GutterSize.LARGE}>
              <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>{iconMail}</FixedGridColumn>
                <FixedGridColumn>{userEmailLink}</FixedGridColumn>
              </FixedGridRow>
              <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>{iconPhone}</FixedGridColumn>
                <FixedGridColumn>{user.phone}</FixedGridColumn>
              </FixedGridRow>
              <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>{iconPhone}</FixedGridColumn>
                <FixedGridColumn>{user.mobile}</FixedGridColumn>
              </FixedGridRow>
            </Block>

            <FixedGridRow bottomSpacing={GutterSize.XXLARGE} gutterSize={GutterSize.SMALL}>
              <FixedGridColumn fixed={true}>{iconGroup}</FixedGridColumn>
              <FixedGridColumn>{userGroups}</FixedGridColumn>
            </FixedGridRow>

            <HorizontalList align="right">
              <HorizontalListItem>
                <Button text="Send Message" color={ButtonColor.SECONDARY} />
              </HorizontalListItem>
              <HorizontalListItem>
                <Button text="Follow" color={ButtonColor.PRIMARY} icon="plus" />
              </HorizontalListItem>
            </HorizontalList>
          </Block>
        </CalloutBody>
      </div>
    );
  }
}
