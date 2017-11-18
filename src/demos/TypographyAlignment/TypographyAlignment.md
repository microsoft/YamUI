```js { "props": { "data-example": "text" } }
const { TextSize } = require('../../components/Text');

<Block>
  <Block>Text components of different sizes will share a common baseline:</Block>
  <Block>
    <Text>Unstyled</Text> <Text size={TextSize.XSMALL}>x small</Text> <Text size={TextSize.SMALL}>small</Text> <Text size={TextSize.MEDIUM_SUB}>medium sub</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.LARGE}>large</Text> <Text size={TextSize.XLARGE}>x large</Text> <Text size={TextSize.XXLARGE}>xx large</Text>
  </Block>
</Block>
```

```js { "props": { "data-example": "text" } }
const { TextSize } = require('../../components/Text');

<Block>
  <Block>Text components of different sizes with maxWidth+ellipsis will share a common baseline:</Block>
  <Block>
    <Text>Unstyled</Text> <Text maxWidth="30px" size={TextSize.XSMALL}>x small</Text> <Text maxWidth="30px" size={TextSize.SMALL}>small</Text> <Text maxWidth="30px" size={TextSize.MEDIUM_SUB}>medium sub</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>medium</Text> <Text maxWidth="30px" size={TextSize.LARGE}>large</Text> <Text maxWidth="30px" size={TextSize.XLARGE}>x large</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>xx large</Text>
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
  <Block>Ajdacent buttons and Text will all share a common baseline:</Block>
  <Block>
    <Button text="Regular button" /> <Button size={ButtonSize.SMALL} text="Small button" /> <Text size={TextSize.XSMALL}>x small</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.XXLARGE}>xx large</Text> <NavigationLink href="https://www.yammer.com">Link</NavigationLink> <Clickable>Clickable</Clickable> <Text maxWidth="30px" size={TextSize.XSMALL}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>Ellipsis text</Text>
  </Block>
</Block>
```

```js { "props": { "data-example": "across separate fixed grid columns" } }
const { TextSize } = require('../../components/Text');
const { ButtonSize } = require('../../components/Button');

<Block>
  <Block>Buttons and text in adjacent FixedGridColumns can share a common baseline:</Block>
  <FixedGridRow>
    <FixedGridColumn>
      <Text size={TextSize.XSMALL}>x small</Text> <Text size={TextSize.MEDIUM}>medium</Text> <Text size={TextSize.XXLARGE}>xx large</Text> <NavigationLink href="https://www.yammer.com">Link</NavigationLink> <Clickable>Clickable</Clickable> <Text maxWidth="30px" size={TextSize.XSMALL}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.MEDIUM}>Ellipsis text</Text> <Text maxWidth="30px" size={TextSize.XXLARGE}>Ellipsis text</Text>
    </FixedGridColumn>
    <FixedGridColumn fixed={true}>
      <Button text="Submit" />
    </FixedGridColumn>
  </FixedGridRow>
</Block>
```
