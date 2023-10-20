// Test Category Component
// --------------------------------------------------------

import React from 'react';
import Category from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Category,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
