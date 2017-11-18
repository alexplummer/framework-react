
// NewComponent
// ============
// A basic sample component

// Imports
import React from 'react';

class NewComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="test">Hi there</p>
        );
    }
}

// Exports
export default NewComponent;
