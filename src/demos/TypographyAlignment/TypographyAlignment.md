```js { "props": { "data-example": "text" } }
const { TextSize } = require('../../components/Text');

<Block>
  <Block>Text components of different sizes will share a common baseline:</Block>
  <Block>
    <Text>Unstyled</Text> <Text size={TextSize.XSMALL}>xsmall</Text> <Text size={TextSize.SMALL}>small</Text> <Text size={TextSize.MEDIUM_SUB}>mediumsub</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.LARGE}>large</Text> <Text size={TextSize.XLARGE}>xlarge</Text> <Text size={TextSize.XXLARGE}>xxlarge</Text>
  </Block>
</Block>
```

```js { "props": { "data-example": "text" } }
const { TextSize } = require('../../components/Text');

<Block>
  <Block>Text components of different sizes with maxWidth+ellipsis will share a common baseline:</Block>
  <Block>
    <Text>Unstyled</Text> <Text maxWidth="20px">unstyled</Text> <Text maxWidth="20px" size={TextSize.XSMALL}>xsmall</Text> <Text maxWidth="30px" size={TextSize.SMALL}>small</Text> <Text maxWidth="30px" size={TextSize.MEDIUM_SUB}>mediumsub</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>medium</Text> <Text maxWidth="30px" size={TextSize.LARGE}>large</Text> <Text maxWidth="30px" size={TextSize.XLARGE}>xlarge</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>xxlarge</Text>
  </Block>
</Block>
```

```js { "props": { "data-example": "buttons" } }
const { TextSize } = require('../../components/Text');
const { ButtonSize } = require('../../components/Button');

<Block>
  <Block>Buttons will vertically align based on their text baseline:</Block>
  <Block>
    <Button text="Regular button" /> <Button size={ButtonSize.SMALL} text="Small button" />
  </Block>
</Block>
```

```js { "props": { "data-example": "text and buttons" } }
const { TextSize } = require('../../components/Text');
const { ButtonSize } = require('../../components/Button');

<Block>
  <Block>Adjacent Buttons and Text will all share a common baseline:</Block>
  <Block>
    <Button text="Regular" /> <Button size={ButtonSize.SMALL} text="Small" /> <Text size={TextSize.XSMALL}>xsmall</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.XXLARGE}>xxlarge</Text> <NavigationLink href="https://www.yammer.com">Link</NavigationLink> <Clickable>Clickable</Clickable> <Text maxWidth="30px" size={TextSize.XSMALL}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>Ellipsis text</Text>
  </Block>
</Block>
```

```js { "props": { "data-example": "inherited text size with ellipsis" } }
const { ButtonSize } = require('../../components/Button');
const { GutterSize } = require('../../components/Block');
const { TextSize } = require('../../components/Text');
const textSample = (
  <span>
    <Button text="Reg" /> <Button size={ButtonSize.SMALL} text="Sm" /> <Text>n/a</Text> <Text size={TextSize.XSMALL}>xsmall</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.XXLARGE}>xxlarge</Text> <NavigationLink href="https://www.yammer.com">Link</NavigationLink> <Clickable>Clickable</Clickable> <Text maxWidth="30px">inherited size</Text> <Text maxWidth="25px" size={TextSize.XSMALL}>xsmall</Text> <Text maxWidth="25px" size={TextSize.SMALL}>small</Text> <Text maxWidth="30px" size={TextSize.MEDIUM_SUB}>mediumsub</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>medium</Text> <Text maxWidth="30px" size={TextSize.LARGE}>large</Text> <Text maxWidth="30px" size={TextSize.XLARGE}>xlarge</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>xxlarge</Text>
  </span>
);

<Block>
  <p>Adjacent Buttons, sized Text, and Text with ellipsis + inherited size, will all share a common baseline when wrapped by different Block textSizes.</p>

  <Block bottomSpacing={GutterSize.MEDIUM}>
    <b>xSmall</b>
    <Block textSize={TextSize.XSMALL}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>small</b>
    <Block textSize={TextSize.SMALL}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>mediumSub</b>
    <Block textSize={TextSize.MEDIUM_SUB}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>medium</b>
    <Block textSize={TextSize.MEDIUM}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>large</b>
    <Block textSize={TextSize.LARGE}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>xLarge</b>
    <Block textSize={TextSize.XLARGE}>
      {textSample}
    </Block>
  </Block>

  <Block bottomSpacing={GutterSize.MEDIUM} push={-1}>
    <b>xxLarge</b>
    <Block textSize={TextSize.XXLARGE}>
      {textSample}
    </Block>
  </Block>
</Block>
```

```js { "props": { "data-example": "across separate fixed grid columns" } }
const { TextSize } = require('../../components/Text');
const { ButtonSize } = require('../../components/Button');

<Block>
  <Block>Buttons and text in adjacent FixedGridColumns can share a common baseline with Block push:</Block>
  <FixedGridRow>
    <FixedGridColumn>
      <Text size={TextSize.XSMALL}>x small</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.XXLARGE}>xx large</Text> <NavigationLink href="https://www.yammer.com">Link</NavigationLink> <Clickable>Clickable</Clickable> <Text maxWidth="30px" size={TextSize.XSMALL}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>Ellipsis text</Text>
    </FixedGridColumn>
    <FixedGridColumn fixed={true}>
      <Block push={1}>
        <Button text="Submit" />
      </Block>
    </FixedGridColumn>
  </FixedGridRow>
</Block>
```
