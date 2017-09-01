#Source SVG icons used to build React components

###SVG requirements
 - square field of 240
 - includes viewBox, width and height
 - no id in path element

###Run SVG through `svgo` before adding to this folder

If necessary, install svgo.

```
npm install svgo -g
```

Exports need the `<title>` tag and the fill attribute removed.

```
svgo --pretty --indent=2 <path_to_svg> -o assets/Icons/example.svg
```

###Make a React component using this template:

```
(Example.tsx)
/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
import * as React from 'react';

const Example = function Example(props: any) {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="xxx"/>
    </svg>
  );
};

export default Example;
```

Next, add the component file you created to src/components/Icon/icons/ and continue the steps for [Adding Icons](https://github.com/Microsoft/YamUI#adding-icons)

