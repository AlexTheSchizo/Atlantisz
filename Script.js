var tButton = document.getElementById("tridentButton");
var kButton = document.getElementById("keyButton");
var mainVid = document.getElementById("mainVideo");
var tridentVid = document.getElementById("tridentVideo");
var keyVid = document.getElementById("keyVideo");

var videoPaying = false;
var secondVideoStarted = false;
var tridentSelected = true;
var keySelected = true;

tButton.hidden = true;
kButton.hidden = true;
tridentVid.hidden = true;
keyVid.hidden= true;

tButton.onclick = function(){
    kButton.hidden = true;
    tridentSelected = true;
    keySelected = false;
}
kButton.onclick = function(){
    tButton.hidden = true;
    tridentSelected = false;
    keySelected = true;
}



mainVid.onclick = function(){
    if(!videoPaying)
    {
        setTimeout(function(){
            tButton.hidden = false;
            kButton.hidden = false;
          }, 26000);
        setTimeout(function(){
        if(tridentSelected)
        {
            tridentVid.hidden = false;
            tridentVid.style.opacity = 1;
            tridentVid.play();
        }
        else if(keySelected)
        {
            keyVid.hidden = false;
            keyVid.style.opacity = 1;
            keyVid.play();
        }
        }, 48000);
    }
    videoPaying = true;
    mainVid.play();
}

mainVid.onended = function() {
    tButton.hidden = true;
    kButton.hidden = true;    
};
