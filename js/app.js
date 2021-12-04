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

// create an array for the votes and the views

let philosophersVotes = [aristotle.clicks, confucius.clicks, davidHume.clicks, immanuelKant.clicks, jeanJacquesRousseau.clicks, kierkegaard.clicks, michelFoucault.clicks, nietzsche.clicks, plato.clicks, ralphWaldoEmerson.clicks, reneDescartes.clicks, sartre.clicks, socrates.clicks]; 

let philosophersViews = [aristotle.views, confucius.views, davidHume.views, immanuelKant.views, jeanJacquesRousseau.views, kierkegaard.views, michelFoucault.views, nietzsche.views, plato.views, ralphWaldoEmerson.views, reneDescartes.views, sartre.views, socrates.views];


// define the images divs
let leftImage = document.querySelector(".left");
let midImage = document.querySelector(".mid");
let rightImage = document.querySelector(".right");
let imageContainer = document.querySelector(".img-container")

// define attempts
let userAttemptsCounter = 0;
let maxAttempts = 30;

// Photo render
function randomPhoto (){
    let randomPhoto = philosophers[Math.floor(Math.random() * philosophers.length)];
    return randomPhoto;
}

let currentLeft = aristotle;
let currentMid = confucius;
let currentRight = davidHume;

// photp checker
function photoChecker(){
    let left;
    let right;
    let mid;
   do {
        left = randomPhoto()
   } while (left === currentLeft || left === currentMid || left === currentRight)

   do {
     right = randomPhoto()
    } while (right === currentLeft || right === currentMid || right === currentRight || right === left || right === mid)

    do {
    mid = randomPhoto()
    } while (mid === currentLeft || mid === currentMid || mid === currentRight || mid === left || mid == right)

    mid.views++;
    right.views++;
    left.views++;

    currentLeft = left;
    currentMid = mid;
    currentRight = right;
    return [currentLeft, currentMid, currentRight];
}



// image loader 
function imageLoader (currentRight, currentMid, currentLeft ) {


    leftImage.innerHTML = `<img src= '${currentLeft.source}'>`
    midImage.innerHTML = `<img src= "${currentMid.source}">`
    rightImage.innerHTML = `<img src= "${currentRight.source}">`
    
    

}



// eventHandler 
function eventHandler (e) {
    event.preventDefault();
    console.log(currentLeft.views)
    userAttemptsCounter++; 
    if (userAttemptsCounter < maxAttempts) {
        //add to votes for the correct element
        if(e.path[1].classList[0] === 'left') {
            currentLeft.clicks++
            console.log(currentLeft.clicks)
        } else if (e.path[1].classList[0] = 'mid') {
            currentMid.clicks++
            console.log(currentMid.clicks)
        } else {
            currentRight.clicks++
            console.log(currentMid.clicks)

        }
        photoChecker();
        imageLoader(currentRight, currentMid, currentLeft);
    } else {
        const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [aristotle.name, confucius.name, davidHume.name, immanuelKant.name, jeanJacquesRousseau.name, kierkegaard.name, michelFoucault.name, nietzsche.name, plato.name, ralphWaldoEmerson.name, reneDescartes.name, sartre.name, socrates.name],
        datasets: [{
            label: 'Votes',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [aristotle.clicks, confucius.clicks, davidHume.clicks, immanuelKant.clicks, jeanJacquesRousseau.clicks, kierkegaard.clicks, michelFoucault.clicks, nietzsche.clicks, plato.clicks, ralphWaldoEmerson.clicks, reneDescartes.clicks, sartre.clicks, socrates.clicks],
        },
        {
            label: "Views",
            backgroundColor: 'rgba(99, 255, 132, 0.2)',
            borderColor: 'rgba(99, 255, 132, 1)',
            borderWidth: 1,
            data: [aristotle.views, confucius.views, davidHume.views, immanuelKant.views, jeanJacquesRousseau.views, kierkegaard.views, michelFoucault.views, nietzsche.views, plato.views, ralphWaldoEmerson.views, reneDescartes.views, sartre.views, socrates.views],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    }
}
function test (e) {
    console.log(e.path[1].classList[0])
}

imageLoader(currentRight, currentMid, currentLeft);
leftImage.addEventListener('click', eventHandler)
rightImage.addEventListener('click', eventHandler)
midImage.addEventListener('click', eventHandler)

