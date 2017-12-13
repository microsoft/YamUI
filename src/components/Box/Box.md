### Notes for use

Add here any notes on how to use the component, or delete this section.

### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
<Box>This is a basic box</Box>
```

Different border types:
```js { "props": { "data-example": "borderType" } }
const { BoxBorderType } = require('.');
<div>
  <Box borderType={BoxBorderType.SQUARE}>This is a square box</Box>
  <br/>
  <Box borderType={BoxBorderType.SOFT}>This is a soft box</Box>
  <br/>
  <Box borderType={BoxBorderType.ROUND}>This is a round box</Box>
</div>
```

Different padding:
```js { "props": { "data-example": "padding" } }
const { BoxPaddingSize } = require('.');
const yammerLogo = 'logo.png';
const yammerLogoDescription = 'Yammer "y" logo';



<div>
  <Box padding={BoxPaddingSize.LARGE}>
    <Image source={yammerLogo} description={yammerLogoDescription} width='100%' />
  </Box>
  <br/>
  <Box padding={BoxPaddingSize.MEDIUM}>
    <Image source={yammerLogo} description={yammerLogoDescription} width='100%' />
  </Box>
  <br/>
  <Box padding={BoxPaddingSize.SMALL}>
    <Image source={yammerLogo} description={yammerLogoDescription} width='100%' />
  </Box>
</div>
```