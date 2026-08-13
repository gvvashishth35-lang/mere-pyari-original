/*==================================================
            MUSIC PLAYER
==================================================*/

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function(){

    if(bgMusic.paused){
        bgMusic.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    }
    else{
        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});


/*==================================================
            COUNTDOWN
==================================================*/

const birthday = new Date("August 14, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        clearInterval(countdown);

        document.getElementById("timer").innerHTML = `

        <h2 style="width:100%;color:#fff;">
        🎉 Happy Birthday Mere Dublicate ❤️ 🎂
        </h2>

        `;

        fireworks();

        return;

    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

},1000);


/*==================================================
            GIFT BUTTON
==================================================*/

const giftBtn = document.getElementById("giftBtn");

const giftMessage = document.getElementById("giftMessage");

giftBtn.addEventListener("click",()=>{

    giftMessage.style.display="block";

    giftMessage.style.animation="fadeIn .8s ease";

    giftBtn.innerHTML="💖 Surprise Opened";

});


/*==================================================
            BLOW CANDLE
==================================================*/

const blowBtn = document.getElementById("blowBtn");

const flame = document.querySelector(".flame");

if(blowBtn){

    blowBtn.addEventListener("click",()=>{

        /* Flame Off */

        flame.style.display="none";

        /* Button */

        blowBtn.innerHTML="🎉 Wish Made";

        blowBtn.disabled=true;

        /* Smoke */

        createSmoke();

        /* Hearts */

        createHearts();

        /* Fireworks */

        fireworks();

        /* Popup */

        setTimeout(()=>{

            alert("🎂 Happy Birthday Mere Dublicate ❤️");

        },800);

    });

}

/*==================================================
            FLOATING HEARTS
==================================================*/

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (18 + Math.random() * 22) + "px";

        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

}


/*==================================================
            FIREWORKS
==================================================*/

function fireworks() {

    for (let i = 0; i < 25; i++) {

        const spark = document.createElement("div");

        spark.className = "firework";

        spark.innerHTML = "✨";

        spark.style.left = "50%";

        spark.style.top = "45%";

        spark.style.fontSize = (18 + Math.random() * 20) + "px";

        spark.style.setProperty("--x", (Math.random() * 500 - 250) + "px");

        spark.style.setProperty("--y", (Math.random() * 400 - 200) + "px");

        document.body.appendChild(spark);

        setTimeout(() => {

            spark.remove();

        }, 2200);

    }

}


/*==================================================
            SMOKE EFFECT
==================================================*/

function createSmoke() {

    const cake = document.querySelector(".birthday-cake");

    if (!cake) return;

    for (let i = 0; i < 10; i++) {

        const smoke = document.createElement("div");

        smoke.className = "smoke";

        smoke.style.left = (100 + Math.random() * 20 - 10) + "px";

        smoke.style.animationDelay = (i * 0.15) + "s";

        cake.appendChild(smoke);

        setTimeout(() => {

            smoke.remove();

        }, 3500);

    }

}


/*==================================================
            SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(

".hero,.cake,.countdown,.gallery,.gift,.letter"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

revealItems.forEach((item)=>{

    observer.observe(item);

});


/*==================================================
            GALLERY ANIMATION
==================================================*/

const photos=document.querySelectorAll(".photos img");

photos.forEach((photo)=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.05) rotate(1deg)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1) rotate(0deg)";

    });

});


/*==================================================
            AUTO FIREWORKS
==================================================*/

setTimeout(()=>{

    fireworks();

},2500);

/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
            GALLERY LIGHTBOX
==================================================*/

const galleryImages=document.querySelectorAll(".photos img");

galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="lightbox";

        const image=document.createElement("img");

        image.src=img.src;

        image.alt=img.alt;

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*==================================================
            MUSIC VOLUME FADE
==================================================*/

music.volume=.5;

music.addEventListener("play",()=>{

    let volume=.5;

    const fade=setInterval(()=>{

        if(volume>=1){

            clearInterval(fade);

        }else{

            volume+=0.05;

            music.volume=volume;

        }

    },150);

});


/*==================================================
            KEYBOARD SUPPORT
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        musicBtn.click();

    }

    if(e.key==="Escape"){

        const lightbox=document.querySelector(".lightbox");

        if(lightbox){

            lightbox.remove();

        }

    }

});


/*==================================================
            PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener("resize",()=>{

    clearTimeout(window.resizeTimer);

    window.resizeTimer=setTimeout(()=>{

        console.log("Layout Updated");

    },250);

});


/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log("%c🎂 Happy Birthday Website Loaded ❤️",

"color:#ff1493;font-size:20px;font-weight:bold;");

