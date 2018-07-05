import React, { Component } from 'react';
import ItemComponent from './ItemComponent';

class ItemsListComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const todos = this.props.list.map((item, index) => (
            <ItemComponent title={item.title} isNew={item.isNew} key={index.toString()}/>
        ));
        return  <div style={{overflow: 'auto', height: 'inherit', display: 'block', maxWidth: 300, maxHeight:300, marginLeft: 20}}>
                    {todos}
                </div>;
    }
}

export default ItemsListComponent;