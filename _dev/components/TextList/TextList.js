
// TextList
// ============
// A basic sample component

// Imports
import React from 'react';

class TextList extends React.Component {

    render() {
        let newId = 1;

        let itemsList = this.props.items.map((thisItem) =>
            <li key={thisItem.text}>{thisItem.text}</li>
        );

        function addItem() {
            this.props.actions.addItem({
                text: document.querySelector('.item-text').value,
                id: newId++
            });
        }

        return (
            <div className="TextList">
                <h1>Redux list example</h1>
                <ul>
                    {itemsList}
                </ul>
                <form>
                    <input type="text" className="item-text"></input>
                    <button type="button" onClick={ addItem.bind(this) }>Add item</button>
                </form>
            </div>
        );
    }
}

// Exports
export default TextList;
