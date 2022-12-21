---
layout: postcopy
featimg: /images/pic5.png
section-type: post
title: Working With Maps 2
category: tech
custom_code: <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><link rel="stylesheet" href="./css/colorbox.css"/> <link rel="stylesheet" href="https://www.cssscript.com/demo/gallery-lightbox-mk/mklb/css/mklb.css"/><link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/><script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
custom_code_file : leafletcss.html
tags: [ 'games' ]
---
<table style="width:100%">
<tr>
<td><div id="findbox"></div>
<div id="map"></div></td>
<td id="info"></td>
</tr>
</table>
<div style="display:none" id="list"></div>
<div id="list2"></div>
<script src="https://unpkg.com/leaflet@1.3.0/dist/leaflet.js"></script>
<script src="/js/leaflet-search.js"></script>
<script src="/js/us-states.js"></script>
<script>
//sample data values define in us-states.js
function stateinfo2(element, id) {
let country = arr35a.find(el => el.id === id);
const info = document.getElementById("info");
const info33 = 'Name';
info.innerHTML = info33;
const para = document.createElement("div");
para.setAttribute("id", "info1");
para.setAttribute("class", "header");
const para2 = document.createElement("div");
para2.setAttribute("id", "info2");
para2.setAttribute("class", "header");
const para3 = document.createElement("div");
para3.setAttribute("id", "info3");
para3.setAttribute("class", "header");
para.innerHTML = id;
para2.innerHTML = id;
para3.innerHTML = id;
info.appendChild(para);
info.appendChild(para2);
info.appendChild(para3);
$.getJSON('https://members-api.parliament.uk/api/Location/Constituency/'+id, function(emp) {
$('#info1').html('<p>Constituency Name: ' + emp.value.name + '</p>');
$('#info1').append('<p>MP Name : ' + emp.value.currentRepresentation.member.value.nameFullTitle + '</p>');
$('#info1').append('<img src="' + emp.value.currentRepresentation.member.value.thumbnailUrl + '" alt="' + emp.value.currentRepresentation.member.value.nameFullTitle + '" width="100">');
$('#info1').append('<p>Party: '
+ emp.value.currentRepresentation.member.value.latestParty.name
+ '</p>');
});
$.getJSON('https://members-api.parliament.uk/api/Location/Constituency/'+id+'/Synopsis', function(emp1) {
$('#info2').html('<p>Member Info: ' + emp1.value + '</p>');
});
$.getJSON('https://members-api.parliament.uk/api/Location/Constituency/'+id+'/ElectionResults', function(emp3) {
var dude5 = emp3.value;
$('#info3').html('<p>Electorate Info: ' + dude5[0].electorate + '</p>');
$('#info3').append('<p>Majority : ' + dude5[0].majority + '</p>');
$('#info3').append('<p>Turnout : ' + dude5[0].turnout + '</p>');
});
};
var map = new L.Map('map', {zoom: 5, center: new L.latLng([55, -2]) });
map.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));//base layer
var dude77 = [];
var dude78 = [];
var arr34a = [];
var arr35a = [];
let a33 = -1;
let a35 = -1;
var uktownstate = {type:String("FeatureCollection"),features:[dude77]};
var data = statesData;
var data2 = uktownstate;
let text1 = "";
let text2 = "";
document.getElementById("list2").innerHTML = text2;
myfruit = {};
let xx = 0;
function getStreams() {
//let httpRequest;
let url = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640];
function makeRequest() {
url.forEach(async function(e) {
let httpRequest = new XMLHttpRequest();
if (!httpRequest) {
alert("can not create http instance!");
return false;
}
httpRequest.onreadystatechange = streams;
httpRequest.open('GET', 'https://members-api.parliament.uk/api/Location/Constituency/Search?skip='+e+'&take=20');
httpRequest.send();
});
}
function streams() {
if (this.readyState === this.DONE) {
let data = JSON.parse(this.response);
let e = 0;
const f = e++;
var data2 = data.items;
var data55 = data2.value;
let a = -1;
document.getElementById("list2").innerHTML = text2;
data2.forEach((data2, index) => {
if(data2.value.currentRepresentation == undefined){var data66 = 'Undefined'}else{var data66 = data2.value.currentRepresentation.member.value.latestParty.name};
if(data66 == 'Undefined'){var color = '#86848A'};
if(data66 == 'Labour'){var color = '#Ff0000'};
if(data66 == 'Scottish National Party'){var color = '#Fff800'};
if(data66 == 'Conservative'){var color = '#0038FF'};
if(data66 == 'Democratic Unionist Party'){var color = '#50A9D4'};
if(data66 == 'Plaid Cymru'){var color = '#EF00FF'};
if(data66 == 'Liberal Democrat'){var color = '#67A81B'};
if(data66 == 'Sinn Féin'){var color = '#6900FF'};
if(data66 == 'Independent'){var color = '#FFFFFF'};
if(data66 == 'Social Democratic & Labour Party'){var color = '#FF9E00'};
if(data66 == 'Alba Party'){var color = '#56A1A4'};
if(data66 == 'Green Party'){var color = '#38FF00'};
if(data66 == 'Labour (Co-op)'){var color = '#F7005A'};
if(data66 == 'Speaker'){var color = '#000000'};
if(data66 == 'Alliance'){var color = '#00FDFF'};
let httpRequest1 = new XMLHttpRequest();
httpRequest1.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
var str2 = this.responseText;
const after_ = str2.split('coordinates')[1];
const after66_ = str2.split('type')[1];
const after66a_ = after66_.substring(5);
const after1_ = after_.substring(3);
const before_ = after1_.split('}')[0];
const before66a_ = after66a_.split(',')[0];
const before66b_ = before66a_.replace('"', '');
const before66c_ = before66b_.split('n')[0]+'n';
++a;
++a35; 
console.log(data2.value.id +' - '+data66+' - '+data2.value.name+' - '+color+' - '+before66c_+' - '+before_);
arr35a[a35] = {type:String("Feature"),id:parseInt(data2.value.id),properties:{name:String(data2.value.name),color:String(color),party:String(data66)},geometry:{type:String(before66c_),coordinates:JSON.parse(before_)}};
if (a35 == 649){
var featuresLayer = new L.GeoJSON(arr35a, {
style: function(feature) {
return {color: feature.properties.color };
},
onEachFeature: function(feature, marker,) {
marker.bindPopup('<h4 style="color:black">'+ feature.properties.name +'<br /><button onclick="stateinfo2(this, \''+ feature.id +'\')">'+''+'Click Here For more info</button></h4>');
}
});
map.addLayer(featuresLayer);
var searchControl = new L.Control.Search({
container: 'findbox',
layer: featuresLayer,
propertyName: 'name',
marker: false,
moveToLocation: function(latlng, title, map) {
//map.fitBounds( latlng.layer.getBounds() );
var zoom = map.getBoundsZoom(latlng.layer.getBounds());
map.setView(latlng, zoom); // access the zoom
}
});
searchControl.on('search:locationfound', function(e) {
//console.log('search:locationfound', );
//map.removeLayer(this._markerSearch)
e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
if(e.layer._popup)
e.layer.openPopup();
}).on('search:collapsed', function(e) {
featuresLayer.eachLayer(function(layer) {//restore feature color
featuresLayer.resetStyle(layer);
});
});
map.addControl(searchControl);//inizialize search control
}
};
};
httpRequest1.open('GET', 'https://members-api.parliament.uk/api/Location/Constituency/'+data2.value.id+'/Geometry');
httpRequest1.send();
text1 += data2.value.id+" - "+data2.value.name+" - "+data66+"<br>";
});
}
}
makeRequest();
}
document.getElementById("list").innerHTML = text1;
const fruits2 = data2.features;
</script>
