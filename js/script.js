function playGame (playerInput){

    clearMessages();

    function getMoveName(argMoveId){
    
        if(argMoveId == 1){
          return 'kamień';
        }

        else if(argMoveId == 2){
        return 'papier';
      }

    else if(argMoveId == 3){
        return 'nożyce';
      }
  
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
   }

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Wygrałem z Tobą, tym razem.');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Mamy remis! Zagrajmy jeszcze raz');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrałeś!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Wygrałem z Tobą, tym razem.');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Mamy remis! Zagrajmy jeszcze raz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Mamy remis! Zagrajmy jeszcze raz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrałeś!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Wygrałem z Tobą, tym razem.');
    } else {
        printMessage('Przykro mi ale nierozpoznałem Twojego ruchu. Spróbuj jeszcze raz wpisać liczbę 1 (kamień) lub 2 (papier) albo 3 (nożyce).');
    } 

    }



    /* console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove); */

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    if (randomNumber == 4) {
        if ( argPlayerMove == 'papier'){
            argComputerMove = 'nożyce'
        }
        else if (argPlayerMove == 'nożyce') {
            argComputerMove = 'kamień'
        } else {argComputerMove = 'papier'}
    } else {
        if ( argPlayerMove == 'papier') {
            argComputerMove = 'kamień'
        } else if (argPlayerMove == 'nożyce') {
            argComputerMove = 'papier'
        } else {argComputerMove = 'nożyce'}  
    }

    printMessage('Twój ruch to: ' + argPlayerMove);



    displayResult (argComputerMove, argPlayerMove);

}

  
  let testButton = document.getElementById("play-rock");
  
  testButton.addEventListener('click', function(){playGame(1)} );

  
  testButton = document.getElementById("play-paper");
  
  testButton.addEventListener('click', function(){playGame(2)});

  
  testButton = document.getElementById("play-scissors");
  
  testButton.addEventListener('click', function(){playGame(3)});
