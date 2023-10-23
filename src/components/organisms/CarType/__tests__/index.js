// Test CarType Component
// --------------------------------------------------------

import React from 'react';
import CarType from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
CarType,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
