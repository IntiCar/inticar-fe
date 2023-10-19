// Test MainMeu Component
// --------------------------------------------------------

import React from 'react';
import MainMeu from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
MainMeu,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
