---
layout: post
section-type: post
title: Working With Maps
category: tech
custom_code: <link rel="stylesheet" href="https://www.cssscript.com/demo/gallery-lightbox-mk/mklb/css/mklb.css"/><link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/><script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
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
{% raw %}
<div class="container">
    <h1>MK Lightbox Image & Video Lightbox Examples</h1>
<p class="lead">A dead-simple JavaScript library to display your images and videos in a lightbox popup or a navigatable gallery lightbox without having to write any JS code.</p>
    <h2>Image Lightbox</h2>
    <img class="mklbItem demo" src="https://source.unsplash.com/p9t7g5ORALs/600x450" />
    <h2 class="mklbItem demo" data-video-src="https://www.jqueryscript.net/dummy/1.mp4">Video Lightbox</h2>
    <img class="mklbItem demo" src="https://source.unsplash.com/8CucspHlerY/600x450" data-video-src="https://www.jqueryscript.net/dummy/1.mp4" />
    <h2>Gallery Lightbox</h2>
    <img class="mklbItem demo" src="https://source.unsplash.com/p9t7g5ORALs/600x450" data-gallery="gallery1" />
    <img class="mklbItem demo" src="https://source.unsplash.com/8CucspHlerY/600x450" data-gallery="gallery1" />
    <img class="mklbItem demo" src="https://source.unsplash.com/cylcICfV7Bs/600x450" data-gallery="gallery1" />
</div>
{% endraw %}
<script src="https://www.cssscript.com/demo/gallery-lightbox-mk/mklb/js/mklb.js"></script>
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

	L.marker([32.576225,-86.680735]).bindPopup("Alabama").addTo(map);
	L.marker([64.4459613,-149.680909]).bindPopup("Alaska").addTo(map);
	L.marker([34.395342,-111.763275]).bindPopup("Arizona").addTo(map);
	L.marker([35.2048883,-92.4479108]).bindPopup("Arkansas").addTo(map);
	L.marker([36.7014631,-118.755997]).bindPopup("California").addTo(map);
	L.marker([38.7251776,-105.607716]).bindPopup("Colorado").addTo(map);
	L.marker([41.6500201,-72.7342163]).bindPopup("Connecticut").addTo(map);
	L.marker([38.6920451,-75.4013315]).bindPopup("Delaware").addTo(map);
	L.marker([38.8937936,-76.9879976]).bindPopup("District of Columbia").addTo(map);
	L.marker([27.7567667,-81.4639835]).bindPopup("Florida <button class="mklbItem demo" data-video-src="www.jqueryscript.net/dummy/1.mp4">Click me!</button>").addTo(map);
	L.marker([32.3293809,-83.1137366]).bindPopup("Georgia").addTo(map);
	L.marker([47.2868352,-120.212613]).bindPopup("Washington").addTo(map);
	L.marker([19.5872677,-155.4268897]).bindPopup("Hawaii").addTo(map);
	L.marker([43.6447642,-114.015407]).bindPopup("Idaho").addTo(map);
	L.marker([40.0796606,-89.4337288]).bindPopup("Illinois").addTo(map);
	L.marker([40.3270127,-86.1746933]).bindPopup("Indiana").addTo(map);
	L.marker([41.9216734,-93.3122705]).bindPopup("Iowa").addTo(map);
	L.marker([38.27312,-98.5821872]).bindPopup("Kansas").addTo(map);
	L.marker([37.5726028,-85.1551411]).bindPopup("Kentucky").addTo(map);
	L.marker([30.8703881,-92.007126]).bindPopup("Louisiana").addTo(map);
	L.marker([45.709097,-68.8590201]).bindPopup("Maine").addTo(map);
	L.marker([39.5162234,-76.9382069]).bindPopup("Maryland").addTo(map);
	L.marker([42.3788774,-72.032366]).bindPopup("Massachusetts").addTo(map);
	L.marker([43.6211955,-84.6824346]).bindPopup("Michigan").addTo(map);
	L.marker([45.9896587,-94.6113288]).bindPopup("Minnesota").addTo(map);
	L.marker([32.9715645,-89.7348497]).bindPopup("Mississippi").addTo(map);
	L.marker([38.7604815,-92.5617875]).bindPopup("Missouri").addTo(map);
	L.marker([47.3752671,-109.638757]).bindPopup("Montana").addTo(map);
	L.marker([41.7370229,-99.5873816]).bindPopup("Nebraska").addTo(map);
	L.marker([39.5158825,-116.8537227]).bindPopup("Nevada").addTo(map);
	L.marker([43.4849133,-71.6553992]).bindPopup("New Hampshire").addTo(map);
	L.marker([40.0757384,-74.4041622]).bindPopup("New Jersey").addTo(map);
	L.marker([34.5708167,-105.993007]).bindPopup("New Mexico").addTo(map);
	L.marker([40.7127281,-74.0060152]).bindPopup("New York").addTo(map);
	L.marker([35.6729639,-79.0392919]).bindPopup("North Carolina").addTo(map);
	L.marker([47.6201461,-100.540737]).bindPopup("North Dakota").addTo(map);
	L.marker([40.2253569,-82.6881395]).bindPopup("Ohio").addTo(map);
	L.marker([34.9550817,-97.2684063]).bindPopup("Oklahoma").addTo(map);
	L.marker([43.9792797,-120.737257]).bindPopup("Oregon").addTo(map);
	L.marker([40.9699889,-77.7278831]).bindPopup("Pennsylvania").addTo(map);
	L.marker([41.7962409,-71.5992372]).bindPopup("Rhode Island").addTo(map);
	L.marker([33.6874388,-80.4363743]).bindPopup("South Carolina").addTo(map);
	L.marker([44.6471761,-100.348761]).bindPopup("South Dakota").addTo(map);
	L.marker([35.7730076,-86.2820081]).bindPopup("Tennessee").addTo(map);
	L.marker([31.8160381,-99.5120986]).bindPopup("Texas").addTo(map);
	L.marker([39.4225192,-111.714358]).bindPopup("Utah").addTo(map);
	L.marker([44.5990718,-72.5002608]).bindPopup("Vermont").addTo(map);
	L.marker([37.1232245,-78.4927721]).bindPopup("Virginia").addTo(map);
	L.marker([38.8950368,-77.0365427]).bindPopup("Washington").addTo(map);
	L.marker([38.4758406,-80.8408415]).bindPopup("West Virginia").addTo(map);
	L.marker([44.4308975,-89.6884637]).bindPopup("Wisconsin").addTo(map);
	L.marker([43.1700264,-107.568534]).bindPopup("Wyoming").addTo(map);
	L.marker([18.2214149,-66.4132818]).bindPopup("Puerto Rico").addTo(map);
    
	
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

    function onEachFeature(feature, layer) {
		var popupContent = "<p>I started out as a GeoJSON " +
				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;
		}

		layer.bindPopup(popupContent);
	}
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

/*	function onEachFeature(feature, layer) {
		var popupContent = "<p>I started out as a GeoJSON " +
				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;
		}

		layer.bindPopup(popupContent);
	}
*/
	L.geoJSON(bicycleRental, {

		style: function (feature) {
			return feature.properties && feature.properties.style;
		},

		onEachFeature: onEachFeature,

		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 8,
				fillColor: "#ff7800",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
	}).addTo(map);

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
