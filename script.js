const questions = {
    Geschichte: [
        { question: "Wer war der erste Präsident der USA?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt"], answer: "George Washington" },
        { question: "Wann begann der Zweite Weltkrieg?", options: ["1914", "1939", "1945", "1950"], answer: "1939" },
        { question: "Wer schrieb das 'Manifest der Kommunistischen Partei'?", options: ["Karl Marx", "Friedrich Nietzsche", "Immanuel Kant", "Max Weber"], answer: "Karl Marx" },
        { question: "In welchem Jahr fiel die Berliner Mauer?", options: ["1989", "1979", "1991", "1985"], answer: "1989" },
        { question: "Wer war der Anführer des deutschen Reichs während des Zweiten Weltkriegs?", options: ["Adolf Hitler", "Wilhelm II", "Otto von Bismarck", "Heinrich Himmler"], answer: "Adolf Hitler" },
        { question: "Wann begann die Französische Revolution?", options: ["1789", "1804", "1765", "1815"], answer: "1789" },
        { question: "Wer war der erste römische Kaiser?", options: ["Julius Caesar", "Augustus", "Nero", "Tiberius"], answer: "Augustus" },
        { question: "Wer war die britische Premierministerin im Jahr 1980?", options: ["Margaret Thatcher", "Elizabeth II", "Theresa May", "Winston Churchill"], answer: "Margaret Thatcher" },
        { question: "Wann wurde die Unabhängigkeitserklärung der USA unterzeichnet?", options: ["1776", "1789", "1754", "1801"], answer: "1776" },
        { question: "Wie viele Jahre dauerte der Dreissigjährige Krieg?", options: ["30", "20", "40", "25"], answer: "30" },
        { question: "Wer entdeckte Amerika 1492?", options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Amerigo Vespucci"], answer: "Christopher Columbus" },
        { question: "Welche Dynastie regierte China während der Grossen Mauer?", options: ["Qin", "Ming", "Tang", "Song"], answer: "Qin" },
        { question: "Wer führte Indien zur Unabhängigkeit?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
        { question: "Wann fand die Reformation von Martin Luther statt?", options: ["1517", "1618", "1453", "1492"], answer: "1517" },
        { question: "Wer war der Pharao während des Baus der Pyramiden von Gizeh?", options: ["Cheops", "Tutanchamun", "Ramses II", "Echnaton"], answer: "Cheops" },
        { question: "In welchem Jahr wurde Napoleon Bonaparte zum Kaiser gekrönt?", options: ["1804", "1812", "1789", "1799"], answer: "1804" },
        { question: "Welche Schlacht beendete die Napoleonischen Kriege?", options: ["Schlacht von Waterloo", "Schlacht von Trafalgar", "Schlacht von Austerlitz", "Schlacht von Leipzig"], answer: "Schlacht von Waterloo" },
        { question: "Wann endete der Erste Weltkrieg?", options: ["1918", "1914", "1920", "1939"], answer: "1918" },
        { question: "Wer war der erste Mensch im Weltraum?", options: ["Juri Gagarin", "Neil Armstrong", "Alan Shepard", "Buzz Aldrin"], answer: "Juri Gagarin" },
        { question: "Wer gründete das Osmanische Reich?", options: ["Osman I", "Süleyman der Prächtige", "Mehmed II", "Bayezid I"], answer: "Osman I" },
    ],
    Geografie: [
        { question: "Was ist die Hauptstadt von Kanada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
        { question: "Welcher Kontinent ist der grösste?", options: ["Asien", "Afrika", "Europa", "Amerika"], answer: "Asien" },
        { question: "Welcher Fluss ist der längste der Welt?", options: ["Nil", "Amazonas", "Donau", "Mississippi"], answer: "Nil" },
        { question: "Welches Land hat die grösste Bevölkerung?", options: ["China", "Indien", "USA", "Indonesien"], answer: "China" },
        { question: "Was ist der höchste Berg der Welt?", options: ["Mount Everest", "K2", "Kilimandscharo", "Annapurna"], answer: "Mount Everest" },
        { question: "Welcher Kontinent hat die meisten Länder?", options: ["Afrika", "Europa", "Asien", "Amerika"], answer: "Afrika" },
        { question: "Welcher See ist der tiefste der Welt?", options: ["Baikalsee", "Tanganjikasee", "Kaspisches Meer", "Victoria-See"], answer: "Baikalsee" },
        { question: "In welchem Land liegt die Sahara-Wüste?", options: ["Algerien", "Ägypten", "Libyen", "Alle diese Länder"], answer: "Alle diese Länder" },
        { question: "Welcher Fluss fliesst durch Paris?", options: ["Seine", "Thames", "Rhein", "Elbe"], answer: "Seine" },
        { question: "Welche Insel ist die grösste der Welt?", options: ["Grönland", "Neuguinea", "Borneo", "Madagaskar"], answer: "Grönland" },
        { question: "Welche Stadt wird als 'Stadt der Lichter' bezeichnet?", options: ["Paris", "New York", "London", "Berlin"], answer: "Paris" },
        { question: "Welcher Ozean ist der tiefste?", options: ["Pazifik", "Atlantik", "Indischer Ozean", "Arktischer Ozean"], answer: "Pazifik" },
        { question: "Wie viele Bundesländer hat Deutschland?", options: ["16", "13", "18", "15"], answer: "16" },
        { question: "Welcher Kontinent hat keine Wüste?", options: ["Europa", "Afrika", "Asien", "Australien"], answer: "Europa" },
        { question: "Was ist die Hauptstadt von Brasilien?", options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], answer: "Brasília" },
        { question: "Welcher Fluss fliesst durch Ägypten?", options: ["Nil", "Tigris", "Euphrat", "Jordan"], answer: "Nil" },
        { question: "Was ist die Hauptstadt von Australien?", options: ["Canberra", "Sydney", "Melbourne", "Brisbane"], answer: "Canberra" },
        { question: "Welches Land ist für die Fjorde bekannt?", options: ["Norwegen", "Schweden", "Island", "Finnland"], answer: "Norwegen" },
        { question: "Welche Inselgruppe gehört zu Spanien?", options: ["Balearen", "Azoren", "Hawaii", "Kanarische Inseln"], answer: "Balearen" },
        { question: "Welches Land hat die längste Küstenlinie der Welt?", options: ["Kanada", "Australien", "Russland", "USA"], answer: "Kanada" },
    ],
    Wissenschaft: [
        { question: "Was ist die chemische Formel für Wasser?", options: ["H2O", "CO2", "O2", "H2SO4"], answer: "H2O" },
        { question: "Wer entwickelte die Relativitätstheorie?", options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "Nikola Tesla"], answer: "Albert Einstein" },
        { question: "Was ist die Einheit der elektrischen Leistung?", options: ["Watt", "Volt", "Ampere", "Ohm"], answer: "Watt" },
        { question: "Welcher Planet ist der grösste im Sonnensystem?", options: ["Erde", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
        { question: "Was ist die chemische Formel für Kochsalz?", options: ["NaCl", "KCl", "H2SO4", "NH3"], answer: "NaCl" },
        { question: "Welches Metall leitet Strom am besten?", options: ["Silber", "Kupfer", "Gold", "Aluminium"], answer: "Silber" },
        { question: "Wie viele Planeten hat unser Sonnensystem?", options: ["8", "9", "7", "10"], answer: "8" },
        { question: "Was misst ein Thermometer?", options: ["Temperatur", "Druck", "Masse", "Energie"], answer: "Temperatur" },
        { question: "Welcher Wissenschaftler entdeckte die Schwerkraft?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Marie Curie"], answer: "Isaac Newton" },
        { question: "Welche Farbe hat Kupfer?", options: ["Rotbraun", "Silber", "Gold", "Schwarz"], answer: "Rotbraun" },
        { question: "Was bedeutet DNA?", options: ["Desoxyribonukleinsäure", "Deoxysäure", "Digital Nukleinsäure", "Desoxyneutrale Säure"], answer: "Desoxyribonukleinsäure" },
        { question: "Was ist das leichteste Element?", options: ["Wasserstoff", "Helium", "Sauerstoff", "Lithium"], answer: "Wasserstoff" },
        { question: "Welche Geschwindigkeit hat Licht?", options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "100.000 km/s"], answer: "300.000 km/s" },
        { question: "Wie viele Chromosomen hat der Mensch?", options: ["46", "48", "23", "50"], answer: "46" },
        { question: "Was ist die Einheit der Energie?", options: ["Joule", "Watt", "Volt", "Newton"], answer: "Joule" },
        { question: "Wer erfand das Periodensystem?", options: ["Dmitri Mendelejew", "Marie Curie", "Ernest Rutherford", "Niels Bohr"], answer: "Dmitri Mendelejew" },
        { question: "Welches Gas ist am häufigsten in der Erdatmosphäre?", options: ["Stickstoff", "Sauerstoff", "Kohlendioxid", "Argon"], answer: "Stickstoff" },
        { question: "Welche Art von Wellen sind Lichtwellen?", options: ["Elektromagnetisch", "Mechanisch", "Schallwellen", "Mikrowellen"], answer: "Elektromagnetisch" },
        { question: "Welcher Wissenschaftler entdeckte Penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"], answer: "Alexander Fleming" },
        { question: "Was ist der Aggregatzustand von Wasserdampf?", options: ["Gasförmig", "Flüssig", "Fest", "Plasma"], answer: "Gasförmig" },
    ],
    Kultur: [
        { question: "Wer malte die Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Pablo Picasso"], answer: "Leonardo da Vinci" },
        { question: "Welche Stadt ist berühmt für den Karneval?", options: ["Rio de Janeiro", "Venedig", "Köln", "New Orleans"], answer: "Rio de Janeiro" },
        { question: "In welchem Land entstand der Tango?", options: ["Argentinien", "Spanien", "Portugal", "Italien"], answer: "Argentinien" },
        { question: "Wer komponierte die 5. Symphonie?", options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"], answer: "Ludwig van Beethoven" },
        { question: "Welche Sprache wird in Brasilien gesprochen?", options: ["Portugiesisch", "Spanisch", "Italienisch", "Französisch"], answer: "Portugiesisch" },
        { question: "Welcher Schriftsteller schrieb 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "Johann Wolfgang von Goethe", "Mark Twain"], answer: "William Shakespeare" },
        { question: "Welches Gemälde ist in der Sixtinischen Kapelle zu finden?", options: ["Die Erschaffung Adams", "Die Nachtwache", "Die Sternennacht", "Das Abendmahl"], answer: "Die Erschaffung Adams" },
        { question: "Wo befindet sich der Louvre?", options: ["Paris", "Rom", "London", "Madrid"], answer: "Paris" },
        { question: "Welche Musikrichtung entstand in den 1920er Jahren in New Orleans?", options: ["Jazz", "Blues", "Rock", "Pop"], answer: "Jazz" },
        { question: "Welche Oper beginnt mit 'Vissi d'arte'?", options: ["Tosca", "Carmen", "La Bohème", "Die Zauberflöte"], answer: "Tosca" },
        { question: "Wer war der Hauptdarsteller in 'Titanic'?", options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"], answer: "Leonardo DiCaprio" },
        { question: "Welche Filmreihe wurde von George Lucas geschaffen?", options: ["Star Wars", "Star Trek", "Indiana Jones", "Harry Potter"], answer: "Star Wars" },
        { question: "Welches Instrument spielt ein Dirigent?", options: ["Keines", "Violine", "Piano", "Flöte"], answer: "Keines" },
        { question: "Wo liegt das Kolosseum?", options: ["Rom", "Athen", "Paris", "Madrid"], answer: "Rom" },
        { question: "Welche Nation hat den Flamenco-Tanz berühmt gemacht?", options: ["Spanien", "Italien", "Portugal", "Frankreich"], answer: "Spanien" },
        { question: "Welches Buch schrieb J.K. Rowling?", options: ["Harry Potter", "Der Herr der Ringe", "Die Chroniken von Narnia", "Eragon"], answer: "Harry Potter" },
        { question: "Welche Skulptur wurde von Michelangelo geschaffen?", options: ["David", "Venus von Milo", "Der Denker", "Pietà"], answer: "David" },
        { question: "Welcher Komponist schrieb 'Die Zauberflöte'?", options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Joseph Haydn"], answer: "Wolfgang Amadeus Mozart" },
        { question: "Welche Maltechnik wurde von Vincent van Gogh bekannt gemacht?", options: ["Impressionismus", "Expressionismus", "Postimpressionismus", "Klassizismus"], answer: "Postimpressionismus" },
        { question: "Welche Stadt ist bekannt für den 'Broadway'?", options: ["New York", "London", "Los Angeles", "Chicago"], answer: "New York" },
    ],
};

let currentQuestionIndex = 0;
let score = 0;
let currentCategory = "";

const correctSound = new Audio("correct.mp3"); // Add a correct answer sound
const incorrectSound = new Audio("incorrect.mp3"); // Add an incorrect answer sound

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("category").textContent = `Kategorie: ${category}`;
    document.getElementById("score-display").textContent = `Punkte: ${score}`;
    updateProgressBar(0);
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => handleAnswer(option, button);
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function handleAnswer(selectedOption, button) {
    const correctAnswer = questions[currentCategory][currentQuestionIndex].answer;

    // Disable all buttons after selecting an answer
    const allButtons = document.querySelectorAll("#options button");
    allButtons.forEach((btn) => (btn.disabled = true));

    if (selectedOption === correctAnswer) {
        score++;
        button.style.backgroundColor = "green"; // Correct answer
        correctSound.play(); // Play correct sound
    } else {
        button.style.backgroundColor = "red"; // Incorrect answer
        incorrectSound.play(); // Play incorrect sound
    }

    document.getElementById("score-display").textContent = `Punkte: ${score}`;
    updateProgressBar((currentQuestionIndex + 1) / questions[currentCategory].length * 100);

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentCategory].length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000); // 1-second delay
}

function updateProgressBar(percentage) {
    document.getElementById("progress-bar").style.width = `${percentage}%`;
}

function endQuiz() {
    document.getElementById("quiz").innerHTML = `
        <h2>Quiz abgeschlossen!</h2>
        <p>Dein Punktestand: ${score} von ${questions[currentCategory].length}</p>
        <button onclick="resetQuiz()">Zurück zum Menü</button>
        <canvas id="confetti-canvas"></canvas>
    `;
    startConfetti();
}

function resetQuiz() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("quiz").innerHTML = `
        <div id="progress-bar-container">
            <div id="progress-bar"></div>
        </div>
        <h2 id="category"></h2>
        <div id="question-container">
            <h3 id="question"></h3>
            <ul id="options"></ul>
        </div>
        <p id="score-display"></p>
    `;
    document.getElementById("quiz").style.display = "none";
}

function startConfetti() {
    const confettiSettings = { target: "confetti-canvas", max: 150, size: 1.2 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

document.addEventListener("DOMContentLoaded", () => {
    resetQuiz();
});
