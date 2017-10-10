/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar, { AvatarSize, BorderType } from '../components/Avatar';
import Block, { GutterSize } from '../components/Block';
import Image from '../components/Image';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Avatar/README');

const badge = require('./assets/img/badge.png');
const smiley = require('./assets/img/smiley.png');
const yammerLogo = require('./assets/img/yammer-logo.png');
const badgeContent = <Image source={badge} description="" fullWidth={true} />;

const tableHeader = (
  <thead>
    <tr>
      <th>XL</th>
      <th>L</th>
      <th>M</th>
      <th>S</th>
      <th>XS</th>
    </tr>
  </thead>
);

storiesOf('Avatar', module)
  .addDecorator(withReadme(readme))
  .add('with initials', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Avatar size={AvatarSize.XLARGE} initials="WW" name="Walter White" />
            </td>
            <td>
              <Avatar size={AvatarSize.LARGE} initials="WW" name="Walter White" />
            </td>
            <td>
              <Avatar size={AvatarSize.MEDIUM} initials="WW" name="Walter White" />
            </td>
            <td>
              <Avatar size={AvatarSize.SMALL} initials="WW" name="Walter White" />
            </td>
            <td>
              <Avatar size={AvatarSize.XSMALL} initials="WW" name="Walter White" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('with image', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Avatar imageUrl={smiley} size={AvatarSize.XLARGE} name="Walter White" />
            </td>
            <td>
              <Avatar imageUrl={smiley} size={AvatarSize.LARGE} name="Walter White" />
            </td>
            <td>
              <Avatar imageUrl={smiley} size={AvatarSize.MEDIUM} name="Walter White" />
            </td>
            <td>
              <Avatar imageUrl={smiley} size={AvatarSize.SMALL} name="Walter White" />
            </td>
            <td>
              <Avatar imageUrl={smiley} size={AvatarSize.XSMALL} name="Walter White" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('with badge', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Avatar
                imageUrl={smiley}
                size={AvatarSize.XLARGE}
                name="Walter White"
                badgeContent={badgeContent}
                badgeDescription="Admin"
              />
            </td>
            <td>
              <Avatar
                imageUrl={smiley}
                size={AvatarSize.LARGE}
                name="Walter White"
                badgeContent={badgeContent}
                badgeDescription="Admin"
              />
            </td>
            <td>
              <Avatar
                imageUrl={smiley}
                size={AvatarSize.MEDIUM}
                name="Walter White"
                badgeContent={badgeContent}
                badgeDescription="Admin"
              />
            </td>
            <td>
              <Avatar
                imageUrl={smiley}
                size={AvatarSize.SMALL}
                name="Walter White"
                badgeContent={badgeContent}
                badgeDescription="Admin"
              />
            </td>
            <td>
              <Avatar
                imageUrl={smiley}
                size={AvatarSize.XSMALL}
                name="Walter White"
                badgeContent={badgeContent}
                badgeDescription="Admin"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('with soft border', () => (
    <div>
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>
              <Avatar
                imageUrl={yammerLogo}
                size={AvatarSize.XLARGE}
                name="Walter White"
                borderType={BorderType.SOFT}
              />
            </td>
            <td>
              <Avatar
                imageUrl={yammerLogo}
                size={AvatarSize.LARGE}
                name="Walter White"
                borderType={BorderType.SOFT}
              />
            </td>
            <td>
              <Avatar
                imageUrl={yammerLogo}
                size={AvatarSize.MEDIUM}
                name="Walter White"
                borderType={BorderType.SOFT}
              />
            </td>
            <td>
              <Avatar
                imageUrl={yammerLogo}
                size={AvatarSize.SMALL}
                name="Walter White"
                borderType={BorderType.SOFT}
              />
            </td>
            <td>
              <Avatar
                imageUrl={yammerLogo}
                size={AvatarSize.XSMALL}
                name="Walter White"
                borderType={BorderType.SOFT}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('example colors', () => (
    <div>
      <Block bottomSpacing={GutterSize.SMALL}>
        A background color will be automatically set when an imageUrl is not provided. Fabric
        handles this behind the scenes for us, based on the name prop passed in.
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="DDD DDD" initials="LG" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="GGG GGG" initials="LB" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="SSS SSS" initials="LP" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="BBB BBB" initials="GR" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="AAA AAA" initials="DG" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="OOO OOO" initials="PI" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="LLL LLL" initials="BU" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="CCC CCC" initials="PU" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="ZZZ ZZZ" initials="BL" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="NNN NNN" initials="TE" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="MMM MMM" initials="BL" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="ooo ooo" initials="DB" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="Hanna Koh" initials="OR" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="g" initials="DR" />
      </Block>
      <Block bottomSpacing={GutterSize.SMALL}>
        <Avatar size={AvatarSize.MEDIUM} name="HHH HHH" initials="RE" />
      </Block>
    </div>
  ));
