import './listusuariopage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';


const pageName = 'Usuarios';

class ListUsuarioPage extends HTMLElement {

    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
             <ion-content>
            <div class="list-produto"></div>
            </ion-content>
          `;
 this.querySelector('#logout-btn').addEventListener('click', logout);
        // buscando os produtos
         const Usuario= this.fetchUsuario() || []; 
         // renderizando os produtos em html
            this.renderusuario(Usuario);
            this.querySelector('#logout-btn').addEventListener('click', logout);

           
    }

    fetchUsuarios(){
        return [
            {
                "id": 1,
                "nome": "robison",
                "usuario":"Robi223",
                "senha": "sad4567",
                "perfil": 2
            },
             {
                "id": 2,
                "nome": "luciana",
                "usuario":"araujo9010",
                "senha": "arvore445",
                "perfil": 3
            },
             {
                "id": 3,
                "nome": "lola",
                "usuario":"lokkk887",
                "senha": "d465uoi",
                "perfil": 1
            }
        ] 
    }
}

customElements.define('list-usuario-page', ListusuarioPage);
