### Notes for use

SizeObserver allows for conditional rendering based on the component's height or width.


### Examples

```js { "props": { "data-description": "basic" } }

const query = {
  small: { maxWidth: 500 },
  large: { minWidth: 501 },
};

const renderAt = (size) => {
  switch (size) {
    case 'large':
      return <div>Large</div>;
    case 'small':
      return <div>Small</div>;
    default:
      return <div>Other</div>;
  }
};

<div>
  <SizeObserver query={query} renderAt={renderAt} />
</div>
```
