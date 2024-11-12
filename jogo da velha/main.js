const questions = [
    {
        question: "O que significa CPU?",
        answers: [
            "Computer Processing Unit",
            "Computer Personal Unit",
            "Central Personal Usage",
            "Central Processing Unit"
        ],
        correct: 3
    },
    {
        question: "Qual é a função principal do RAM?",
        answers: [
            "Armazenamento permanente",
            "Conectar à internet",
            "Memória temporária",
            "Processar dados"
        ],
        correct: 2
    },
    {
        question: "O que é um navegador?",
        answers: [
            "Um sistema operacional",
            "Um programa para navegar na internet",
            "Um dispositivo de hardware",
            "Um tipo de software de edição de texto"
        ],
        correct: 1
    },
    {
        question: "Qual é a função do sistema operacional?",
        answers: [
            "Conectar à internet",
            "Criar jogos",
            "Gerenciar hardware e software",
            "Proteger dados"
        ],
        correct: 2
    },
    {
        question: "O que significa HTML?",
        answers: [
            "HyperText Multiple Language",
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 1
    },
    {
        question: "Qual é a função do CSS?",
        answers: [
            "Criar animações",
            "Estilizar a aparência do site",
            "Controlar a estrutura do site",
            "Gerenciar bancos de dados"
        ],
        correct: 1
    },
    {
        question: "O que é um algoritmo?",
        answers: [
            "Uma linguagem de programação",
            "Um dispositivo de armazenamento",
            "Uma sequência de instruções",
            "Um tipo de software"
        ],
        correct: 2
    },
    {
        question: "O que é uma rede?",
        answers: [
            "Um dispositivo de entrada",
            "Um grupo de computadores conectados",
            "Um tipo de software",
            "Um sistema operacional"
        ],
        correct: 1
    },
    {
        question: "O que é um banco de dados?",
        answers: [
            "Um dispositivo de armazenamento",
            "Um algoritmo complexo",
            "Um tipo de software de edição",
            "Uma coleção de dados organizados"
        ],
        correct: 3
    },
    {
        question: "Qual é a função de um firewall?",
        answers: [
            "Proteger a rede contra acessos não autorizados",
            "Gerenciar o tráfego de dados",
            "Acelerar a conexão à internet",
            "Armazenar dados"
        ],
        correct: 0
    },
    {
        question: "O que é um sistema de gerenciamento de banco de dados (SGBD)?",
        answers: [
            "Um software que permite a criação e gerenciamento de bancos de dados",
            "Um software para editar imagens",
            "Um tipo de hardware",
            "Um sistema operacional"
        ],
        correct: 0
    },
    {
        question: "Qual é a função de um roteador?",
        answers: [
            "Criar gráficos",
            "Conectar dispositivos em uma rede",
            "Armazenar dados",
            "Imprimir documentos"
        ],
        correct: 1
    },
    {
        question: "O que é um endereço IP?",
        answers: [
            "Um tipo de hardware",
            "Um protocolo de comunicação",
            "Um identificador único para um dispositivo em uma rede",
            "Um tipo de software"
        ],
        correct: 2
    },
    {
        question: "O que significa 'malware'?",
        answers: [
            "Um tipo de hardware",
            "Um aplicativo de jogos",
            "Um software malicioso que danifica sistemas",
            "Um software de segurança"
        ],
        correct: 2
    },
    {
        question: "Qual é a função do DNS?",
        answers: [
            "Converter nomes de domínio em endereços IP",
            "Criar redes locais",
            "Armazenar dados",
            "Controlar o tráfego de internet"
        ],
        correct: 0
    },
    {
        question: "O que é um backup?",
        answers: [
            "Um dispositivo de armazenamento",
            "Um vírus",
            "Uma cópia de segurança de dados",
            "Um tipo de software"
        ],
        correct: 2
    },
    {
        question: "O que é um cookie na web?",
        answers: [
            "Um software de segurança",
            "Um tipo de arquivo de imagem",
            "Um tipo de malware",
            "Um pequeno arquivo que armazena informações sobre o usuário"
        ],
        correct: 3
    },
    {
        question: "O que é a virtualização?",
        answers: [
            "Criação de uma versão virtual de um dispositivo ou sistema",
            "Um tipo de hardware",
            "Um software de edição",
            "Um protocolo de internet"
        ],
        correct: 0
    },
    {
        question: "Qual a principal função de um antivírus?",
        answers: [
            "Proteger o computador contra vírus e malwares",
            "Acelerar o desempenho do computador",
            "Conectar o computador à internet",
            "Armazenar arquivos no computador"
        ],
        correct: 0
    },
    {
        question: "O que é uma URL?",
        answers: [
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Uniform Reference Link"
        ],
        correct: 1
    },
    {
        question: "Qual é a principal função da memória cache?",
        answers: [
            "Armazenar dados permanentemente",
            "Proteger o computador contra vírus",
            "Armazenar dados temporariamente para acesso rápido",
            "Conectar o computador à internet"
        ],
        correct: 2
    },
    {
        question: "O que é o sistema binário?",
        answers: [
            "Um dispositivo de armazenamento",
            "Uma rede de computadores",
            "Um tipo de software",
            "Um sistema de numeração usado por computadores"
        ],
        correct: 3
    },
    {
        question: "O que é um aplicativo?",
        answers: [
            "Uma rede de comunicação",
            "Um dispositivo de armazenamento",
            "Uma ferramenta de programação",
            "Um programa ou software para realizar tarefas específicas"
        ],
        correct: 3
    },
    {
        question: "O que significa HTTP?",
        answers: [
            "HyperText Technology Protocol",
            "HyperText Transfer Protocol",
            "HyperType Text Protocol",
            "High Transfer Text Protocol"
        ],
        correct: 1
    },
    {
        question: "O que é um processador?",
        answers: [
            "Um dispositivo de entrada",
            "Um software para gerenciar arquivos",
            "Uma unidade central de processamento que executa instruções",
            "Um tipo de memória do computador"
        ],
        correct: 2
    },
    {
        question: "O que é um periférico?",
        answers: [
            "Qualquer dispositivo conectado ao computador, como teclado ou mouse",
            "Uma rede de computadores",
            "Um tipo de software",
            "Um dispositivo de armazenamento"
        ],
        correct: 0
    },
    {
        question: "O que é a criptografia?",
        answers: [
            "A técnica de proteger informações com códigos",
            "Um tipo de malware",
            "Um método para melhorar o desempenho do computador",
            "Um sistema de backup de dados"
        ],
        correct: 0
    },
    {
        question: "O que é a internet das coisas (IoT)?",
        answers: [
            "Uma forma de backup na nuvem",
            "Uma rede de dispositivos conectados à internet",
            "Um novo tipo de sistema operacional",
            "Uma técnica de segurança de dados"
        ],
        correct: 1
    },
    {
        question: "O que significa Wi-Fi?",
        answers: [
            "Wireless Fidelity",
            "Wired Internet Fidelity",
            "Wide Internet Frequency",
            "World Internet Fidelity"
        ],
        correct: 0
    },

    {
        question: "O que é um SSD?",
        answers: [
            "Um tipo de processador",
            "Um tipo de disco rígido que usa memória flash",
            "Um software de edição de imagem",
            "Um dispositivo de entrada"
        ],
        correct: 1
    },
    {
        question: "O que é a computação em nuvem?",
        answers: [
            "Armazenamento de dados em dispositivos locais",
            "Processamento de dados em computadores sem conexão à internet",
            "Armazenamento e processamento de dados pela internet",
            "Um tipo de sistema operacional"
        ],
        correct: 2
    },
    {
        question: "O que é um dispositivo de entrada?",
        answers: [
            "Um software para editar textos",
            "Um dispositivo que envia dados para o computador, como teclado e mouse",
            "Um hardware para armazenar dados",
            "Um programa para navegar na internet"
        ],
        correct: 1
    },
    {
        question: "O que significa PDF?",
        answers: [
            "Portable Document Format",
            "Personal Data File",
            "Printed Digital File",
            "Portable Digital File"
        ],
        correct: 0
    },
    {
        question: "Qual é a função de um sistema de arquivos?",
        answers: [
            "Armazenar e organizar arquivos em um dispositivo de armazenamento",
            "Proteger o sistema contra vírus",
            "Gerenciar a conexão com a internet",
            "Aumentar o desempenho do computador"
        ],
        correct: 0
    },
    {
        question: "O que é uma VPN?",
        answers: [
            "Um tipo de dispositivo de armazenamento",
            "Uma rede privada que aumenta a segurança e privacidade na internet",
            "Um software para edição de vídeo",
            "Um protocolo de internet"
        ],
        correct: 1
    },
    {
        question: "O que significa BIOS?",
        answers: [
            "Basic Input Output System",
            "Binary Input Output Software",
            "Basic Internet Operating System",
            "Binary Integrated Operating System"
        ],
        correct: 0
    },
    {
        question: "Qual é a principal função de uma GPU?",
        answers: [
            "Processar dados de áudio",
            "Processar gráficos e imagens",
            "Armazenar dados temporários",
            "Gerenciar redes de computadores"
        ],
        correct: 1
    },
    {
        question: "O que é um hotspot?",
        answers: [
            "Um local onde o Wi-Fi está disponível publicamente",
            "Um tipo de malware",
            "Uma configuração de privacidade",
            "Um tipo de firewall"
        ],
        correct: 0
    },
    {
        question: "O que é overclocking?",
        answers: [
            "Aumentar a frequência de um componente para melhorar o desempenho",
            "Reduzir o consumo de energia de um dispositivo",
            "Proteger o hardware contra superaquecimento",
            "Desativar funções do sistema operacional"
        ],
        correct: 0
    },
    {
        question: "Qual é a função principal de um sistema RAID?",
        answers: [
            "Criar cópias de segurança automáticas",
            "Proteger contra malware",
            "Combinar múltiplos discos para aumentar desempenho ou redundância",
            "Gerenciar as permissões de arquivos"
        ],
        correct: 2
    },
    {
        question: "O que significa UX em design?",
        answers: [
            "User Experiment",
            "User Experience",
            "User External",
            "Universal Experience"
        ],
        correct: 1
    },
    {
        question: "O que é uma API?",
        answers: [
            "Um sistema de armazenamento de dados",
            "Uma interface que permite a comunicação entre softwares",
            "Um software de edição de imagens",
            "Um tipo de hardware"
        ],
        correct: 1
    },
    {
        question: "O que é um servidor?",
        answers: [
            "Um computador que fornece recursos ou serviços para outros computadores",
            "Um software para editar textos",
            "Um dispositivo de entrada",
            "Um sistema de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual a função de uma placa-mãe?",
        answers: [
            "Armazenar dados permanentemente",
            "Controlar a entrada e saída de dados",
            "Conectar e permitir a comunicação entre os componentes do computador",
            "Proteger o computador contra vírus"
        ],
        correct: 2
    },
    {
        question: "O que significa PHP?",
        answers: [
            "Programming Hypertext Protocol",
            "Preprocessor Hypertext",
            "Pre Hypertext Processor",
            "PHP Hypertext Preprocessor"
        ],
        correct: 3
    },
    {
        question: "Qual é a principal função do HDMI?",
        answers: [
            "Transmitir sinal de áudio e vídeo",
            "Aumentar a velocidade de conexão com a internet",
            "Armazenar dados temporários",
            "Proteger a rede contra ataques"
        ],
        correct: 0
    },
    {
        question: "O que é Bluetooth?",
        answers: [
            "Um protocolo de internet",
            "Uma tecnologia para comunicação sem fio em curtas distâncias",
            "Um software de edição de áudio",
            "Um tipo de processador"
        ],
        correct: 1
    },
    {
        question: "Qual é a função do IP estático?",
        answers: [
            "Aumentar a velocidade da internet",
            "Fornecer um endereço IP fixo para um dispositivo",
            "Proteger o computador contra vírus",
            "Monitorar a rede"
        ],
        correct: 1
    },
    {
        question: "O que é Linux?",
        answers: [
            "Um sistema operacional de código aberto",
            "Um dispositivo de entrada",
            "Um programa para navegar na internet",
            "Um tipo de vírus"
        ],
        correct: 0
    },
    {
        question: "Qual é a função de um dispositivo de saída?",
        answers: [
            "Enviar dados para o computador",
            "Exibir ou reproduzir dados processados pelo computador",
            "Armazenar dados permanentemente",
            "Conectar o computador à internet"
        ],
        correct: 1
    },
    {
        question: "O que significa JPEG?",
        answers: [
            "Java Programming Enhanced Graphics",
            "Joint Photographic Experts Group",
            "Java Protocol for Enhanced Graphics",
            "Joint Picture Editing Group"
        ],
        correct: 1
    },
    {
        question: "Qual é a principal função de um switch de rede?",
        answers: [
            "Armazenar dados permanentemente",
            "Conectar dispositivos em uma rede local",
            "Proteger o computador contra vírus",
            "Gerenciar o sistema operacional"
        ],
        correct: 1
    },
    {
        question: "O que é uma porta USB?",
        answers: [
            "Um protocolo de internet",
            "Um tipo de software",
            "Um conector universal para transferência de dados e energia",
            "Um sistema de segurança de rede"
        ],
        correct: 2
    },
    {
        question: "Qual é a função do Excel?",
        answers: [
            "Criar documentos de texto",
            "Navegar na internet",
            "Realizar cálculos e organizar dados em planilhas",
            "Desenvolver páginas web"
        ],
        correct: 2
    },
    {
        question: "O que significa HTTPS?",
        answers: [
            "HyperText Transfer Protocol Simple",
            "HyperText Transfer Protocol Secure",
            "Hyper Transfer Text Protocol Secure",
            "Hyperlink Text Transfer Protocol Secure"
        ],
        correct: 1
    },
    {
        question: "O que é um QR Code?",
        answers: [
            "Um tipo de malware",
            "Uma tecnologia de segurança",
            "Um código bidimensional para leitura rápida de informações",
            "Um tipo de software de edição de imagem"
        ],
        correct: 2
    },
    {
        question: "O que é o teclado QWERTY?",
        answers: [
            "Uma rede de comunicação",
            "Uma disposição padrão de teclas no teclado",
            "Um sistema de codificação de imagens",
            "Um tipo de software de edição de texto"
        ],
        correct: 1
    },
    {
        question: "Qual a função de uma impressora 3D?",
        answers: [
            "Armazenar dados temporários",
            "Produzir objetos físicos a partir de modelos digitais",
            "Proteger contra malwares",
            "Gerenciar arquivos de mídia"
        ],
        correct: 1
    },
    {
        question: "O que é uma rede peer-to-peer (P2P)?",
        answers: [
            "Uma rede onde os computadores compartilham recursos diretamente entre si",
            "Um sistema de backup de dados",
            "Um protocolo de segurança",
            "Uma rede de satélites"
        ],
        correct: 0
    }
];
let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';
let selectedCell = null;
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { X: 0, O: 0 };
let usedQuestions = [];
let availableQuestions = [...questions]; // Cópia inicial da lista de perguntas

const cells = document.querySelectorAll('[data-cell]');
const modal = document.getElementById('questionModal');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const notificationElement = document.getElementById('notification');
const player1Input = document.getElementById('player1Name');
const player2Input = document.getElementById('player2Name');
const startGameBtn = document.getElementById('startGameBtn');
const backToStartBtn = document.getElementById('backToStartBtn');
const nameSelection = document.getElementById('nameSelection');
const scoreBoard = document.getElementById('scoreBoard');
const playerXName = document.getElementById('playerXName');
const playerOName = document.getElementById('playerOName');
const boardElement = document.getElementById('board');

document.addEventListener('DOMContentLoaded', () => {
    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resetToNameForm();
        });
    }
});

