window.onload = function() {

    var daysUntilBrendanDasseyIsReleased = 10621;
    var container = document.querySelector(".container");
function everyDay(num) {
  for( let i = 0; i < num; i++){

    var newFootprintContainer = document.createElement("div");
    newFootprintContainer.className = "footprintContainer";
        
    var newFootprint = document.createElement("img");
    if (i % 2 == 0 ){
        newFootprint.src = "./images/leftfoot.jpg";
    } else {
        newFootprint.src = "./images/rightfoot.jpg";
    }
    

    
    
    newFootprintContainer.appendChild(newFootprint);
    

    container.insertBefore(newFootprintContainer, container.childNodes[0]);
  }
}

everyDay(60);




}