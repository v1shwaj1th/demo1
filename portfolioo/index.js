
var typed = new Typed("#element", {
    strings: ["Web Developer", "Public Speaker", "UX Design"],
    typeSpeed: 60,
  });

  
var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab");
}