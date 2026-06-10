// BANCO DE PERGUNTAS
const perguntas = [
    // Primeira pergunta
    {
        categoria: "EUROPA",
        texto: "Qual o time com mais conquistas de Champions League?",
        opcaoes: ["Barcelona", "Liverpool", "Real Madrid", "Milan"],
        corrta: 2,
        explicacao: ""
    },

    // Segunda pergunta
    {
        categoria: "COPA DO MUNDO",
        texto: "Qual o artilheiro da Copa do Mundo?",
        opcaoes: ["Messi", "Mbappe", "Ronaldo Fenômeno", "Klose"],
        corrta: 3,
        explicacao: ""
    },

    // Terceira pergunta
    {
        categoria: "JOGADORES",
        texto: "Quem ganhou a Bola de Ouro em 2007?",
        opcaoes: ["Kaka", "Messi", "Cristiano Ronaldo", "Ronaldinho"],
        corrta: 0,
        explicacao: ""
    },

    {
        categoria: "JOGADORES",
        texto: "Qual jogador marcou mais gols na historia do futebol(segundo a FIFA)",
        opcaoes: ["Romario", "Messi", "Cristiano Ronaldo", "Pele"],
        corrta: 2,
        explicacao: ""
    },

    {
        categoria: "COPA DO MUNDO",
        texto: "Qual seleção ganhou a primeira Copa do Mundo",
        opcaoes: ["Uruguai", "Brasil", "Espanha", "Alemanhã"],
        corrta: 0,
        explicacao: ""
    },

    {
        categoria: "EUROPA",
        texto: "Quem ganhou a Champions League de 2010",
        opcaoes: ["Milan", "Rel Madrid", "Inter de Milão", "Barcelona"],
        corrta: 2,
        explicacao: ""
    },

    {
        categoria: "JOGADORES",
        texto: "Quem ficou em terceiro lugar na Bola de Ouro de 2018 ",
        opcaoes: ["Salah", "Grizmann", "Cristiano Ronaldo", "Messi"],
        corrta: 1,
        explicacao: ""
    },

    {
        categoria: "AMERICA DO SUL",
        texto: "Qual time tem mais titulos de Libertadores",
        opcaoes: ["Flamengo", "Palmeiras", "River Plate", "Boca Juniors"],
        corrta: 0,
        explicacao: ""
    },

    {
        categoria: "JOGADORES",
        texto: "Quem ganhou a Bola de Ouro em 2007?",
        opcaoes: ["Kaka", "Messi", "Cristiano Ronaldo", "Ronaldinho"],
        corrta: 0,
        explicacao: ""
    },

    {
        categoria: "JOGADORES",
        texto: "Quem é o melhor jogador da historia(Tirando o Pele)?",
        opcaoes: ["Zidane", "Messi", "Cristiano Ronaldo", "Romario Fenomeno"],
        corrta: 1,
        explicacao: ""
    }
]

// ESTADO DO JOGO
let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = []

// ELEMENTOS
const telaInicio = document.getElementById("tela-inicio")
const telaQuiz = document.getElementById("tela-quiz")
const telaResultado = document.getElementById("tela-resultado")

const btnComecar = document.getElementById("btn-comecar")
const btnProxima = document.getElementById("btn-proxima")
const btnReiniciar = document.getElementById("btn-reiniciar")

const numeroPergunta = document.getElementById("numero-pergunta")
const placarAtual = document.getElementById("placar-atual")
const barraFill = document.getElementById("barra-fill")
const categoriaBadge = document.getElementById("categoria-badge")
const textoPergunta = document.getElementById("texto-pergunta")
const opcoesContainer = document.getElementById("opcoes-container")
const feedback = document.getElementById("feedback")
const feedbackIcone = document.getElementById("feedback-icone")
const feedbackTexto = document.getElementById("feedback-texto")

// FUNÇÕES

// mostrar a tela com a classe ativa
function mostrarTela(tela){
    // seleciona tudo que tem a classe "tela"
    document.querySelectorAll(".tela").forEach((t) => t.classList.remove("ativa"));
    tela.classList.add("ativa")
}

