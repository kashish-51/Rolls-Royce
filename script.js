// for varing text 

var typed = new Typed(".multiple-text" , {
    strings:["Rolls Royes"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
})

//to show content in about section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {                                                   //defining a function and passing a parameter 
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (let i = 0; i < tabcontents.length; i++) {         //This ensures that any previously active tab link or content becomes inactive.
        tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")                            //to display the underline below  heading when clicked
    document.getElementById(tabname).classList.add("active-tab")                //to display the content below  heading when clicked
}


//for menu bar


var sideMenu = document.getElementById("sidemenu")
function openmenu(){
    sideMenu.style.right="0"                                    // whenever right is 0 it will show menu
}
function closemenu(){
    sideMenu.style.right="-200px"                                    // whenever right is -200 it will close menu
}



var tl= gsap.timeline()
tl.from("#anime, #sidemenu li",{
    y: -80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
}
)

tl.from(" #motion,span",{
    x:500,
    opacity:0,
    duration:0.5,
    stagger:0.4
})

//rolls royce
gsap.to("#page1 h1", {
transform:"translateX(-100%)",
fontWeight:("100"),
scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    start:"top 0",
    end:"top -700%",
scrub:2,
pin:true
}
})
//galary
tl= gsap.timeline({scrollTrigger:{
    trigger:"#gallary",
   
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}})

tl
.to("#top",{  
    top:"-50%"
},'a')  // same name is given to trigger both of them at the same time
.to("#bottom",{
    bottom:"-50%"
},'a')
//to make them look like going behind the slides

.to("#top-h",{
    top:"70%"
},'a')
.to("#bottom-h",{
    bottom:"-70%"
},'a')
.to("#content",{
   marginTop:"0%" 
})