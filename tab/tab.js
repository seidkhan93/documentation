
function tabFunction(evt, osType) {
    var i, tabs__content, tablabels;
    tabs__content = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabs__content.length; i++) {
        tabs__content[i].style.display = "none";
    }
    
   
    document.getElementById(osType).style.display = "block";


    

}   


