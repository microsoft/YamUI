### Notes for use

While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow.

Also, use concise, specific, self-explanatory text, usually a single word. Should include a verb. If acting on something, text should include the noun it is acting on. For example, *"Create Group"*.

### Examples

Regular buttons:

```js { "props": { "data-description": "regular" } }
const { ButtonColor, ButtonIconPosition, ButtonSize } = require('.');

const sampleText = 'Next';
const sampleUrl = 'https://www.yammer.com';

<table style={{ textAlign: 'center' }}>
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
      <td>Primary</td>
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
      <td>Secondary</td>
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

```js { "props": { "data-description": "small" } }
const { ButtonColor, ButtonIconPosition, ButtonSize } = require('.');

const sampleText = 'Next';
const sampleUrl = 'https://www.yammer.com';

<table style={{ textAlign: 'center' }}>
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
      <td>Primary</td>
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
      <td>Secondary</td>
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

```js { "props": { "data-description": "with event handler" } }
const action = (msg) => () => { console.log(msg) };

<Button
  text="Interact with me"
  onClick={action('button clicked')}
  onMouseEnter={action('button hovered in')}
  onMouseLeave={action('button hovered out')}
  onFocus={action('button focused')}
  onBlur={action('button focus lost')}
/>
```

Link button:

```js { "props": { "data-description": "link" } }
<Button text="I am a link" href="https://www.yammer.com" />
```
