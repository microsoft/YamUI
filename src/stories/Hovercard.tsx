/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import Avatar, { AvatarBorderType, AvatarSize } from '../components/Avatar';
import Block, { GutterSize, TextSize } from '../components/Block';
import Button, { ButtonColor } from '../components/Button';
import {
  Callout,
  CalloutHeader,
  CalloutBody,
  DirectionalHint,
  TriggerType,
} from '../components/Callout';
import FakeLink from '../components/FakeLink';
import { FixedGridRow, FixedGridColumn } from '../components/FixedGrid';
import { HorizontalList, HorizontalListItem } from '../components/HorizontalList';
import Icon, { IconSize } from '../components/Icon';
import Image from '../components/Image';
import MediaObject, { MediaObjectSize } from '../components/MediaObject';

// Images for avatars
const smiley = require('./assets/img/smiley.png');
const spreadsheet = require('./assets/img/spreadsheet-icon.png');

// User data
const userName = 'Annie Antelope';
const userRole = 'Product Marketing Manager';
const userEmail = 'annie-antelope@microsoft.com';
const userEmailLink = <FakeLink>{userEmail}</FakeLink>;
const userPhone = '+1 000 000 0000';
const userFax = '+1 000 000 0000';
const userAvatar = <Avatar imageUrl={smiley} name={userName} size={AvatarSize.LARGE} />;
const userGroups = (
  <span>
    Groups: <FakeLink>Group Headers</FakeLink>, <FakeLink>Yammer Product Team</FakeLink>,&nbsp;
    <FakeLink>Freemium to Trial Initiative</FakeLink>, <FakeLink>Yammer PM Private</FakeLink>,&nbsp;
    <FakeLink>Mobile Signup 2.0</FakeLink> and 95 more
  </span>
);

// Group data
const groupName = 'Data Analytics Group';
const groupMeta = 'Public Group';
const groupMetaPrivate = 'Private Group';
const groupMetaExternal = 'Constoso and 3 others';
const groupDesc = 'Group for data analytics, metrics, reporting, number-crunching, etc.';
const groupMembersTitle = '102 members';
const groupAvatar = (
  <Avatar
    imageUrl={smiley}
    name={groupName}
    size={AvatarSize.LARGE}
    borderType={AvatarBorderType.SOFT}
  />
);
const memberAvatar1 = <Avatar imageUrl={smiley} name={userName} size={AvatarSize.XSMALL} />;
const memberAvatar2 = <Avatar imageUrl={smiley} name="Eddie smiley" size={AvatarSize.XSMALL} />;
const memberAvatar3 = <Avatar imageUrl={smiley} name="Manny smiley" size={AvatarSize.XSMALL} />;
const memberAvatar4 = <Avatar imageUrl={smiley} name="Sammy smiley" size={AvatarSize.XSMALL} />;
const memberAvatar5 = <Avatar imageUrl={smiley} name="Harry Glasses" size={AvatarSize.XSMALL} />;
const relatedGroups = (
  <span>
    Related groups: <FakeLink>Group Headers</FakeLink>, <FakeLink>Yammer Product</FakeLink>,&nbsp;
    <FakeLink>Yammer Product Team</FakeLink> and <FakeLink>Freemium to Trial Initiative</FakeLink>
  </span>
);

// File data
const fileName = 'List of Access Points.xls';
const fileMeta = 'Posted in Yammer 101';
const fileImage = <Image source={spreadsheet} description={fileMeta} fullWidth={true} />;
const fileFollowersTitle = '2 followers';

// Shared icons
const iconMail = <Icon size={IconSize.MEDIUM} icon="mail" block={true} color="#a8b0bd" />;
const iconPhone = <Icon size={IconSize.MEDIUM} icon="phone" block={true} color="#a8b0bd" />;
const iconGroup = <Icon size={IconSize.MEDIUM} icon="group" block={true} color="#a8b0bd" />;
const iconPrivate = <Icon size={IconSize.XSMALL} icon="lock" color="#a8b0bd" />;
const iconExternal = <Icon size={IconSize.XSMALL} icon="external" color="#a8b0bd" />;

