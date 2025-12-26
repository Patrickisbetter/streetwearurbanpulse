let counter = 0;

$("#newsline"+` p:nth-child(${counter+1})`) .css("opacity", "1")
                                            .css("transform", "translate(-100%)");
$("#newsline").on("transitionend", (event) => {
    if ($(event.target).get()[0]==$("#newsline"+` p:nth-child(${counter+1})`).get()[0]) {
        
    
    $("#newsline"+` p:nth-child(${counter+1})`) .css("opacity", "0")
                                                .css("transform", "translate(100vw)");
    counter++;
    counter%=3;
    $("#newsline"+` p:nth-child(${counter+1})`) .css("opacity", "1")
                                                .css("transform", "translate(-100%)");
    }
    console.log();
});

//$("#newsline").children()

$("#inspo > h1").css("background-position-y", "100%")
$("#inspo > h1").on("transitionend", (event) => {
    if ($("#inspo > h1").css("background-position-y") == "0%") {
        $("#inspo > h1").css("background-position-y", "100%")
    } else {
        $("#inspo > h1").css("background-position-y", "0%")
    }
})