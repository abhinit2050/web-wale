const target = document.getElementById('target');
const parentHeight = document.getElementById('game').offsetHeight;
let parentWidth = document.getElementById('game').offsetWidth;
let targetHeight = document.getElementById('target').offsetHeight;
let targetWidth = document.getElementById('target').offsetWidth;
const score = document.getElementById("score");
const API_KEY = "3143f0b04ad15903ebfd017139705fa4";
const API_url = "https://api.openweathermap.org/data/2.5/weather?lat=12.97&lon=77.59&appid=3143f0b04ad15903ebfd017139705fa4";

const CLIENT_ID = "1000.4QMUW3D57X2QCYNE3YHQGBU2C9XQXO";
const CLIENT_SECRET = "920764574f635a8a2e5688ab32cd814b3c73c7936c";

const zohoUrl = "https://accounts.zoho.com/oauth/v2/auth?client_id=1000.4QMUW3D57X2QCYNE3YHQGBU2C9XQXO&scope=ZohoCRM.settings.ALL&redirect_uri=https://www.web-wale.com&response_type=code&access_type=offline"

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
    

// const authBtn = document.getElementById("auth-btn");
// const apiBtn = document.getElementById('api-btn');

// const headers = {
//     'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin":"*",
//     Authorization:'Zoho-oauthtoken 1000.04e576dba9cae1ff25c1eb42b08f05ef.dd1fbb29a7deeb25648d13cdfef9df21'
//   };
//     console.log(authBtn);

//     authBtn.addEventListener("click",()=>{
       
//         console.log("Clicked");
//        var newWindow =  window.open(zohoUrl, "accept_window");
   
//      })

//      const zohoAPIurl = 'https://www.zohoapis.com/crm/v3/settings/modules';
//      const access_token="";
//      //const refreshTokenURL = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.c0d19e04d884a1a530aec18662ebf758.6dd450c15c4ffa6ec264c2af5bda12f2&client_id=1000.4QMUW3D57X2QCYNE3YHQGBU2C9XQXO&client_secret=920764574f635a8a2e5688ab32cd814b3c73c7936c&grant_type=refresh_token'

//      apiBtn.addEventListener('click',()=>{
        
//         const headers = {
//             'Content-Type': 'application/json',
//             "Access-Control-Allow-Origin":"*",
//             Authorization:'Zoho-oauthtoken 1000.04e576dba9cae1ff25c1eb42b08f05ef.dd1fbb29a7deeb25648d13cdfef9df21'
//           };
        

//         axios.get(zohoAPIurl,headers).then(
//             (response) =>{
//                 console.log("call successfull");
//                 console.log(response);
//                           }
//         ).catch(error => console.log(error))
//      })


    
