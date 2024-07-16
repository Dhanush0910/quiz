let questions = [
    {
        numb: 1,
        question: "What does HTML stands for?",
        answer: "B. Hyper Text Markup Language",
        options:[
            "A. Hyper Text Main Language",
            "B. Hyper Text Markup Language",
            "C. Hyper Text Muliple Language",
            "D. Hyper Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stands for?",
        answer: "C. Cascading Style Sheet",
        options:[
            "A. Cascading Style State",
            "B. Calculated Style Sheet",
            "C. Cascading Style Sheet",
            "D. Calculated Style Sheet"
        ]
    },
    {
        numb:3,
        question: "What does JSON stands for?",
        answer: "A. JavaScript Object Notation",
        options:[
            "A. JavaScript Object Notation",
            "B. JavaScript Optimal Narration",
            "C. JavaScript Object Narration",
            "D. JavaScript Optimal Notation"
        ]
    },
    {
        numb:4,
        question: "Flutter is used to develop?",
        answer: "D. Cross platform mobile app",
        options:[
            "A. IOS mobile app",
            "B. Android mobile app",
            "C. Windows app",
            "D. Cross platform mobile app"
        ]
    },
    {
        numb:5,
        question: "What does JSOM stands for?",
        answer: "C. JavaScript Object Model",
        options:[
            "A. JavaScript Object Modulation",
            "B. JavaScript Oriented Modulation",
            "C. JavaScript Object Model",
            "D. JavaScript Oriented Model"
        ]
    },
]
const tryAgain = document.querySelector('.tryAgain');
tryAgain.onclick = () => {
    resultBox.classList.remove('on');
    container.classList.remove('active');

    questionCount=0;
    questionNumb=1;
    userScore=0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const next = document.querySelector('.next-one');
let container = document.querySelector('.container');
let resultBox = document.querySelector('.result-box');
next.onclick = () =>{
    if(questionCount < questions.length-1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        next.classList.remove('active');
    }
    else{
        container.classList.add('active');
        next.classList.remove('active');
        showResultBox();
    }
}

const optionsContainer = document.querySelector('.options-container');


function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

    let questionTag = `<button class="options-one">${questions[index].options[0]}</button>
       <button class="options-one">${questions[index].options[1]}</button>
       <button class="options-one">${questions[index].options[2]}</button>
       <button class="options-one">${questions[index].options[3]}</button>`;
       
    optionsContainer.innerHTML = questionTag;

    const option = document.querySelectorAll('.options-one');
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    

    if(userAnswer==correctAnswer){
        answer.classList.add('correct');
        userScore += 1;
    }
    else{
        answer.classList.add('incorrect');

        for(let i=0; i<optionsContainer.children.length; i++){
            if(optionsContainer.children[i].textContent == correctAnswer){
                optionsContainer.children[i].classList.add('correct');
            }
        }
    }

    for(let i=0; i<optionsContainer.children.length; i++){
        optionsContainer.children[i].classList.add('disabled');
    }
    next.classList.add('active');
}

function questionCounter(index){
    const questionTotal = document.querySelector('#question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function showResultBox() {
    resultBox.classList.add('on');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score is ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.progress-circle');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length)*100;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(cyan ${progressStartValue*3.6}deg, rgb(70, 67, 67) 0deg)`;

        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, 15);
}
