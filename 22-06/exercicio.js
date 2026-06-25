const botao = document.getElementById("mudarTema")


botao.addEventListener('click', () => {  
    document.body.classList.toggle('dark');
    if(botao.textContent == "Mudar para tema escuro"){
        botao.textContent = "Mudar para tema claro"
    }else{
        botao.textContent = "Mudar para tema escuro"
    }  
    
});



