// The developer thought the company is named Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp
// Text content in header h1 is wrong, should be Fruits & Vegetables Corp (see first issue) --------------- OK
let headTitle = document.querySelector("h1");
headTitle.textContent = "Fruits & Vegetables Corp";

// The last a tag in header ul has wrong text content and href attribute (should be Vegetables and not Bananas) --------------- OK
let aTag = document.createElement('a');
aTag.setAttribute('href',"yourlink.html");
aTag.innerHTML = "Vegetables";

let veggies = document.querySelectorAll("li");
for (let i = 0; i < veggies.length; i++){
  veggies[2].textContent = "";
  veggies[2].appendChild(aTag);
}

// The section #contact and #about are in the wrong order. Swap them --------------- OK
let main = document.querySelector('#main');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');

main.insertBefore(about, contact);

about.textContent = "";

// Each section should have a h2 tag at the top with corresponding text according to its id--------------- OK
let h2About = document.createElement("h2");
h2About.textContent = "About";
about.appendChild(h2About);

let h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
contact.appendChild(h2Contact);

contact.insertBefore(h2Contact, contact.querySelector("p"));

// The text "We're the best in fruits & vegetables" under #about should be wrapped in a p tag --------------- OK
let pTag = document.createElement('p');
about.appendChild(pTag);
pTag.textContent = ("We're the best in fruits & vegetables");
debugger;
// The developer used td elements in thead instead of th. Fix it. --------------- OK 
let replace = document.querySelectorAll("thead td");
for (let td of replace) {
  let thText = document.createElement("th");
  thText.textContent = td.textContent;
  td.replaceWith(thText);
}

// The developer forgot to include the main.css file. Add it to head --------------- OK
let headTag = document.querySelector('head');
let linkCSS = document.createElement('link');
linkCSS.setAttribute("rel", "stylesheet");
linkCSS.setAttribute("href", "main.css");
headTag.appendChild(linkCSS);

// Head title is wrong MDN info. Should be "Fruits & Vegetables Corp" --------------- OK
let titleTab = document.querySelector("title");
titleTab.textContent = "Fruits & Vegetables Corp";
