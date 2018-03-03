### Notes for use

You should always render a block-level element within `ContainerQuery`, this is necessary to push its width out so it can recalculate its queries on resize.


### Examples

Basic example:

```js { "props": { "data-description": "basic" } }
const query = {
  small: { maxWidth: 500 },
  large: { minWidth: 501 },
};
const renderAt = size => {
  const color = size == 'small' ? '#738ADD' : '#DA5552';
  return (
    <div style={{ padding: '2rem', background: color, transition: 'background-color 1s', fontWeight: 'bold', color: '#fff' }}>
      This component renders a green background when 500px wide or less, blue over 500px.
    </div>
  );
};

<div>
  <ContainerQuery query={query} renderAt={renderAt} />
</div>
```

Rendering alternate content based on width:

```js { "props": { "data-description": "with alternate content" } }
const query = {
  xsmall: { maxWidth: 300 },
  small: { minWidth: 301, maxWidth: 400 },
  medium: { minWidth: 401, maxWidth: 500 },
  large: { minWidth: 501, maxWidth: 600 },
  xlarge: { minWidth: 601 },
};
const columns = {
  xsmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  xlarge: 5,
};
const getColumns = (count) => {
  const cols = [];
  for (let i = 0; i < count; i++) {
    cols.push(
      <LayoutListItem key={i}>
        <div style={{ height: '25px', marginBottom: '10px', background: '#738ADD' }} />
      </LayoutListItem>
    );
  }
  return cols;
}
const renderAt = size => {
  if (!size) {
    return <div />;
  }

  return (
    <LayoutList direction="vertical">
      {getColumns(columns[size])}
    </LayoutList>
  );
};

<div>
  <ContainerQuery query={query} renderAt={renderAt} />
</div>
```
