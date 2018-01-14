import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Navbar} from '../components/NavBar.jsx';
import {NewGame} from './NewGame';
import {TheBoard} from './TheBoard';
import {Scoreboard} from './Scoreboard';

import * as GameActions from '../actions/GameActions.js';

export class Layout extends React.Component {
    
    constructor(){
    
        super();
    
        this.state = {
        };
        
        GameActions.GetScoreboard();
        
    }
    
    render(){

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={TheBoard} />
                            <Route exact path='/index.html' component={TheBoard} />
                            <Route exact path='/new' component={NewGame} />
                            <Route exact path='/scores' component={Scoreboard} />
                            <Route render={() => <p className="text-center mt-5">Not found</p>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};