/* Anthony Teo 2019 */

/* JS nav scrollto */
        var learnMore = document.querySelector("#think").offsetTop;
        var lmLink = document.querySelector("#learn-more-btn");
        lmLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo(0, learnMore);
        });

/* important elements */
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userImg = document.querySelector("#user-img");
const aiImg = document.querySelector("#ai-img");
/*scores*/
const aiScrElem = document.querySelector("#ai-score");
const userScrElem = document.querySelector("#user-score");
const tieScrElem = document.querySelector("#tie-score");

/* user and ai move history */
var userHist = "";
var aiHist = "";
var userScore = 0;
var aiScore = 0;
var tieScore = 0;

/* checks keypress for selection function trigger too */
document.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    if (key == "1") {
        selection("rock");
    } else if (key == "2") {
        selection("paper");
    } else if (key == "3") {
        selection("scissors");
    }
});

/* main function that takes userChoice and updates images and receives AI response */
function selection(userChoice) {
        document.querySelector("#instructions").style.display = "none";
        userImg.style.opacity = "1";
        var strUserChoice = ""
        /* ai predicts next move */
        var aiChoice = AiThink(userHist);
        /* updates user-side image */
        if (userChoice == "scissors") {
            userImg.src = "./scissors.svg";
            strUserChoice = "s";
        } else if (userChoice == "rock") {
            userImg.src = "./rock.svg";
            strUserChoice = "r";
        } else {
            userImg.src = "./paper.svg";
            strUserChoice = "p";
        }
        /* update ai image */
        if (aiChoice == "s") {
            aiImg.src = "./scissors.svg";
        } else if (aiChoice == "r") {
            aiImg.src = "./rock.svg";
        } else {
            aiImg.src = "./paper.svg";
        }
        /* updates score and text field on scoreboard */
        updateScore(strUserChoice, aiChoice);
        tieScrElem.innerHTML = tieScore;
        userScrElem.innerHTML = userScore;
        aiScrElem.innerHTML = aiScore;
        /* adds user move to history */
        userHist += strUserChoice
        console.log(userHist);
}

/* updates scoreboard */
function updateScore(userChoice, aiChoice) {
    if (userChoice == aiChoice) {
        tieScore += 1;
    }
    else if ((userChoice == "r" && aiChoice == "s") || (userChoice == "s" && aiChoice == "p") || (userChoice == "p" && aiChoice == "r")) {
        userScore += 1;
    } else {
        aiScore += 1;
    }
}

/* function to find all previous instances of a move pattern, then looking at the next potential move */
function allIndexOf(str, toSearch) {
    var indices = [];
    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        indices.push(pos + toSearch.length); /* next potential move */
    }
    return indices;
}

/* function to find all potential next moves and calculate probability */
/* takes in array of potential next moves, user move history, number of significant occurances, and how much should recent moves be weighted vs less recent ones */
function probMove(nextMoveIndexes, userHist, signif, pastWeight, recentWeight) {
    var occur = nextMoveIndexes.length;
    var nextMove = {
        pRock: 0, 
        pScissors: 0, 
        pPaper: 0
    };
    for (var i = 0; i < occur; i++) {
        if (occur < signif * 2) {
            var mWeight = (pastWeight + recentWeight) * 1.0 / occur;
            /* weight assignment code block */
            if (userHist[nextMoveIndexes[i]] == "r") {
                nextMove.pRock += mWeight;
            } else if (userHist[nextMoveIndexes[i]] == "s") {
                nextMove.pScissors += mWeight;
            } else {
                nextMove.pPaper += mWeight;
            }
        } else {
            /* if more than significant occurances arg, will count the nonsignificant occurances as only half of the weight total */
            if (i < occur - signif) {
                var mWeight = pastWeight * 1.0 / (occur - signif);
                    /* weight assignment code block */
                    if (userHist[nextMoveIndexes[i]] == "r") {
                        nextMove.pRock += mWeight;
                    } else if (userHist[nextMoveIndexes[i]] == "s") {
                        nextMove.pScissors += mWeight;
                    } else {
                        nextMove.pPaper += mWeight;
                    }
            
            } else {
                var mWeight = recentWeight * 1.0 / signif;
                    /* weight assignment code block */
                    if (userHist[nextMoveIndexes[i]] == "r") {
                        nextMove.pRock += mWeight;
                    } else if (userHist[nextMoveIndexes[i]] == "s") {
                        nextMove.pScissors += mWeight;
                    } else {
                        nextMove.pPaper += mWeight;
                    }
            }
        }
    }
    return nextMove;
}

