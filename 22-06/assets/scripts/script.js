const botao = document.getElementById("alterarTema")


botao.addEventListener('click', () => {  
    document.body.classList.toggle('dark');
    botao.textContent = "Claro"   
});

