import './Cadprodutopage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';


const pageName = 'Cadastar Produto';

class CadProdutoPage extends HTMLElement {

    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            `;
             this.querySelector('#logout-btn').addEventListener('click', logout);
    }
}

customElements.define('cad-produto-page', CadProdutoPage);

