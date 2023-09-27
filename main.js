var x=0;
var y=0;
var drawCircle="";
drawRect ="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function start (){
document.getElementById("status").innerHTML="o sitema esta ouvindo pode falar  ";
recognition.start();}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="fala foi reconheçida como :  "+content;
    if (content=="círculo"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="desenhando um circulo :  " ;
        drawCircle="set"
    }
    if (content=="retângulo"){
        x=Math.floor(Math.random()*900); 
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="desenhando um retangulo :  " ;
        drawRect="set"
    }
    }
function setup(){
    canvas=createCanvas(900,600)
}
function draw(){
    if (drawCircle=="set"){
        circle (x,y,50);
        drawCircle=""
    }
    if(drawRect=="set"){
        rect(x,y,50,70);
        drawRect="";
    }

}