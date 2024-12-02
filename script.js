document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      text: "What’s my favourite way to set the mood?",
      options: ["Candlelight and soft music", "Dim lighting and whispered secrets", "A naughty text message beforehand", "Jump straight into it"],
      correct: 3,
      image: "images/question1.jpg",
      quote: "I love when you can't wait to get your hands on me."
    },
    {
      text: "How do I like to be touched at the beginning?",
      options: ["Light caresses down my back", "A gentle hand on my cheek", "Firm grips on my waist", "A playful smack"],
      correct: 0,
      image: "images/question2.jpg",
      quote: "Your touch sends shivers down my spine."
    },
    {
      text: "What’s the first piece of clothing you take off?",
      options: ["My shirt", "My bra", "My pants", "My panties"],
      correct: 3,
      image: "images/question3.jpg",
      quote: "Mmm, you know I like it when you go straight for the good stuff."
    },
    {
      text: "Where should you kiss me next?",
      options: ["My neck", "My chest", "Down my stomach", "Between my thighs"],
      correct: 3,
      image: "images/question4.jpg",
      quote: "Yes, right there. Don’t stop."
    },
    {
      text: "How do you handle teasing?",
      options: ["Go slow, make me beg", "Give me a little but hold back", "Go all-in immediately", "Let me take charge"],
      correct: 3,
      image: "images/question5.jpg",
      quote: "You know I like to be in control sometimes."
    },
    {
      text: "What’s my favourite toy?",
      options: ["Dildo", "Butt plug", "Lovense Lush", "Lovense Nora"],
      correct: 3,
      image: "images/question6.jpg",
      quote: "Oh yes, the perfect toy to get me going."
    },
    {
      text: "What’s my favourite dirty phrase?",
      options: ["Make me scream your name!", "Don’t stop, baby!", "You’re so bad for me!", "You feel so fucking good in my pussy!"],
      correct: 3,
      image: "images/question7.jpg",
      quote: "Mmm, that’s exactly it."
    },
    {
      text: "How do you finish me off?",
      options: ["Hard and fast", "Slow and steady", "Use toys and your mouth", "Let me do all the work"],
      correct: 0,
      image: "images/question8.jpg",
      quote: "Give it to me just like that."
    },
    {
      text: "Where do you focus most?",
      options: ["My chest", "My thighs", "My hips", "My clit"],
      correct: 3,
      image: "images/question9.jpg",
      quote: "Oh yes, you know exactly where to touch me."
    },
    {
      text: "What’s my ultimate fantasy?",
      options: ["A romantic candlelit night", "A tie-me-up and dominate me scenario", "A naughty public adventure", "Being fucked in front of everyone"],
      correct: 3,
      image: "images/question10.jpg",
      quote: "That’s my deepest, wildest fantasy."
    }
  ];

  let currentQuestion = 0;
  let correctAnswers = 0;

  // Select DOM elements
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const image = document.getElementById("question-image");
  const quoteContainer = document.getElementById("dirty-quote");
  const meterFill = document.getElementById("meter-fill");

function shuffleArray(array) {
  // Helper function to shuffle the array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showFinale();
    return;
  }

  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  quoteContainer.textContent = question.quote;
  image.src = question.image;
  image.alt = question.text; // Add alt text for accessibility

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Randomize options before displaying
  const shuffledOptions = shuffleArray(
    question.options.map((option, index) => ({ text: option, index }))
  );

  // Create buttons for each shuffled option
  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-button");
    button.addEventListener("click", () => checkAnswer(option.index));
    optionsContainer.appendChild(button);
  });

  feedback.textContent = ""; // Clear previous feedback
}

  // Check the answer
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
      feedback.textContent = "Mmm, yes! That’s the spot!";
      correctAnswers++;

      // Update the pleasure meter
      const progress = (correctAnswers / questions.length) * 100;
      meterFill.style.width = `${progress}%`;
    } else {
      feedback.textContent = "Ooh, not quite there yet...";
    }

    currentQuestion++;
    setTimeout(loadQuestion, 1500); // Delay before loading the next question
  }

  // Display the finale screen
  function showFinale() {
    questionText.textContent =
      correctAnswers >= 7
        ? "Oh yes! You made me cum!"
        : "Wow, you need to do better.";
    optionsContainer.innerHTML = "";
    feedback.textContent =
      correctAnswers >= 7
        ? "Play again to keep the pleasure going..."
        : "Try again and get it right!";
    image.src = correctAnswers >= 7 ? "images/finale.jpg" : "images/try-again.jpg";
    quoteContainer.textContent =
      correctAnswers >= 7
        ? "You’ve got me screaming your name..."
        : "You left me wanting more...";
  }

  // Start the game
  loadQuestion();
});
