function openNav() {
        
hideIcons();
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

function hideIcons(){
        if(document.getElementById("sideNav").style.width == "" || document.getElementById("sideNav").style.width == "0px") return  document.getElementById("icons").style.opacity = "0"
        else return document.getElementById("icons").style.opacity = "1"
}
window.onscroll = function() {displayAbout()};

function displayAbout(){
        if(screen.width > 340 && screen.width < 740){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                        document.getElementById("about").style.opacity = "1"
                        document.getElementById("about").style.transform = "translate(0px,10px)"
            }
        }
        if(screen.width > 738){
                if(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
                                document.getElementById("about").style.opacity = "1"
                                document.getElementById("about").style.transform = "translate(0px,-30px)"
                        }
                }
                if(screen.width > 1000){
                        if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
                                        document.getElementById("about").style.opacity = "1"
                                        document.getElementById("about").style.transform = "translate(0px,-40px)"
                                }
                        }
} 



//scrolling effect
function scrollAbout(){
        window.scrollTo(0,200);
        closeNav();
}

function closeNav() {
        document.getElementById("sideNav").style.width = "0px";
        document.getElementById("icons").style.opacity = "1"
}

