// Test SaleBanner Component
// --------------------------------------------------------

import React from 'react';
import SaleBanner from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
SaleBanner,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
