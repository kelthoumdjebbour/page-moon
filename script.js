const stars=document.getElementById("stars");
const moon=document.getElementById("moon");
const monte1=document.getElementById("monte1");
const monte2=document.getElementById("monte2");
const river=document.getElementById("river");
const boat=document.getElementById("boat");
const luna=document.getElementById("luna");
 const main=document.querySelector("man")

window.onscroll = function () {
    let value = scrollY;
   
 stars.style.left=value+"px";
 moon.style.top=value*2.5+"px";
 river.style.top=value*1.2+"px";
 boat.style.left=value*1.2+"px";
 boat.style.top=value+"px" 
 monte1.style.top=value*1+"px";
 monte2.style.top=value*1+"px" ;
 luna.style.fontSize=value+"px";
  luna.style.fontSize=value+"px";
  if(value>=60 ){
    luna.style.fontSize=60+"px";
    luna.style.position="fixed";
    if(value>=145){
        luna.style.display="none";
    }else{
        luna.style.display="block";
    }
    if(value>=100){
        main.style.background="linear-gradient(#376281,#10001f)";
    }

  }

}