
// TextList
// ============
// A basic sample component

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import TextList from './TextList';

describe('TextList renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <TextList props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
