alert("Welcome to my website")
// checkState ,function to check the user either feel optimistic or not 

function checkState (state){ //the begining of function body 
while (state!="yes" || state!="no")
{if (state == 'yes')
 {
  alert ( "This is Amazing ^-^");break;}
 else if(state =='no') {
  alert("Here is 5 Ways To Be An Optimist During  Life Challenges");break;}
  else {
    state= prompt ('please type either yes or no  ' )
  }
  }
  }//the end of function body 

  // rating ,function to print stars as a rating 
  function rating(stars) {
 
for(var i=0;i<stars;i++)
{ document.write('<img src="https://www.jing.fm/clipimg/detail/1-14150_your-a-star-star-icon-png.png" width="30" height="30"/>')}
}

var userState = prompt("Are  you feel optimistic ,please type either yes or no ");

checkState(userState);//invoke checkState function

var userRate =prompt ('how many star rating would you give this content, 1-5?');
document.write(`<b><p> Your rating:  </p></b> `);
rating(userRate); //invoke rating function
