// DEFINE DOM ELEMENTS
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
// const tr = document.querySelector("#grid__tr");
// const bl = document.querySelector("#grid__bl");
// const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
// const trBtn = document.querySelector("#grid__tr__btn");
// const blBtn = document.querySelector("#grid__bl__btn");
// const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
// const trContent = document.querySelector("#grid__tr__content");
// const blContent = document.querySelector("#grid__bl__content");
// const brContent = document.querySelector("#grid__br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// DEFINE COLOR AND POSITION
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translate(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translate(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translate(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translate(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// DEFINE CORNER THAT IS OPEN
let activeCorner = "";

// ADD EVENT LISTENER TO THE WINDOW OBJECT TO LISTEN FOR RESIZE EVENTS
window.addEventListener("resize", handleWindowResize);

// FUNCTION THAT HANDLES THE STYLING THE RESIZING WINDOW
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translate(0) translateY(0)";
        tlContent.style.transform = "translate(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
        // trBtn.style.zIndex = "100";
        // blBtn.style.zIndex = "100";
        // brBtn.style.zIndex = "100";
      } else {
        tlActive = "translate(5vw) translateY(0)";
        tlContent.style.transform = "translate(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
      }
      break;
    case "top-right":
      break;
    case "bottom-left":
      break;
    case "bottom-right":
      break;
    default:
      break;
  }
}

// STORE LAST REVERSE ANIMATION, READY TO BE PLAYED
let lastReverseAnimation = "";

// PLAY ANIMATION FUNCTION

function playAnimation(animation, reverseAnimation) {
  //  REMOVE ALL ANIMATION CLASSES FROM HERO IMAGE
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  // trBtn.innerHTML = "Experience"
  // blBtn.innerHTML = "Projects"
  // brBtn.innerHTML = "Contact"

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;
    // case "top-right":
    //   tlBtn.style.background = bgColor;
    //   tlBtn.style.color = textColor;
    //   tlContent.style.transform = tlHidden;
    //   break;
    // case "bottom-left":
    //   tlBtn.style.background = bgColor;
    //   tlBtn.style.color = textColor;
    //   tlContent.style.transform = tlHidden;
    //   break;
    // case "bottom-right":
    //   tlBtn.style.background = bgColor;
    //   tlBtn.style.color = textColor;
    //   tlContent.style.transform = tlHidden;
    //   break;

    default:
      break;
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(() => {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// ON CLICK CORNER BUTTON FUNCTION
tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    // playClosingAnimation("reverse-animate-top-left");
  } else {
    // trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";

    // SETTING THE ACTIVE CORNER
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    // handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");

    // CHANGE BACKGROUND COLOR
    // trBtn.style.background = bgColor;
    // brBtn.style.background = bgColor;
    // blBtn.style.background = bgColor;
    tlBtn.style.background = bgColorAlt;

    // CHANGE TEXT COLOR

    // trBtn.style.color = textColor;
    // brBtn.style.color = textColor;
    // blBtn.style.color = textColor;
    tlBtn.style.color = textColorAlt;

    // CHANGE POSITION OF CORNER CONTENT

    // trContent.style.transform = tlHidden;
    // brContent.style.transform = brHidden;
    // blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
  }
};

// trBtn.onclick = function () {
//   if (activeCorner === "top-right") {
//     playClosingAnimation("reverse-animate-top-right");
//   } else {
//     tlBtn.innerHTML = "About";
//     blBtn.innerHTML = "Projects";
//     brBtn.innerHTML = "Contact";

//     // SETTING THE ACTIVE CORNER
//     activeCorner = "top-right";
//     trBtn.innerHTML = "&uarr;<br/>Experience";

//     handleWindowResize();
//     playAnimation("animate-top-right", "reverse-animate-top-right");

//     // CHANGE BACKGROUND COLOR
//     trBtn.style.background = bgColorAlt;
//     brBtn.style.background = bgColor;
//     blBtn.style.background = bgColor;
//     tlBtn.style.background = bgColor;

//     // CHANGE TEXT COLOR

//     trBtn.style.color = textColorAlt;
//     brBtn.style.color = textColor;
//     blBtn.style.color = textColor;
//     tlBtn.style.color = textColor;

//     // CHANGE POSITION OF CORNER CONTENT

//     trContent.style.transform = tlActive;
//     brContent.style.transform = brHidden;
//     blContent.style.transform = blHidden;
//     tlContent.style.transform = tlHidden;
//   }
// };

// blBtn.onclick = function () {
//   if (activeCorner === "bottom-left") {
//     playClosingAnimation("reverse-animate-bottom-left");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     brBtn.innerHTML = "Contact";

//     // SETTING THE ACTIVE CORNER
//     activeCorner = "bottom-left";
//     blBtn.innerHTML = "Projects<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//     // CHANGE BACKGROUND COLOR
//     trBtn.style.background = bgColor;
//     brBtn.style.background = bgColor;
//     blBtn.style.background = bgColorAlt;
//     tlBtn.style.background = bgColor;

//     // CHANGE TEXT COLOR

//     trBtn.style.color = textColor;
//     brBtn.style.color = textColor;
//     blBtn.style.color = textColorAlt;
//     tlBtn.style.color = textColor;

//     // CHANGE POSITION OF CORNER CONTENT

//     trContent.style.transform = tlHidden;
//     brContent.style.transform = brHidden;
//     blContent.style.transform = blActive;
//     tlContent.style.transform = tlHidden;
//   }
// };

// brBtn.onclick = function () {
//   if (activeCorner === "bottom-right") {
//     playClosingAnimation("reverse-animate-bottom-right");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     blBtn.innerHTML = "Projects";

//     // SETTING THE ACTIVE CORNER
//     activeCorner = "bottom-right";
//     brBtn.innerHTML = "Contact<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//     // CHANGE BACKGROUND COLOR
//     trBtn.style.background = bgColor;
//     brBtn.style.background = bgColorAlt;
//     blBtn.style.background = bgColor;
//     tlBtn.style.background = bgColor;

//     // CHANGE TEXT COLOR

//     trBtn.style.color = textColor;
//     brBtn.style.color = textColorAlt;
//     blBtn.style.color = textColor;
//     tlBtn.style.color = textColor;

//     // CHANGE POSITION OF CORNER CONTENT

//     trContent.style.transform = tlHidden;
//     brContent.style.transform = brActive;
//     blContent.style.transform = blHidden;
//     tlContent.style.transform = tlHidden;
//   }
// };
