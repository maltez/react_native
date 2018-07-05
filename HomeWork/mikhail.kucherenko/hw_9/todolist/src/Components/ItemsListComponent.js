import React, { Component } from 'react';
import ItemComponent from './ItemComponent';

class ItemsListComponent extends Component {

    onItemCheckedChange = (key, isChecked) => {
        console.log("Checked item[" + key + "] = " + isChecked + " this.todosList.len = " + this.props.list.length);
        this.props.list[key].isSelected = isChecked;
        this.props.listChangedCallback(this.props.list);
    }

    render() { 
        let filteredList = [];
        if (this.props.filterType === "selected") {
            filteredList = this.props.list.filter((item) => item.isSelected === true);
        } else if (this.props.filterType === "unselected") {
            filteredList = this.props.list.filter((item) => item.isSelected === false);
        } else {
            filteredList = this.props.list;
        }
        const todos = filteredList.map((item, index) => (
            <ItemComponent title={item.title} 
                           isNew={item.isNew}
                           isChecked={item.isSelected} 
                           index={index} 
                           key={index.toString()} 
                           itemCheckedChangeCallback={this.onItemCheckedChange}/>
        ));
        return  <div style={{overflow: 'auto', height: 'inherit', display: 'block', maxWidth: 300, maxHeight:300, marginLeft: 20}}>
                    {todos}
                </div>;
    }
}

export default ItemsListComponent;