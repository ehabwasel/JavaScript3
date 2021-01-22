const URL ='https://opentdb.com/api.php?amount=5';
const titleDiv=document.getElementById("titleDiv")
const questionContainer=document.getElementById("container")
const title=document.createElement("h1")
const titlePara=document.createElement("p")
titlePara.textContent="Try Your Best To Figure Out The Answer. If You Really have no clue.click on the question to show the answer"
title.id="title"
title.textContent="Let's Play Some Trivia"
titleDiv.appendChild(title)
titleDiv.appendChild(titlePara)
let answer;
let data;
async function fetchData(){
  try{
    const response = await fetch(URL)
    const json =await response.json()
    data = json.results;
  }
  catch(error){
     console.log(error.message);}
  creatQuestion (data)}

fetchData()
async  function creatQuestion (data){
  data.forEach(element => {
    const questionPara=document.createElement("p")
     answer=document.createElement("p")
    questionPara.className="questionPara"
    answer.className="answer"
    questionPara.textContent=element.question.replace(/&quot;/g,'"') /**to remove &quot */ 
    answer.textContent=element.correct_answer.replace(/&quot;/g,'"')
    questionContainer.appendChild(questionPara)
    questionContainer.appendChild(answer)
    showAnswer(questionPara)
    start(answer)
  });
  }
 function showAnswer(target) {
  target.addEventListener('click', () => {
    target.classList.toggle('active');
    const toggled = target.nextElementSibling;
    if (toggled.style.display === 'block') {
      toggled.style.display = 'none';
    } else {
      toggled.style.display = 'block';
    }});
}
function start(hiddenAnswer){
  hiddenAnswer.style.display="none"
}


