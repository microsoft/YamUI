A `Callout` is a small popover overlay, useful for hovercards and tooltips. `Callout` opens on click or mouse enter, and closes on mouse out and `ESC`.

### Examples

Basic usage:

```js
const { CalloutHeader, CalloutBody } = require('.');

const hovercardContent = (
  <div>
    <CalloutHeader>
      Marketing Team
    </CalloutHeader>
    <CalloutBody>
      We're responsible for growing revenue, increasing market share and contributing to company growth and profitability.
    </CalloutBody>
  </div>
);

<Callout content={hovercardContent}>
  <FakeLink>Marketing Team</FakeLink>
</Callout>
```
