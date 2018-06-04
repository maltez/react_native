import React, { Component } from 'react';
import ReactDom from 'react-dom';

const items = ['banana', 'cherry', 'apple', 'pineapple'];

const styles = {'backgroundColor':'red'};

let globalDate = (new Date()).getSeconds();

const updateDate = () => {
    globalDate = (new Date()).getSeconds();
    reRender();
}

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = { name: props.name };
        this.updateName = this.updateName.bind(this)
    }

    updateName(){
        this.setState({
            name: 'Margo'
        });
    }

    render(){
        return <div>
            <h1>Hello from {this.state.name}</h1>
            <p>This is JSX</p>
            <button onClick={this.updateName}>Update</button>
        </div>;
    }
}

const reRender = () => {
    const element = <div>
        <Welcome name="Basil"/>
        <ul style={styles}>
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={updateDate}>Click me</button>
        <p>{globalDate}</p>
    </div>;


    ReactDom.render(
        element,
        document.getElementById('app'));
};

reRender();

