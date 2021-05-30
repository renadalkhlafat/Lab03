alert("Welcome to my website")
// var age =prompt("please enter your age");
// if (age >=0 || age)

// var txt;
var r = prompt("Are  you feel optimistic ,please type either yes or no ");

while (r!="yes" || r!="no")
{if (r == 'yes')
 {
  alert ( "This is Amazing ^-^");break;}
 else if(r =='no') {
  alert("Here is 5 Ways To Be An Optimist During  Life Challenges");break;}
  else {
    r= prompt ('please type either yes or no  ' )
  }}
 

var rate =prompt ('how many star rating would you give this content, 1-5?');

for(var i=0;i<rate;i++)
{ document.write('<img src="https://www.jing.fm/clipimg/detail/1-14150_your-a-star-star-icon-png.png" width="30" height="30"/>')}
