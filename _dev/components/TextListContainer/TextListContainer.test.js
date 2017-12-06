
// TextListContainer
// ============
// A basic sample component

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import TextListContainer from './TextListContainer';

describe('TextListContainer renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <TextListContainer props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
