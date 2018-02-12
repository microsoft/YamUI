### Examples

Basic usage:

```js { "props": { "data-description": "basic" } }
const { GutterSize, TextSize } = require('../Block');

const renderInKeyboardMode = () => {
  return (
    <div style={{ backgroundColor: '#adedba', transition: 'background-color 1s' }}>
      <Block padding={GutterSize.XXLARGE} textSize={TextSize.LARGE}>Currently navigating via keyboard</Block>
    </div>
  );
};

const renderInMouseMode = (inView) => {
  return (
    <div style={{ backgroundColor: '#f98985', transition: 'background-color 1s' }}>
      <Block padding={GutterSize.XXLARGE} textSize={TextSize.LARGE}>Currently navigating via mouse</Block>
    </div>
  );
};

<KeyboardNavigationObserver
  renderInKeyboardMode={renderInKeyboardMode}
  renderInMouseMode={renderInMouseMode}
  onEnterKeyboardMode={action('entered keyboard mode')}
  onEnterMouseMode={action('entered mouse mode')}
/>
```
