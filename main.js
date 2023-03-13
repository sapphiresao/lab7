function buildPage() {

const h1 = document.createElement('h1');
h1.innerText = 'Lab7 Assignment';
h1.style.color = 'blue';

const hr = document.createElement('hr');
document.body.appendChild(hr);

const h2Task = document.createElement('h2');
h2Task.innerText = 'Task';
h2Task.style.color = 'red';

const pTask = document.createElement('p');
pTask.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'find elements in the DOM (5 points)';
li1.classList.add('even');
li1.style.color = 'green';

const li2 = document.createElement('li');
li2.innerText = 'create/add/remove elements (5 points)';
li2.classList.add('odd');
li2.style.color = 'purple';

const li3 = document.createElement('li');
li3.innerText = 'change content of the elements (5 points)';
li3.classList.add('even');
li3.style.color = 'green';

const li4 = document.createElement('li');
li4.innerText = 'change styles of the elements (5 points)';
li4.classList.add('odd');
li4.style.color = 'purple';

const li5 = document.createElement('li');
li5.innerText = 'change attributes of the elements (5 points)';
li5.classList.add('even');
li5.style.color = 'green';

const li6 = document.createElement('li');
li6.innerText = 'change classes of the elements (5 points)';
li6.classList.add('odd');
li6.style.color = 'purple';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

const hr2 = document.createElement('hr');
document.body.appendChild(hr2);

const h2Sub = document.createElement('h2');
h2Sub.innerText = 'Submission';
h2Sub.style.color = 'red';

const pSub = document.createElement('p');
pSub.innerText = 'To submit your work, follow these instructions:';

const ul2 = document.createElement('ul');

const li7 = document.createElement('li');
li7.innerText = 'Create a new repository on Github, named lab7 (1 point)';
li7.classList.add('even');
li7.style.color = 'green';

const li8 = document.createElement('li');
li8.innerText = 'Clone this repository to your local machine and work inside it.';
li8.classList.add('odd');
li8.style.color = 'purple';

const li9 = document.createElement('li');
li9.innerText = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point)';
li9.classList.add('even');
li9.style.color = 'green';

const li10 = document.createElement('li');
li10.innerText = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point)';
li10.classList.add('odd');
li10.style.color = 'purple';

const li11 = document.createElement('li');
li11.innerText = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).';
li11.classList.add('even');
li11.style.color = 'green';

const li12 = document.createElement('li');
li12.innerText = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).';
li12.classList.add('odd');
li12.style.color = 'purple';

const li13 = document.createElement('li');
li13.innerText = 'After you finish your work, submit it to the Github (2 points).';
li13.classList.add('even');
li13.style.color = 'green';

ul2.appendChild(li7);
ul2.appendChild(li8);
ul2.appendChild(li9);
ul2.appendChild(li10);
ul2.appendChild(li11);
ul2.appendChild(li12);
ul2.appendChild(li13);

}