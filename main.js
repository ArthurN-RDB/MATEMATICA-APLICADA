// ==========================================
// LÓGICA DAS ABAS (Navegação dos botões)
// ==========================================
const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe 'ativo' de todos os botões e abas
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
        // Adiciona a classe 'ativo' apenas no botão clicado e na aba correspondente
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
    }
}

// ==========================================
// LÓGICA DO CRONÔMETRO
// ==========================================

// Aqui você pode alterar as datas dos seus objetivos! (Formato: Ano-Mês-DiaT00:00:00)
const temposObjetivos = [
    new Date("2026-11-01T00:00:00"), // Estudar para o Enem
    new Date("2026-12-31T23:59:59"), // Aprender programação
    new Date("2026-11-08T00:00:00"), // Passar no Enem
    new Date("2026-12-31T23:59:59")  // Arrumar um trabalho
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    // Se a data já passou, retorna zero
    if (tempoFinal < 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor((tempoFinal / 1000) % 60);
    let minutos = Math.floor((tempoFinal / 1000 / 60) % 60);
    let horas = Math.floor((tempoFinal / (1000 * 60 * 60)) % 24);
    let dias = Math.floor(tempoFinal / (1000 * 60 * 60 * 24));

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < temposObjetivos.length; i++) {
        let tempo = calculaTempo(temposObjetivos[i]);
        
        // Pega os IDs que você criou no HTML (dias0, horas0, min0, seg0, etc.) e insere os números
        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

// Inicia o cronômetro e atualiza a cada 1 segundo (1000 milissegundos)
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
