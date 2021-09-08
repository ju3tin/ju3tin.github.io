---
layout: post
section-type: post
title: Science Museum Hackathon
category: tech
featimg: /images/pic9.png
tags: [ 'tutorial' ]
---

 
 
 <div id="svg_wrapper">
        <div id="output-audio" class="audio-on" onclick="TTSModule.toggle()" value="ON"></div>
        <button id="help" class="tooltip-dialog-btn" onclick="Sidebar.toggle()">What can I ask?</button>
        
    <!--     <div style="z-index:100; height:150%; width:100px position:fixed" align="center"><iframe align="middle" style="z-index:100" frameborder="0" src="https://devimages.eu-gb.mybluemix.net/images/sci-mu-landscape-2.svg"></iframe></div>-->
<svg id="svg_canvas" viewBox="0 0 1024 704" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
<img src="images/sci-mu-9000.svg" alt="Kiwi standing on oval">
       <!-- <div id="svg_size">
            <svg id="svg_canvas" viewBox="0 0 1024 704" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>-->
        <div class="chatUi">
            <div id="chat-scroll-wrapper"><div id="chat-flow"></div></div>
            <div id="input-wrapper" class="responsive-columns-wrapper">
                <div id="input-mic-holder">
                    <div id="input-mic" class="inactive-mic" onclick="STTModule.micON()"></div>
                </div>

<label for="user-input" class="input-outline responsive-column">
                  <input id="user-input" type="text" placeholder="Type something, e.g. “When is lunch”">
                </label>
            </div>
        </div>
        <div id="tooltip-dialog-list"></div>
        <div id="sidebar">
            <div class="close-div" onclick="Sidebar.toggle()">
                <img src="images/close-button.png" class="close" alt="close" />
            </div>
            <p class="pre-bar">I’m trained on these topics:</p>
            <ul id="suggestion-list"></ul>
        </div>
    </div>
<div id="chat" class="chat">
			<div id="messages" class="messages"></div>
			<input id="input" type="text" placeholder="Say something..." autocomplete="off" autofocus="true" />
		</div>
    
<script type="text/javascript" src="/chatbot/index.js" ></script>
<script type="text/javascript" src="/chatbot/constants.js" ></script>
<script type="text/javascript" src="/chatbot/speech.js" ></script>
