// Sidebar/Menu
document.getElementById('btn-toggle').addEventListener('click',()=>{
    document.querySelector('#mySidebar').classList.add('active')
    document.querySelector('#myOverlay').classList.add('active')
})

document.getElementById('remove-active').addEventListener('click',()=>{
    document.querySelector("#mySidebar").classList.remove('active')
    document.querySelector('#myOverlay').classList.remove('active')
})

document.getElementById('myOverlay').addEventListener('click',()=>{
    document.querySelector('.overlay-effect').classList.remove('active')
    document.querySelector('#mySidebar').classList.remove('active')
})


// Slideshow/Header
let slideIndex=1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex+=n)
}

function currentDiv(n){
    showDivs(slideIndex=n)
}

function showDivs(n){
    let i;
    let x=document.getElementsByClassName('mySlides');
    let dots=document.getElementsByClassName('demo');
    if(n>x.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=x.length
    }
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("opacity-off","");
    }
    x[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+="opacity-off";
}

//Subscribe/Modal
document.getElementById('modal-remove').addEventListener('click',()=>{
    document.querySelector('#subscribe').style.display="none";
})

