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
    
    setPlayer(data){
        this.model=({
          currentPlayer: data.task,
          player1Name: data.player1Name,
          player2Name: data.player2Name
        });
        this.emit('change');
    }
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "SET_PLAYER": this.setPlayer(action.data); break;
        }
        
    }
}
var gameStore = new GameStore();
gameDispatcher.register(gameStore.handleActions.bind(gameStore));
window.gameDispatcher = gameDispatcher;
export default gameStore;