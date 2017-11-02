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
        <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} />
      </td>
      <td>
        <Button icon="plus" size={ButtonSize.REGULAR} text={sampleText} href={sampleUrl} />
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
          href={sampleUrl}
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
      <td style={{ textAlign: 'right' }}>Secondary</td>
      <td>
        <Button text={sampleText} color={ButtonColor.SECONDARY} />
      </td>
      <td>
        <Button text={sampleText} color={ButtonColor.SECONDARY} href={sampleUrl} />
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
          href={sampleUrl}
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
          href={sampleUrl}
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
        <Button size={ButtonSize.SMALL} text={sampleText} />
      </td>
      <td>
        <Button size={ButtonSize.SMALL} text={sampleText} href={sampleUrl} />
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
        <Button icon="plus" size={ButtonSize.SMALL} text={sampleText} href={sampleUrl} />
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
          href={sampleUrl}
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
      <td style={{ textAlign: 'right' }}>Secondary</td>
      <td>
        <Button size={ButtonSize.SMALL} text={sampleText} color={ButtonColor.SECONDARY} />
      </td>
      <td>
        <Button
          size={ButtonSize.SMALL}
          text={sampleText}
          color={ButtonColor.SECONDARY}
          href={sampleUrl}
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
          href={sampleUrl}
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
          href={sampleUrl}
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
```

Button with event handler:

```js { "props": { "data-example": "with event handler" } }
<Button
  text="Interact with me"
  onClick={action('button clicked')}
  onMouseEnter={action('button mouse enter')}
  onMouseLeave={action('button mouse leave')}
  onFocus={action('button focused')}
  onBlur={action('button blurred')}
/>
```

Link button:

```js { "props": { "data-example": "link" } }
<Button text="I am a link" href="https://www.yammer.com" />
```
