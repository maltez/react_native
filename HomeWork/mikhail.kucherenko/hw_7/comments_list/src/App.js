import React, { Component } from 'react'; 
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', itemsList: [{ title: "First comment!", isNew: true }]};
        this.handleChange = this.handleChange.bind(this);
        this.AddNewItemToList = this.AddNewItemToList.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    AddNewItemToList() {
        if (this.state.value !== "") {
            this.state.itemsList.map((item) => {item.isNew = false})
            this.setState({value: "", itemsList: [{title: this.state.value, isNew: true }, ...this.state.itemsList]});
        }
    }

    ItemsListComponent = () => {
      const comments = this.state.itemsList.map((item, index) => (
        <div>
          <label className="commet-list-item-title">
            {item.title}
            {item.isNew ? "   ( New! )" : ""}
          </label> 
        </div>
        ));
        return  <div style={{ overflow: 'auto', 
                              height: 'inherit', 
                              display: 'block', 
                              maxWidth: 300, 
                              maxHeight: 300, 
                              marginLeft: 20}}>
                    {comments}
                </div>;
    }

    render() {
        return (
            <div>
              <h1 className="App-title">Comments List Application</h1>
                <h3>Comments list:</h3>
                <div>{this.ItemsListComponent()}</div>
                
                <label className="Input-title-style">
                    Enter comment:
                    <input className="Input-text" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button className="Submit-button" onClick={this.AddNewItemToList}>Submit</button>
            </div>
        );
    }
}