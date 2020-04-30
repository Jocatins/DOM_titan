// const para = document.querySelector('div.titans');

// console.log(para);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// const titans = document.querySelectorAll('.titans');

// // paras.forEach(para => {
// //   console.log(para);
// // });

// console.log(paras);

//get element by ID

// const titan = document.getElementById('page-title');
// console.log(titan);

// //get element by class name

// const gyps = document.getElementsByClassName('titans');
// console.log(gyps);
// console.log(gyps[0]);

// //get element by tag name

// const tits = document.getElementsByTagName('p');
// console.log(tits);

// const titan = document.querySelector('h1');

//titan.innerText += "titans";

//const titans = document.querySelector('p');

//titans.innerText = 'titans are awesome';

//to append to the the text

//titans.innerText += ' titans are awesome';

// appending using for each
// const gyps = document.querySelectorAll('p');

// gyps.forEach(titan => {
//   console.log(titan.innerText);
//   titan.innerText += ' awesome gypsies'
// });

//changing the html content

// const content = document.querySelector('.content');

// content.innerHTML += '<h1> Recently added titans</h1>';

// const titans = ['joca','khamen'];

// titans.forEach(titan =>{
//   content.innerHTML += `<p>${titan}</p>`;
// });

//changing and setting attributes
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.gypsyplanet.com');

// link.innerText = "jocatins' world";

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));

// msg.setAttribute('style', 'color: blue;');

//set attributes with style using the style property

// const title = document.querySelector('h1');

// console.log(title.style.color);

// title.style.backgroundColor = 'blue';
// title.style.color = 'white';

// title.style.fontSize = '50px';

// title.style.fontSize = '';

//changing classes from the javaScript code

const content = document.querySelector('p');

console.log(content.classList);

//adding and removing classes
// content.classList.add('titans');
// content.classList.remove('titans');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('titans')){
    p.classList.add('titans');
  }
  if(p.innerText.includes('gypsies')){
    p.classList.add('gypsies');
  }
});




