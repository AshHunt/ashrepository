import { capitalize } from 'lodash';


function buildLink(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return `
      <li>
          <a href="/${href}" data-navigo>
            ${capitalize(link)}
          </a>
      </li>
    `;
}

export default function Navigation(state){
    var links = state[state.active].links;
    for(let i = 0; i < links.length; i++){
       list+=
         `<li>
        <a href="#">${links[i]}
        </li>
        `;
        console.log(list);
    }

return `
<div id="navigation">
    <ul class="container">
        ${list}
    </ul>
</div>
`;
}