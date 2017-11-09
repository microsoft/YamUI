### Examples

With visible text:

```js { "props": { "data-example": "with visible text" } }
const { SpinnerColor, SpinnerSize } = require('.');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th style={{ width: '100px' }}>L</th>
      <th style={{ width: '100px' }}>M</th>
      <th style={{ width: '100px' }}>S</th>
      <th style={{ width: '100px' }}>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Spinner size={SpinnerSize.LARGE} text="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} text="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} text="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} text="Loading" />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" />
      </td>
    </tr>
  </tbody>
</table>
```

With invisible text:

```js { "props": { "data-example": "with invisible text" } }
const { SpinnerColor, SpinnerSize } = require('.');

<table style={{ textAlign: 'center' }}>
  <thead>
    <tr>
      <th style={{ width: '100px' }}>L</th>
      <th style={{ width: '100px' }}>M</th>
      <th style={{ width: '100px' }}>S</th>
      <th style={{ width: '100px' }}>XS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Spinner size={SpinnerSize.LARGE} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} text="Loading" hideText={true} />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" hideText={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" hideText={true} />
      </td>
    </tr>
  </tbody>
</table>
```
