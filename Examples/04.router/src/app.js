import React, { Component } from 'react';
import { About } from './about';
import { RR } from './routes';
import { Link, Switch, Route } from 'react-router-dom';
import { Post } from './posts'
import { Post1 } from './post1'
import { Post2} from './post2'


export class App extends Component {
    render() {
        return <div>
        <RR />
            <Switch>
                <Route exact path='/about' component={About}/>
                <Route exact path='/post' component={Post}/>
                <Route path='/post1' component={Post1}/>
                <Route path='/post2' component={Post2}/>
            </Switch>
        
    </div>;
    }
}




