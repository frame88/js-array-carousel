//cliccare su next e mostrare l-immagine successiva
// aggiungere class active all'immagine da mostrare
//eliminare class active dall'immagine che lasciamo

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

const containerImages = document.querySelector('.slider  .images-container');
const containerDots = document.querySelector('.slider  .list');

//girato sull-array delle immagini
for (let index = 0; index < images.length; index++) {
    let image = `<img src="${images[index]}" alt="">`;
    let dot = `<div class="list-item"></div>`;

    // if (index == 0) {
    //   image = `<img class="first active" src="${images[index]}" alt="">`;
    // }
    // else if (index == images.length - 1) {
    //   image = `<img class="last" src="${images[index]}" alt="">`;
    // }

    containerImages.innerHTML += image;
    containerDots.innerHTML += dot;
}

//prendo una lista di nodi - simile ad array
//se abbiamo la necessita di prendere piu elementi simili nel dom possiamo usare querySelectorAll che ci restituisce una lista di nodi
// la lista di nodi assomiglia ad un array
const imagesDom = document.querySelectorAll('.slider img');
console.log(imagesDom);

const dotsDom = document.querySelectorAll('.slider .list-item');

//prendo primo e ultimo elemento
//posso prendere i nodi per indice 
// il primo elemento e 0
//il secondo e 1 ...
//preso elemento 0
imagesDom[0].classList.add('first', 'active');
//preso elemento ultimo
imagesDom[imagesDom.length - 1].classList.add('last');
dotsDom[0].classList.add('first', 'active');
dotsDom[dotsDom.length - 1].classList.add('last');

const nextButton = document.querySelector('.slider .next');
const prevButton = document.querySelector('.slider .prev');

// console.log(nextButton, prevButton);

nextButton.addEventListener('click', function () {
    const imageActive = document.querySelector('.slider .active');
    const dotActive = document.querySelector('.slider .list .active');

    let classes = imageActive.classList;
    // console.log(classes[1]);
    //variabile appoggio che parte falsa
    let last = false;
    for (let index = 0; index < classes.length; index++) {
        console.log(index, classes[index]);
        if (classes[index] == 'last') {
            // la variabile diventa vera  
            last = true;
        }
    }

    //image active contiene anche la classe last?
    if (last == false) { //se non sono in last
        imageActive.classList.remove('active');
        dotActive.classList.remove('active');
        //elemento successivo
        const imgNext = imageActive.nextElementSibling;
        const dotNext = dotActive.nextElementSibling;
        imgNext.classList.add('active');
        dotNext.classList.add('active');
    } else { // se sono in last
        nextButton.classList.remove('able');
    }

});





