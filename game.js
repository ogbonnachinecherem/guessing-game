
// my random value generated
    let random = Math.floor(Math.random() * 50 + 1);
      
    // counting the number of guesses
    
    let guess = 1;
    //console.log(random)
      let result = document.getElementById("para")
    document.getElementById("submitguess").onclick = function(){
      
   // number guessed by user     
   let gamerinput = document.getElementById("guessField").value;
   if (isNaN(gamerinput)) {
   	result.innerHTML = "NOT A NUMBER! PLAY AGAIN 😡😡😡";
   	result.style.color="red"
   
   }
  else if(gamerinput == random)
   {    
   	result.innerHTML = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS 🎉✨🎈";
   	result.style.color="green"
     
   }
   else if(gamerinput>50)
   {
     result.innerHTML = "SORRY!! THIS NUMBER IS OUT OF RANGE 😡"
     result.style.color="red"

       
   }
   
   
   else if(gamerinput<=0)
   {
      result.innerHTML = "INVALID INPUT! NEXT TIME GUESS FROM 1-50 👺"
      result.style.color="red"
     
   }
   else if(gamerinput > random)
   {    
       guess++;
       result.innerHTML = "OOPS SORRY!! TRY A SMALLER NUMBER🧐🤒"
       result.style.color="purple"
       
   }
   
   else 
   {
       guess++;
       result.innerHTML = "OOPS SORRY!! TRY A GREATER NUMBER🤓🤪"
       result.style.color="blue"

       //alert("OOPS SORRY!! TRY A GREATER NUMBER")
   }
}





