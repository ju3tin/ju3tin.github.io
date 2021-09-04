---
title: "Working With D3"
featimg: images/pic2.png
---
<script src="https://d3js.org/d3.v3.min.js"></script>
<script type="text/javascript">
// Hack to make this example display correctly in an iframe on bl.ocks.org
d3.select(self.frameElement).style("height", "700px");
</script>

<div id="main">
<div id="sequence"></div>
<div id="chart">
<div id="explanation" style="visibility: hidden;">
<span id="percentage"></span><br/>
customer comments fell into this category.
</div>
</div>
</div>
<div id="sidebar">
<input type="checkbox" id="togglelegend"> Legend<br/>
<div id="legend" style="visibility: hidden;"></div>
</div>
<script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-8216c69d01441f36c0ea791ae2d4469f0f8ff5326f00ae2d00e4bb7d20e24edb.js"></script>


<script id="rendered-js" >
// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
w: 150, h: 25, s: 5, t: 10 };


// Mapping of step names to colors.
var colors = {
"suggestions": "#A91A09",
"product": "#45B29D",
"customer service": "#EFC94C",
"corporate": "#E27A3F",
"communications": "#DF4949",
"customer employee relations": "#48892F",
"commerce": "#334D5C" };


// Total size of all segments; we set this later, after loading the data.
var totalSize = 0;

var vis = d3.select("#chart").append("svg:svg").
attr("width", width).
attr("height", height).
append("svg:g").
attr("id", "container").
attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition().
size([2 * Math.PI, radius * radius]).
value(function (d) {return d.size;});

var arc = d3.svg.arc().
startAngle(function (d) {return d.x;}).
endAngle(function (d) {return d.x + d.dx;}).
innerRadius(function (d) {return Math.sqrt(d.y);}).
outerRadius(function (d) {return Math.sqrt(d.y + d.dy);});

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.

var text = "commerce-delivery-quick turnover,31\n\
commerce-delivery-shipping,24\n\
commerce-costs-price topics,19\n\
commerce-costs-good price,10\n\
commerce-costs-expensive,2\n\
commerce-merchandise-purchasing goods,155\n\
commerce-merchandise-good buying experience,26\n\
commerce-merchandise-returning goods,15\n\
commerce-merchandise-eCommerce topics,7\n\
communications-communication topics,283\n\
communications-communication problems,40\n\
communications-left message for rep,6\n\
communications-no experience to report,1\n\
corporate-company representatives,372\n\
corporate-company information,121\n\
corporate-general problems,66\n\
corporate-failures,16\n\
corporate-good company,15\n\
customer employee relations-good employees,93\n\
customer employee relations-responsive,58\n\
customer employee relations-helpful staff,52\n\
customer employee relations-friendly employees,38\n\
customer employee relations-reliable,12\n\
customer service-good customer service,466\n\
customer service-customer service,100\n\
customer service-poor customer service,26\n\
customer service-no problems to mention,15\n\
customer service-wait time,7\n\
product-general product,539\n\
product-quality products,77\n\
product-product quality,22\n\
product-need products,14\n\
product-cannot use product,13\n\
suggestions-maintain service level,71\n\
suggestions-lower shipping costs,28\n\
suggestions-better product instruction,8\n\
suggestions-better batteries,7\n\
suggestions-merchandise return,7\n\
";
var csv = d3.csv.parseRows(text);
var json = buildHierarchy(csv);
createVisualization(json);


// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

// Basic setup of page elements.
initializeBreadcrumbTrail();
drawLegend();
d3.select("#togglelegend").on("click", toggleLegend);

// Bounding circle underneath the sunburst, to make it easier to detect
// when the mouse leaves the parent g.
vis.append("svg:circle").
attr("r", radius).
style("opacity", 0);

// For efficiency, filter nodes to keep only those large enough to see.
var nodes = partition.nodes(json).
filter(function (d) {
return d.dx > 0.005; // 0.005 radians = 0.29 degrees
});

var path = vis.data([json]).selectAll("path").
data(nodes).
enter().append("svg:path").
attr("display", function (d) {return d.depth ? null : "none";}).
attr("d", arc).
attr("fill-rule", "evenodd").
style("fill", function (d) {return colors[d.name];}).
style("opacity", 1).
on("mouseover", mouseover);

// Add the mouseleave handler to the bounding circle.
d3.select("#container").on("mouseleave", mouseleave);

// Get total size of the tree = value of root node from partition.
totalSize = path.node().__data__.value;
};

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

var percentage = d.value;
var percentageString = percentage + " comments";
if (percentage < 0.1) {
percentageString = "< 0.1%";
}

d3.select("#percentage").
text(percentage);

d3.select("#explanation").
style("visibility", "");

var sequenceArray = getAncestors(d);
updateBreadcrumbs(sequenceArray, percentageString);

// Fade all the segments.
d3.selectAll("path").
style("opacity", 0.3);

