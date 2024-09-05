document.addEventListener("DOMContentLoaded", () => {
    const words = [
        { word: "abacaxi", hints: ["Fruta tropical", "Amarela por fora", "Tem espinhos", "Também é conhecido como ananás", "Muito usado em sucos e sobremesas"] },
        { word: "bicicleta", hints: ["Meio de transporte", "Tem duas rodas", "Pode ser pedalada", "Usa pedais", "Pode ter cesto"] },
        { word: "computador", hints: ["Dispositivo eletrônico", "Usado para processar informações", "Tem teclado e monitor", "Pode acessar a internet", "Usado para trabalho e lazer"] },
        { word: "dinossauro", hints: ["Animal pré-histórico", "Vivia na era dos dinossauros", "Alguns eram carnívoros", "Outros eram herbívoros", "Tem fósseis encontrados em escavações"] },
        { word: "elefante", hints: ["Animal de grande porte", "Tem tromba longa", "Tem grandes orelhas", "É o maior mamífero terrestre", "Vive em grupos sociais"] },
        { word: "fruta", hints: ["Alimento saudável", "Pode ser doce ou azeda", "Exemplos incluem maçã e banana", "Normalmente tem sementes", "Pode ser consumida fresca"] },
        { word: "geladeira", hints: ["Aparelho de cozinha", "Usada para conservar alimentos", "Tem compartimento para congelar", "Mantém a comida fria", "Encontrada na maioria das casas"] },
        { word: "hospital", hints: ["Lugar para tratamento médico", "Tem médicos e enfermeiros", "Oferece emergências", "Tem salas de cirurgia", "Você vai lá quando está doente"] },
        { word: "inseto", hints: ["Pequeno animal", "Tem seis pernas", "Pode ter asas", "Exemplos são formigas e abelhas", "Normalmente é encontrado em ambientes externos"] },
        { word: "janela", hints: ["Abertura em uma parede", "Permite a entrada de luz", "Pode ser de vidro", "Pode ser aberta e fechada", "Normalmente tem cortinas"] },
        { word: "ketchup", hints: ["Condimento vermelho", "Usado com batatas fritas", "Feito de tomate", "Tem sabor doce e ácido", "Muito popular em fast food"] },
        { word: "livro", hints: ["Objeto com páginas", "Usado para leitura", "Pode ser ficção ou não-ficção", "Tem capa e contracapa", "Encontrado em bibliotecas e livrarias"] },
        { word: "mesa", hints: ["Mobília de jantar", "Tem quatro pernas", "Usada para apoiar objetos", "Pode ser de madeira ou vidro", "Normalmente tem superfície plana"] },
        { word: "navio", hints: ["Veículo marítimo", "Usado para transporte de cargas", "Pode ser grande e luxuoso", "Viaja pelo oceano", "Tem várias cabines e pontes"] },
        { word: "óculos", hints: ["Usado para correção de visão", "Tem lentes", "Normalmente é usado no rosto", "Pode ter armação de metal ou plástico", "Ajuda a ver melhor"] },
        { word: "pintura", hints: ["Forma de arte", "Usa tintas e pincéis", "Pode ser feita em tela ou parede", "Pode ser abstrata ou figurativa", "Muitas vezes exposta em museus"] },
        { word: "quadro", hints: ["Objeto que exibe uma imagem", "Pode ser pintado ou fotografado", "Tem uma moldura", "Normalmente é pendurado na parede", "Usado para decoração"] },
        { word: "telefone", hints: ["Dispositivo de comunicação", "Usado para fazer ligações", "Pode ser fixo ou móvel", "Possui teclado ou tela de toque", "Também pode enviar mensagens"] },
        { word: "universidade", hints: ["Instituição de ensino superior", "Oferece cursos e diplomas", "Tem professores e alunos", "Normalmente tem um campus", "Oferece educação em várias áreas"] },
        { word: "viagem", hints: ["Ação de deslocar-se para outro lugar", "Pode ser de carro, avião ou trem", "Normalmente tem um destino", "Pode ser a lazer ou trabalho", "Requer planejamento"] },
        { word: "xícara", hints: ["Utensílio de cozinha", "Usada para beber líquidos quentes", "Tem uma alça", "Normalmente feita de cerâmica ou vidro", "Pode ter diferentes tamanhos e designs"] },
        { word: "zebra", hints: ["Animal selvagem", "Tem listras pretas e brancas", "Vive em savanas", "É um tipo de cavalo", "Encontra-se principalmente na África"] }
    ];

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function displayHints(hints) {
        const hintsList = document.getElementById("hints-list");
        hintsList.innerHTML = '';
        hints.forEach(hint => {
            const li = document.createElement("li");
            li.textContent = hint;
            hintsList.appendChild(li);
        });
    }

    function showMessage(message, color) {
        const resultText = document.getElementById("result");
        resultText.textContent = message;
        resultText.style.backgroundColor = color;
        resultText.style.color = "#fff";
        resultText.style.padding = "10px";
        resultText.style.borderRadius = "5px";
        resultText.style.display = "block";
    }

    function hideMessage() {
        const resultText = document.getElementById("result");
        resultText.style.display = "none";
    }

    function checkGuess(word) {
        const guessInput = document.getElementById("guess");
        const userGuess = guessInput.value.toLowerCase();
        if (userGuess === word) {
            showMessage("Parabéns! Você acertou!", "#005bb5");
        } else {
            showMessage("Tente novamente!", "#ff4c4c");
        }
    }

    function startNewGame() {
        const { word, hints } = getRandomWord();
        displayHints(hints);
        document.getElementById("guess").value = '';
        hideMessage();
        return word;
    }

    let currentWord = startNewGame();

    document.getElementById("submit").addEventListener("click", () => {
        checkGuess(currentWord);
    });

    document.getElementById("restart").addEventListener("click", () => {
        currentWord = startNewGame();
    });
});


