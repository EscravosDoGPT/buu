/*abrir/fechar config*/
const getElement = (...queries) => document.querySelector(...queries)

const button = getElement('.open-modal-button')
const container = getElement('.modal-container')
const modal = getElement('.modal')

const activeModalClass = 'modal-show'

const openModal = () => container.classList.add(activeModalClass)
const closeModal = () => container.classList.remove(activeModalClass)

    button.addEventListener('click', openModal)
    container.addEventListener('click', (event) => {
        if (modal.contains(event.target)) return 
            closeModal()
        });

const getElement2 = (...queries) => document.querySelector(...queries)

const button2 = getElement('.abrir-add')
const container2 = getElement('.modal-container2')
const modal2 = getElement('.jogo')
    
/*abrir/fechar jogo*/
const activeModalClass2 = 'modal-show2'
                
const openModal2 = () => container2.classList.add(activeModalClass2)
const closeModal2 = () => container2.classList.remove(activeModalClass2)
                
    button2.addEventListener('click', openModal2)
    container2.addEventListener('click', (event) => {
        if (modal2.contains(event.target)) return
            closeModal2();
        });

/*add jogo*/
const addjogo = document.getElementById("add-jogo")
const divjogo = document.getElementById("lista-jogo")
  
    addjogo.addEventListener("click", () => {
        const newButton = document.createElement("Button")
        newButton.className = "jogo-index"
        newButton.innerHTML = `
            <button class="btn-jogo" type="submit" onclick="abrirJogo(true)"> </button>
        `;
        divjogo.appendChild(newButton)
        closeModal2()
    })