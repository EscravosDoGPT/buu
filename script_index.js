/*abrir/fechar config*/
const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.open-modal-button');
const container = getElement('.modal-container');
const modal = getElement('.modal');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

    button.addEventListener('click', openModal);
    container.addEventListener('click', (event) => {
        if (modal.contains(event.target)) return;
            closeModal();
        });

/*abrir/fechar jogo*/
const getElement2 = (...queries) => document.querySelector(...queries);

const button2 = getElement('.jogo-index');
const container2 = getElement('.modal-container2');
const modal2 = getElement('.jogo');
        
const activeModalClass2 = 'modal-show2';
        
const openModal2 = () => container2.classList.add(activeModalClass2);
const closeModal2 = () => container2.classList.remove(activeModalClass2);
        
    button2.addEventListener('click', openModal2);
    container2.addEventListener('click', (event) => {
        if (modal2.contains(event.target)) return;
            closeModal2();
        });

/*mudar cor do site*/
document.getElementById("cor-um").
    addEventListener("click", function () {
        document.querySelector("body").setAttribute("id", "cor-um")
        document.querySelector(".jogo").setAttribute("id", "cor-um")
        document.querySelector(".info-jogo").setAttribute("id", "cor-um")
        document.querySelector(".img-jogo-img").setAttribute("id", "cor-um")
    })

document.getElementById("cor-dois").
    addEventListener("click", function () {
        document.querySelector("body").setAttribute("id", "body")
        document.querySelector(".jogo").setAttribute("id", "cor-tres")
        document.querySelector(".info-jogo").setAttribute("id", "cor-dois")
        document.querySelector(".img-jogo-img").setAttribute("id", "cor-dois")
        })