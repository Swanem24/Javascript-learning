/*
Objective
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

//  Team Object 
const team = {
    //  Each player contains first name, last name and age
    _players: [
      {firstName: 'Lionel', lastName: 'Messi', age: 23},
      {firstName: 'Cristiano', lastName: 'Ronaldo', age: 28},
      {firstName: 'Robert', lastName: 'Lewandoski', age: 27}
    ],
    //  Opponent states and team states
    _games: [
        {opponent: 'Real Madrid', teamPoints: 3, opponentPoints: 2}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        player = [{ newFirstName, newLastName, newAge}];
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = [{newOpponent, newTeamPoints, newOpponentPoints}];
        this._games.push(game);
    }

  };

team.addPlayer('Sanjog', 'Wanem', 24);
team.addGame('Manchester United', 5, 2);
console.log(team._players);
console.log(team._games);
