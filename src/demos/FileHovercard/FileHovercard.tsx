/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import {
  HovercardHeader,
  HovercardBody,
} from '../../components/Hovercard';
import { HorizontalList, HorizontalListItem } from '../../components/HorizontalList';
import Image from '../../components/Image';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

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

export interface FileHovercardProps {
  file: any;
}

export default class FileHovercard extends React.Component<FileHovercardProps, {}> {
  render() {
    const { file } = this.props;

    const fileImage = (
      <Image source={file.imageUrl} description={file.description} fullWidth={true} />
    );

    return (
      <div>
        <HovercardHeader>
          <MediaObject
            size={MediaObjectSize.LARGE}
            imageContent={fileImage}
            titleContent={file.name}
            metadataContent={file.location}
          />
        </HovercardHeader>
        <HovercardBody>
          <Block textSize={TextSize.MEDIUM_SUB}>
            <Block bottomSpacing={GutterSize.XXLARGE}>
              <Block bottomSpacing={GutterSize.XSMALL}>72 followers</Block>
              <HorizontalList>
              <HorizontalListItem>{memberAvatar1}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar2}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar3}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar4}</HorizontalListItem>
              <HorizontalListItem>{memberAvatar5}</HorizontalListItem>
              </HorizontalList>
            </Block>

            <HorizontalList align="right">
              <HorizontalListItem>
                <Button text="Go To File" />
              </HorizontalListItem>
              <HorizontalListItem>
                <Button text="Preview" color={ButtonColor.PRIMARY} />
              </HorizontalListItem>
            </HorizontalList>
          </Block>
        </HovercardBody>
      </div>
    );
  }
}
