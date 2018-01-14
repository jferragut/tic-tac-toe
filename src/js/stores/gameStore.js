import EventEmmiter from 'events';

import * as GameActions from '../actions/GameActions.js'
import gameDispatcher from '../dispatchers/gameDispatcher.js';

class GameStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.model = {
            currentPlayer: null,
            player1Name: null,
            player2Name: null
        };
        this.scoreData = [];
    }
    
    
    getCurrentPlayer(){
        return this.model.currentPlayer;
    }
    
    getPlayer1Name(){
        return this.model.player1Name;
    }
    
    getPlayer2Name(){
        return this.model.player2Name;
    }
    
    getScore(){
        return this.scoreData;
    }
    
    setPlayer(data){
        this.model=({
          currentPlayer: data.task,
          player1Name: data.player1Name,
          player2Name: data.player2Name
        });
        this.emit('change');
    }
    
    saveScores(data){
        this.scoreData = data;
        console.log(data);
        this.emit('change');
    }
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "SET_PLAYER": this.setPlayer(action.data); break;
            case "SAVE_SCORES": this.saveScores(action.actionData); break;
        }
        
    }
}
var gameStore = new GameStore();
gameDispatcher.register(gameStore.handleActions.bind(gameStore));
window.gameDispatcher = gameDispatcher;
export default gameStore;