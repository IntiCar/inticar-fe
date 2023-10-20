// FeatureListing Component
// --------------------------------------------------------

import FeatureListing from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/organisms/FeatureListing',
  component: FeatureListing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {};