// Then highlight only those that are an ancestor of the current segment.
vis.selectAll("path").
filter(function (node) {
return sequenceArray.indexOf(node) >= 0;
}).
style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

// Hide the breadcrumb trail
d3.select("#trail").
style("visibility", "hidden");

// Deactivate all segments during transition.
d3.selectAll("path").on("mouseover", null);

// Transition each segment to full opacity and then reactivate it.
d3.selectAll("path").
transition().
duration(1000).
style("opacity", 1).
each("end", function () {
d3.select(this).on("mouseover", mouseover);
});

d3.select("#explanation").
transition().
duration(1000).
style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
var path = [];
var current = node;
while (current.parent) {if (window.CP.shouldStopExecution(0)) break;
path.unshift(current);
current = current.parent;
}window.CP.exitedLoop(0);
return path;
}

function initializeBreadcrumbTrail() {
// Add the svg area.
var trail = d3.select("#sequence").append("svg:svg").
attr("width", width).
attr("height", 50).
attr("id", "trail");
// Add the label at the end, for the percentage.
trail.append("svg:text").
attr("id", "endlabel").
style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
var points = [];
points.push("0,0");
points.push(b.w + ",0");
points.push(b.w + b.t + "," + b.h / 2);
points.push(b.w + "," + b.h);
points.push("0," + b.h);
if (i > 0) {// Leftmost breadcrumb; don't include 6th vertex.
points.push(b.t + "," + b.h / 2);
}
return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

// Data join; key function combines name and depth (= position in sequence).
var g = d3.select("#trail").
selectAll("g").
data(nodeArray, function (d) {return d.name + d.depth;});

// Add breadcrumb and label for entering nodes.
var entering = g.enter().append("svg:g");

entering.append("svg:polygon").
attr("points", breadcrumbPoints).
style("fill", function (d) {return colors[d.name];});

entering.append("svg:text").
attr("x", (b.w + b.t) / 2).
attr("y", b.h / 2).
attr("dy", "0.35em").
attr("text-anchor", "middle").
text(function (d) {return d.name;});

// Set position for entering and updating nodes.
g.attr("transform", function (d, i) {
return "translate(" + i * (b.w + b.s) + ", 0)";
});

// Remove exiting nodes.
g.exit().remove();

// Now move and update the percentage at the end.
d3.select("#trail").select("#endlabel").
attr("x", (nodeArray.length + 0.5) * (b.w + b.s)).
attr("y", b.h / 2).
attr("dy", "0.35em").
attr("text-anchor", "middle").
text(percentageString);

// Make the breadcrumb trail visible, if it's hidden.
d3.select("#trail").
style("visibility", "");

}

function drawLegend() {

// Dimensions of legend item: width, height, spacing, radius of rounded rect.
var li = {
w: 75, h: 30, s: 3, r: 3 };


var legend = d3.select("#legend").append("svg:svg").
attr("width", li.w).
attr("height", d3.keys(colors).length * (li.h + li.s));

var g = legend.selectAll("g").
data(d3.entries(colors)).
enter().append("svg:g").
attr("transform", function (d, i) {
return "translate(0," + i * (li.h + li.s) + ")";
});

g.append("svg:rect").
attr("rx", li.r).
attr("ry", li.r).
attr("width", li.w).
attr("height", li.h).
style("fill", function (d) {return d.value;});

g.append("svg:text").
attr("x", li.w / 2).
attr("y", li.h / 2).
attr("dy", "0.35em").
attr("text-anchor", "middle").
text(function (d) {return d.key;});
}

function toggleLegend() {
var legend = d3.select("#legend");
if (legend.style("visibility") == "hidden") {
legend.style("visibility", "");
} else {
legend.style("visibility", "hidden");
}
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
var root = { "name": "root", "children": [] };
for (var i = 0; i < csv.length; i++) {if (window.CP.shouldStopExecution(1)) break;
var sequence = csv[i][0];
var size = +csv[i][1];
if (isNaN(size)) {// e.g. if this is a header row
continue;
}
var parts = sequence.split("-");
var currentNode = root;
for (var j = 0; j < parts.length; j++) {if (window.CP.shouldStopExecution(2)) break;
var children = currentNode["children"];
var nodeName = parts[j];
var childNode;
if (j + 1 < parts.length) {
// Not yet at the end of the sequence; move down the tree.
var foundChild = false;
for (var k = 0; k < children.length; k++) {if (window.CP.shouldStopExecution(3)) break;
if (children[k]["name"] == nodeName) {
childNode = children[k];
foundChild = true;
break;
}
}
// If we don't already have a child node for this branch, create it.
window.CP.exitedLoop(3);if (!foundChild) {
childNode = { "name": nodeName, "children": [] };
children.push(childNode);
}
currentNode = childNode;
} else {
// Reached the end of the sequence; create a leaf node.
childNode = { "name": nodeName, "size": size };
children.push(childNode);
}
}window.CP.exitedLoop(2);
}window.CP.exitedLoop(1);
return root;
};
//# sourceURL=pen.js
</script>
