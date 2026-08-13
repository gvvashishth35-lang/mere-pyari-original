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
        🎉 Happy Birthday Mere <!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="A Beautiful Birthday Surprise Website Made With Love ❤️">

    <meta name="theme-color" content="#ff1493">

    <meta name="robots" content="index, follow">

    <title>🎂 Happy Birthday Mere Original ❤️</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
        rel="stylesheet">

</head>

<body>


    <!-- ================= MUSIC ================= -->

    <div class="music-wrapper">

    <audio id="bgMusic" loop preload="auto">
        <source src="birthday-song.mp3" type="audio/mpeg">
    </audio>

    <button id="musicBtn">🎵 Play Music</button>

</div>


    <!-- ================= BALLOONS ================= -->

    <div class="balloons">

        <span>🎈</span>

        <span>🎈</span>

        <span>🎈</span>

        <span>🎈</span>

        <span>🎈</span>

        <span>🎈</span>

    </div>



    <main>



        <!-- ================= HERO ================= -->

        <section class="hero">

            <div class="hero-content">

                <h3>✨ 14 AUgust 2026 ✨</h3>

                <h1>Happy Birthday</h1>

                <h2>Mere Original ❤️</h2>

                <p>

                    Wishing you endless happiness,
                    beautiful memories,
                    success, good health and lots of love.
                    May all your dreams come true.

                </p>

                <a href="#cake" class="hero-btn">

                    🎂 Make A Beautiful Wish

                </a>

            </div>

        </section>

                <!-- ================= CAKE SECTION ================= -->

        <section class="cake" id="cake">

            <h2>🎂 Make A Beautiful Wish ❤️</h2>

            <div class="birthday-cake">

                <div class="plate"></div>

                <div class="layer1"></div>

                <div class="layer2"></div>

                <div class="layer3"></div>

                <div class="cream"></div>

                <div class="cherry1"></div>

                <div class="cherry2"></div>

                <div class="cherry3"></div>

                <div class="candle">

                    <div class="flame"></div>

                </div>

            </div>

            <button id="blowBtn">

                🕯️ Blow Candle

            </button>

        </section>



        <!-- ================= COUNTDOWN ================= -->

        <section class="countdown">

            <h2>⏳ Countdown</h2>

            <p class="section-text">

                Every second brings us closer to your special day ❤️

            </p>

            <div id="timer">

                <div>

                    <span id="days">00</span>

                    <p>Days</p>

                </div>

                <div>

                    <span id="hours">00</span>

                    <p>Hours</p>

                </div>

                <div>

                    <span id="minutes">00</span>

                    <p>Minutes</p>

                </div>

                <div>

                    <span id="seconds">00</span>

                    <p>Seconds</p>

                </div>

            </div>

        </section>



        <!-- ================= GALLERY ================= -->

        <section class="gallery">

            <h2>📸 Beautiful Memories</h2>

            <p class="section-text">

                Every picture tells a beautiful story together.

            </p>

            <div class="photos">

                <img src="photo1.jpg.jpeg"
                     alt="Beautiful Memory 1"
                     loading="lazy">

                <img src="photo2.jpg.jpeg"
                     alt="Beautiful Memory 2"
                     loading="lazy">

                <img src="photo3.jpg.jpeg"
                     alt="Beautiful Memory 3"
                     loading="lazy">

                <img src="images/photo4.jpg.jpeg"
                     alt="Beautiful Memory 4"
                     loading="lazy">

                <img src="photo5.jpg.jpeg"
                     alt="Beautiful Memory 5"
                     loading="lazy">

                <img src="photo6.jpg.jpeg"
                     alt="Beautiful Memory 6"
                     loading="lazy">

                <img src="photo7.jpg.jpeg"
                     alt="Beautiful Memory 7"
                     loading="lazy">

                <img src="photo8.jpg.jpeg"
                     alt="Beautiful Memory 8"
                     loading="lazy">

            </div>

        </section>

                <!-- ================= GIFT SECTION ================= -->

        <section class="gift">

            <h2>🎁 Special Surprise</h2>

            <p class="section-text">

                A small surprise made with lots of love ❤️

            </p>

            <button id="giftBtn">

                Open Gift 🎁

            </button>

            <div id="giftMessage">

                <h3>💖 Happy Birthday Mere Original 💖</h3>

                <p>

                    May your smile always stay beautiful,
                    your dreams come true,
                    and your life be filled with happiness,
                    success and endless love.

                </p>

            </div>

        </section>



        <!-- ================= LETTER ================= -->

        <section class="letter">

            <h2>💌 A Letter For You</h2>

            <div class="letter-box">

                <p>
    Chand, sitare, phool, parinde,<br>
    Shaam savera ek taraf…<br><br>

    Duniya ke saare haseen manzar,<br>
    Sabka jadoo ek taraf…<br><br>

    Tera hasna, teri baatein,<br>
    Tera chehra ek taraf…<br><br>

    Dil ke har ek khwaab se badhkar,<br>
    Tera hona ek taraf…!!<br><br>

    Tu paas ho to har lamha<br>
    Jaise jannat sa lagta hai…<br>

    Tere bina ye dil mera<br>
    Adhoora sa lagta hai…<br><br>

    Tu keh de to chaand sitare<br>
    Zameen par laa doon…<br>

    Teri ek muskaan ke liye<br>
    Khud ko bhi mita doon… ❤️
</p>

            </div>

        </section>

    </main>



    <!-- ================= FOOTER ================= -->

    <footer>

        <p>

            Made With ❤️ By
            <strong>Geetika Vashishtha</strong>

        </p>

    </footer>



    <!-- ================= JAVASCRIPT ================= -->

    <script src="script.js"></script>

</body>

</html>

 ❤️ 🎂
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

