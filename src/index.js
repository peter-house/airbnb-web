
import _ from 'lodash';
import css from './style.css';

function conponent() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '');

    return element;
}

document.body.appendChild(component());