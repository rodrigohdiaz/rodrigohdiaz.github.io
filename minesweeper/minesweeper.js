document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     {row: 0,
      col: 0,
      isMine:'', 
      hidden:'true'
    },
     {row: 1,
      col: 0,
      isMine:'',
      hidden:'true'
    },
     {row: 2,
      col: 0,
      isMine:'',
      hidden:'true'
    },
     {row: 3,
      col: 0,
      isMine:'',
      hidden:'true'
    },
     {row: 4,
      col: 0,
      isMine:'',
      hidden:'true'
    },

      {row: 0,
      col: 1,
      isMine:'',
      hidden:'true'
    },
     {row: 1,
      col: 1,
      isMine:'',
      hidden:'true'
    },
     {row: 2,
      col: 1,
      isMine:'',
      hidden:'true'
    },
     {row: 3,
      col: 1,
      isMine:'',
      hidden:'true'
    },
     {row: 4,
      col: 1,
      isMine:'',
      hidden:'true'
    },

     {row: 0,
      col: 2,
      isMine:'',
      hidden:'true'
    },
     {row: 1,
      col: 2,
      isMine:'',
      hidden:'true'
    },
     {row: 2,
      col: 2,
      isMine:'',
      hidden:'true'
    },
     {row: 3,
      col: 2,
      isMine:'',
      hidden:'true'
    },
     {row: 4,
      col: 2,
      isMine:'',
      hidden:'true'
    },

      {row: 0,
      col: 3,
      isMine:'',
      hidden:'true'
    },
     {row: 1,
      col: 3,
      isMine:'',
      hidden:'true'
    },
     {row: 2,
      col: 3,
      isMine:'',
      hidden:'true'
    },
     {row: 3,
      col: 3,
      isMine:'',
      hidden:'true'
    },
     {row: 4,
      col: 3,
      isMine:'',
      hidden:'true'
    },

      {row: 0,
      col: 4,
      isMine:'',
      hidden:'true'
    },
     {row: 1,
      col: 4,
      isMine:'',
      hidden:'true'
    },
     {row: 2,
      col: 4,
      isMine:'',
      hidden:'true'
    },
     {row: 3,
      col: 4,
      isMine:'',
      hidden:'true'
    },
     {row: 4,
      col: 4,
      isMine:'',
      hidden:'true'
    }
    ]
 }
 
   
 

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

