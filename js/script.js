let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage('Komputer wygrał tym razem.')
  } else if (computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('Mamy remis! Zagrajmy jeszcze raz')
  } else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień'){
      printMessage('Komputer wygrał tym razem.')
  } else if (computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Mamy remis! Zagrajmy jeszcze raz')
  } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis! Zagrajmy jeszcze raz')
  } else {
      printMessage('Przykro mi ale nierozpoznałem Twojego ruchu. Spróbuj jeszcze raz wpisać liczbę 1 (kamień) lub 2 (papier) albo 3 (nożyce).')
  }