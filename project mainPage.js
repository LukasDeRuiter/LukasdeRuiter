document.getElementById('theCircle').addEventListener('click', function(){
  document.getElementById('displacement').setAttribute('scale', '100');
})
 
let star_speed = 0.005;
let starAmount = 200;
let starSize = 0.005;
let stars = [];
let darkSpacePurple = "#3e0458a2";

const canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);


let color_space = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
color_space.addColorStop(0, "black");
color_space.addColorStop(1, `${darkSpacePurple}`); 
let color_stars = "white";
let timeDelta, timeLast = 0;
let starSpeed = star_speed * canvas.width;
let xv = starSpeed * randomSign() * Math.random();
let yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();

for(let i = 0; i < starAmount; i++){
    speedMult = Math.random() * 1.5 + 0.5;
    stars[i] = {
     r: Math.random() * starSize * canvas.width / 2,
     x: Math.floor(Math.random() * canvas.width),
     y: Math.floor(Math.random() * canvas.height),
     xv: xv * speedMult,
     yv: yv * speedMult
}};

requestAnimationFrame(loop);
function loop(timeNow){
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;
    ctx.fillStyle = color_space;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color_stars;
    for(let i = 0; i < starAmount; i++){
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();

        stars[i].x += stars[i].xv * timeDelta * 0.001;
        if(stars[i].x < 0 - stars[i].r){
            stars[i].x = canvas.width + stars[i].r;
        }
        else if(stars[i].x > canvas.width + stars[i].r){
            stars[i].x = 0 - stars[i].r;
        }
        stars[i].y += stars[i].yv * timeDelta * 0.001;

    if(stars[i].y < 0 - stars[i].r){
        stars[i].y = canvas.height + stars[i].r;
    }
    else if(stars[i].y > canvas.height + stars[i].r){
        stars[i].y = 0 - stars[i].r;
    }}
    requestAnimationFrame(loop);

}

function randomSign(){
    return Math.random() >= 0.5 ? 1 : -1;
} 

let chosenPage = 0;
let selected = false;
let aboutMe = document.getElementById('aboutMeID');
let portfolio = document.getElementById('portfolioID');
let contact = document.getElementById('contactID');
let notContainers = document.getElementById('notContainersID');

document.getElementById('planet1ID').addEventListener('click', function(){
    if(selected == false){
    aboutMe.style.display = "grid";
    aboutMe.style.animation = "appearing 2s 1";
    aboutMe.onanimationend = function(){
        aboutMe.style.display = "grid";
    }
    chosenPage = 1;
    selected = true;
    }

    else if(chosenPage != 1 && selected == true){
    aboutMe.style.display = "grid";
    aboutMe.style.animation = "appearing 2s 1";
    aboutMe.onanimationend = function(){
        aboutMe.style.display = "grid";
    }
    portfolio.style.animation = "disappearing 1s 1";
    portfolio.onanimationend = function(){
        portfolio.style.display = "none";
    }
    contact.style.animation = "disappearing 1s 1";
   contact.onanimationend = function(){
       contact.style.display = "none";
    }
    chosenPage = 1;
    }
    else if(chosenPage == 1 && selected == true){
        aboutMe.style.animation = "disappearing 1s 1";
        aboutMe.onanimationend = function(){
            aboutMe.style.display = "none";
        }
        portfolio.style.animation = "disappearing 1s 1";
        portfolio.onanimationend = function(){
            portfolio.style.display = "none";
        }
        contact.style.animation = "disappearing 1s 1";
        contact.onanimationend = function(){
            contact.style.display = "none";
         }
        selected = false;
    }
})

document.getElementById('planet2ID').addEventListener('click', function(){
    if(selected == false){
        portfolio.style.display = "flex";
        portfolio.style.animation = "appearing 2s 1";
        portfolio.onanimationend = function(){
            portfolio.style.display = "flex";
        }
        chosenPage = 2;
        selected = true;
        }
        else if(chosenPage != 2 && selected == true){
        portfolio.style.display = "flex";
        portfolio.style.animation = "appearing 2s 1";
        portfolio.onanimationend = function(){
            portfolio.style.display = "flex";
        }
        aboutMe.style.animation = "disappearing 1s 1";
        aboutMe.onanimationend = function(){
            aboutMe.style.display = "none";
        }
        contact.style.animation = "disappearing 1s 1";
        contact.onanimationend = function(){
            contact.style.display = "none";
         }
        }
        else if(chosenPage == 2 && selected == true){
            aboutMe.style.animation = "disappearing 1s 1";
            aboutMe.onanimationend = function(){
                aboutMe.style.display = "none";
            }
            portfolio.style.animation = "disappearing 1s 1";
            portfolio.onanimationend = function(){
                portfolio.style.display = "none";
            }
            contact.style.animation = "disappearing 1s 1";
            contact.onanimationend = function(){
                contact.style.display = "none";
             }
            selected = false;
        }
})

document.getElementById('planet3ID').addEventListener('click', function(){
    if(selected == false){
        contact.style.display = "flex";
        contact.style.animation = "appearing 2s 1";
        contact.onanimationend = function(){
            contact.style.display = "flex";
        }
        chosenPage = 3;
        selected = true;
        }
        else if(chosenPage != 3 && selected == true){
        contact.style.display = "flex";
        contact.style.animation = "appearing 2s 1";
        contact.onanimationend = function(){
            contact.style.display = "flex";
        }
        aboutMe.style.animation = "disappearing 1s 1";
        aboutMe.onanimationend = function(){
            aboutMe.style.display = "none";
        }
        portfolio.style.animation = "disappearing 1s 1";
        portfolio.onanimationend = function(){
            portfolio.style.display = "none";
        }
        chosenPage = 3;
        }
        else if(chosenPage == 3 && selected == true){
            aboutMe.style.animation = "disappearing 1s 1";
            aboutMe.onanimationend = function(){
                aboutMe.style.display = "none";
            }
            portfolio.style.animation = "disappearing 1s 1";
            portfolio.onanimationend = function(){
                portfolio.style.display = "none";
            }
            contact.style.animation = "disappearing 1s 1";
            contact.onanimationend = function(){
                contact.style.display = "none";
             }
            selected = false;
        }
})