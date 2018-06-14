### Examples

1 column:

```js { "props": { "data-description": "1" } }
const { GridList, GridListItem } = require('.');
const { GutterSize } = require('../Block')

const getItems = (total) => {
  const items = [];
  for (let i = 0; i < total; i++) {
    items.push(
      <GridListItem key={i}>
        <Image source="logo.png" fullWidth={true} />
      </GridListItem>
    );
  }
  return items;
}

const getGrids = (total) => {
  const grids = [];
  for (let i = 1; i < total + 1; i++) {
    grids.push(
      <Block bottomSpacing={GutterSize.MEDIUM}>
        <Heading level="3">{i} Column</Heading>
        <GridList columns={i} gutterUnits={3}>
          {getItems(i * 2)}
        </GridList>
      </Block>
    );
  }
  return grids;
}

<div>
  {getGrids(8)}
</div>
```
