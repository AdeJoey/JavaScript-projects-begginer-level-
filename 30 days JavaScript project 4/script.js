/* saving the elements into a container */
let lists = document.getElementsByClassName("list");
let leftContainer = document.getElementById("left");
let rightContainer = document.getElementById("right");

/* using a FOR loop to initialize functions*/
for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        /* drag and drop function for the right container */
        rightContainer.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightContainer.addEventListener("drop", function(e){
            rightContainer.appendChild(selected);//so the the list can be dropped inside the container
            selected = null;//so you can drag other lists
        });
        /* drag and drop function for the left container */
        leftContainer.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftContainer.addEventListener("drop", function(e){
            leftContainer.appendChild(selected);//so the the list can be dropped inside the container
            selected = null;//so you can drag other lists
        });
    })
}