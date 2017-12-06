
// TextListContainer
// ============
// A basic sample component

// Imports
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../../store/actions';
import TextList from '../TextList/TextList';

const TextListContainer = ({ items, actions }) => (
    <TextList items={items} actions={actions} />
)

// Map states
const mapStateToProps = state => ({
    items: state
});

// Map dispatch
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(listActions, dispatch)
});

// Exports
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextListContainer);
