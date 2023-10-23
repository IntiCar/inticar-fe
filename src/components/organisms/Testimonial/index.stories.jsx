// Testimonial Component
// --------------------------------------------------------

import Testimonial from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/organisms/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {};

