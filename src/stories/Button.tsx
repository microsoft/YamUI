/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonSize, ButtonColor } from '../components/Button';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Button/README');


const sampleText = 'Next';
const sampleClickButtonText = 'Click me';

storiesOf('Button', module)
  .addDecorator(withReadme(readme))
  .add('all', () => (
    <div>
      <h3>Regular buttons</h3>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Default</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td><Button text={sampleText} /></td>
            <td><Button disabled={true} text={sampleText} /></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} /></td>
            <td><Button icon="plus" disabled={true} size={ButtonSize.REGULAR} text={sampleText} /></td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td><Button text={sampleText} color={ButtonColor.SECONDARY} /></td>
            <td><Button disabled={true} text={sampleText} color={ButtonColor.SECONDARY} /></td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
            <td>
              <Button icon="plus" disabled={true} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <h3>Small buttons</h3>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Default</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td><Button size={ButtonSize.SMALL} text={sampleText} /></td>
            <td><Button disabled={true} size={ButtonSize.SMALL} text={sampleText} /></td>
          </tr>
          <tr>
            <td>Primary</td>
            <td><Button icon="plus" size={ButtonSize.SMALL} text={sampleText} /></td>
            <td><Button icon="plus" disabled={true} size={ButtonSize.SMALL} text={sampleText} /></td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
            <td>
              <Button disabled={true} size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
            <td>
              <Button icon="plus"
                        disabled={true}
                        size={ButtonSize.SMALL}
                        text={sampleText}
                        color={ButtonColor.SECONDARY}
                />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('with onClick', () => {
    return (
      <div>
        <Button onClick={action('button clicked')} text={sampleClickButtonText} />
      </div>
    );
  })
  .add('with onHover', () => {
    return (
      <div>
        <Button onHoverIn={action('button hovered in')} onHoverOut={action('button hovered out')}
                text="Hover over me" />
      </div>
    );
  });
