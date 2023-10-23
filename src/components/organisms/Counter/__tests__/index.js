// Test Counter Component
// --------------------------------------------------------

import React from 'react';
import Counter from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Counter,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
