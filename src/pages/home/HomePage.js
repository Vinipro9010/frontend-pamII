import './HomePage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Home';

class HomePage extends HTMLElement {

    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            `;
    }
}

customElements.define('home-page', HomePage);
