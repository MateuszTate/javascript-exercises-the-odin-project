const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

const headerThree = document.createElement('h3');
headerThree.textContent = "I'm blue h3!";
headerThree.style.color = "blue";

const blackBorderDiv = document.createElement('div');
blackBorderDiv.style.background = "pink";
blackBorderDiv.style.border = "2px solid black";

const headerOne = document.createElement('h1');
headerOne.textContent = "I'm in a div";
blackBorderDiv.appendChild(headerOne);

const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = "ME TOO!";
blackBorderDiv.appendChild(anotherParagraph);

container.appendChild(blackBorderDiv);
container.appendChild(redParagraph);
container.appendChild(headerThree);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
// btn.onclick = alertFunction;

const btnSecond = document.querySelector('#btnSecond');
btnSecond.addEventListener('click', () => {
    alert("Hello World");
})
// btn.addEventListener('click', alertFunction);

function alertFunction(){
    alert("YAY! YOU DID IT!");
}

// btn.addEventListener('click', function (e) {
//     console.log(e);
//   });

// btn.addEventListener('click', function (e) {
//     console.log(e.target);
//   });

btn.addEventListener('click', function (e) {
        e.target.style.background = 'blue';
    });