/* function for random number */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* multiplying move object */
function moveMult(moveObj, num) {
    moveObj.pPaper *= num;
    moveObj.pScissors *= num;
    moveObj.pRock *= num;
}

/* adding move object */
function moveAdd(moveObj1, moveObj2) {
    moveObj1.pPaper += moveObj2.pPaper;
    moveObj1.pScissors += moveObj2.pScissors;
    moveObj1.pRock += moveObj2.pRock;
}


/* amount of weight given to analysis of two past moves and other previous moves */
var totalWeight = 10;
var twoWeight = getRandomInt(totalWeight);
var threeWeight = totalWeight - twoWeight;

/* the brain AI thinking algorithm */
function AiThink(userHist) {
    const round = userHist.length;

    if (round < 3) {
        console.log("learning...");
        var randChoice = getRandomInt(3);
        console.log("random", randChoice);
        if (randChoice == 2) {
            return "r";
        } else if (randChoice == 1) {
            return "s";
        }
        else {
            return "p";
        }
    } else {
        const twoHist = userHist.slice(round - 2, round);
        const popHist= userHist.slice(0, round - 1);
        
        /* predictions of next move from the past two moves */
        var twoNextMove = allIndexOf(popHist, twoHist);
        console.log(twoNextMove);
        /* gets nextMove object */
        twoUserMove = probMove(twoNextMove, userHist, 5, 5, 5);
        /* looking at past three moves as a pattern */
        const threeHist = userHist.slice(round - 3, round);
        const poppopHist= userHist.slice(0, round - 2);
        var threeNextMove = allIndexOf(poppopHist, threeHist);
        threeUserMove = probMove(threeNextMove, userHist, 3, 5, 5);
        /* total weight of each number of moves */
        moveMult(twoUserMove, twoWeight / totalWeight);
        moveMult(threeUserMove, threeWeight / totalWeight);
        moveAdd(twoUserMove, threeUserMove);
        console.log("paper", twoUserMove.pPaper);
        console.log("rock", twoUserMove.pRock);
        console.log("scissors", twoUserMove.pScissors);
        /* calculates AI next move */
        if (twoUserMove.pRock >= twoUserMove.pPaper && twoUserMove.pRock > twoUserMove.pScissors) {
            return "p";
        } else if (twoUserMove.pScissors > twoUserMove.pPaper && twoUserMove.pScissors >= twoUserMove.pRock) {
            return "r";
        } else if (twoUserMove.pPaper >= twoUserMove.pScissors && twoUserMove.pPaper > twoUserMove.pRock) {
            return "s";
        } else {
            var randChoice = getRandomInt(3);
            console.log("random", randChoice);
            if (randChoice == 2) {
                return "r";
            } else if (randChoice == 1) {
                return "s";
            }
            else {
                return "p";
            }
        }
    }

}

/* plots chartjs graph */
var ctx = document.getElementById('myChart');
/* var Chart = require('chart.js'); */
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Weight Placed (%)'],
        datasets: [{
            label: 'Past 2 Moves',
            data: [twoWeight * 100 / totalWeight],
            backgroundColor:
                'rgba(255, 99, 132, 0.2)',
            borderColor:
                'rgba(255, 99, 132, 1)',
            borderWidth: 1}, {
            /* next */
            label: 'Past 3 Moves',
            data: [threeWeight * 100 / totalWeight],
            backgroundColor: 
                'rgba(54, 162, 235, 0.2)',
            borderColor: 
                'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            text: "Weight of Previous n Moves",
            fontFamily: "'Open Sans', 'sans-serif'",
            fontSize: 12, 
            position: "bottom",
            display: true,
        }, 
        responsive: true,
        aspectRatio: 5,
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    display: false,
                    beginAtZero: true
                }
            }]
        }, 
        legend: {
            display: false,
        }
    } 
});

/* making graph labels show up on mobile */
function resGraph() {
    var devWidth = window.innerWidth;
    if(devWidth <= 900) {
        window.myChart.options.legend.display=true;
        window.myChart.options.maintainAspectRatio=false;
    }
    else {
        window.myChart.options.legend.display=false;
        window.myChart.options.maintainAspectRatio=true;
    }
}

window.onresize = resGraph;
