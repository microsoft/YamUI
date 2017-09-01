# Source SVG icons used to build React components

### Here we collect the raw (exported from Sketch) and optimized SVGs.

1. Add raw SVGs to assets/Icons/raw folder

2. Process SVGs with svgo

If necessary, install svgo. `npm install svgo -g`

```
cd assets/Icons
svgo --pretty --indent=2 (remove title and fill) raw/ -o optimized/
```
(Exported SVGs require the `<title>` tag and the fill attribute removed.)

3. Make a React component using this template (we are working on a tool to do this):

```
(Example.tsx)
/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
import * as React from 'react';

const Example = function Example(props: any) {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="xxx"/>
    </svg>
  );
};

export default Example;
```

Next, add the component file you created to src/components/Icon/icons/ and continue the steps for [Adding Icons](https://github.com/Microsoft/YamUI#adding-icons)

4. Commit all these resources to a new branch.

### SVG requirements
 - square field of 240
 - includes viewBox, width and height
 - no id or fill in path element. fill-rule ok.

