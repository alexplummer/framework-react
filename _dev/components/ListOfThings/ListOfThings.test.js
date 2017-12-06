
// ListOfThings
// ============
// A basic sample component

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import ListOfThings from './ListOfThings';

describe('ListOfThings renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <ListOfThings props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
