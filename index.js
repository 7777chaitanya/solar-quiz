const chalk = require('chalk');
console.log(chalk.redBright.bold("Heyo friend! Welcome to Chaitanya's quiz challenge"));
console.log(chalk.green.bold.bgBlue("------------------------------------------------------"));
var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.yellow.bold("Please enter your name here to view the questions: "))
console.log();

welcome_statement = userName+", answer atleast 3/5 questions correctly in Level-1 correctly to advance to Level-2."
console.log(chalk.blue.bold((welcome_statement+"\n")));
console.log()
console.log(chalk.blue.bold.bgWhite("----------------------LEVEL 1----------------------"))
console.log()
var score = 0;
var leaderBoard = ["Hemanth","Nivash","Darshan"]

var q1 = "Which of the following part of the Sun is visible to humans?\n1) Photosphere\n2) Corona\n3) Chromospheres\n4) Core\n"

var q2 = "Which of the following part of the Sun is visible at the time of the eclipse?\n1) Photosphere\n2) Corona\n3) Chromosphere\n4) Core\n"

var q3 = "Which is the deepest point from the sea level on the Earth?\n1) North Channel\n2) Pacific Ocean\n3) Mariana Trench\n4) Red Sea\n"

var q4 = "What is the time taken by the light of the Sun to reach the Earth?\n1) 8 Minute\n2) 9 Minutes\n3) 7 Minutes 20 Second\n4) 8 Minutes 18 Second\n"

var q5 = "5. Which of the following is the largest planet of the Solar System according to size?\n1) Jupiter\n2) Saturn\n3) Neptune\n4) Uranus\n"


var questions = [{question:q1,answer:1},{question:q2,answer:2},{question:q3,answer:3},{question:q4,answer:4},{question:q5,answer:1}];

for(var i=0;i<questions.length;i++){
  console.log(chalk.green.bold.bgBlue("----------------------QUESTION "+(i+1)+"----------------------"));
  var userAnswer = readlineSync.question(chalk.greenBright(questions[i].question));
  if(userAnswer == questions[i].answer){
    console.log(chalk.green.bgBlue.bold("Woohooo! That's the right Answer!!\n"));
    score++;
  }
  else{
    console.log(chalk.redBright.bgWhite("That's a wrong answer."));
    score--;
  }
  
  console.log();
}

console.log(chalk.green.bold.bgBlue("Your score is "+score+"\n"));

if(score>=3){
  console.log(chalk.bold.red("Hooraay!You are advancing into Solar Quiz Level-2\n"))
  console.log(chalk.green.bold.bgBlue("Answer all the 3 questions correctly to grab a position in the prestigious Leaderboard!\n"));
  console.log(chalk.blue.bold.bgWhite("----------------------LEVEL 2----------------------\n"))

  var score1=0;

  var q6 = "What is the Sun mainly made from?\n1) Gas\n2) Molten Iron\n3) Liquid Lava\n4) Rock\n"

  var q7 = "In which planet is the largest volcano in the Solar System located?\n1) Earth\n2) Venus\n3) Mars\n4) Jupiter\n"

  var q8 = "Which planet do the moons Oberon and Titania belong to?\n1 Earth\n2) Jupiter\n3) Venus\n4) Uranus\n"

  var questions1 = [{question:q6,answer:1},{question:q7,answer:3},{question:q8,answer:4}];

  for(var i=0;i<questions1.length;i++){
  console.log(chalk.green.bold.bgBlue("----------------------QUESTION "+(i+1)+"----------------------"));
  var userAnswer = readlineSync.question(chalk.yellow(questions1[i].question));
  if(userAnswer == questions1[i].answer){
    console.log(chalk.green.bgBlue.bold("Woohooo! That's the right Answer!!\n"));
    score1++;
  }
  else{
    console.log(chalk.redBright.bgWhite("That's a wrong answer."));
    score1--;
  }
  
  console.log();
}

}
else{
  console.log(chalk.bold.red("Ohoo! Unlucky You! Better luck next time Amigo\n!"))
}


if(score1 === 3){
  leaderBoard.push(userName);
  console.log(chalk.bold.red("Congratulations "+userName+", You occupied a place in the Mega Quiz Leaderboard!\n"));
}
else{
  console.log(chalk.bold.yellow("You did not score enough to occupy the Leaderboard, "+userName+"\n!"));
}
console.log(chalk.bold.bgWhite.red("-----------------CURRENT LEADERBAORD----------------"));
if(leaderBoard.length!=0)
{
  for(let i=0;i<leaderBoard.length;i++){
    console.log(chalk.green((i+1)+") "+leaderBoard[i]))
  }
}