// -------------------------- Nav Bar


let svgBurger = document.querySelector('#svgBurger');
let nav = document.querySelector('.navInvisible');

svgBurger.addEventListener('click', function(){  
    if(nav.style.height == "0px"){
        nav.style.height = "200px"
    } else{
        nav.style.height = "0px"
    }    
})

// --------------------------Nav Bar