type UserHovercardType = 'follow' | 'following' | 'unfollow';
const userOptions: any = {
  follow: {
    buttonProps: {
      color: ButtonColor.PRIMARY,
      icon: 'plus',
      text: 'Follow',
    },
  },
  following: {
    buttonProps: {
      color: ButtonColor.SECONDARY,
      icon: 'check',
      text: 'Following',
    },
  },
  unfollow: {
    buttonProps: {
      color: ButtonColor.SECONDARY,
      icon: 'minus',
      text: 'Unfollow',
    },
  },
};
function getUserHovercard(type: UserHovercardType) {
  return (
    <div>
      <CalloutHeader>
        <MediaObject
          size={MediaObjectSize.LARGE}
          imageContent={userAvatar}
          titleContent={userName}
          metadataContent={userRole}
        />
      </CalloutHeader>
      <CalloutBody>
        <Block textSize={TextSize.MEDIUM_SUB}>
          <Block className="contact-details" bottomSpacing={GutterSize.LARGE} push={1}>
            <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
              <FixedGridColumn fixed={true}>{iconMail}</FixedGridColumn>
              <FixedGridColumn>{userEmailLink}</FixedGridColumn>
            </FixedGridRow>
            <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
              <FixedGridColumn fixed={true}>{iconPhone}</FixedGridColumn>
              <FixedGridColumn>{userPhone}</FixedGridColumn>
            </FixedGridRow>
            <FixedGridRow gutterSize={GutterSize.SMALL} bottomSpacing={GutterSize.XSMALL}>
              <FixedGridColumn fixed={true}>{iconPhone}</FixedGridColumn>
              <FixedGridColumn>{userFax}</FixedGridColumn>
            </FixedGridRow>
          </Block>

          <FixedGridRow
            gutterSize={GutterSize.SMALL}
            bottomSpacing={GutterSize.XXLARGE}
            className="group-list"
          >
            <FixedGridColumn fixed={true}>{iconGroup}</FixedGridColumn>
            <FixedGridColumn>{userGroups}</FixedGridColumn>
          </FixedGridRow>

          <HorizontalList align="right" className="actions">
            <HorizontalListItem>
              <Button text="Send Message" color={ButtonColor.SECONDARY} />
            </HorizontalListItem>
            <HorizontalListItem>
              <Button {...userOptions[type].buttonProps} />
            </HorizontalListItem>
          </HorizontalList>
        </Block>
      </CalloutBody>
    </div>
  );
}

