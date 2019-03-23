import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: { theme: themes.dark },
});

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
