### Examples

Button with theme:

```js { "props": { "data-description": "basic" } }
const { createTheme, getTheme } = require('./');
const Button = require('../Button').default;

const grayTheme = createTheme({
  palette: {
    themeDark: '#333',
    neutralDark: '#666',
    themeLighter: '#999',
  },
});

<div>
  <Button text="Normal" />{' '}
  <Customizer settings={{ theme: grayTheme }}>
    <Button text="Gray Theme" />
  </Customizer>
</div>;
```