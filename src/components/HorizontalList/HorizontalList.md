`HorizontalList` is made up of two components - `HorizontalList` and `HorizontalList`. `HorizontalList`s are useful whenever you need to display a number of items with equal spacing between. Note that spacing between items is standardized at `4px` and is not adjustable.

### Examples

List of buttons:

```js
const { ButtonColor } = require('../Button');
const { HorizontalListItem } = require('.');

<HorizontalList>
  <HorizontalListItem>
    <Button text="1" color={ButtonColor.SECONDARY} />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="2" color={ButtonColor.SECONDARY} />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="3" />
  </HorizontalListItem>
</HorizontalList>
```

List of buttons aligned to the right:

```js
const { ButtonColor } = require('../Button');
const { HorizontalListItem } = require('.');

<HorizontalList align="right">
  <HorizontalListItem>
    <Button text="1" color={ButtonColor.SECONDARY} />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="2" color={ButtonColor.SECONDARY} />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="3" />
  </HorizontalListItem>
</HorizontalList>
```
