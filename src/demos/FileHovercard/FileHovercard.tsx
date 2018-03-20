/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Avatar, { AvatarSize } from '../../components/Avatar';
import Block, { GutterSize, TextSize } from '../../components/Block';
import Button, { ButtonColor } from '../../components/Button';
import { HovercardHeader, HovercardBody } from '../../components/Hovercard';
import { LayoutList, LayoutListItem } from '../../components/LayoutList';
import Image from '../../components/Image';
import MediaObject, { MediaObjectSize } from '../../components/MediaObject';

const memberImage = 'user.png';
const memberAvatar1 = <Avatar imageUrl={memberImage} name="Annie Antelope" size={AvatarSize.XSMALL} />;
const memberAvatar2 = <Avatar imageUrl={memberImage} name="Bobby Baboon" size={AvatarSize.XSMALL} />;
const memberAvatar3 = <Avatar imageUrl={memberImage} name="Charles Caribou" size={AvatarSize.XSMALL} />;
const memberAvatar4 = <Avatar imageUrl={memberImage} name="Daniel Dingo" size={AvatarSize.XSMALL} />;
const memberAvatar5 = <Avatar imageUrl={memberImage} name="Eleanor Elephant" size={AvatarSize.XSMALL} />;

export interface FileHovercardProps {
  file: any;
}

export default class FileHovercard extends React.Component<FileHovercardProps> {
  public render() {
    const { file } = this.props;

    const fileImage = <Image source={file.imageUrl} description={file.description} fullWidth={true} />;

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
              <LayoutList direction="horizontal">
                <LayoutListItem>{memberAvatar1}</LayoutListItem>
                <LayoutListItem>{memberAvatar2}</LayoutListItem>
                <LayoutListItem>{memberAvatar3}</LayoutListItem>
                <LayoutListItem>{memberAvatar4}</LayoutListItem>
                <LayoutListItem>{memberAvatar5}</LayoutListItem>
              </LayoutList>
            </Block>

            <LayoutList direction="horizontal" align="right">
              <LayoutListItem>
                <Button text="Go To File" />
              </LayoutListItem>
              <LayoutListItem>
                <Button text="Preview" color={ButtonColor.PRIMARY} />
              </LayoutListItem>
            </LayoutList>
          </Block>
        </HovercardBody>
      </div>
    );
  }
}
