import React, { Component } from 'react';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', comments: []};
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    onInputChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit() {
        this.setState({comments: [...this.state.comments, this.state.text]})
    }

    handleFocus(event) {
        event.target.select();
    }

    render() {
        const data =this.state.comments;
        const listItems = data.map((data) =>
            <li>{data}</li>
        );
        return (
             <div>
                {listItems}

                <input className='Input' 
                        type='text' 
                        name='comment' 
                        defaultValue='Type a new comment here'
                        onChange={this.onInputChange} 
                        onFocus={this.handleFocus}/>
                <label>{`\t`}</label>
                <button onClick={this.handleSubmit} disabled={this.state.text.length == 0}>Submit</button>
            </div>
        )
    }
}