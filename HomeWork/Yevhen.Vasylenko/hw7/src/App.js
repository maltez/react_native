import React, { Component } from 'react';
import './App.css';
import CommentsList from './CommentsList';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {comments: []};

    this.onChange = this.onChange.bind(this);
    this.onClicked = this.onClicked.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onClicked(event) {
    event.preventDefault();
    if (this.state.value) {
      this.setState({
        value: '',
        comments: [...this.state.comments, this.state.value]
      });
    }
  }

  render() {
    const buttonTitle = "Add";
    
    return (
      <div className="App">
        <p className="App-title">Please enter new comment below and click on <b><i>{buttonTitle}</i></b> button</p>
        
        <CommentsList comments={this.state.comments}/>
        
        <form>
          <Input value={this.state.value} onChange={this.onChange} />
          <button className="App-button" onClick={this.onClicked}>{buttonTitle}</button>
        </form>
      
      </div>
    );
  }
}

export default App;
