Source SVG icons used to build React components in src/components/Icon/icons/.

SVGs in this folder need to have been run through `svgo`:

```
npm install svgo -g
svgo --pretty --indent=2 <path_to_svg> -o assets/Icons/example.svg
```

Run the svg-to-react script create the React SVG component:

```
./svg-to-react.sh assets/Icons/example.svg
```

`./svg-to-react.sh` generates a React file following this template:

```
import * as React from 'react';

export default function Icon(props: any) {
  return (
    <svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="xxx" />
    </svg>
  );
}
```

