// Test WhyChoose Component
// --------------------------------------------------------

import React from 'react';
import WhyChoose from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
WhyChoose,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
