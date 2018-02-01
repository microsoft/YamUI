### Examples

Basic usage:

```js { "props": { "data-example": "basic" } }
const { GutterSize, TextSize } = require('../Block');

const renderInView = () => {
  return (
    <div style={{ backgroundColor: '#adedba', transition: 'background-color 1s' }}>
      <Block padding={GutterSize.XXLARGE} textSize={TextSize.LARGE}>In view</Block>
    </div>
  );
};

const renderOutOfView = (inView) => {
  return (
    <div style={{ backgroundColor: '#f98985', transition: 'background-color 1s' }}>
      <Block padding={GutterSize.XXLARGE} textSize={TextSize.LARGE}>Out of view</Block>
    </div>
  );
};


<VisibilityObserver 
  renderInView={renderInView}
  renderOutOfView={renderOutOfView}
  onEnter={action('scrolled into view')}
  onLeave={action('scrolled out of view')}
/>
```
