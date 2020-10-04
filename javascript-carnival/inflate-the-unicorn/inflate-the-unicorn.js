  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

 console.log("Inflate The Unicorn!")


// <button onclick="myFunction()">Click me</button> 

// We have 3 unicorns to inflate
// there are 4 stages of inflation (0-3)
// after 3 - an alert to thank 

// this function calls for inflateUnicorn function for the unicorn that has been clicked, 
// makes a loop and as long as it is < image_tracker3, run that function, otherwise alert




  var unicorn1 = document.getElementById('Cookie'); 
  var unicorn2 = document.getElementById('Cupcake');
  var unicorn3 = document.getElementById('Lolly');

  unicorn1.onclick = callUnicorn
  unicorn2.onclick = callUnicorn
  unicorn3.onclick = callUnicorn

function callUnicorn (event){
  event.target.id = inflateUnicorn();
  
}

// this function has to work for the 3 unicorns changing the source of the image
var image_tracker = '0';
function inflateUnicorn(){

   var image = document.getElementById(event.target.id);
   if(image_tracker == '0'){
     image.src = './images/unicorn-1.png';
     image_tracker = '1'
   } else if (image_tracker == '1'){
     image.src = './images/unicorn-2.png';
     image_tracker = '2'
   } else if (image_tracker == '2') {
     image.src = './images/unicorn-3.png';
     image_tracker = '3'
   } else {
  // here need a loop to alert a message depending on the unicorn that has been inflated
     if (event.target.id = 'Cookie' ) {
     alert ("Unicorn 1: Cookie says 'Thank you!'");
     }  if (event.target.id = 'Cupcake' ){
       alert ("Unicorn 2: Cupcake says 'Thank you!");
     } if (event.target.id = 'Lolly') {
       alert ("Unicorn 3: Lolly says 'Thank you!");
     }
    }
   }
      
  
