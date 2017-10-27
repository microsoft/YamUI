A `Spinner` is an outline of a circle which animates around itself indicating to the user that things are processing. It is shown when we're unsure how long a task will take.

### Examples

Spinners without label:

```js
const { SpinnerColor, SpinnerSize } = require('.');

<table>
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
        <Spinner size={SpinnerSize.LARGE} />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} />
      </td>
    </tr>
  </tbody>
</table>
```

Spinners with label:

```js
const { SpinnerColor, SpinnerSize } = require('.');

<table>
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
        <Spinner size={SpinnerSize.LARGE} label="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.MEDIUM} label="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.SMALL} label="Loading" />
      </td>
      <td>
        <Spinner size={SpinnerSize.XSMALL} label="Loading" />
      </td>
    </tr>
    <tr style={{ backgroundColor: '#386cbb' }}>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} label="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} label="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} label="Loading" />
      </td>
      <td>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} label="Loading" />
      </td>
    </tr>
  </tbody>
</table>
```
