### Examples

Buttons and text with theme:

```js { "props": { "data-description": "basic" } }
const { createTheme, getTheme } = require('./');
const Block = require('../Block').default;
const { GutterSize } = require('../Block');
const Button = require('../Button').default;

const grayTheme = createTheme({
  palette: {
    themeDark: '#343A41',
    neutralDark: '#646d7a',
    themeLighter: '#a8b0bd',
  },
  semanticColors: {
    bodyBackground: '#f3f5f8',
    bodyText: '#19345d',
  },
  fonts: {
    smallPlus: {
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    medium: {
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
    },
  }
});

<div>
  <Block verticalPadding={GutterSize.LARGE} horizontalPadding={GutterSize.MEDIUM}>
    Normal text on a normal background. <Button text="Normal" />
  </Block>
  <Customizer settings={{ theme: grayTheme }}>
    <Block verticalPadding={GutterSize.LARGE}  horizontalPadding={GutterSize.MEDIUM}>
      Custom text on a custom background. <Button text="Big Gray Theme" />
    </Block>
  </Customizer>
</div>;
```
