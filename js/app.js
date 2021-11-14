// create the constructor
class Img {
    constructor(name, source) {
        this.name = name;
        this.source = source;
        this.clicks = 0;
        this.views = 0;
    }
}

// create the instances 
let aristotle = new Img("Aristotle", "./assets/Aristotle.jpg");
let confucius = new Img("Confucius", "./assets/confucius.jpg");
let davidHume = new Img("David Hume", "./assets/davidHume.jpg");
let immanuelKant = new Img("Immanuel Kant", "./assets/immanuelKant.jpg");
let jeanJacquesRousseau = new Img("jeanJacquesRousseau", "./assets/jeanJacquesRousseau.jpg");
let kierkegaard = new Img("kierkegaard", "./assets/kierkegaard.jpg");
let michelFoucault = new Img("michelFoucault", "./assets/michelFoucault.jpg");
let nietzsche = new Img("nietzsche", "./assets/nietzsche.jpg");
let plato = new Img("plato", "./assets/plato.jpg");
let ralphWaldoEmerson = new Img("ralphWaldoEmerson", "./assets/ralphWaldoEmerson.jpg");
let reneDescartes = new Img("reneDescartes", "./assets/reneDescartes.jpg");
let sartre = new Img("sartre", "./assets/sartre.jpg");
let socrates = new Img("socrates", "./assets/socrates.jpg");

// create the array of objects
let philosophers = [aristotle, confucius, davidHume, immanuelKant, jeanJacquesRousseau, kierkegaard, michelFoucault, nietzsche, plato, ralphWaldoEmerson, reneDescartes, sartre, socrates]


// define the images divs
let leftImage = document.querySelector(".left");
let midImage = document.querySelector(".mid");
let rightImage = document.querySelector(".right");

// Photo render
function randomPhoto (){
    let randomPhoto = `${philosophers[Math.random() * philosophers.length].source}`;
    return randomPhoto;
}

let currentLeft = `${aristotle.source}`;
let currentMid = `${confucius.source}`;
let currentRight = `${davidHume.source}`;

// photp checker
function photoChecker(){

   do {
        left = randomPhoto()
   } while (left === currentLeft || left === currentMid || left === currentRight)

   do {
     right = randomPhoto()
    } while (right === currentLeft || right === currentMid || right === currentRight)

    do {
    mid = randomPhoto()
    } while (mid === currentLeft || mid === currentMid || mid === currentRight)

    left = currentLeft;
    mid = currentMid;
    right = currentRight;

}


let img = document.createElement('img')
img.setAttribute('src', './assets/socrates.jpg')
leftImage.appendChild(img);
