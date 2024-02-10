//step-1: where to add
const placesList = document.getElementById('places-list');

//step-2: what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//step-3: add the child
placesList.appendChild(li);



// added a section in main content

// step-1: where to add
const mainContainer = document.getElementById('main-content');

// step-2: what to be added
const section = document.createElement('section');
// set h1 tag
const h1 = document.createElement('h1');
h1.innerText = 'My Favorite Food List';
section.appendChild(h1);

// set ul tag
const ul = document.createElement('ul');

// set first li tag
const li1 = document.createElement('li');
li1.innerText = 'pasta';
ul.appendChild(li1);

// set second li tag
const li2 = document.createElement('li');
li2.innerText = 'burger';
ul.appendChild(li2);

// set third li tag
const li3 = document.createElement('li');
li3.innerText = 'gorur mangsho';
ul.appendChild(li3);

// added ul in the section
section.appendChild(ul);
// added section in the main 
mainContainer.appendChild(section);




// another way to add section by use innerHTML

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My favorite dress list</h1>
<ul>
<li>shirt</li>
<li>pant</li>
<li>T-shirt</li>
<li>blazer</li>
</ul>
`

mainContainer.appendChild(sectionDress);

