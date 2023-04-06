const target = document.getElementById('target');
const parentHeight = document.getElementById('game').offsetHeight;
let parentWidth = document.getElementById('game').offsetWidth;
// let parentMarginTop = Number(window.getComputedStyle(target).getPropertyValue("margin-top").replace("px",''))+450;
let parentMargin = window.getComputedStyle(target).getPropertyValue("margin-top");
let targetHeight = document.getElementById('target').offsetHeight;
let targetWidth = document.getElementById('target').offsetWidth;

    setInterval(()=>{
        let targetX = Math.random()*(parentWidth);
        let targetY = Math.random()*((parentHeight)-300);
        target.style.position = "absolute";
        target.style.left = targetX+"px";
        target.style.top = targetY+"px";
    },5000)    
        
                
const crosshair = document.getElementById('game');
const gunshot = document.getElementById('gunshot');

crosshair.addEventListener("click", (e)=>{

    const gunshotLeft = (e.offsetX-5);
    const gunshotTop = (e.offsetY-5);
    
    gunshot.style.position = "relative";
    gunshot.style.left= gunshotLeft+"px";
    gunshot.style.top = gunshotTop+"px";
    gunshot.style.setProperty('display','block');
    //crosshair.appendChild(gunshot);

    const shotPositionX = (e.x);
    const shotPositionY = (e.y);
    const targetPositionX = (target.getBoundingClientRect().left);
    const targetPositionY = (target.getBoundingClientRect().top);
    console.log("shotposition X and Y = "+shotPositionX+" "+shotPositionY);
    console.log("targetposition X and Y = "+targetPositionX+" "+targetPositionY);

    if((shotPositionX <= targetPositionX+20 && shotPositionY <= targetPositionY+20) && 
    
        (shotPositionX >= targetPositionX-20 && shotPositionY >= targetPositionY-20)) {
        console.log("It's a HIT!");
    } else {
        console.log("It's a Miss!");
    }
    
    setTimeout(()=>{
        gunshot.style.setProperty('display','none');
    },300);

})
    





