import './LoginPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Login';

class LoginPage extends HTMLElement {

    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('login-page', LoginPage);
