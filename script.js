/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log(localStorage.getItem("item"))

var mystring = "c$$$rt/ ​ ​20  02_2";
mystring = mystring.replace(' ​ ​','');

console.log(mystring)

console.log("Urban Street wear");

const hi = document.getElementById("div-manip");
const hi2 = document.getElementById("div-manip2");
const navThingy = document.querySelector(".navbar-manipulate");
const thinger = document.querySelector("html");
const navItems = document.querySelectorAll(".nav-link-manipulate");

function doTheThing(){
      let scroll = Number(this.scrollY);
    if (scroll >= 80) {
      scroll -= 80;
    } else {
      scroll = 0;
    }
  
    var navTextColor = 255 - scroll / 1.29;
    for (let index = 0; index < navItems.length; index++) {
      navItems[index].style.setProperty(        "--nav-link-color",        `rgb(${navTextColor},${navTextColor},${navTextColor})`
      );
    }
    hi.style.backgroundColor = `rgba(248,249,250,${(scroll * 1.89) / 1000})`;
    hi2.style.backgroundColor = `rgba(248,249,250,${(scroll * 1.89) / 1000})`;
    navThingy.style.setProperty(      "--opacity-manip",      String((scroll * 1.89) / 1000)    );
    navThingy.style.color = `rgb(${navTextColor},${navTextColor},${navTextColor})`;

}
document.body.onload = startingNOW;
function startingNOW() {
  doTheThing()
  window.addEventListener("scroll", (event) => {
    setInterval(doTheThing, 100);
  });
}

const thingie = document.querySelector(".items-btn");

// (function () {
//     console.log("Welcome to GeeksforGeeks!");
// })();

const setArray = () => {
  let itemsArray;
  if (localStorage.getItem("item") == null) {
    itemsArray = [];
  } else {
    itemsArray = JSON.parse(localStorage.getItem("item"));
  }
  return itemsArray;
};

const itemsArray = setArray();

const arrayLength = () => {
  let varSwitch;
  if (itemsArray.length > 9) {
    varSwitch = "9+";
  } else {
    varSwitch = `${itemsArray.length}`;
  }
  return varSwitch;
};
const NotiNum = document.querySelector(".CartNotiNum");

NotiNum.innerHTML = arrayLength();

// if(localStorage.getItem('todos') === null){
//         todos = [];
//     }else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     return todos;

const smt = document.querySelectorAll(".items-btn");

smt.forEach((item) => {
  item.addEventListener("click", function (event) {
    const parent = event.target.parentNode;
    const child = parent.querySelector(".card-title");
    const childPrice = parent.querySelector(".card-text");
    const cardTitle = child.innerHTML;
    const cardText = childPrice.innerHTML.replace(' ​ ​','').replace(/\s+/g, '');;
    
    
    itemsArray.push(cardTitle);
    console.log(cardTitle);
    NotiNum.innerHTML = arrayLength();
    console.log(cardText);
    localStorage.setItem("item", JSON.stringify(itemsArray));
    localStorage.setItem(cardTitle, cardText.slice(1, cardText.length));
    console.log(localStorage);
    console.log(localStorage.getItem("item"));
  });
});

function toSummary() {
  window.location.href = "./summary.html";
}

const loadingFinished = document.querySelector(".loading-screen");

loadingFinished.classList.add("loading-animation");

console.log(loadingFinished);
console.log(typeof this.scrollY);

const loadingStyle = document.createElement("style");

function removeLoadingScreen() {
  loadingStyle.innerHTML = `
  
  .loading-animation {
    display: none;
    color: black !important;
    animation: animateGlow 2.5s linear infinite;

  }
  
  
  
  .body {
    overflow-y: visible;
    position: absolute;
  }
  


  `;
  document.head.appendChild(loadingStyle);
}


const shoppingCart = document.querySelector(".shopping-cart")

shoppingCart.addEventListener('mouseenter', function(event) {
  console.log("hi")
})
const bodyyy = document.querySelector("body")
window.addEventListener('load', function(e) {
  removeLoadingScreen()
  bodyyy.classList.remove("no-scroll")
});


