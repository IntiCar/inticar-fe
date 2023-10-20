// Test FeatureListing Component
// --------------------------------------------------------

import React from 'react';
import FeatureListing from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
FeatureListing,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
