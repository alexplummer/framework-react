
// SampleComponent
// ============
// A basic sample component

// Imports
import React from 'react';
import renderer from 'react-test-renderer';
import SampleComponent from './SampleComponent';

describe('SampleComponent renders correctly', () => {
    it('renders correctly', () => {
        const props = {};
        const rendered = renderer.create(
            <SampleComponent props={props} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
