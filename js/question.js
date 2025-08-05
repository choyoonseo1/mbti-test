import { questions } from "./data.js";

// console.log("질문페이지");
// //번호출력
// console.log(questions[0].number)
// console.log(questions[0].question)
// console.log(questions[0].choices[0].text)
// console.log(questions[0].choices[1].text)

const progressBar = document.querySelector(".progress .value");
const numberE1 = document.querySelector(".number");
const questionE1 = document.querySelector(".question");
const choice1E1 = document.querySelector(".choice1");
const choice2E1 = document.querySelector(".choice2");

let currentNumber = 0;

//mbti결과를 담을 변수 선언
let mbti='';

// choice1E1과 choiceE12에 클릭 이벤트를 걸어놓는다.
choice1E1.addEventListener('click', function(){
  nextQuestion(0);
})

choice2E1.addEventListener('click', function(){
  nextQuestion(1);
})


function nextQuestion(choiceNumber){
 if(currentNumber == questions.length - 1){
      // 검사한 MBTI결과를 갖고 결과페이지로 이동
      console.log('결과 페이지로 이동할거야')
      showResultPage();
      return
 }
 //mbti 결과 저장
  mbti = mbti + questions[currentNumber].choices[choiceNumber].value 
  console.log("mbti = " + mbti)
  currentNumber = currentNumber + 1;
  console.log(currentNumber)
  renderQuestion();
}

function showResultPage(){
  // 쿼리스트링을 만들어서 결과페이지를 호출
  location.href = './result.html?mbti=' + mbti;
}                            // ? ~ 쿼리스트링

function renderQuestion(){
const question = questions[currentNumber];
numberE1.innerHTML = question.number
questionE1.innerHTML = question.question
choice1E1.innerHTML = question.choices[0].text
choice2E1.innerHTML = question.choices[1].text
progressBar.style.width = (currentNumber+1)*10 + '%';
}

renderQuestion();



