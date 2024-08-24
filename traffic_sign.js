const questions = [
    {
        question: "This sign mean?", //THIS IS FOR STOP SIGN
        image: "Stop.png",
        answers: [
            {text: "Stop", correct: true},
            {text: "Go Faster", correct: false},
            {text: "Yield the right of way", correct: false},
            {text: "Turn left", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR NO PARKING SIGN
        image: "No_parking.png",
        answers: [
            {text: "You can park your vehicle for a short duration, such as a few minutes, but you should stay with your vehicle", correct: false},
            {text: "Parking is allowed, but only during specific hours of the day", correct: false},
            {text: "Parking is prohibited at all times, except for very brief stops to load or unload passengers or goods", correct: true},
            {text: "Parking is allowed without any restrictions", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR LEFT MERGE SIGN
        image: "merge_left.png",
        answers: [
            {text: "You should should move into the right lane to exit the roadway", correct: false},
            {text: "You should slow down and prepare to stop", correct: false},
            {text: "You should change lanes and move to the left, as the lane ahead will end or narrow, and you must merge with traffic in the left lane.", correct: true},
            {text: "You should maintain your current lane and continue straight ahead", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR RAILROAD CROSSING SIGN
        image: "Railroad.jpg",
        answers: [
            {text: "You should speed up to clear the tracks quickly", correct: false},
            {text: "You are approaching a railroad crossing, and you should be prepared to stop if a train is coming", correct: true},
            {text: "You are approaching a school zone, so slow down and watch for children", correct: false},
            {text: "You are entering a construction zone, so be prepared for road closures", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR PHARMACY SIGN
        image: "Pharmacy.jpg",
        answers: [
            {text: "It marks th entrance to a grocery store", correct: false},
            {text: "It indicates a library is nearby", correct: false},
            {text: "It warns of a hazardous materials storage area", correct: false},
            {text: "It signals a nearby pharmacy facility", correct: true},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR HOSPITAL SIGN
        image: "Hospital_sign.png",
        answers: [
            {text: "It signals a nearby hospital", correct: true},
            {text: "It marks the location of a fire station", correct: false},
            {text: "It indicates the entrance to a shopping mall", correct: false},
            {text: "It warms of a construction zone ahead", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR TWO-WAY TRAFFIC SIGN
        image: "Two_way_traffic.jpg",
        answers: [
            {text: "It means that traffic is only allowed to travel in one direction on the road", correct: false},
            {text: "It indicates a dead end, and you must turn around", correct: false},
            {text: "It warns that the road is divided, and you will be sharing the roadway with vehicles traveling from the opposite direction", correct: true},
            {text: "It signals the start of a one-way street", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR NO U-TURN SIGN
        image: "No_U_turn.png",
        answers: [
            {text: "You are approaching a roundabout, and you must yield the right of way to vehicles already in the circle", correct: false},
            {text: "U-turns are allowed, but you should do them cautiously", correct: false},
            {text: "U-turns are mandatory, and you must make a U-turn ahead", correct: false},
            {text: "U-turns are not allowed at this location, and you should find another way to change your direction", correct: true},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR SLIPPERY WHEN WET SIGN
        image: "Slippery_when_wet.png",
        answers: [
            {text: "It suggests that the road is dry and safe for driving", correct: false},
            {text: "It indicates that the road surface may be slippery when wet due to rain, ice, or oil, and you should drive with caution", correct: true},
            {text: "It warns of an upcoming car wash facility", correct: false},
            {text: "It signals a nearby water park", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR LEFT CURVE AHEAD SIGN
        image: "Left_curve.jpg",
        answers: [
            {text: "It warns of a sharp turn to the right", correct: false},
            {text: "It signals that the road is straight ahead with no curves", correct: false},
            {text: "It warns of an upcoming curve to the left", correct: true},
            {text: "It indicates a roundabout ahead where traffic moves in a circular pattern", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR ROUNDABOUT AHEAD SIGN
        image: "round_about.png",
        answers: [
            {text: "No left turn", correct: false},
            {text: "Roundabout ahead", correct: true},
            {text: "Merge right", correct: false},
            {text: "Stop ahead", correct: false},
        ]
    },
    {
        question: "This sign mean?", //THIS IS FOR WRONG WAY SIGN
        image: "wrong_way.png",
        answers: [
            {text: "Do not drive past this sign, turn around", correct: true},
            {text: "This sign marks a road where traffic is allowed to flow in only one directions", correct: false},
            {text: "This sign advises you to stay to the right of the road or lane", correct: false},
            {text: "Stop ahead", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer_choices");
const nextButton = document.getElementById("next_btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    let questionImage = document.getElementById("question_image");
    questionImage.src = "Traffic_sign_symbols/" + currentQuestion.image;
    questionImage.alt = "Traffic Sign";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer) //WHEN WE CLICK ON THE ANSWER BUTTON, IT WILL CALL THE "selectAnswer" FUNCTION
    })
}


function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(i){
    const selectedBtn = i.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score ++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Practice Again?"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
