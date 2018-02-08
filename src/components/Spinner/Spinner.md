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
        <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} />
      </td>
    </tr>
    <tr>
      <td>
        <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" isCentered={true} />
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
        <Spinner size={SpinnerSize.LARGE} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} text="Loading" hideText={true} isCentered={true} />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" hideText={true} isCentered={true} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" hideText={true} isCentered={true} />
      </td>
    </tr>
  </tbody>
</table>
```

With isCentered:

```js { "props": { "data-example": "centered" } }

<div>
  <div>
    <p>Default alignment:</p>
    <Spinner text="Loading" />
  </div>
  <br />
  <div>
    <p>Centered within its container:</p>
    <Spinner text="Loading" isCentered={true} />
  </div>
</div>