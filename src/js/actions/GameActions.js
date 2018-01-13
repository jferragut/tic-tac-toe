import gameDispatcher from '../dispatchers/gameDispatcher';

export function SetTurn(task,player1Name,player2Name){
    
      gameDispatcher.dispatch({
        actionType: 'SET_PLAYER',
        data: {
          task: task,
          player1Name: player1Name,
          player2Name: player2Name
        }
      });
    
}
export function SendResult(winner,player1Name,player2Name){
    
    var formData = new FormData();
    formData.append("player1", player1Name);
    formData.append("player2", player2Name);
    formData.append("winner", winner);
    
    console.log(winner);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("The response came back successfully: ",this);
              
            gameDispatcher.dispatch({
              actionType: 'SAVE_SCORES',
              actionData: JSON.parse(this.response)   
            });
        }
    };
    xhttp.open("POST", "https://assets.breatheco.de/apis/tictactoe/api/game", true);
    xhttp.addEventListener('error',function(error){
        console.log("ERROR on the response!!! ",error);
    })
    xhttp.send(formData);
    
}