type GroupHovercardType = 'join' | 'joined' | 'leave' | 'private' | 'external' | 'privateExternal';
const groupOptions: any = {
  join: {
    buttonProps: {
      color: ButtonColor.PRIMARY,
      icon: 'plus',
      text: 'Join',
    },
    metaIcons: undefined,
    metaText: groupMeta,
  },
  joined: {
    buttonProps: {
      color: ButtonColor.SECONDARY,
      icon: 'check',
      text: 'Joined',
    },
    metaIcons: undefined,
    metaText: groupMeta,
  },
  leave: {
    buttonProps: {
      color: ButtonColor.SECONDARY,
      icon: 'leave',
      text: 'Leave',
    },
    metaIcons: undefined,
    metaText: groupMeta,
  },
  private: {
    buttonProps: {
      color: ButtonColor.PRIMARY,
      icon: 'plus',
      text: 'Join',
    },
    metaIcons: iconPrivate,
    metaText: groupMetaPrivate,
  },
  external: {
    buttonProps: {
      color: ButtonColor.PRIMARY,
      icon: 'plus',
      text: 'Join',
    },
    metaIcons: iconExternal,
    metaText: groupMetaExternal,
  },
  privateExternal: {
    buttonProps: {
      color: ButtonColor.PRIMARY,
      icon: 'plus',
      text: 'Join',
    },
    metaIcons: [iconPrivate, iconExternal],
    metaText: groupMetaExternal,
  },
};
function getGroupHovercard(type: GroupHovercardType) {
  const subtitle = (
    <span>
      {groupOptions[type].metaIcons} {groupOptions[type].metaText}
    </span>
  );
  return (
    <div>
      <CalloutHeader>
        <MediaObject
          size={MediaObjectSize.LARGE}
          imageContent={groupAvatar}
          titleContent={groupName}
          metadataContent={subtitle}
        />
      </CalloutHeader>
      <CalloutBody>
        <Block textSize={TextSize.MEDIUM_SUB}>
          <Block
            className="group-description"
            bottomSpacing={GutterSize.MEDIUM}
            push={1}
            textSize={TextSize.MEDIUM_SUB}
          >
            {groupDesc}
          </Block>

          <Block className="group-members" bottomSpacing={GutterSize.LARGE}>
            <Block bottomSpacing={GutterSize.XSMALL}>{groupMembersTitle}</Block>
            <HorizontalList>
              <HorizontalListItem>{memberAvatar1}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar2}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar3}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar4}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar5}</HorizontalListItem>
            </HorizontalList>
          </Block>

          <Block className="related-groups" bottomSpacing={GutterSize.XXLARGE}>
            <FixedGridRow bottomSpacing={GutterSize.XSMALL}>
              <FixedGridColumn fixed={true}>{iconGroup}</FixedGridColumn>
              <FixedGridColumn>{relatedGroups}</FixedGridColumn>
            </FixedGridRow>
          </Block>

          <Block className="actions" push={-1}>
            <HorizontalList align="right">
              <HorizontalListItem>
                <Button {...groupOptions[type].buttonProps} />
              </HorizontalListItem>
            </HorizontalList>
          </Block>
        </Block>
      </CalloutBody>
    </div>
  );
}

const HeightDecorator: StoryDecorator = (story: Function) => (
  <div style={{ minHeight: '500px' }}>{story()}</div>
);

storiesOf('...', module)
  .addDecorator(HeightDecorator)
  .add('user hovercard', () => {
    return (
      <div>
        <Callout content={getUserHovercard('follow')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('user hovercard (following)', () => {
    return (
      <div>
        <Callout content={getUserHovercard('following')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('user hovercard (unfollow)', () => {
    return (
      <div>
        <Callout content={getUserHovercard('unfollow')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('join')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard (joined)', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('joined')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard (leave)', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('leave')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard (private)', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('private')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard (external)', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('external')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('group hovercard (private external)', () => {
    return (
      <div>
        <Callout content={getGroupHovercard('privateExternal')} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  })
  .add('file hovercard', () => {
    const fileHovercardContent = (
      <div>
        <CalloutHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={fileImage}
            titleContent={fileName}
            metadataContent={fileMeta}
          />
        </CalloutHeader>
        <CalloutBody>
          <Block textSize={TextSize.MEDIUM_SUB}>
            <Block className="file-followers" bottomSpacing={GutterSize.XXLARGE} push={1}>
              <Block bottomSpacing={GutterSize.XSMALL}>{fileFollowersTitle}</Block>
              <FixedGridRow gutterSize={GutterSize.XSMALL}>
                <FixedGridColumn fixed={true}>{memberAvatar4}</FixedGridColumn>
                <FixedGridColumn fixed={true}>{memberAvatar5}</FixedGridColumn>
                <FixedGridColumn />
              </FixedGridRow>
            </Block>

            <HorizontalList align="right" className="actions">
              <HorizontalListItem>
                <Button text="Go To File" color={ButtonColor.SECONDARY} />
              </HorizontalListItem>
              <HorizontalListItem>
                <Button text="Preview" />
              </HorizontalListItem>
            </HorizontalList>
          </Block>
        </CalloutBody>
      </div>
    );

    return (
      <div>
        <Callout content={fileHovercardContent} startVisible={true}>
          <FakeLink>HoverCard Trigger</FakeLink>
        </Callout>
      </div>
    );
  });
