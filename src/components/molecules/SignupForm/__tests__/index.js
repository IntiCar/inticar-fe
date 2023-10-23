// Test SignupForm Component
// --------------------------------------------------------

import React from 'react';
import SignupForm from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
SignupForm,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
