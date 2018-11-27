import Content from '.src/Content';

document.body.innerHTML += `
${Content}
${Footer}
${Header}
${Navigation}
`;
var userName = prompt('What is your name?');
var title = document.querySelector('h1');

var greet = function greet(){

if (!userName){
    userName = prompt('What is your name, for real?')
   greet();
}else{
alert('Hello' + userName);

title.textContent += `, ${userName}`;
}                                     
};

greet();
