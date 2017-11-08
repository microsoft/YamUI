### Notes for use

While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.

Also, use concise, specific, self-explanatory text, usually a single word. They should include a verb. If acting on something, their text should include the noun they're acting on, e.g. *"Create Group"*.

### Examples

Regular buttons:

```js { "props": { "data-example": "regular" } }
const { ButtonColor, ButtonIconPosition, ButtonSize } = require('.');

const sampleText = 'Next';
const sampleUrl = 'https://www.yammer.com';

<table>
  <thead>
    <tr>
      <th style={{ textAlign: 'right' }} />
      <th>Default</th>
      <th>Link</th>
      <th>Disabled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ textAlign: 'right' }}>Primary</td>
      <td>
        <Button text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button text={sampleText} href={sampleUrl} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button disabled={true} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} href={sampleUrl} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button icon="plus" disabled={true} size={ButtonSize.REGULAR} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.REGULAR}
          text={sampleText}
          color={ButtonColor.PRIMARY}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.REGULAR}
          text={sampleText}
          href={sampleUrl}
          color={ButtonColor.PRIMARY}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          disabled={true}
          size={ButtonSize.REGULAR}
          text={sampleText}
          color={ButtonColor.PRIMARY}
        />
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: 'right' }}>Secondary</td>
      <td>
        <Button text={sampleText} />
      </td>
      <td>
        <Button text={sampleText} href={sampleUrl} />
      </td>
      <td>
        <Button disabled={true} text={sampleText} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button
          icon="plus"
          size={ButtonSize.REGULAR}
          text={sampleText}
        />
      </td>
      <td>
        <Button
          icon="plus"
          size={ButtonSize.REGULAR}
          text={sampleText}
          href={sampleUrl}
        />
      </td>
      <td>
        <Button icon="plus" disabled={true} text={sampleText} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.REGULAR}
          text={sampleText}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.REGULAR}
          text={sampleText}
          href={sampleUrl}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          disabled={true}
          text={sampleText}
        />
      </td>
    </tr>
  </tbody>
</table>
```

Small buttons:

```js { "props": { "data-example": "small" } }
const { ButtonColor, ButtonIconPosition, ButtonSize } = require('.');

const sampleText = 'Next';
const sampleUrl = 'https://www.yammer.com';

<table>
  <thead>
    <tr>
      <th style={{ textAlign: 'right' }} />
      <th>Default</th>
      <th>Link</th>
      <th>Disabled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ textAlign: 'right' }}>Primary</td>
      <td>
        <Button size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button size={ButtonSize.SMALL} text={sampleText} href={sampleUrl} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button disabled={true} size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} href={sampleUrl} color={ButtonColor.PRIMARY} />
      </td>
      <td>
        <Button icon="plus" disabled={true} size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.PRIMARY} />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.SMALL}
          text={sampleText}
          color={ButtonColor.PRIMARY}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.SMALL}
          text={sampleText}
          href={sampleUrl}
          color={ButtonColor.PRIMARY}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          disabled={true}
          size={ButtonSize.SMALL}
          text={sampleText}
          color={ButtonColor.PRIMARY}
        />
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: 'right' }}>Secondary</td>
      <td>
        <Button size={ButtonSize.SMALL} text={sampleText} />
      </td>
      <td>
        <Button
          size={ButtonSize.SMALL}
          text={sampleText}
          href={sampleUrl}
        />
      </td>
      <td>
        <Button
          disabled={true}
          size={ButtonSize.SMALL}
          text={sampleText}
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
        />
      </td>
      <td>
        <Button
          icon="plus"
          size={ButtonSize.SMALL}
          text={sampleText}
          href={sampleUrl}
        />
      </td>
      <td>
        <Button
          icon="plus"
          disabled={true}
          size={ButtonSize.SMALL}
          text={sampleText}
        />
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.SMALL}
          text={sampleText}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          size={ButtonSize.SMALL}
          text={sampleText}
          href={sampleUrl}
        />
      </td>
      <td>
        <Button
          icon="caretRight"
          iconPosition={ButtonIconPosition.RIGHT}
          disabled={true}
          size={ButtonSize.SMALL}
          text={sampleText}
        />
      </td>
    </tr>
  </tbody>
</table>
```

Link button:

```js { "props": { "data-example": "link" } }
<Button text="I am a link" href="https://www.yammer.com" />
```

Full width:

```js { "props": { "data-example": "full width" } }
const { ButtonColor } = require('.');
const { FixedGridRow, FixedGridColumn, GutterSize } = require('../FixedGrid');

<div>
  <p>Sometimes a layout can be achieved easier if the button stretches to fill its container's width. Here's an example of <strong>fullWidth</strong> buttons in a grid layout.</p>
  <FixedGridRow bottomSpacing={GutterSize.SMALL}>
    <FixedGridColumn>
      <Button text="Full width" fullWidth={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Button text="Full width" fullWidth={true} />
    </FixedGridColumn>
  </FixedGridRow>
  <Button text="Full width" fullWidth={true} color={ButtonColor.PRIMARY} />
</div>
```

With supported event handlers:

```js { "props": { "data-example": "with event handlers" } }
<Button
  text="Interact with me"
  onClick={action('button clicked')}
  onMouseEnter={action('button mouse enter')}
  onMouseLeave={action('button mouse leave')}
  onFocus={action('button focused')}
  onBlur={action('button blurred')}
/>
```
