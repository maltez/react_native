import React, { Component } from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import store from './store/store';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();

    this.onSubmitClicked = this.onSubmitClicked.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onInputFocused = this.onInputFocused.bind(this);
  }

  onSubmitClicked() {
    store.dispatch({type: 'ADD_TASK'});
  }

  onInputChanged(event) {
    store.dispatch({type: 'INPUT_TEXT_CHANGE', text: event.target.value});
  }

  onInputFocused(event) {
    event.target.select();
}

  componentDidMount(){
    store.subscribe(
        () => {
            this.setState(store.getState());
        }
    );
  }

  render() {
    return (
      <div>
          <div>
            <header className="App-header">
              <h1 className="App-title">TODO List</h1>
            </header>

            <ToDoList filter="All"/>
            
            <div>
              <input className='Input' 
                    type='text' 
                    name='comment' 
                    defaultValue='Type a new task here'
                    onChange={this.onInputChanged}
                    onFocus={this.onInputFocused}/>
              <label>{`\t`}</label>
              <button onClick={this.onSubmitClicked} disabled={this.state.inputText.length === 0}>Submit</button>
            </div>
            <br/>
            <div style={{ display:'inline-block'}}>
              <button onClick={() => store.dispatch({type: 'APPLY_FILTER', filter: 'All'})}>All Tasks</button>
              <label>{`\t`}</label>
              <button onClick={() => store.dispatch({type: 'APPLY_FILTER', filter: 'Done'})}>Done Tasks</button>
              <label>{`\t`}</label>
              <button onClick={() => store.dispatch({type: 'APPLY_FILTER', filter: 'NotDone'})}>Not Done Tasks</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
