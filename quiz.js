// WebDev ILab Assignment 4 - Prompt Quizzer – A Quiz Game

// 1. Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is the largest animal on Earth?", answer: "blue whale" },
  { question: "Who invented the light bulb?", answer: "thomas edison" },
  { question: "What is the chemical symbol for water?", answer: "h2o" }
];

// 2. Function to Run the Quiz
function runQuiz() {
  // 3. Score Initialization
  let score = 0;

  // 4. Loop Through Questions
  for (let i = 0; i < quizQuestions.length; i++) {
    // 5. Prompt for User Input
    let userInput = prompt(quizQuestions[i].question);

    // If user cancels the prompt, exit the quiz
    if (userInput === null) {
      alert("Quiz cancelled.");
      return;
    }

    // 6. Normalize the Input
    userInput = userInput.toLowerCase().trim();

    // 7. Check the Answer
    if (userInput === quizQuestions[i].answer) {
      score++; // correct → increase score
      // 8. Provide Immediate Feedback
      alert("Correct!");
    } else {
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // 9. Display Final Score
  alert("Quiz Complete! Your final score is " + score + " out of " + quizQuestions.length);
}

// 10. Run the Quiz in the Browser Console
runQuiz();
