import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Fruits } from './fruit.component';
import { MoreFruits } from './morefruit.component';
import { RawRows, SumRow, TrendRow, StatsRows } from './util';

// Sign-up per year in 3 different age groups (0-20, 20-40, 40+)
const data = [[14, 24, 125, 182], [10, 122, 220, 310], [0, 19, 38, 50]];

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Pineapple</li>
          <Fruits />
          <MoreFruits />
        </ul>
        <table>
          <tbody>
            <RawRows data={data} />
            <StatsRows data={data} />
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
