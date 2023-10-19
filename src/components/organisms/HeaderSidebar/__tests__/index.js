// Test HeaderSidebar Component
// --------------------------------------------------------

import React from 'react';
import HeaderSidebar from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
HeaderSidebar,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
