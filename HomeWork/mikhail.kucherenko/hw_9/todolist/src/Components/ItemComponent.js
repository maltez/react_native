import React, { Component} from 'react';
import PropTypes from 'prop-types';


class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: props.isChecked, isNew: props.isNew}
    }

    toggleCheckboxChange = () => {
        this.setState( prevState => ({ isChecked: !prevState.isChecked, isNew: prevState.isNew }) );
        this.props.itemCheckedChangeCallback(this.props.index, !this.state.isChecked);  
    }

    render() {
        this.title = this.props.title;
        return (
            <div>
            <label className={this.state.isChecked ? "todo-list-item-title-checked" : "todo-list-item-title"}>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.toggleCheckboxChange}
                />
                {this.state.isChecked ? <s>{this.title}</s>: <i>{this.title}</i>}
                {this.state.isNew ? "   ( New! )" : ""}
            </label> 
            </div>
        )
    }
}

ItemComponent.propTypes = {
    title: PropTypes.string
}

export default ItemComponent;

