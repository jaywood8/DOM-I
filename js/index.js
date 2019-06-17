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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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

const navText = document.querySelectorAll("header nav a");
navText[0].textContent = siteContent["nav"]["nav-item-1"];
navText[1].textContent = siteContent["nav"]["nav-item-2"];
navText[2].textContent = siteContent["nav"]["nav-item-3"];
navText[3].textContent = siteContent["nav"]["nav-item-4"];
navText[4].textContent = siteContent["nav"]["nav-item-5"];
navText[5].textContent = siteContent["nav"]["nav-item-6"];

const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = "DOM<br> Is<br> Awesome";

const btnText = document.querySelector(".cta-text button");
btnText.textContent = siteContent["cta"]["button"];
// document.querySelector(".cta-text h1").style.whiteSpace = 'pre';

const featuresHeader = document.querySelectorAll("h4");
featuresHeader.textContent[0] = siteContent["main-content"]["features-h4"];
