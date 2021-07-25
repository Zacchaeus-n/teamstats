// Team object
const team = {
  _players: [
    {
      firstName: "Emma",
      lastName: "Ampofo",
      age: 29,
    },
    {
      firstName: "Collins",
      lastName: "Adjei",
      age: 28,
    },
    {
      firstName: "Francis",
      lastName: "Francis",
      age: 27,
    },
  ],

  _games: [
    {
      opponent: "FIFA",
      teamPoints: 111,
      opponentPoint: 130,
    },
    {
      opponent: "Broncos",
      teamPoints: 120,
      opponentPoint: 109,
    },
    {
      opponent: "Tennis",
      teamPoints: 90,
      opponentPoint: 80,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Add new player object to players array
  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName,
      lastName,
      age,
    };
    this.players.push(newPlayer);
  },

  // Adds new game object to games array
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this.games.push(game);
  },
};

// Addition functions invoked
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Volleyball", 111, 117);
team.addGame("Hawkeye Game", 100, 117);
team.addGame("football", 119, 110);

console.log(team.players);
console.log(team.games);
