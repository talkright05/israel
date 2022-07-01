function trafficLight(color){
    if ( color === "red") {
        console.log("stop"); 

    } else if (color === 'Yellow') {
        console.log("ready");
         
    } else if (color === "Green" || color =="GREEN" || color == "Green") {
        console.log("go");
    }else{
        console.log("")
    }
    
}

trafficLight("Green")