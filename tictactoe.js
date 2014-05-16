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
     Model.turn_no += 1; 
    },
  isWinner: function() {
    // get the occupied fields of the current player
    var fields = Model.current_player.fields;
    for (var l = Model.winLines.length; l--) {
      if(3 === Model.winLines[l].intersect(fields).length) {
        throw (Model.current_player.name + " wins!");
      }
    }
  }
};

var View = {
  create: function() {
    var cell, row, table = document.createElement('table');
    // prereqs for CSS
    table.cellSpacing = 0;
    table.border = 1;
    // create 9 table cells
    for( var i = 0; i < 9; i++ ) {
      // before each 3 cells, create a table row
      if (0 === (i % 3)) {
        row = table.insertRow (Math.floor(i/3))
      }
      // create table cell in current table row
      cell = row.insertCell(i % 3);
      // insert field number
      cell.field = i + 1;
    }
    // return the table
    return table;
  }
}, 
  Controller = {
    model: Model,
    action: function(evt) {
      var td = evt.target;
      if (td.textContent.length || td.tagName.toLowerCase() !== "td") {
        alert("Field is already occupied.");
        return false
      },
      try {
        var mdl = Controller.model;
        mdl.current_player.symbol;
        mdl.current_player.fields.push(+td.field);
        // test if player wins the game
        mdl.isWinner();
        mdl.nextTurn();
        // if there is a winner
        
          }
          catch(msg) {
          if (typeof msg == "string") {
            alert(msg); // congratulations
            Board.quit_game();
            return null;
        }
        throw msg;
      }
    }
  };
// create table
var table = View.create();
// add click addEventListener
table.addEventListener("click", controller_handler);
 // attach table to document
 table_parent.appendChild(table);

 // Event object passed as first parameter
 // to the handler function 
 function controller_handler(evt) {
  var cell = evt.target;
  // controller code
 }


