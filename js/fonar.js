// ═══════════════════════════════════════════════════════════════════
// FONAR - SISTEMA COMPLETO COM 24 PERGUNTAS
// + FUNÇÕES DE VISITAS COMUNITÁRIAS E SOLIDÁRIAS
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// PERGUNTAS DO FONAR
// ═══════════════════════════════════════════════════════════════════

const PERGUNTAS_FONAR = [
    {
        numero: 1,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "O(a) agressor(a) já ameaçou você com arma?",
        opcoes: [
            { texto: "Sim, com arma de fogo", valor: "sim_arma", risco: true },
            { texto: "Sim, com faca", valor: "sim_faca", risco: true },
            { texto: "Sim, de outra forma", valor: "sim_outro", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 2,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "O(a) agressor(a) já praticou agressão física grave?",
        opcoes: [
            { texto: "Sim, grave", valor: "sim_grave", risco: true },
            { texto: "Sim, moderada", valor: "sim_moderada", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 3,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "O(a) agressor(a) já obrigou você a ter relações sexuais?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 4,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "O(a) agressor(a) teve comportamentos de ciúme excessivo e isolamento?",
        opcoes: [
            { texto: "Sim, muito intenso", valor: "sim_intenso", risco: true },
            { texto: "Sim, moderado", valor: "sim_moderado", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 5,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "Você já registrou ocorrência policial ou pediu medida protetiva?",
        opcoes: [
            { texto: "Sim, ambas", valor: "sim_ambas", risco: true },
            { texto: "Sim, apenas uma", valor: "sim_um", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 6,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "O(a) agressor(a) já descumpriu medida protetiva?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 7,
        bloco: "BLOCO I - HISTÓRICO DE VIOLÊNCIA",
        texto: "As agressões se tornaram mais frequentes e/ou graves nos últimos 12 meses?",
        opcoes: [
            { texto: "Sim, mais frequentes e graves", valor: "sim_ambos", risco: true },
            { texto: "Sim, um dos dois", valor: "sim_um", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 8,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) faz uso abusivo de álcool ou drogas?",
        opcoes: [
            { texto: "Sim, álcool", valor: "sim_alcool", risco: true },
            { texto: "Sim, drogas", valor: "sim_drogas", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 9,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) tem doença mental diagnosticada?",
        opcoes: [
            { texto: "Sim, sem medicação", valor: "sim_sem_med", risco: true },
            { texto: "Sim, com medicação", valor: "sim_com_med", risco: false },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 10,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) já tentou suicídio?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 11,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) está desempregado(a)?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 12,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) tem fácil acesso a arma de fogo?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 13,
        bloco: "BLOCO II - SOBRE O(A) AGRESSOR(A)",
        texto: "O(a) agressor(a) já ameaçou ou agrediu outras pessoas?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não sei", valor: "nao_sei", risco: false }
        ]
    },
    {
        numero: 14,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Você terminou ou manifestou intenção de terminar com o(a) agressor(a)?",
        opcoes: [
            { texto: "Sim, recentemente", valor: "sim_recente", risco: true },
            { texto: "Sim, tenho intenção", valor: "sim_intencao", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 15,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Você tem filhos com o(a) agressor(a)?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 16,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Seus filhos presenciaram atos de violência?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não tenho filhos", valor: "nao_tem", risco: false }
        ]
    },
    {
        numero: 17,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Você sofreu violência durante gravidez ou após parto?",
        opcoes: [
            { texto: "Sim, estou grávida", valor: "sim_gravida", risco: true },
            { texto: "Sim, recentemente pari", valor: "sim_recente", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 18,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Se você está em novo relacionamento, aumentaram as ameaças?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false },
            { texto: "Não se aplica", valor: "nao_aplica", risco: false }
        ]
    },
    {
        numero: 19,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Você se sente isolada de amigos e familiares?",
        opcoes: [
            { texto: "Sim, muito", valor: "sim_muito", risco: true },
            { texto: "Sim, parcialmente", valor: "sim_parcial", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 20,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Você tem deficiência que limita sua proteção?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 21,
        bloco: "BLOCO III - SOBRE VOCÊ",
        texto: "Como você se identifica em relação à raça/etnia?",
        opcoes: [
            { texto: "Negra/Preta", valor: "negra", risco: false },
            { texto: "Parda", valor: "parda", risco: false },
            { texto: "Branca", valor: "branca", risco: false },
            { texto: "Indígena", valor: "indigena", risco: false },
            { texto: "Outra", valor: "outra", risco: false }
        ]
    },
    {
        numero: 22,
        bloco: "BLOCO IV - OUTRAS INFORMAÇÕES",
        texto: "Você reside em local de maior risco de violência?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    },
    {
        numero: 23,
        bloco: "BLOCO IV - OUTRAS INFORMAÇÕES",
        texto: "Qual sua situação de moradia?",
        opcoes: [
            { texto: "Própria", valor: "propria", risco: false },
            { texto: "Alugada", valor: "alugada", risco: false },
            { texto: "Cedida/De favor", valor: "cedida", risco: true }
        ]
    },
    {
        numero: 24,
        bloco: "BLOCO IV - OUTRAS INFORMAÇÕES",
        texto: "Você reside no mesmo imóvel com o(a) agressor(a)?",
        opcoes: [
            { texto: "Sim", valor: "sim", risco: true },
            { texto: "Não", valor: "nao", risco: false }
        ]
    }
];

// ═══════════════════════════════════════════════════════════════════
// VARIÁVEIS GLOBAIS
// ═══════════════════════════════════════════════════════════════════

let respostasFONAR = {};
let perguntaAtualFONAR = 0;
const GOOGLE_SCRIPT_URL = document.querySelector('script')?.textContent.match(/const GOOGLE_SCRIPT_URL = '([^']+)'/)?.[1] || '';

// ═══════════════════════════════════════════════════════════════════
// FUNÇÕES DO FONAR
// ═══════════════════════════════════════════════════════════════════

function inicializarFONAR() {
    respostasFONAR = {};
    perguntaAtualFONAR = 0;
    exibirPerguntaFONAR();
}

function exibirPerguntaFONAR() {
    if (perguntaAtualFONAR < 0 || perguntaAtualFONAR >= PERGUNTAS_FONAR.length) {
        finalizarFONAR();
        return;
    }
    
    const pergunta = PERGUNTAS_FONAR[perguntaAtualFONAR];
    const progresso = ((perguntaAtualFONAR + 1) / PERGUNTAS_FONAR.length) * 100;
    
    // Atualiza progresso
    document.getElementById('fonar-progresso-bar').style.width = progresso + '%';
    document.getElementById('fonar-pergunta-atual').textContent = perguntaAtualFONAR + 1;
    
    // Exibe pergunta
    let htmlOpcoes = '';
    pergunta.opcoes.forEach((opcao, idx) => {
        const idOpcao = `opcao-${perguntaAtualFONAR}-${idx}`;
        htmlOpcoes += `
            <label class="fonar-opcao">
                <input 
                    type="radio" 
                    name="fonar-resposta" 
                    id="${idOpcao}"
                    value="${opcao.valor}"
                    data-risco="${opcao.risco}"
                    onchange="salvarRespostaFONAR('${opcao.valor}', ${opcao.risco})"
                >
                <span>${opcao.texto}</span>
            </label>
        `;
    });
    
    document.getElementById('fonar-conteudo-pergunta').innerHTML = `
        <h3>${pergunta.bloco}</h3>
        <p style="font-size: 16px; margin: 15px 0; color: var(--cor-primaria);">${pergunta.texto}</p>
        <div class="fonar-opcoes">
            ${htmlOpcoes}
        </div>
    `;
    
    // Mostra/esconde botão anterior
    document.getElementById('btn-anterior').style.display = perguntaAtualFONAR === 0 ? 'none' : 'block';
}

function salvarRespostaFONAR(valor, temRisco) {
    respostasFONAR[perguntaAtualFONAR] = {
        valor: valor,
        temRisco: temRisco
    };
}

function fonarProximo() {
    if (!(perguntaAtualFONAR in respostasFONAR)) {
        alert('Por favor, responda a pergunta antes de continuar');
        return;
    }
    
    perguntaAtualFONAR++;
    exibirPerguntaFONAR();
}

function fonarAnterior() {
    perguntaAtualFONAR--;
    exibirPerguntaFONAR();
}

function finalizarFONAR() {
    // Calcula resultado
    let totalRisco = 0;
    Object.values(respostasFONAR).forEach(resp => {
        if (resp.temRisco) totalRisco++;
    });
    
    const percentual = (totalRisco / PERGUNTAS_FONAR.length) * 100;
    let nivel = 'Baixo';
    
    if (percentual >= 50) {
        nivel = 'Elevado';
    } else if (percentual >= 25) {
        nivel = 'Médio';
    }
    
    // Salva FONAR na planilha
    salvarFONARNaPlanilha(nivel, percentual.toFixed(1), totalRisco);
    
    // Mostra resultado
    fecharModalFONAR();
    exibirResultadoFONAR(nivel, percentual.toFixed(1), totalRisco);
}

function exibirResultadoFONAR(nivel, percentual, totalRisco) {
    const nomeVitima = sessionStorage.getItem('fonar-nome');
    
    let mensagem = `
╔═══════════════════════════════════╗
║   RESULTADO DA AVALIAÇÃO (FONAR)  ║
╠═══════════════════════════════════╣
║                                   ║
║  Vítima: ${nomeVitima}            
║  Nível de Risco: ${nivel}         
║  Percentual: ${percentual}%        
║  Fatores Positivos: ${totalRisco}/24   ║
║                                   ║
╠═══════════════════════════════════╣
║                                   ║
║  ✓ Resultado salvo automaticamente║
║                                   ║
╚═══════════════════════════════════╝
    `;
    
    console.log(mensagem);
    alert(`✓ FONAR Concluído!\n\nNível: ${nivel}\nPercentual: ${percentual}%\n\nO resultado foi salvo na planilha!`);
}

function salvarFONARNaPlanilha(nivel, percentual, totalRisco) {
    const idOcorrencia = sessionStorage.getItem('fonar-id');
    
    const dados = {
        id: idOcorrencia,
        nivel: nivel,
        percentual: percentual,
        totalRisco: totalRisco,
        operador: 'Gestor',
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    if (!GOOGLE_SCRIPT_URL) {
        console.error('URL do Apps Script não configurada');
        return;
    }
    
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
            acao: 'salvarFONAR',
            ...dados
        })
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('✓ FONAR salvo com sucesso:', resultado);
    })
    .catch(erro => {
        console.error('Erro ao salvar FONAR:', erro);
    });
}

// ═══════════════════════════════════════════════════════════════════
// FUNÇÕES DE VISITAS COMUNITÁRIAS E SOLIDÁRIAS
// ═══════════════════════════════════════════════════════════════════

function registrarVisitaComunitaria() {
    const dados = {
        nome: document.getElementById('vc-nome').value,
        data: document.getElementById('vc-data').value,
        hora: document.getElementById('vc-hora').value,
        policial: document.getElementById('vc-policial').value,
        matricula: document.getElementById('vc-matricula').value,
        objetivo: document.getElementById('vc-objetivo').value,
        observacoes: document.getElementById('vc-observacoes').value,
        tipo: 'comunitaria',
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    if (!dados.nome || !dados.data || !dados.objetivo) {
        alert('⚠️ Preencha os campos obrigatórios:\n- Nome/Local\n- Data\n- Objetivo');
        return;
    }
    
    // Salva na planilha
    salvarVisitaNaPlanilha(dados);
    
    // Feedback visual
    alert('✓ Visita Comunitária Registrada com Sucesso!');
    
    // Limpa formulário
    document.getElementById('vc-nome').value = '';
    document.getElementById('vc-data').value = '';
    document.getElementById('vc-hora').value = '';
    document.getElementById('vc-policial').value = '';
    document.getElementById('vc-matricula').value = '';
    document.getElementById('vc-objetivo').value = '';
    document.getElementById('vc-observacoes').value = '';
    
    // Atualiza histórico
    adicionarAoHistoricoVC(dados);
}

function registrarVisitaSolidaria() {
    const dados = {
        nome: document.getElementById('vs-nome').value,
        data: document.getElementById('vs-data').value,
        hora: document.getElementById('vs-hora').value,
        profissional: document.getElementById('vs-profissional').value,
        profissao: document.getElementById('vs-profissao').value,
        tipoAssistencia: document.getElementById('vs-tipo-assistencia').value,
        observacoes: document.getElementById('vs-observacoes').value,
        tipo: 'solidaria',
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    if (!dados.nome || !dados.data || !dados.profissao) {
        alert('⚠️ Preencha os campos obrigatórios:\n- Nome/Família\n- Data\n- Profissão');
        return;
    }
    
    // Salva na planilha
    salvarVisitaNaPlanilha(dados);
    
    // Feedback visual
    alert('✓ Visita Solidária Registrada com Sucesso!');
    
    // Limpa formulário
    document.getElementById('vs-nome').value = '';
    document.getElementById('vs-data').value = '';
    document.getElementById('vs-hora').value = '';
    document.getElementById('vs-profissional').value = '';
    document.getElementById('vs-profissao').value = '';
    document.getElementById('vs-tipo-assistencia').value = '';
    document.getElementById('vs-observacoes').value = '';
    
    // Atualiza histórico
    adicionarAoHistoricoVS(dados);
}

function salvarVisitaNaPlanilha(dados) {
    if (!GOOGLE_SCRIPT_URL) {
        console.error('URL do Apps Script não configurada');
        return;
    }
    
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
            acao: 'salvarVisita',
            ...dados
        })
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('✓ Visita salva com sucesso:', resultado);
    })
    .catch(erro => {
        console.error('Erro ao salvar visita:', erro);
    });
}

function adicionarAoHistoricoVC(dados) {
    const container = document.getElementById('historico-vc');
    
    const card = document.createElement('div');
    card.className = 'card-visita comunitaria';
    card.innerHTML = `
        <div class="card-visita-header">
            <h4>👮 ${dados.nome}</h4>
            <span class="card-visita-data">${dados.data}</span>
        </div>
        <div class="card-visita-info">
            <p><strong>Hora:</strong> ${dados.hora}</p>
            <p><strong>Policial:</strong> ${dados.policial} (${dados.matricula})</p>
            <p><strong>Objetivo:</strong> ${dados.objetivo}</p>
            <p><strong>Observações:</strong> ${dados.observacoes}</p>
            <p style="font-size: 11px; color: #999; margin-top: 10px;">Registrado em: ${dados.timestamp}</p>
        </div>
    `;
    
    container.insertBefore(card, container.firstChild);
}

function adicionarAoHistoricoVS(dados) {
    const container = document.getElementById('historico-vs');
    
    const card = document.createElement('div');
    card.className = 'card-visita solidaria';
    card.innerHTML = `
        <div class="card-visita-header">
            <h4>🤝 ${dados.nome}</h4>
            <span class="card-visita-data">${dados.data}</span>
        </div>
        <div class="card-visita-info">
            <p><strong>Hora:</strong> ${dados.hora}</p>
            <p><strong>Profissional:</strong> ${dados.profissional} (${dados.profissao})</p>
            <p><strong>Tipo de Assistência:</strong> ${dados.tipoAssistencia}</p>
            <p><strong>Observações:</strong> ${dados.observacoes}</p>
            <p style="font-size: 11px; color: #999; margin-top: 10px;">Registrado em: ${dados.timestamp}</p>
        </div>
    `;
    
    container.insertBefore(card, container.firstChild);
}

// ═══════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════════════

console.log('✓ FONAR e Visitas carregados com sucesso');
console.log('✓ Pronto para registrar avaliações e visitas');