function carregarPergunta(){
    const pergunta = perguntas[indiceAtual];

    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`
    placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`
    barraFill.style.width = `${indiceAtual / perguntas.length *100}% `
    
    categoriaBadge.textContent = pergunta.categoria
    textoPergunta.textContent = pergunta.texto

    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido")
    btnProxima.classList.add("escondido")

    pergunta.opcaoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn")
        btn.innerHTML = `<span class="opcao-letra">${i+1}</span> ${opcao}`
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn)
    })
}

function responder(indiceEscolhido, btnClicado){
    const pergunta = perguntas[indiceAtual]
    const acertou = indiceEscolhido === pergunta.corrta

    document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
        btn.disable = true;
        if (i=== pergunta.corrta) btn.classList.add("correta")
        if(i === indiceEscolhido && !acertou) btn.classList.add("errada")
    })

    if(acertou){
        pontos += 10
        acertou ++
    }
    respostas.push({pergunta, ecolhida: indiceEscolhido, acertos})

    feedback.classList.remove("escondido", "feedback-certo", "feedback-errado")
    if(acertou){
        feedback.classList.add("feedback-certo")
        feedbackIcone.innerHTML = "✅"
        feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`
    }else{
        feedback.classList.add("feedback-errado")
        feedbackIcone.innerHTML = "❌"
        feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`
    }

    btnProxima.classList.remove("escondido")

    if(indiceAtual === perguntas.length -1){
        btnProxima.innerHTM =`Ver Resultado <i class="fas fa-flag-checkered"></i>`

    }else {
        btnProxima.innerHTML = `Proxima <! class="fas fa-arrow-right"></i>`
    }
}

function proximaPergunta(){
    indiceAtual++
    if(indiceAtual < perguntas.length){
        carregarPergunta()
    }else{
        mostrarResultado()
    }
}

function mostrarResultado(){
    mostrarTela(telaResultado)
    barraFill.style.width = "100%"

    const erros = perguntas.length - acertos
    const porcentagem = (acertos/ perguntas.length) *100

    const resultadoEmoji = document.getElementById("resultado-emoji")
    const resultadoTitulo = document.getElementById("resultado-titulo")
    const resultadoDescricao = document.getElementById("resultado-descricao")

    if(porcentagem === 100){
        resultadoEmoji.textContent = "🏆"
        resultadoTitulo.textContent = "Perfeito! "
        resultadoDescricao.textContent = "Você acertou tudo! Incrivel"
    }else if(porcentagem >= 70){
        resultadoEmoji.textContent = "🎉"
        resultadoTitulo.textContent = "Continue estudando"
        resultadoDescricao.textContent = "Você foi muito bem! Continue assim"
    }else if(porcentagem >= 40){
        resultadoEmoji.textContent = ""
        resultadoTitulo.textContent = "Quase lá"
        resultadoDescricao.textContent = "Tu foi mais ou menos"
    }else {
        resultadoEmoji.textContent = "😭"
        resultadoTitulo.textContent = "Errou tudo"
        resultadoDescricao.textContent = "Meu Deus! Desista"
    }

    document.getElementById("acertos-numeros").textContent = acertos
    document.getElementById("pontos-numeros").textContent = pontos
    document.getElementById("erros-numeros").textContent = erros

    const revisaoLista = document.getElementById("revisao-lista")
    revisaoLista.innerHTML =""
    respostas.forEach((r, i) => {
        const item = document.createElement("div")
        item.classList.add("revisao-item", r.acertou? "revisao-certa": "revisao-errada")
        item.innerHTML `
            <span class="revisao-icone">${r.acetou ? "" : ""}</span>
            <div>
            <strong>Q${i+1}:</strong> ${r.pergunta.texto}
            ${!r.acertou ? `<br><small>Resposta certa: b ${r.pergunta.opcaoes[r.pergunta.corrta]}</b></
            small>` : ""}
            </div>
        `
    })
}

function reiniciar(){
    indiceAtual = 0
    pontos = 0
    acertos = 0
    respostas = []
    barraFill.style.width = 0%
    mostrarTela(telaInicio)    
}

btnComecar.addEventListener("click", () => {
    mostrarTela(telaQuiz)
    carregarPergunta()
}) 

btnProxima.addEventListener("click", proximaPergunta)
btnReiniciar.addEventListener("click", reiniciar)