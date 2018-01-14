import React from 'react';
import gameStore from '../stores/gameStore.js';

import * as GameActions from '../actions/GameActions.js';

export class TheBoard extends React.Component {
  
  constructor(){
    
    super();
    
    console.log("initializing board constructor");
    this.state = {
        winner: null,
        turn: gameStore.getCurrentPlayer(),
        message: null,
        board: {
        s1: '',
        s2: '',
        s3: '',
        s4: '',
        s5: '',
        s6: '',
        s7: '',
        s8: '',
        s9: ''
        },
        player1Name: gameStore.getPlayer1Name(),
        player2Name: gameStore.getPlayer2Name(),
        pyro: 'd-none'
    };
  }

  componentDidMount(){
    
    console.log(this.state.turn);
    
    //This will check if there is no player, if there isn't - go to NEW GAME  
    if(typeof(this.state.turn)==='undefined' || this.state.turn===null ){ 
      this.props.history.push('./new');
      console.log("sending to new game");
    }
    
  }

  
  
  nextMove(squareNum) {
    console.log(squareNum + " is being sent to Next move function.");
    console.log("Value is of type: "+ typeof(squareNum));
    var aux = [];   //create auxiliary dictionary
    aux[squareNum] = this.state.turn;   //look at position in the dictionary
    console.log(aux[squareNum]);
    
  	//if there is a winner
  	if(this.state.winner != null) {
  	  this.setState({
    	  message: this.state.turn + " won!",
    	  pyro: 'pyro'
    	});
    	
    	GameActions.SendResult(this.state.turn,this.state.player1Name,this.state.player2Name);
    	//the player will never switch, so operation will freeze until new game is pressed.
  	}
  
  	//else, if the square is empty
  	else if(typeof(this.state.board.squareNum)==='undefined' || this.state.board.squareNum=='')
  	{
  	  console.log("The square,"+squareNum+", is empty.");
  	  const newBoard = Object.assign(this.state.board,aux);  //recreate board with new mark
  	  
  	  this.setState({
  	    board: newBoard   //replace old board with new board
  	  });
  	  
  		this.switchTurn(this.state.turn);
  	}
  	
  	//else, the square is occupied
  	else
  	{
  	  this.setState({
    	  message: "Pick another square."
    	});
  	}
  	
  }
  
  
  switchTurn(currentTurn){
      console.log("In switchTurn Function.");
      console.log("current turn is "+currentTurn);
      //Check if there is a winner
    	if(this.checkForWinner(currentTurn)===true)
    	{
    	  this.setState({
      	   message: "Congrats " + this.state.turn + ", you won!",
      	   winner: this.state.turn,
      	   pyro: 'pyro'
      	});
      	console.log(this.checkWinnerName(),this.state.player1Name,this.state.player2Name);
      	GameActions.SendResult(this.state.winner,this.state.player1Name,this.state.player2Name);
    	}
    	
    	//if not, and X just played, then is O turn
    	else if(currentTurn.toUpperCase() === "X")
    	{
    	   this.setState({
      	   turn: "O",
      	   message: "It's O's turn."
         });
         console.log("Player switched to "+this.state.turn);
    	} 
    	
    	//if not, is X turn
    	else {
    	  this.setState({
      	   turn: "X",
      	   message: "It's X's turn."
      	});
      	console.log("Player switched to "+this.state.turn);
    	}
  }
  
  checkWinnerName(){
    var player1Weapon = gameStore.currentPlayer;
    if(player1Weapon==this.state.turn){
      return this.state.player1Name;
    }else{
      return this.state.player2Name;
    }
  }
  
  checkForWinner(move){
    var result = false;
    console.log(this.state.board);
    //all posible combinations for wining on tictactoe
    if(this.checkRow(this.state.board.s1, this.state.board.s2, this.state.board.s3, move) ||
       this.checkRow(this.state.board.s7, this.state.board.s8, this.state.board.s9, move) ||
       this.checkRow(this.state.board.s4, this.state.board.s5, this.state.board.s6, move) ||
       this.checkRow(this.state.board.s1, this.state.board.s4, this.state.board.s7, move) ||
       this.checkRow(this.state.board.s2, this.state.board.s5, this.state.board.s8, move) ||
       this.checkRow(this.state.board.s3, this.state.board.s6, this.state.board.s9, move) ||
       this.checkRow(this.state.board.s1, this.state.board.s5, this.state.board.s9, move) ||
       this.checkRow(this.state.board.s3, this.state.board.s5, this.state.board.s7, move)){
        result = true;
    }
  
    return result;
  }
  
  //Check if the player is on the A,B,C spots all together
  checkRow(a, b, c, move){
    var result = false;
    if(a == move && b == move && c == move){
      result =  true;
    }
    return result;
  }
  
  
  resetGame(evt){
    this.setState({
        winner: null,
        turn: null,
        message: null,
        board: {
        s1: '',
        s2: '',
        s3: '',
        s4: '',
        s5: '',
        s6: '',
        s7: '',
        s8: '',
        s9: ''
        },
        pyro: 'd-none'
    });
    
    this.props.history.push('./new');
  }

  
  render(){
    
    var theWelcome = function(){
      console.log("welcome to the board");
    };
    
    return(
      <div className="container-fluid">
          <div className={this.state.pyro}>
              <div className="before"></div>
              <div className="after"></div>
          </div>
          <div id="msg">
          		<h1>Tic Tac Toe <small>in REACT.</small></h1>
          		<h2 id="message">{this.state.message}</h2>
          		<a href="#" onClick={O=>this.resetGame()} id="start-over" className="btn btn-danger">Start Over</a>
        	</div>
        	
        	
        	<div className="container">
        	  <div className="board clearfix">
        	    <div className="row">
        	      <div className="square" onClick={O=>this.nextMove('s1')} id="s1">{this.state.board.s1}</div>
        	      <div className="square" onClick={O=>this.nextMove('s2')} id="s2">{this.state.board.s2}</div>
        	      <div className="square" onClick={O=>this.nextMove('s3')} id="s3">{this.state.board.s3}</div>
        	    </div>
        	    <div className="row">
        	      <div className="square" onClick={O=>this.nextMove('s4')} id="s4">{this.state.board.s4}</div>
        	      <div className="square" onClick={O=>this.nextMove('s5')} id="s5">{this.state.board.s5}</div>
        	      <div className="square" onClick={O=>this.nextMove('s6')} id="s6">{this.state.board.s6}</div>
        	    </div>
        	    <div className="row">
        	      <div className="square" onClick={O=>this.nextMove('s7')} id="s7">{this.state.board.s7}</div>
        	      <div className="square" onClick={O=>this.nextMove('s8')} id="s8">{this.state.board.s8}</div>
        	      <div className="square" onClick={O=>this.nextMove('s9')} id="s9">{this.state.board.s9}</div>
        	    </div>
        	  </div>
        	</div>
      	
      </div>
    );
  }
  
};