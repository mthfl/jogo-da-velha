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
    }
];

let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';
let selectedCell = null;
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { X: 0, O: 0 };
let usedQuestions = [];

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
    if (usedQuestions.length === questions.length) {
        usedQuestions = [];
    }

    let randomQuestion;
    do {
        randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    } while (usedQuestions.includes(randomQuestion));

    usedQuestions.push(randomQuestion);
    questionElement.textContent = randomQuestion.question;

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