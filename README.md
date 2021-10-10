# Tic-Tac-Toe

Simplistic web application of Tic-Tac-Toe, the two-player game that most of us grew up playing. You can check this 
[demo](https://minetictactoe.netlify.app/) up, taking turns as X marker or O marker. Of course, you can share your computer with your partner, too. After the game ends, with the victory of one or another player or with the draw, you can restart the game. 

## Technologies used

The application's stack is quite simple, too, including HTML, CSS, and JS. 

## Programmers 

[Azizkhuja](https://github.com/Azizkhuja)<br>
[AzamovUz (me)](https://github.com/AzamovUz)

## The OOP process

Here comes the preparations we have made before sitting to code the application:

_Use Cases_<br>

Title: Let 2 people play tic-tac-toe
Primary Actor: User
Success Scenario: The application shows the 3x3 board. 
User marks "X" on any given cell. The turn yields to player 2. 
User marks "O" on any cell. 
If three "X"s or "O"s come in line horizontally, vertically or diagonally, 
the application announces the winner (respectively). 
Else the application stops when all cells are filled, and says that it's a draw. User restarts the game. 


_User Story_ <br>

As a user, I want to take turns to mark “X” or “O” on the cells to try to get them in one line. 

_As instructed in the course Azizkhuja and I watched prior to building this project: [Programming Foundations: OOD](https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3/challenge-jukebox-class-diagrams), we selected nouns from the use cases to identify potential objects and verbs to presume functions in the projects. 
_

_Nouns:_<br>
Application<br>
Board<br>
User<br>
“X”<br>
Cell<br>
Turn<br>
“O”<br>
Line<br>
Winner<br>
Draw<br>

_Potential objects:_<br>
3x3 Board<br>
“X”<br>
“O”<br>
“X” turn<br>
“O” turn<br>
Line (Winning possibilities)<br>
Result<br>

_Verbs:_<br> 
Shows<br>
Marks<br>
Yields<br>
Come in (Match)<br>
Announces (Says)<br>
Stops<br>
Restart<br>

_Potential functions:_<br>
startGame()<br>
handleClick()<br>
putMark()<br>
changeTurn()<br>
checkMatch()<br>
displayResult()<br>
stopGame()<br>
restartGame()<br>

