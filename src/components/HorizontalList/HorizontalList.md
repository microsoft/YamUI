`HorizontalList` is made up of two components - `HorizontalList` and `HorizontalListItem`. `HorizontalList`s are useful whenever you need to display a number of items with equal spacing between. Note that spacing between items is standardized at `4px` and is not adjustable.

### Examples

List of buttons:

```js { "props": { "data-example": "left" } }
const { ButtonColor } = require('../Button');

<HorizontalList>
  <HorizontalListItem>
    <Button text="1" />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="2" />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="3" color={ButtonColor.PRIMARY} />
  </HorizontalListItem>
</HorizontalList>
```

List of buttons aligned to the right:

```js { "props": { "data-example": "right" } }
const { ButtonColor } = require('../Button');

<HorizontalList align="right">
  <HorizontalListItem>
    <Button text="1" />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="2" />
  </HorizontalListItem>
  <HorizontalListItem>
    <Button text="3" color={ButtonColor.PRIMARY} />
  </HorizontalListItem>
</HorizontalList>
```
