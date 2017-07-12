import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'YamUI Components',
  url: 'https://github.com/Microsoft/YamUI',
});

storybook.configure(() => require('../../dist/stories/index'), module);
