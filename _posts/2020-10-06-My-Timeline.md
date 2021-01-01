---
layout: post
section-type: post
title: This is a timeline about me
category: tech
tags: [ 'tutorial' ]
custom_css:
- css/custom.css
- css/custom1.css
custom_js:
- dude.js
custom_code: <link rel="stylesheet" href="css/jquery-ui-1.8.5.custom.css" type="text/css"> <link rel="stylesheet" href="timeglider/Timeglider.css" type="text/css" media="screen" title="no title" charset="utf-8"> <link rel="stylesheet" href="docs-style.css" type="text/css" media="screen" title="no title" charset="utf-8"> <script type="text/javascript" src="https://use.typekit.com/hjz1sud.js"></script> <script type="text/javascript">try{Typekit.load();}catch(e){}</script> <script src="js/json2.js" type="text/javascript" charset="utf-8"></script> <script src="js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script> <script src="js/jquery-ui-1.10.3.custom.min.js" type="text/javascript" charset="utf-8"></script> <script src="js/jquery.qtip.js" type="text/javascript" charset="utf-8"></script><script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
---

This is a timeline about important and remberal things that have happened in my life I used the <a href="http://timeglider.com/widget/index.php">timeglider</a>. 
I was going to use <a href="https://timeline.knightlab.com">timelinejs</a>, But I dont like to use iframes and also it doesn't allow you to make changes to the css.
So I can make changes to the look and feel anyways hope you like it

<div class='page-content group'>
<div id='demo-placement' style="clear:both;margin-top:18px;"></div>



<script src="js/underscore-min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/backbone-min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.tmpl.js" type="text/javascript" charset="utf-8"></script>
<script src="js/ba-debug.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/ba-tinyPubSub.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.mousewheel.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.ui.ipad.js" type="text/javascript" charset="utf-8"></script>
<script src="js/globalize.js" type="text/javascript" charset="utf-8"></script>			
<script src="timeglider/TG_Date.js" type="text/javascript" charset="utf-8"></script>
<script src="timeglider/TG_Org.js" type="text/javascript" charset="utf-8"></script>
<script src="timeglider/TG_Timeline.js" type="text/javascript" charset="utf-8"></script> 
<script src="timeglider/TG_TimelineView.js" type="text/javascript" charset="utf-8"></script>
<script src="timeglider/TG_Mediator.js" type="text/javascript" charset="utf-8"></script> 
<script src="timeglider/timeglider.timeline.widget.js" type="text/javascript"></script>
<script src="timeglider/timeglider.datepicker.js" type="text/javascript"></script>
<script src="js/jquery.jscrollpane.min.js" type="text/javascript"></script>

<script>
$(function () {
var tg1 = $("#demo-placement").timeline({
"timezone":"-07:00",
"icon_folder":"timeglider/icons/",
"min_zoom":20, 
"max_zoom":52, 
"show_centerline":true,
"data_source":"json/js_history.json",
"show_footer":true,
"constrain_to_data":true,
"display_zoom_level":true
});
});
</script>

</div>
