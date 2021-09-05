---
layout: post
section-type: post
featimg: /images/pic6.png
title: Rock Paper Scissors
category: tech
tags: [ 'games' ]
---

 <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script> 
 
<div class="container">
        <div class="projects-card">
            <div class="scoreboard">
                <div class="cat-div">
                    <div class="cat-name">YOU</div>
                    <div class="score" id="user-score">0</div>
                </div>
                <div class="cat-div">
                    <div class="cat-name">TIE</div>
                    <div class="score" id="tie-score">0</div>
                </div>
                <div class="cat-div">
                    <div class="cat-name">PARIS</div>
                    <div class="score" id="ai-score">0</div>
                </div>
            </div>
            <div class="card-con">
                <div class="player-card" id="user-card">
                    <div id="instructions">[1] Rock<br>[2] Paper<br>[3] Scissors<br><br>Use number keys or the buttons below </div>
                    <img class="display-img" id="user-img" src="./source.gif">
                    <div class="btn-con">
                        <div class="select-btn" id="rock" onClick="selection(this.id)"><div></div></div>
                        <div class="select-btn" id="paper" onClick="selection(this.id)"><div></div></div>
                        <div class="select-btn" id="scissors" onClick="selection(this.id)"><div></div></div>
                    </div>
                </div>
                <div class="player-card" id="ai-card">
                    <img class="display-img" id="ai-img" src="./source.gif">
                    <div class="btn-con">
                        <div class="select-btn" id="learn-more-btn"><div>Learn more about how I think</div></div>
                    </div>
                </div>
            </div>
            <div class="mobile-btn">
                    <div class="select-btn" id="rock" onClick="selection(this.id)"><div></div></div>
                    <div class="select-btn" id="paper" onClick="selection(this.id)"><div></div></div>
                    <div class="select-btn" id="scissors" onClick="selection(this.id)"><div></div></div>
            </div>
        </div>
        <div class="projects-card">
            <div class="post-inner">
                <h1>About PARIS</h1>
                <p>
                    In the past, you have probably settled an argument with a game of rock paper scissors. 
                    After all, it's a fair game where everyone has the same chances to win. In reality, however, 
                    everyone is different. A person's behavior can have a huge impact 
                    on their decision strategy. PARIS is an investigation into those behaviors.
                </p>
                <p>
                    PARIS is an AI that demonstrates the adaptability of simple algorithms. It learns to identify patterns in a person's previous decisions and predicts future behavior. It aims to find out the number of previous moves that should be considered for the best behavior prediction. 
                </p>
                <h1 id="think">How PARIS Thinks</h1>
                <p>
                    PARIS operates under the assumption that more recent events are more important in a person's decision. It takes your previous n moves and searches for instances when you have done the same move pattern. Using that, it predicts your next move and will act accordingly to win. 
                </p>
                <p>
                    For example, if you played rock and then scissors, PARIS will search through your move history for previous instances where you played a rock followed by a scissor. It will then look at your next move for each of those instances. Using an algorithm, it will assign probability values to rock, paper and scissors. It will then move to counter your most probable next move. For a 3 move pattern, it does the same with your past 3 moves instead. 
                </p>
                <div class="chart-con">
                    <canvas id="myChart" aria-label="PARIS thinking diagram" role="img"><p>Your browser does not support the canvas element.</p></canvas>
                </div>
                <p>
                    Above is how your current version of PARIS processes your previous n moves. Hover over the graph for more information. Refresh to get a different version of PARIS. 
                </p>
                <p>
                    To help investigate how much weight should be placed on each variable, PARIS needs your help! Play at least 20 rounds with PARIS to send in your game data and help find the settings to make PARIS a rock, paper, scissors world champion!
                </p>
            </div>
        </div>
 <script src="./scripts.js"></script>
