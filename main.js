const target = document.getElementById('target');
const parentHeight = document.getElementById('game').offsetHeight;
let parentWidth = document.getElementById('game').offsetWidth;
let targetHeight = document.getElementById('target').offsetHeight;
let targetWidth = document.getElementById('target').offsetWidth;
const score = document.getElementById("score");

let count =0;
let i=0;
    setInterval(()=>{
        if(i<10){
            let targetX = Math.random()*(parentWidth);
        let targetY = Math.random()*(parentHeight-100);
        target.style.position = "absolute";
        target.style.left = targetX+"px";
        target.style.top = targetY+"px";
        i++;
        } else{
            target.style.setProperty("display","none");
            if(count>=3){
                score.innerHTML = "Congratulations! You are eligible for 10% discount!!"
            } else{
                score.innerHTML = "Sorry! Refresh the page to try again!"
            }
        }
        
    },1500)    
        
                
const crosshair = document.getElementById('game');
const gunshot = document.getElementById('gunshot');


crosshair.addEventListener("click", (e)=>{

    console.log(count);

    const gunshotLeft = (e.offsetX-5);
    const gunshotTop = (e.offsetY-5);
    
    gunshot.style.position = "relative";
    gunshot.style.left= gunshotLeft+"px";
    gunshot.style.top = gunshotTop+"px";
    gunshot.style.setProperty('display','block');

    const shotPositionX = (e.x);
    const shotPositionY = (e.y);
    const targetPositionX = (target.getBoundingClientRect().left);
    const targetPositionY = (target.getBoundingClientRect().top);
    
    // console.log("shotposition X and Y = "+shotPositionX+" "+shotPositionY);
    // console.log("targetposition X and Y = "+targetPositionX+" "+targetPositionY);

    

    if((shotPositionX <= targetPositionX+20 && shotPositionY <= targetPositionY+20) && 
    
        (shotPositionX >= targetPositionX-20 && shotPositionY >= targetPositionY-20)) {
        console.log("It's a HIT!");
        count++;
        score.innerHTML = count;

    } else {
        console.log("It's a Miss!");
    }
    
    setTimeout(()=>{
        gunshot.style.setProperty('display','none');
    },300);

})
    





