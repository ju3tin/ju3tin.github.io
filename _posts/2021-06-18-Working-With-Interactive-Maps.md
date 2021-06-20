---
layout: post
section-type: post
title: Working With Maps
category: tech
custom_code: <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/><script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
custom_code_file : leafletcss.html
tags: [ 'games' ]
---

 <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha384-VzLXTJGPSyTLX6d96AxgkKvE/LRb7ECGyTxuwtpjHnVWVZs2gp5RDjeM/tgBnVdM"
      crossorigin="anonymous"
    />

<script src="https://unpkg.com/jquery@3.6.0/dist/jquery.min.js" integrity="sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK" crossorigin="anonymous"></script><script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha384-RFZC58YeKApoNsIbBxf4z6JJXmh+geBSgkCQXFyh+4tiFSJmJBt+2FbjxW7Ar16M" crossorigin="anonymous"></script>


 <div id="map" style="width: 800px; height: 440px; border: 1px solid #AAA;"></div>

  <script type='text/javascript' src='maps/markers.js'></script>
   <!--<script type='text/javascript' src='maps/leaf-demo.js'></script>
   --><script type="text/javascript" src="us-states.js"></script>

<script type="text/javascript">

	var map = L.map('map').setView([37.8, -96], 4);
	

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

	L.marker([47.273015,-120.88227499999999]).bindPopup("Alabama").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Alaska").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Arizona").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Arkansas").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("California").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Colorado").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Connecticut").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Delaware").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("District of Columbia").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Florida").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Georgia").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Hawaii").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Idaho").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Illinois").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Indiana").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Iowa").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Kansas").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Kentucky").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Louisiana").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Maine").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Maryland").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Massachusetts").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Michigan").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Minnesota").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Mississippi").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Missouri").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Montana").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Nebraska").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Nevada").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("New Hampshire").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("New Jersey").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("New Mexico").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("New York").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("North Carolina").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("North Dakota").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Ohio").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Oklahoma").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Oregon").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Pennsylvania").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Rhode Island").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("South Carolina").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("South Dakota").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Tennessee").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Texas").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Utah").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Vermont").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Virginia").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Washington").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("West Virginia").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Wisconsin").addTo(map);
	L.marker([47.273015,-120.88227499999999]).bindPopup("Wyoming").addTo(map);
    	L.marker([47.273015,-120.88227499999999]).bindPopup("Puerto Rico").addTo(map);
	
	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
			: 'Hover over a state');
	};

	info.addTo(map);


	// get color depending on population density value
	function getColor(d) {
		return d > 1000 ? '#800026' :
				d > 500  ? '#BD0026' :
				d > 200  ? '#E31A1C' :
				d > 100  ? '#FC4E2A' :
				d > 50   ? '#FD8D3C' :
				d > 20   ? '#FEB24C' :
				d > 10   ? '#FED976' :
							'#FFEDA0';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);

	map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 10, 20, 50, 100, 200, 500, 1000],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);

</script>
