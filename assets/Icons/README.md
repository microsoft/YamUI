#Source SVG icons used to build React components

###SVG requirements
 - square field of 320
 - includes viewBox, width and height
 - no id in path element

###Run SVG through `svgo` before adding to this folder

```
npm install svgo -g
svgo --pretty --indent=2 <path_to_svg> -o assets/Icons/example.svg
```

###Make a React component using this template:

```
(Example.tsx)
/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* eslint-disable max-len */
import * as React from 'react';

export default function Icon(props: any) {
  return (
    <svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="xxx" />
    </svg>
  );
}
```

Next, add the component file you created to src/components/Icon/icons/ and continue the steps for [Adding Icons](https://github.com/Microsoft/YamUI#adding-icons)

