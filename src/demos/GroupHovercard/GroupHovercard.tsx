/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarBorderType, AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import {
  HovercardHeader,
  HovercardBody,
} from '../../components/Hovercard';
import FakeLink from '../../components/FakeLink';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { HorizontalList, HorizontalListItem } from '../../components/HorizontalList';
import Icon, { IconSize } from '../../components/Icon';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

const iconGroup = <Icon size={IconSize.MEDIUM} icon="group" block={true} color="#a8b0bd" />;
const iconPrivate = <Icon size={IconSize.XSMALL} icon="lock" color="#a8b0bd" />;

const memberImage = 'user.png';
const memberAvatar1 = (
  <Avatar imageUrl={memberImage} name="Annie Antelope" size={AvatarSize.XSMALL} />
);
const memberAvatar2 = (
  <Avatar imageUrl={memberImage} name="Bobby Baboon" size={AvatarSize.XSMALL} />
);
const memberAvatar3 = (
  <Avatar imageUrl={memberImage} name="Charles Caribou" size={AvatarSize.XSMALL} />
);
const memberAvatar4 = (
  <Avatar imageUrl={memberImage} name="Daniel Dingo" size={AvatarSize.XSMALL} />
);
const memberAvatar5 = (
  <Avatar imageUrl={memberImage} name="Eleanor Elephant" size={AvatarSize.XSMALL} />
);
const relatedGroups = (
  <span>
    Related groups: <FakeLink>Frontend Team</FakeLink>, <FakeLink>Engineering Team</FakeLink>,{' '}
    <FakeLink>Yammer Team</FakeLink>, and <FakeLink>Performance Domain</FakeLink>
  </span>
);

export interface GroupHovercardProps {
  group: any;
}

export default class GroupHovercard extends React.Component<GroupHovercardProps, {}> {
  render() {
    const { group } = this.props;

    const groupAvatar = (
      <Avatar
        imageUrl={group.imageUrl}
        name={group.name}
        size={AvatarSize.LARGE}
        borderType={AvatarBorderType.SOFT}
      />
    );

    const groupMetadata = (
      <span>
        {iconPrivate}
        {' '}
        {group.privacy}
      </span>
    );

    return (
      <div>
        <HovercardHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={groupAvatar}
            titleContent={group.name}
            metadataContent={groupMetadata}
          />
        </HovercardHeader>
        <HovercardBody>
          <Block textSize={TextSize.MEDIUM_SUB}>
            <Block bottomSpacing={GutterSize.MEDIUM} push={1}>
              {group.description}
            </Block>

            <Block bottomSpacing={GutterSize.LARGE}>
              <Block bottomSpacing={GutterSize.XSMALL}>102 members</Block>
              <HorizontalList>
                <HorizontalListItem>{memberAvatar1}</HorizontalListItem>
                <HorizontalListItem>{memberAvatar2}</HorizontalListItem>
                <HorizontalListItem>{memberAvatar3}</HorizontalListItem>
                <HorizontalListItem>{memberAvatar4}</HorizontalListItem>
                <HorizontalListItem>{memberAvatar5}</HorizontalListItem>
              </HorizontalList>
            </Block>

            <FixedGridRow bottomSpacing={GutterSize.XXLARGE} gutterSize={GutterSize.SMALL}>
              <FixedGridColumn fixed={true}>{iconGroup}</FixedGridColumn>
              <FixedGridColumn>{relatedGroups}</FixedGridColumn>
            </FixedGridRow>

            <HorizontalList align="right">
              <HorizontalListItem>
                <Button text="Join" color={ButtonColor.PRIMARY} icon="plus" />
              </HorizontalListItem>
            </HorizontalList>
          </Block>
        </HovercardBody>
      </div>
    );
  }
}
