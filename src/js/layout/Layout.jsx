import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Navbar} from '../components/NavBar.jsx';
import {NewGame} from './NewGame';
import {TheBoard} from './TheBoard';


export class Layout extends React.Component {
    
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
                            <Route render={() => <p className="text-center mt-5">Not found</p>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};