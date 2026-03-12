const createAndInjecttionMenu = () =>{
    if (document.querySelector('ion-menu'))
        return 

    const maincontent = document.querySelector('ion-nav');
    const contentId = 'main-content';

    maincontent.id = contentId;

    const menu = document.createElement('ion-menu');
    menu.contentId= contentId;

    menu.innerHTML = `
    <ion-header>
      <ion-toolbar color='secondary'>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button class="menu-item" data-url="/home">
          <ion-label>Home</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    `;

    menu.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', async () => {
         const url = item.dataset.url;
         const router = document.querySelector('ion-router');
         
         // verificando se a rota existe e se é a mesma pagina
         if (router && window.location.hash.substring(1) !== url)
             routher.push(url, 'root')

         await menu.close();
       })

    });

    document.body.prepend(menu);

}

export function createHeader(pageName) {
    // validar se não é pagina de login
    if (pageName !== 'login')
        createAndInjecttionMenu();


    const start = pageName !== 'login' ? `<ion-buttons slot='start'>
    <ion-menu-button>
    </ion-menu-button>
    </ion-buttons>` :
    `<ion-icon name="cafe" style="margin-left: 15px; font-size: 24px;" slot="start"></ion-icon>`

    return `
        <ion-header>
          <ion-toolbar style="--background: #5d4037; --color: white;">
         ${start}
                <ion-title>Quero Café Bar - ${pageName}</ion-title>
            </ion-toolbar>
        </ion-header>
    `;
}