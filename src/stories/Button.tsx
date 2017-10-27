/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonColor, ButtonIconPosition, ButtonSize } from '../components/Button';

const sampleText = 'Next';
const sampleClickButtonText = 'Click me';

const url = 'https://www.yammer.com';

storiesOf('Button', module)
  .add('all', () => (
    <div>
      <h3>Regular buttons</h3>
      <table>
        <thead>
          <tr>
            <th />
            <th>Default</th>
            <th>Link</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>
              <Button text={sampleText} />
            </td>
            <td>
              <Button text={sampleText} href={url} />
            </td>
            <td>
              <Button disabled={true} text={sampleText} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} />
            </td>
            <td>
              <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} href={url} />
            </td>
            <td>
              <Button icon="plus" disabled={true} size={ButtonSize.REGULAR} text={sampleText} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.REGULAR}
                text={sampleText}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.REGULAR}
                text={sampleText}
                href={url}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                disabled={true}
                size={ButtonSize.REGULAR}
                text={sampleText}
              />
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
            <td>
              <Button text={sampleText} color={ButtonColor.SECONDARY} href={url} />
            </td>
            <td>
              <Button disabled={true} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="plus"
                size={ButtonSize.REGULAR}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
            <td>
              <Button
                icon="plus"
                size={ButtonSize.REGULAR}
                text={sampleText}
                color={ButtonColor.SECONDARY}
                href={url}
              />
            </td>
            <td>
              <Button icon="plus" disabled={true} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.REGULAR}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.REGULAR}
                text={sampleText}
                color={ButtonColor.SECONDARY}
                href={url}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                disabled={true}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h3>Small buttons</h3>
      <table>
        <thead>
          <tr>
            <th />
            <th>Default</th>
            <th>Link</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>
              <Button size={ButtonSize.SMALL} text={sampleText} />
            </td>
            <td>
              <Button size={ButtonSize.SMALL} text={sampleText} href={url} />
            </td>
            <td>
              <Button disabled={true} size={ButtonSize.SMALL} text={sampleText} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} />
            </td>
            <td>
              <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} href={url} />
            </td>
            <td>
              <Button icon="plus" disabled={true} size={ButtonSize.SMALL} text={sampleText} />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.SMALL}
                text={sampleText}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.SMALL}
                text={sampleText}
                href={url}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                disabled={true}
                size={ButtonSize.SMALL}
                text={sampleText}
              />
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.SECONDARY} />
            </td>
            <td>
              <Button
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
                href={url}
              />
            </td>
            <td>
              <Button
                disabled={true}
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="plus"
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
            <td>
              <Button
                icon="plus"
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
                href={url}
              />
            </td>
            <td>
              <Button
                icon="plus"
                disabled={true}
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
                size={ButtonSize.SMALL}
                text={sampleText}
                color={ButtonColor.SECONDARY}
                href={url}
              />
            </td>
            <td>
              <Button
                icon="caretDown"
                iconPosition={ButtonIconPosition.RIGHT}
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
  .add('with event handlers', () => {
    return (
      <div>
        <Button
          text="Interact with me"
          onClick={action('button clicked')}
          onMouseEnter={action('button hovered in')}
          onMouseLeave={action('button hovered out')}
          onFocus={action('button focused')}
          onBlur={action('button focus lost')}
        />
      </div>
    );
  })
  .add('link button', () => {
    return (
      <div>
        <Button text="I am a link" href="https://www.yammer.com" />
      </div>
    );
  });
