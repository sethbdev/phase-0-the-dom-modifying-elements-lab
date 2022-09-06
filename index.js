// Write your code here

const main = document.querySelector('main');
main.remove();

const createNewHeader = document.createElement('h1');
document.body.append(createNewHeader);

const newHeader = document.querySelector('h1');

newHeader.id = 'victory';
newHeader.textContent = 'Name is the champion'
