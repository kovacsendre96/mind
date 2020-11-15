let randomNpc=50;
let randomPlayer=10;
let message=document.getElementById("message");
let level=document.getElementById("levelSpan");
let health=document.getElementById("healthSpan");
lv=1;
hp=2;
level.innerHTML=lv;
health.innerHTML=hp;


function cards(){
let npcCard=document.getElementById("npcCardSpan");
let playerCard=document.getElementById("playerCardsSpan");

npcCard.innerHTML=randomNpc;
playerCard.innerHTML=randomPlayer;

}

function usingTheCard(){

 if(randomNpc>randomPlayer){

   alert( message.innerHTML="jó döntés")
    
   
 }
 else{
   health.innerHTML=hp-1;
   alert( message.innerHTML="rossz döntés")

   }

} 

function passingTheCard(){

   if(randomNpc<randomPlayer){

     alert( message.innerHTML="jó döntés")
      
     
   }
   else{
      health.innerHTML=hp-1;
      alert( message.innerHTML="rossz döntés")
     }
}



