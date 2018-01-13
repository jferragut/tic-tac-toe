import React from 'react';
import * as GameActions from '../actions/GameActions';

export class NewGame extends React.Component {
  
  constructor(){
    
    super();
    
    this.state = {
     currentPlayer: null,
     message: null,
     square: ''
    };
    
    this.player1Name = null;
    this.player2Name = null;
  }
  
   
  setTurn(turnBtn){
  	GameActions.SetTurn(turnBtn,this.player1Name,this.player2Name);
  	console.log("set turn is working. Sending " + turnBtn+", "+this.player1Name+", "+this.player2Name);
  };
    
    
  render(){

    return(
      <div id="modal-container">
	      <div className="theModal choose-modal">
	        <h3>Choose Your Weapon: {this.state.currentPlayer} </h3>
	        <div className="name-area">
	            <input type="text" name="player1" placeholder="Player 1 Name" onChange={(evt)=>this.player1Name=evt.target.value} />
	            <input type="text" name="player2" placeholder="Player 2 Name" onChange={(evt)=>this.player2Name=evt.target.value} />
	        </div>
	        <div className="button-area">
	        	<span onClick={O=>{
	        	  this.setTurn('X');
	        	  
	        	  this.props.history.push('./');
	        	}} className="x-marker">X</span>
	        	<span onClick={O=>{
	        	  this.setTurn('O');
	        	  this.props.history.push('./');
	        	}} className="o-marker">O</span>
	        </div>
	      </div>
	    </div>
      
    );
  }
    

  
};