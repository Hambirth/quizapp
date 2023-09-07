const questions = [{


    'que': 'which of the following is the markup language',
    'a': "HTML",
    'b': 'PHP',
    'c': 'Python',
    'd': 'Javascript',
    'correct': 'a'



},


{
    'que': 'which of the following is javascript library',
    'a': 'HTML',
    'b': 'React',
    'c': 'Angular',
    'd': 'Javascript',
    'correct': 'b'

},


{



    'que': 'which of the following is used for functional component lifecycle method in react',
    'a': 'UseMEMO',
    'b': 'Useref',
    'c': 'UseEffect',
    'd': 'Javascript',
    'correct': 'c'




},



]

let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {

    if (index === total) {
        return endQuiz();
    }


    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index];

    const ans = getAnswer()
    if (ans === data.correct) {
        right++;

    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}



const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;

        }
    }
    )
    return answer;
}


const reset = () => {

    optionInputs.forEach(
        (input) => {
            input.checked = false
        }

    )

}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3> Thank you for playing the Quiz</h3>
    <h2>${right}/${total} are correct</h2> 
    `


}



loadQuestion();