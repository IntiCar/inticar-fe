// Test LoginSignupModal Component
// --------------------------------------------------------

import React from 'react';
import LoginSignupModal from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
LoginSignupModal,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
