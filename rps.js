const sign = [
    `   _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,
   `_______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`,
`_______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`
];

const revsign = [
        `         _______
            (____   '---
    (_____)
    (_____)
    (____)
            (___)__.---
`,
        `            _______
              ___(____    '---
 (______
(_______
 (_______
            (__________.---
`,
    `
           _______
           ____(____    '---
(______
  (__________
      (____)
            (___)__.---
`
];

var score = 0;

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");

rock.addEventListener("click", () => choices(0));
paper.addEventListener("click", () => choices(1));
scissor.addEventListener("click", () => choices(2));

function choices(choice) {
    const com_choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        switch (com_choice) {
            case 0:
                document.getElementById("result").innerHTML = "Draw";
                break;
            case 1:
                document.getElementById("result").innerHTML = "Lose";
                score--;
                break;
            case 2:
                document.getElementById("result").innerHTML = "Win";
                score++;
                break;
        }
    } else if (choice === 1) {
        switch (com_choice) {
            case 0:
                document.getElementById("result").innerHTML = "Win";
                score++;
                break;
            case 1:
                document.getElementById("result").innerHTML = "Draw";
                break;
            case 2:
                document.getElementById("result").innerHTML = "Lose";
                score--;
                break;
        }
    } else if (choice === 2) {
        switch (com_choice) {
            case 0:
                document.getElementById("result").innerHTML = "Lose";
                score--;
                break;
            case 1:
                document.getElementById("result").innerHTML = "Win";
                score++;
                break;
            case 2:
                document.getElementById("result").innerHTML = "Draw";
                break;
        }
    }
    document.getElementById("myresult").innerHTML = sign[choice];
    document.getElementById("com_result").innerHTML = revsign[com_choice];
    document.getElementById("score").innerHTML = score;
    com_choice = null
}