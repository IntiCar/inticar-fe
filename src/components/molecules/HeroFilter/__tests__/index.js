// Test HeroFilter Component
// --------------------------------------------------------

import React from 'react';
import HeroFilter from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
HeroFilter,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
