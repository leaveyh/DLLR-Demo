var arrCounties = [];

var width = "100%",
    height = "550";

var projection = d3.geo.mercator()
    .scale(4500)
    .translate([6275, 3300]);

var path = d3.geo.path()
    .projection(projection);

var q = queue()
    .defer(d3.json, "geojson/MD-counties.json")
    .await(ready);

function ready(error, counties) {

    window.error = error;
    window.counties = counties;
    if (error) throw error;

    var svg = d3.select("#md-map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", "0 0 400 1")
		.attr("id", "md-svg")
    /**    .call(d3.behavior.zoom().on("zoom", function () {
			//Enable mouse wheel zoom and pan on the visualization
			svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
		})) **/
		.append("g");
		
    svg.append("g")
        .attr("id", "counties")
        .selectAll("path")
        .data(counties.features)
        .enter().append("path")
        .attr("class", "md-county")
        .attr("d", path)
		.attr("cID", function (d) { 
			//Add an attribute 'cID' that references each path's index in the global arrCounties array
			//This is referenced in our onClick event to pull back properties from the original GeoJSON data
			arrCounties.push(d); 
			return arrCounties.length - 1;
		});

    window.svg = svg;
	
	//Attach a onClick event handler to each path/county
	$("path").on('click', doMapClick);	
}

//Reference the global array to display an alert of the selected county name (from its GeoJSON properties)
function doMapClick() {
    
        window.location.href = "counties/" + (arrCounties[this.attributes.cID.value].properties.GEODESC) + ".html";
        

}

