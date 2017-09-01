/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { GutterSize } from '../util/enums/gutter';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Block, { TextSize } from '../components/Block';
import Icon, { IconProps, IconSize, ICONS } from '../components/Icon';
import Text, { TextColor } from '../components/Text';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Icon/README');
import { shallow, ShallowWrapper } from 'enzyme';

let component: ShallowWrapper<IconProps, {}>;
let count:number = 0;


const simpleFloat = {
  width: '80px',
  height: '80px',
  textAlign: 'center',
  float: 'left',
};

const tableStyles = {
  border: '1px solid #CCC',
};

const labelStyles = {
  paddingLeft: '10px',
};

const iconsArray: any[] = [];

Object.keys(ICONS).forEach((icon) => {
  iconsArray.push(icon);
});

iconsArray.map((icon) => {
  component = shallow(
    <Icon icon={icon} />,
  );
  console.log('- - - - - ');
  console.log(component.render());
  if (typeof component.render() === 'string') {
    count = count + 1;
  }
});

storiesOf('Icon', module)
  .addDecorator(withReadme(readme))
  .add('library', () => {
    return (
      <div>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={labelStyles}>Label</th>
              <th>Inherit color</th>
              <th>Override color</th>
            </tr>
          </thead>
          <tbody>
            {iconsArray.map((icon, index) => (
              <tr key={index}>
                <td style={labelStyles}>{icon}</td>
                <td><Icon size={IconSize.LARGE} icon={icon} /></td>
                <td><Icon size={IconSize.LARGE} icon={icon} color="teal" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  })
  .add('sizes', () => {
    return (
      <div>
        <div style={simpleFloat}>
          <h4>XSmall</h4>
          <Icon size={IconSize.XSMALL} icon="attach" />
        </div>
        <div style={simpleFloat}>
          <h4>Small</h4>
          <Icon size={IconSize.SMALL} icon="attach" />
        </div>
        <div style={simpleFloat}>
          <h4>Medium</h4>
          <Icon size={IconSize.MEDIUM} icon="attach" />
        </div>
        <div style={simpleFloat}>
          <h4>Large</h4>
          <Icon size={IconSize.LARGE} icon="attach" />
        </div>
        <div style={simpleFloat}>
          <h4>XLarge</h4>
          <Icon size={IconSize.XLARGE} icon="attach" />
        </div>
        <div style={simpleFloat}>
          <h4>XXLarge</h4>
          <Icon size={IconSize.XXLARGE} icon="attach" />
        </div>
        <hr style={{ margin: '15px 5px' }} />
      </div>
    );
  })
  .add('inline with text', () => {
    return (
      <div>
        Can be added <Icon size={IconSize.SMALL} icon="plus" /> inline with text.
        <br /><br />
        Inherits the <span style={{ color: 'blue' }}>
        color <Icon size={IconSize.SMALL} icon="plus" /> of the text</span>.
        <br /><br />
        Color can be <Icon size={IconSize.SMALL} icon="plus" color="red" /> overridden.
      </div>
    );
  });
