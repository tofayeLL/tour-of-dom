
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '8px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'grey';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const  placesContainer = document.getElementById('places-container');
 placesContainer.classList.add('text-center');//add class
 placesContainer.classList.remove('large-text');//remove class