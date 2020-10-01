  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")






    var cells = document.getElementsByTagName('td')
    var randomIndex = Math.floor(Math.random() * cells.length) 
    var randomCell = cells[randomIndex]
    var mole = document.createElement('img');
    var audio = new Audio('whack-audio.wav');
    mole.src = 'mole.PNG';
    mole.style.height = '75px';
    mole.style.width = '75px';
    randomCell.appendChild(mole);


    mole.onclick = whackMole
    function whackMole(){
      randomIndex = Math.floor(Math.random() * cells.length) 
      randomCell = cells[randomIndex]
      randomCell.appendChild(mole);
      audio.play();
    }
   


// get a random number between the cells and attach it to the 'id'
    //   var id = 'cell' + (Math.floor(Math.random()*'cell'.length))
    //   document.getElementById('id');
    // console.log(id)
    // var randomIndex = id; 

// create a new html element called img
    // var mole = document.createElement('img'); 

// put source of image and change size of image
    // mole.src = 'mole.PNG'; 
    // mole.style.height = '75px';
    // mole.style.width = '75px';

// add image to id cell
    // randomIndex.appendChild(mole);
    
  // .appendChild(mole)