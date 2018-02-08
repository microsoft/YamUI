/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import { HovercardHeader, HovercardBody } from '../../components/Hovercard';
import FakeLink from '../../components/FakeLink';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { LayoutList, LayoutListItem } from '../../components/LayoutList';
import { IconSize } from '../../components/Icon';
import Add from '../../components/Icon/icons/Add';
import Group from '../../components/Icon/icons/Group';
import Mail from '../../components/Icon/icons/Mail';
import Phone from '../../components/Icon/icons/Phone';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

const iconMail = <Mail size={IconSize.MEDIUM} block={true} color="#a8b0bd" />;
const iconGroup = <Group size={IconSize.MEDIUM} block={true} color="#a8b0bd" />;
const iconPhone = <Phone size={IconSize.MEDIUM} block={true} color="#a8b0bd" />;

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

export default class UserHovercard extends React.Component<UserHovercardProps> {
  public render() {
    const { user } = this.props;

    const userEmailLink = <FakeLink>{user.email}</FakeLink>;
    const userAvatar = <Avatar imageUrl={user.imageUrl} name={user.name} size={AvatarSize.LARGE} />;

    return (
      <div>
        <HovercardHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={userAvatar}
            titleContent={user.name}
            metadataContent={user.jobTitle}
          />
        </HovercardHeader>
        <HovercardBody>
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

            <LayoutList direction="horizontal" align="right">
              <LayoutListItem>
                <Button text="Send Message" />
              </LayoutListItem>
              <LayoutListItem>
                <Button text="Follow" color={ButtonColor.PRIMARY} icon={Add} />
              </LayoutListItem>
            </LayoutList>
          </Block>
        </HovercardBody>
      </div>
    );
  }
}
