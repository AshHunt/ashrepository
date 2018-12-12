import { Home } from './Screens';

var Screens = {
    'blog': Blog,
    'home': Home,

};

export default function Content() {
    return`
    <div id="content">
<div class="container">
    <p>I am learning coding</p>
    ${Screens[capitalize(state.active)]()}
</div>
</div>
`;
}