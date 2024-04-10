// Create a whole bunch of pixel boxes

function createGrid(size) {
    document.querySelectorAll("div.pixel").forEach((pix) => pix.remove()); //Erase all pixel divs
for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
        let element = document.createElement('div');
        element.className = "horizontal";
        document.querySelector("div.space").appendChild(element);
        let element2 = document.createElement('div');
    element2.className = "pixel";
    element2.style.opacity = 0.1;
    element2.addEventListener('mouseover', function(pix) {
        if(pix.ctrlKey) {
            //Erase
            pix.target.style.opacity = 0.1;
        } else  if(pix.shiftKey) {
            //Do nothing
        } else {
        if(pix.target.style.opacity < 1) {
            pix.target.style.opacity = String(Number(pix.target.style.opacity) + 0.1);
        } else {
            //pix.target.style.opacity = 0; 
        }
    }
    });

    document.querySelectorAll("div.horizontal")[i].appendChild(element2);
    }
    

}
}

// select grid size
const selectElement = document.querySelector('select#gridSize'); 

// Add an event listener for the 'change' event
selectElement.addEventListener('change', (event) => {
  // This function will be called whenever the selected option changes
  const selectedValue = event.target.value; // Get the value of the selected option
  //console.log(`Selected value: ${selectedValue}`);
  createGrid(Number(selectedValue));
});

//Create initial grid
createGrid(32);

