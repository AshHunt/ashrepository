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

function handleNavigation(params){
    State.active = params.page;

    render(State); // eslint-disable-line
}

function render(state){
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
  `;

    greet();

    router.updatePageLinks();
}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();
