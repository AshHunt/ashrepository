import Content from './src/Content';
import greet from './src/Greeting';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);



var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Porftolio Project',
        'links': ['blog', 'contact', 'projects']
    },
    'blog': {
        'title': 'Read my amazing blog',
        'links': ['home', 'contact', 'projects']
},
    'contact': {
        'title': 'Call me here',
        'links': ['home', 'blog', 'projects']
    },
    'projects': {
        'title': 'My great work',
        'links': ['home', 'blog', 'contact']
    }
};

var root = document.querySelector('#root');

document.querySelector('#root').innerHTML += `
${Content(state)}
${Footer(state)}
${Header(state)}
${Navigation(state)}
`;

document.querySelector('h1')
.addEventListener(
    'click', 
    (event) => console.log(event.target)
);
 links[2] =document.querySelectorAll('#navigation a')
 for(var i = 0; i < links.length; i++)
 {
while(i < links.length) {
    links[i].addEventListener('click',
    handleNavigation
    );
    i++;
}
 }
 function handleNavigation(event){
     event.preventDefault();
     console.log(event.target.textContent);
     State.active = event.target.textContent;
     
 }

links[0].addEventListener(
    'click',
(event) => {
    event.preventDefault();
    console.log(event.target) 
},
        handleNavigation
);

router
    .on('/:page', console.log)
    .on('/', () => console.log('I am on the home page!'))
    .resolve();