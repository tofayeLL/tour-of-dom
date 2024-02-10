
console.log('first file');


// to see all li element 
const allLi = document.getElementsByTagName('li');
console.log(allLi);

// to see class 
const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles); 

// to see id 
const secondSection = document.getElementById('second-section');
console.log(secondSection);
// apply style in second section
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';


// must know about 
// document.querySelector
// document.querySelectorAll



// added some li in ul by using inner text
// step one 
const secondList = document.getElementById('second-list');

// step two
const li = document.createElement('li');
li.innerText = 'My Dynamic Item';
secondList.appendChild(li);


// added a new section in main by using innerHTML

// step one
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
<h1> section title -4</h1>
<ul>
<li>list item dynamic-1</li>
<li>list item dynamic-2</li>
<li>list item dynamic-3</li>
<li>list item dynamic-4</li>
</ul>
`
mainContainer.appendChild(section);