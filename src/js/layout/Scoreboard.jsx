import React from 'react';
import gameStore from '../stores/gameStore.js';

import * as GameActions from '../actions/GameActions.js';

export class Scoreboard extends React.Component {
  
  constructor(){
    
    super();
    
    this.state = {
      scoreboard: gameStore.getScore()
    };
  }
 
  componentWillMount(){
    this.setState({
      scoreboard: gameStore.getScore()
    });
  }    

    
  render(){
    
    var counter = 0;
    const therows = this.state.scoreboard.map(function(item){
      counter++;
      return (<tr key={counter}>
              <td>{item.player1}</td>
              <td>{item.player2}</td>
              <td>{item.winner}</td>
            </tr>);
    });

    return(
      <div>
        <h1 className="mx-auto">Scoreboard:</h1>
        <div className="container scoreboard">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Player 1</th>
                <th scope="col">Player 2</th>
                <th scope="col">Winner</th>
              </tr>
            </thead>
            <tbody>
              {therows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
    

  
};