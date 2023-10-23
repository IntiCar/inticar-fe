// Test Testimonial Component
// --------------------------------------------------------

import React from 'react';
import Testimonial from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Testimonial,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
