// Test LoginForm Component
// --------------------------------------------------------

import React from 'react';
import LoginForm from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
LoginForm,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
