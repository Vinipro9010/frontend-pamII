import './produtopage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';


const pageName = 'produtos';

class ProdutoPage extends HTMLElement {

    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            `;
             this.querySelector('#logout-btn').addEventListener('click', logout);
    }
}

customElements.define('produto-page', ProdutoPage);