// jogo da memoria
document.addEventListener("DOMContentLoaded", () => {
    const words = [
        "maçã", "banana", "laranja", "uva", "manga", "abacaxi", "morango", "kiwi",
        "pêssego", "pera", "coco", "limão", "melancia", "abóbora", "figo", "tâmara",
        "cabelos", "olhos", "boca", "mão", "pé", "orelha", "nariz", "dentes",
        "braço", "joelho", "pescoço", "ombro", "dedos", "perna", "pulso", "calcanhar",
        "joia", "anéis", "brincos", "colar", "pulseira", "relógio", "broche", "cordão",
        "colarinho", "gravata", "cinto", "chapéu", "sapato", "sandália", "botas", "meias"
    ];

    let selectedWords = words.slice(0, 18);
    let shuffledWords = [...selectedWords, ...selectedWords].sort(() => 0.5 - Math.random());
    let selectedCards = [];
    let matchedPairs = 0;
    const totalPairs = shuffledWords.length / 2;

    function createCard(word) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.word = word;
        card.addEventListener("click", () => flipCard(card));
        return card;
    }

    function setupGame() {
        const gameBoard = document.getElementById("game-board");
        gameBoard.innerHTML = '';
        shuffledWords.forEach(word => {
            gameBoard.appendChild(createCard(word));
        });
        document.getElementById("congratulations").style.display = 'none';
    }

    function flipCard(card) {
        if (selectedCards.length === 2 || card.classList.contains("flipped")) return;
        card.classList.add("flipped");
        card.textContent = card.dataset.word;

        selectedCards.push(card);

        if (selectedCards.length === 2) {
            checkMatch();
        }
    }

    function checkMatch() {
        const [card1, card2] = selectedCards;
        if (card1.dataset.word === card2.dataset.word) {
            matchedPairs++;
            selectedCards = [];
            if (matchedPairs === totalPairs) {
                document.getElementById("congratulations").style.display = 'block';
            }
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1.textContent = "";
                card2.textContent = "";
                selectedCards = [];
            }, 1000);
        }
    }

    document.getElementById("restart").addEventListener("click", () => {
        matchedPairs = 0;
        selectedWords = words.slice(0, 18);
        shuffledWords = [...selectedWords, ...selectedWords].sort(() => 0.5 - Math.random());
        setupGame();
    });

    setupGame();
});
