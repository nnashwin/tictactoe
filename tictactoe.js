// Object containing rules
var Model = {
  players: [
    {
      name: "Player 1",  //Default name 
      symbol: "X",
      fields: []
    },
    {
      name: "Player 2",  //Default name 
      symbol: "O",
      fields: []
    }
  ],
  turn_no : 0,
  current_player: {},
  winLines: [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
  ]
  nextTurn: function() {
    Model.current_player = Model.players[Model.turn_no % 2];


    };

    Model.turn_no += 1;
  }
};