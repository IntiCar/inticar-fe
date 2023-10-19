// Test MobileMenu Component
// --------------------------------------------------------

import React from 'react';
import MobileMenu from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
MobileMenu,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
