

const startButton = document.getElementById('start-btn') 

const nextButton = document.getElementById('next-btn') 

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log('Quiz have began you have 15 minutes remaning.')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question

    question.answers.forEach(answer => { 
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) { 
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // see if it run out of questions
    if (shuffledQuestions.length > currentQuestionIndex +1 ){
    // show next button to go to next question 
      nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Save Score'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// clear dataset class
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [ 
{
 question: 'How do you write "Hello World" in an alert box?',
 answers: [
     {text:'alert("Hello World");', correct: true},
     {text:'msgBox("Hello World");', correct: false},
     {text:'msg("Hello World");', correct: false},
     {text:'alertBox("Hello World");', correct: false},
    ]
},
{
    question: 'How do you create a function in JavaScript?',
    answers: [
        {text:'function = myFunction()', correct: false},
        {text:'function myFunction()', correct: true},
        {text:'function:myFunction()', correct: false},
       ]
   },
   {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
        {text:'<script>', correct: true},
        {text:'<scripting>', correct: false},
        {text:'<javascript>', correct: false},
        {text:'<js>', correct: false},
       ]
   },{
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
        {text:'<script href="xxx.js">', correct: false},
        {text:'<script name="xxx.js">', correct: false},
        {text:'<script src="xxx.js">', correct: true},
       ]
   },{
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
        {text:'The <head> section', correct: false},
        {text:'Both the <head> section and the <body> section are correct  ', correct: true},
        {text:'The <body> section', correct: false},
       ]
   },{
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: [
        {text:'False', correct: true},
        {text:'True', correct: false},
       ]
   },{
    question: 'How do you call a function named "myFunction"?',
    answers: [
        {text:'myFunction()', correct: true},
        {text:'call function myFunction()', correct: false},
        {text:'call myFunction()', correct: false},
       ]
   },{
    question: 'How to write an IF statement in JavaScript?',
    answers: [
        {text:'if (i == 5)', correct: true},
        {text:'if i == 5 then', correct: false},
        {text:'if i= 5 then', correct: false},
        {text:'if i= 5', correct: false},
       ]
   },{
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [
        {text:'if (i <> 5)', correct: false},
        {text:'if i=!5 then', correct: false},
        {text:'if i<> 5', correct: false},
        {text:'if (i !=5)', correct: true},
       ]
   },{
    question: 'How does a WHILE loop start?',
    answers: [
        {text:'while (i <=10 )', correct: true},
        {text:'while(i <= 10; i++)', correct: false},
        {text:'while i=1 to 10)', correct: false},
       ]
   },{
    question: 'How does a FOR loop start?',
    answers: [
        {text:'for (i = 0; i <= 5; i++)', correct: true},
        {text:'for (i <= 5; i++)', correct: false},
        {text:'for i = 1 to 5', correct: false},
        {text:'for (i = 0; i <= 5)', correct: false},
       ]
   },{
    question: 'How can you add a comment in a JavaScript?',
    answers: [
        {text:'<!--This is a comment-->', correct: false},
        {text:'//This is a comment ', correct: true},
        {text:'This is a comment', correct: false},
       ]
   },{
    question: 'How to insert a comment that has more than one line?',
    answers: [
        {text:'/*This comment has more than one line*/', correct: true},
        {text:'<!--This comment has more than one line-->', correct: false},
        {text:'//This comment hasmore than one line//', correct: false},
       ]
   },{
 question: 'What is the correct way to write a JavaScript array?',
 answers: [
     {text:'var colors = (1:"red", 2:"green", 3:"blue")', correct: false},
     {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false},
     {text:'var colors = ["red", "green", "blue"]', correct: true},
     {text:'var colors = "red", "green", "blue"', correct: false},
    ]
},{
    question: 'How do you round the number 7.25, to the nearest integer?',
    answers: [
        {text:'Math.round(7.25)', correct: true},
        {text:'round(7.25)', correct: false},
        {text:'Math.rnd(7.25)', correct: false},
        {text:'rnd(7.25)', correct: false},
       ]
   }
]