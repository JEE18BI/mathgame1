var play=false;
var score;
var action;
var timeremaining;
var correctanswer;
document.getElementById("startreset").onclick= function (){
if (play==true){
location.reload();
}
else { //if we r not playing
play=true;
score=0;
document.getElementById("scorevalue").innerHTML= score;
show ("timeremaining");
timeremaining=60;
document.getElementById("startreset").innerHTML= "Reset game";
hide("gameover");
document.getElementById("timeremvalue").innerHTML= timeremaining;
//start countdown :

startCountdown();
   generateQA();
}

for(i=1;i<5;i++)
{
   document.getElementById("answer"+ i).onclick= function(){
      if (play== true){
         if (this.innerHTML== correctanswer){
            score++;
            document.getElementById("scorevalue").innerHTML= score;
            hide("wrong");
            show("correct");
            setTimeout(function(){hide("correct")},1000);
            generateQA();
         }
         else 
         {
            hide("correct");
            show("wrong");
            setTimeout(function(){hide("wrong")},1000);
   
         }
   
      }
   }
}


function startCountdown (){
   action = setInterval(function(){ timeremaining-=1
      document.getElementById("timeremvalue").innerHTML= timeremaining;
      //start countdown :
      if (timeremaining==0){
         //gameover
         stopcountdown();
           show("gameover")
         document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p>  <p>YOUR SCORE IS: "  + score + "</p>";
          hide("timeremaining");
          hide("correct");
          hide("wrong");
          play=false;
          document.getElementById("startreset").innerHTML= "Start Game";
      }
   },1000);

}
//stopcount
function stopcountdown(){
clearInterval(action);
}
//hidehaga
function hide(Id){
   document.getElementById(Id).style.display="none";
}
//showhaga
function show(Id){
   document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x = 1+ Math.round(9* Math.random());
    var y;
    y = 1+ Math.round(9* Math.random());
    correctanswer= x*y;
    document.getElementById("Question").innerHTML = x + "x" + y;
    var correctposition = 1+ Math.round(3* Math.random());
    document.getElementById ("answer"+correctposition).innerHTML = correctanswer;
    //fill 1 box with right answer
      var answers = [correctanswer];
    for (i=1;i<5;i++){
      if (i!=correctposition){
       var wronganswer;

      do{
         wronganswer= (1+ Math.round(9* Math.random()))*(1+ Math.round(9* Math.random()));
        
      }while(answers.indexOf(wronganswer)>-1)
      document.getElementById("answer"+i).innerHTML= wronganswer;
      answers.push(wronganswer);
      }
    }
}
}
