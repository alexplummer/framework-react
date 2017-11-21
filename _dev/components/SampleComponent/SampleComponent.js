
// SampleComponent
// ============
// A basic sample component

// Imports
import React from 'react';

class SampleComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SampleComponent">
                <h4>Welcome to your new blank build!</h4>
                <p>Add in some Sass vars in setup.scss then create some components to get started.</p>
            </div>
        );
    }
}

// Exports
export default SampleComponent;
