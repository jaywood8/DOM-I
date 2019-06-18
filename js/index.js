const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute("src", siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//Updating Nav content
let navText = document.querySelectorAll("header nav a");
navText[0].textContent = siteContent["nav"]["nav-item-1"];
navText[1].textContent = siteContent["nav"]["nav-item-2"];
navText[2].textContent = siteContent["nav"]["nav-item-3"];
navText[3].textContent = siteContent["nav"]["nav-item-4"];
navText[4].textContent = siteContent["nav"]["nav-item-5"];
navText[5].textContent = siteContent["nav"]["nav-item-6"];

//Turn nav text to green
// navText[0].style.color = "green";
// navText[1].style.color = "green";
// navText[2].style.color = "green";
// navText[3].style.color = "green";
// navText[4].style.color = "green";
// navText[5].style.color = "green";

//Trying for loop to assign nav text
// Array.from(navText).map((i) => {
//   navText[i].textContent = siteContent["nav"]["key"];
// })




//Updating CTA
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

//Button
const btnText = document.querySelector(".cta-text button");
btnText.textContent = siteContent["cta"]["button"];
document.querySelector(".cta-text h1").style.whiteSpace = 'pre';


//Main Content Headers
const topContentHeaders = document.querySelectorAll(".text-content h4");
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
topContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
topContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
topContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

//Main Content Paras
const topContentText = document.querySelectorAll(".text-content p");
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];
topContentText[2].textContent = siteContent["main-content"]["services-content"];
topContentText[3].textContent = siteContent["main-content"]["product-content"];
topContentText[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].textContent = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];
contactText[0].style.whiteSpace = 'pre-line';

//Footer
const footerText = document.querySelectorAll("footer");
footerText[0].textContent = siteContent["footer"]["copyright"];

//Pre-Appending Items
let newNavNode1 = document.createElement("a");                 
let newNavText1 = document.createTextNode("Appended Item");         
newNavNode1.appendChild(newNavText1);                              
document.querySelector("nav").appendChild(newNavNode1);  

let newNavNode2 = document.createElement("a");                 
let newNavText2 = document.createTextNode("Prepended Item");         
newNavNode2.prepend(newNavText2);                              
document.querySelector("nav").prepend(newNavNode2);  

//Testing...
// console.log(newNavNode1);
// console.log("these are the a tags", document.querySelector("a"))
// console.log("these are the nav tags", document.querySelector("nav"))


//Using  forLoop to turn nav items green

navText.forEach((link) => {
  link.style.color = "green";
})
