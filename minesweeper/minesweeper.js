document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     {row: 0,
      col: 0,
      isMine: Math.random()>= 0.85, 
      hidden:true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 1,
      col: 0,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 2,
      col: 0,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 3,
      col: 0,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 4,
      col: 0,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },

      {row: 0,
      col: 1,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 1,
      col: 1,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 2,
      col: 1,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 3,
      col: 1,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 4,
      col: 1,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },

     {row: 0,
      col: 2,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 1,
      col: 2,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 2,
      col: 2,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
    
     {row: 3,
      col: 2,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 4,
      col: 2,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },

      {row: 0,
      col: 3,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 1,
      col: 3,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 2,
      col: 3,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 3,
      col: 3,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 4,
      col: 3,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },

      {row: 0,
      col: 4,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 1,
      col: 4,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 2,
      col: 4,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 3,
      col: 4,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    },
     {row: 4,
      col: 4,
      isMine: Math.random()>= 0.85,
      hidden: true,
      isMarked: false,
      surroundingMines: 2
    }
    ]
 }
 
   
 

function startGame () {
  // create a for look that call 'countSurroundingMines
  // that goes through every cell in the board
  // pass each cell as an argument
  
  for (var i = 0; i < board.cells.length; i++) {
  // assing the result of countSurroundingMines 
  // to a property on each cell object,this 
  // should be called 'surroundingMines
  // var eachCell = board.cells[i]
    //console.log("board.cells[i] " + "i " + i)
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

  document.addEventListener("click", checkForWin)
  document.addEventListener("contextMenu", checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var victory = 0;
  var novictory = 0;
  for (var i = 0; i < board.cells.length; i++){
     var eachCell = board.cells[i]
  if (eachCell.isMine == true && eachCell.isMarked == true){
       victory
  }  if (eachCell.isMine == true && eachCell.isMine == false){
       novictory
  } 
  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  if (victory + novictory == board.cells.length)
     lib.displayMessage('You win!')
  }
  
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
 //  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  //  var surroundingMines = board.cells.length
   var count = 0
   var surroundingCells = getSurroundingCells(cell.row, cell.col);
  
   for (var i = 0; i < surroundingCells.length; i++){
     if (surroundingCells[i].isMine == true){
       count ++
     }
   }
   return count
}
