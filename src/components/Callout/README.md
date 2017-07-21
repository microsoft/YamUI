# Callout

Callouts are small popover overlays, useful for hovercards and tooltips. Callouts open on click or mouseenter, and close on mouseout and ESC.

---

### Properties

| Prop | Type | Description |
| ---- | ---- | ----------- |
| content * | JSX.Element| Callout content as HTML or React components |
| triggerType | TriggerType | "click" or "hover" Defaults to hover. |
| directionalHint | DirectionalHint | Hint to position Callout relative to trigger element. Note this is a hint; position will adjust to available screen real estate. |
| isBeakVisible | boolean| Show the small arrow pointing to the callout origin. Defaults to true. |
| startVisible | boolean| Manually sets its displayed state to true. Defaults to false. |

\* property is required

---

## Examples

#### Basic Callout

```js
import { Callout, CalloutHeader, CalloutBody, DirectionalHint, TriggerType } from 'yamui/dist/components/Callout';

```
```
const hovercardContent = (
  <div>
    <CalloutHeader>
      Header/title content, commonly a MediaObject
    </CalloutHeader>
    <CalloutBody>
      Body content, probably some layout components wrapping actual content
    </CalloutBody>
  </div>
);

<Callout content={hovercardContent}>
  <a>Group Name</a>
</Callout>
```
