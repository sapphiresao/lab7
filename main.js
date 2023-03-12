const body = document.querySelector('body');

const meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'Content-Type');
meta.setAttribute('content', 'text/html; charset=windows-1252');

const title = document.createElement('title');
title.textContent = 'Lab7';

const h1 = document.createElement('h1');
h1.style.color = 'blue';
h1.textContent = 'Lab7 Assignment';

const hr = document.createElement('hr');

const h2Task = document.createElement('h2');
h2Task.style.color = 'red';
h2Task.textContent = 'Task';

const pTask = document.createElement('p');
pTask.textContent = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';

const ul = document.createElement('ul');
const ul1 = document.createElement('ul');

const li1 = document.createElement('li');
li1.classList.add('even');
li1.style.color = 'green';
li1.textContent = 'find elements in the DOM (5 points)';

const li2 = document.createElement('li');
li2.classList.add('odd');
li2.style.color = 'purple';
li2.textContent = 'create/add/remove elements (5 points)';

const li3 = document.createElement('li');
li3.classList.add('even');
li3.style.color = 'green';
li3.textContent = 'change content of the elements (5 points)';

const li4 = document.createElement('li');
li4.classList.add('odd');
li4.style.color = 'purple';
li4.textContent = 'change styles of the elements (5 points)';

const li5 = document.createElement('li');
li5.classList.add('even');
li5.style.color = 'green';
li5.textContent = 'change attributes of the elements (5 points)';

const li6 = document.createElement('li');
li6.classList.add('odd');
li6.style.color = 'purple';
li6.textContent = 'change classes of the elements (5 points)';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

const pSubmission = document.createElement('p');

const h2Submission = document.createElement('h2');
h2Submission.style.color = 'red';
h2Submission.textContent = 'Submission';

pSubmission.textContent = 'To submit your work, follow these instructions:';

const ul2 = document.createElement('ul');

const li7 = document.createElement('li');
li7.classList.add('even');
li7.style.color = 'green';
li7.textContent = 'Create a new repository on Github, named lab7 (1 point)';

const li8 = document.createElement('li');
li8.classList.add('odd');
li8.style.color = 'purple';
li8.textContent = 'Clone this repository to your local machine and work inside it.';
ul1.appendChild(li8);

const li9 = document.createElement('li');
li9.classList.add('even');
li9.style.color = 'green';
li9.textContent = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).';
ul1.appendChild(li9);

const li10 = document.createElement('li');
li10.classList.add('odd');
li10.style.color = 'purple';
li10.textContent = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).';
ul1.appendChild(li10);

const li11 = document.createElement('li');
li11.classList.add('even');
li11.style.color = 'green';
li11.textContent = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).';
ul1.appendChild(li11);

const li12 = document.createElement('li');
li12.classList.add('odd');
li12.style.color = 'purple';
li12.textContent = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).';
ul1.appendChild(li12);

const li13 = document.createElement('li');
li13.classList.add('even');
li13.style.color = 'green';
li13.textContent = 'After you finish your work, submit it to the Github (2 points).';
ul1.appendChild(li13);

div2.appendChild(ul1);
document.body.appendChild(div2);

document.title = 'Lab7';