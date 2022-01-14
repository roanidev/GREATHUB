// SET  CALCULATOR SCREEN VARIABLE
let screen = document.getElementById('calscreen');
screen.innerHTML="";

// CREATE CLICK LISTENER FOR EACH BUTTON
var button = document.getElementsByClassName('btn');
console.log(button);

// ATTACH CLICKING AND SHOWING CLICKED ITEMS 
for(eachbutton=0; eachbutton<button.length; eachbutton++){

    // add click function on each button 
button[eachbutton].addEventListener('click', function(){
    // console.log(this.innerHTML);


    // show innerhtml of the button
    // state the function of each button 
    // for = button, caculate what was inside the screen and put the new value(i.e the answer) in the screen.
    if(this.innerHTML=="="){
        screen.innerHTML=eval(screen.innerHTML); 
        
    }else if(this.innerHTML=="C"){
         // clear what is in the calculator screen once this button with 'c' is pressed.
         screen.innerHTML="";
    }else if(this.innerHTML=="DEL"){
        screen.innerHTML=screen.innerHTML.slice(0, -1);
    }else{
        // get what was inside the calculator
        var olditem = screen.innerHTML;
        var newitem = this.innerHTML;

        // sum every thign together 
        screen.innerHTML=olditem+newitem;
    } 
   

})

}
// // SHOW INNERHTML OF THE BUTTON

// if(this.innerHTML=="="){
//     // CALCULATE WHAT WAS INSIDE THE SCREEN AND PUT NEW VALUE IN THE SCREEN
//     calculatorscreen.innerHTML=eval(calculatorscreen.innerHTML);
// }else if(this.innerHTML=="CLEAR"){
//     // EMPTY THE CALCULATOR SCREEN ONCE THIS IS PRESSED
//     calculatorscreen.innerHTML="";
// }else{

// // PUT CLIKED VALUE INTO CALCULATOR SCREEN
// // GET WHAT WAS INSIDE THE SCREEN BEFORE

// var olditem = calculatorscreen.innerHTML;

// // THIS HERE STANDS FOR THIS PARTICULAR BUTTON
// var newitem = this.innerHTML;

// // ?PUT THE OLDITEM PLUS THE NEW ITEM INSIDE THE SCREEN 
// calculatorscreen.innerHTML= olditem+newitem;