startGameBtn.addEventListener('click', () => {
    player1Name = player1Input.value.trim();
    player2Name = player2Input.value.trim();

    if (!player1Name || !player2Name) {
        alert('Por favor, insira os nomes de ambos os jogadores!');
        return;
    }

    playerXName.textContent = `${player1Name}: ${scores.X}`;
    playerOName.textContent = `${player2Name}: ${scores.O}`;

    nameSelection.classList.add('hidden');
    scoreBoard.classList.remove('hidden');
    boardElement.classList.remove('hidden');
    backToStartBtn.classList.remove('hidden');
    currentPlayer = 'X';
});

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

function handleCellClick(cell, index) {
    if (board[index] !== '') return;
    selectedCell = { cell, index };
    showQuestion();
}

function showQuestion() {
    if (availableQuestions.length === 0) {
        // Todas as perguntas foram usadas; redefina a lista
        availableQuestions = [...questions];
        usedQuestions = [];
    }

    let randomIndex = Math.floor(Math.random() * availableQuestions.length);
    let randomQuestion = availableQuestions.splice(randomIndex, 1)[0];
    usedQuestions.push(randomQuestion);

    questionElement.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, sua pergunta é: ${randomQuestion.question}`;

    answersElement.innerHTML = '';
    randomQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'w-full p-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition';
        button.textContent = `${String.fromCharCode(97 + index)}) ${answer}`;
        button.dataset.index = index;
        button.dataset.correct = (index === randomQuestion.correct);
        button.addEventListener('click', () => checkAnswer(button, randomQuestion.correct));
        answersElement.appendChild(button);
    });

    modal.classList.remove('hidden');
}

function checkAnswer(selectedButton, correctIndex) {
    const allButtons = answersElement.querySelectorAll('button');
    
    allButtons.forEach(button => {
        button.disabled = true;
    });

    allButtons.forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.remove('bg-gray-800', 'hover:bg-gray-700');
            button.classList.add('bg-green-600');
        }
    });

    if (selectedButton.dataset.correct !== 'true') {
        selectedButton.classList.remove('bg-gray-800', 'hover:bg-gray-700');
        selectedButton.classList.add('bg-red-600');
    }

    setTimeout(() => {
        modal.classList.add('hidden');
        
        const isCorrect = selectedButton.dataset.correct === 'true';
        
        if (isCorrect) {
            notificationElement.classList.remove('notification-error');
            notificationElement.classList.add('notification-success');
            makeMove();
            checkWinner();
            showNotification('Resposta correta! Continue jogando!');
        } else {
            notificationElement.classList.remove('notification-success');
            notificationElement.classList.add('notification-error');
            showNotification('Resposta incorreta! Vez do próximo jogador!');
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }, 1500);
}

function makeMove() {
    const { cell, index } = selectedCell;
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600');
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        if (board[pattern[0]] &&
            board[pattern[0]] === board[pattern[1]] &&
            board[pattern[0]] === board[pattern[2]]) {
            
            showNotification(`${currentPlayer === 'X' ? player1Name : player2Name} venceu!`);
            scores[currentPlayer]++;
            updateScore();
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        showNotification('Empate!');
        resetGame();
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateScore() {
    playerXName.textContent = `${player1Name}: ${scores.X}`;
    playerOName.textContent = `${player2Name}: ${scores.O}`;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('text-blue-600', 'text-red-600');
    });
    currentPlayer = 'X';
}

function resetToNameForm() {
    player1Name = '';
    player2Name = '';
    player1Input.value = '';
    player2Input.value = '';
    
    scores = { X: 0, O: 0 };
    playerXName.textContent = 'Jogador X: 0';
    playerOName.textContent = 'Jogador O: 0';
    
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('text-blue-600', 'text-red-600');
    });

    usedQuestions = [];
    availableQuestions = [...questions]; // Reinicia a lista de perguntas disponíveis
    currentPlayer = 'X';

    nameSelection.classList.remove('hidden');
    scoreBoard.classList.add('hidden');
    boardElement.classList.add('hidden');
    backToStartBtn.classList.add('hidden');
    modal.classList.add('hidden');

    if (notificationElement) {
        notificationElement.style.display = 'none';
    }
}

function showNotification(message) {
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 3000);
}
