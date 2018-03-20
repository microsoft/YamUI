### Notes for use

Because current bundlers do not always tree-shake properly, illustrations are exported individually, so you'll need to import each illustration separately.

Illustrations have different sizes, so you must import the proper size for your application.

```js static
import PDF20 from 'yamui/dist/components/Illustration/illustrations/PDF20';
import PDF48 from 'yamui/dist/components/Illustration/illustrations/PDF48';
```

The `block` prop may be necessary to remove extra `line-height`.

### Examples

Illustration library:

```js { "props": { "data-description": "library" } }
const allIllustrations = require('../illustrations');
const { GutterSize, TextSize } = require('../../Block');

const illustrationsLibrary = Object.keys(allIllustrations).map((illustration) => {
  const Illustration = allIllustrations[illustration];
  return (
    <div style={{ float: 'left', width: '100px', textAlign: 'center' }} key={illustration}>
      <Block textSize={TextSize.XLARGE}>
        <Illustration />
      </Block>
      <Block textSize={TextSize.XSMALL} bottomSpacing={GutterSize.XLARGE} ellipsis={true}>
        {illustration}
      </Block>
    </div>
  );
});

<div>
  {illustrationsLibrary}
  <br style={{ clear: 'both' }} />
</div>
```
