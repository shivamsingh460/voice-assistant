$(document).ready(function () {
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in:{
            effect:"fadeInUp",
            sync: true,
        },
        out:{
            effect:"fadeOutUp",
            sync: true,
        },
    })
});
//siri message animation above


//siri configuration
var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 200,
    style: "ios9",
    amplitude: "1",
    speed:"0.10",
    autostart: true
  });


//mic button click function

$("#micbtn").click(function () { 
    eel.playAssistantSound()
    
    $("#Oval").attr("hidden", true);
   $("#SiriWave").attr("hidden", false);
   eel.allCommands()()
});  

