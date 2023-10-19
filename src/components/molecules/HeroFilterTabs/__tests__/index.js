// Test HeroFilterTabs Component
// --------------------------------------------------------

import React from 'react';
import HeroFilterTabs from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
HeroFilterTabs,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
