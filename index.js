import Content from './src/Content';
import greet from './src/Greeting';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';

var state = {
    'title': 'Welcome to my Savvy Coders Portfolio Project'
};
document.querySelector('#root').innerHTML += `
${Content(state)}
${Footer(state)}
${Header(state)}
${Navigation(state)}
`;

greet();
