---
layout: post
section-type: post
featimg: /images/blog/bg__photographer.jpg
title: Working With D3
category: tech
tags: [ 'tutorial' ]
custom_code: <link rel="stylesheet" href="./js/a/style.css" />
---

<div class="main" ng-controller="MainCtrl as sunburst">

<!-- visualization -->
<h2>Visualization</h2>
<p>Hover for data summary, click on visualization to reset summary.</p>
<p>Select example: <select ng-options="example for example in sunburst.examples" ng-model="sunburst.exampleSelected" ng-change="sunburst.selectExample(sunburst.exampleSelected)"></select></p>

<div class="visualization">
<sunburst data="sunburst.data"></sunburst>
</div>

<p>A sunburst visualization helps track population changes from initial states over lifecycles e.g. product churn rates, product conversions.</p>
<p>For custom testing, load up a file conforming to the data schema (see details below) or you can test out the following sample files (fake data):</p>
<ul>
<li><a href="data_android_os_conversion.csv" target="_blank">Android OS Conversions</a>
</li>
<li><a href="data_netflix_churn.csv" target="_blank">Netflix Churn</a>
</li>
<li><a href="data_page_clicks.csv" target="_blank">Page Clicks</a>
</li>
</ul>
<input id="fileUpload" type="file" on-read-file="sunburst.getData($fileContent)" />
<hr />



<!-- details -->
<div class="Details">
<h2>Details</h2>
<p>
This is a variation of the original <a href="http://bl.ocks.org/kerryrodden/7090426" target="_blank">sunburst sequence</a>. A major improvement to the original vis is to organize the code base and draw the D3 components (breadcrumbs, sunburst,
legend) from a single HTML <code>div</code> tag, and to dynamically assign color and legend scales.
</p>
<p>
The other improvement is generalizing and conventionalizing data inputs. The input requires a simple tabular schema of <code>sequence, stage, node, value</code> (see below) and the program will parse the data into a JSON graph.</p>
<p>The design of the data input therefore makes the visualization more useable on relational database queries. The CSV data can be unsorted but it must <em>NOT</em> contain a header, and has to conform to the following data column requirements.
</p>
<ul>
<li><code>sequence (int/string):</code> an ordered sequence that clearly defines the grouping of nodes.</li>
<li><code>stage (int): </code>the index/order of nodes in a given sequence.</li>
<li><code>node (int/string): </code>the data name of the node.</li>
<li><code>value (int): </code>the value at each stage of a given sequence. Only the final stage value in a given sequence is used in this visualization.</li>
</ul>
<hr />
</div>


<!-- data/file preview -->
<div class="preview">
<h2>Data</h2>
<pre>{{ sunburst.data }}</pre>
</div>
</div>

<script src="https://code.angularjs.org/1.3.5/angular.js"></script>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="./js/a/app.js"></script>
<script src="./js/a/sunburst.js"></script>