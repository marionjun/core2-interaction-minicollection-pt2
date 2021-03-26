// let myMessage = document.querySelector(".message"); 
// console.log(myMessage);

// myMessage.innerText = "I can change this text using javascript";

// myMessage.style.color = "#6c0";
// myMessage.style.marginTop = "200px";

// myMessage.classList.add("big");


//title

let newMessage = document.createElement("h1");
newMessage.classList.add("new-message");

newMessage.innerText = "Disney Movies";
document.querySelector(".container").append(newMessage);

newMessage.style.color = "#FFFF";
newMessage.style.margin = "490px";
newMessage.style.marginTop = "80px";
newMessage.style.marginBottom = "0px";
newMessage.style.fontSize = "60px";


// let newImage = document.createElement("img");
// newImage.classList.add("new-image");
// newImage.src = "./assets/cinderella.jpeg";

// document.querySelector(".container").append(newImage);


//1. cinderella
let cinderella = document.createElement("h2");
cinderella.classList.add("cinderella");

cinderella.innerText = "1";
document.querySelector(".container").append(cinderella);

// let newButton = document.querySelector(".new-button");
cinderella.addEventListener("click", function(){

    let newImage = document.createElement("img");
    newImage.classList.add("new-image");
    newImage.src = "./assets/cinderella.jpeg";
    newImage.style.width = "300px";
    newImage.style.top = "-20rem";
    newImage.style.position = "relative";

    document.querySelector(".container").append(newImage);
})
cinderella.style.color = "rgb(197, 146, 255)";
cinderella.style.fontSize = "70px";
cinderella.style.marginTop = "60px";
cinderella.style.marginLeft = "120px";
cinderella.style.marginBottom = "0px";


//2. alice in wonderland
let alice = document.createElement("h2");
alice.classList.add("alice");

alice.innerText = "2";
document.querySelector(".container").append(alice);

// let newButton = document.querySelector(".new-button");
alice.addEventListener("click", function(){

    let newImageTwo = document.createElement("img");
    newImageTwo.classList.add("new-image-two");
    newImageTwo.src = "./assets/aliceinwonderland.jpeg";
    newImageTwo.style.width = "300px";
    newImageTwo.style.position = "relative";
    newImageTwo.style.left = "17rem";
    newImageTwo.style.top = "-20rem";
    
    document.querySelector(".container").append(newImageTwo);
})
alice.style.color = "rgb(197, 146, 255)";
alice.style.fontSize = "70px";
alice.style.top = "-8.5rem";
alice.style.marginLeft = "700px";
alice.style.position = "relative";


//3. little mermaid
let mermaid = document.createElement("h2");
mermaid.classList.add("mermaid");

mermaid.innerText = "3";
document.querySelector(".container").append(mermaid);

// let newButton = document.querySelector(".new-button");
mermaid.addEventListener("click", function(){

    let newImageThree = document.createElement("img");
    newImageThree.classList.add("new-image-two");
    newImageThree.src = "./assets/littlemermaid.jpeg";
    newImageThree.style.width = "300px";
    newImageThree.style.position = "relative";
    newImageThree.style.left = "34rem";
    newImageThree.style.top = "-20rem";
    
    document.querySelector(".container").append(newImageThree);
})
mermaid.style.color = "rgb(197, 146, 255)";
mermaid.style.fontSize = "70px";
mermaid.style.top = "-17.2rem";
mermaid.style.marginLeft = "1260px";
mermaid.style.position = "relative";
