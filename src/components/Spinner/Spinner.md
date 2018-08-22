### Examples

With visible text:

```js { "props": { "data-description": "with visible text" } }
const { SpinnerColor, SpinnerSize } = require('.');
const { GutterSize } = require('../FixedGrid');

<div>
  <FixedGridRow bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} />
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
  </FixedGridRow>

  <div style={{ backgroundColor: '#386cbb', padding: '2rem 0' }}>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" isCentered={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" isCentered={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" isCentered={true} />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
</div>
```

With invisible text:

```js { "props": { "data-description": "with invisible text" } }
const { SpinnerColor, SpinnerSize } = require('.');
const { GutterSize } = require('../FixedGrid');

<div>
  <FixedGridRow bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} hideText={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} hideText={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} hideText={true} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} hideText={true} />
    </FixedGridColumn>
  </FixedGridRow>

  <FixedGridRow bottomSpacing={GutterSize.LARGE}>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.LARGE} text="Loading" isCentered={true} hideText={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} hideText={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.SMALL} text="Loading" isCentered={true} hideText={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
    <FixedGridColumn fixed={true} width={100}>
      <Spinner size={SpinnerSize.XSMALL} text="Loading" isCentered={true} hideText={true} color={SpinnerColor.METADATA} />
    </FixedGridColumn>
  </FixedGridRow>

  <div style={{ backgroundColor: '#386cbb', padding: '2rem 0' }}>
    <FixedGridRow>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.LARGE} text="Loading" isCentered={true} hideText={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.MEDIUM} text="Loading" isCentered={true} hideText={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.SMALL} text="Loading" isCentered={true} hideText={true} />
      </FixedGridColumn>
      <FixedGridColumn fixed={true} width={100}>
        <Spinner color={SpinnerColor.DARK} size={SpinnerSize.XSMALL} text="Loading" isCentered={true} hideText={true} />
      </FixedGridColumn>
    </FixedGridRow>
  </div>
</div>
```

With isCentered:

```js { "props": { "data-description": "centered" } }

<div>
  <div>
    <Paragraph>Default alignment:</Paragraph>
    <Spinner text="Loading" />
  </div>
  <br />
  <div>
    <Paragraph>Centered within its container:</Paragraph>
    <Spinner text="Loading" isCentered={true} />
  </div>
</div>