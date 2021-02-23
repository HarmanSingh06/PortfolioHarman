function openNav() {
if(screen.width > 340 && screen.width < 740){
    if (document.getElementById("sideNav").style.width == "" || document.getElementById("sideNav").style.width == "0px") return document.getElementById("sideNav").style.width = "200px";  
    else return closeNav()
}

if(screen.width > 1000){
        if (document.getElementById("sideNav").style.width == "" || document.getElementById("sideNav").style.width == "0px") return document.getElementById("sideNav").style.width = "350px";  
        else return closeNav()
}
console.log()
if(screen.width > 738){
        if (document.getElementById("sideNav").style.width == "" || document.getElementById("sideNav").style.width == "0px") return document.getElementById("sideNav").style.width = "270px";  
        else return closeNav()
}
}
// document.addEventListener('click', closeNav)
function closeNav() {
        document.getElementById("sideNav").style.width = "0px"
}
