import './styles/main.css'

const panelToggle = document.getElementById('panel-toggle')
const sidePanel = document.getElementById('side-panel')

// panel toggle
panelToggle.addEventListener('click', ()=>{
    if(sidePanel.classList.contains('active')){
        sidePanel.classList.remove('active')
    }
    else{
        sidePanel.classList.add('active')
    }
})