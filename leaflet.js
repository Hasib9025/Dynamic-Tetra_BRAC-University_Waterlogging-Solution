// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([23.876032, 90.369125], 18);

var latlngs = [
    [23.875958, 90.369144],
    [23.875691, 90.369074]

];

var latlngs2 = [
    [23.876015, 90.369168],
    [23.876248, 90.368446],
    [23.875914, 90.368390],
    [23.875654, 90.368484],
    [23.875632, 90.368535],
    [23.875519, 90.369016],
    [23.875482, 90.369507],
    [23.875852, 90.369555],
    [23.876026, 90.369091]
];

var latlngs3 = [
    [23.876068, 90.379560],
    [23.878361, 90.379595]
];
// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor',
    maxZoom: 18
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([23.876032, 90.369125]).addTo(map)
    .bindPopup('Uttara Banani. Water Logging. Red Line')
    .openPopup();

var polyline = L.polyline(latlngs, { color: 'red' });
var polyline2 = L.polyline(latlngs2, { color: 'blue' });
var polyline3 = L.polyline(latlngs3, { color: 'blue' });

polyline.addTo(map);
// create a map in the "map" div, set the view to a given place and zoom
var map2 = L.map('map2').setView([23.876032, 90.369125], 18);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor'
}).addTo(map2);

L.marker([23.876032, 90.369125]).addTo(map2)
    .bindPopup('Uttara Banani. Alternative route. Blue Line')
    .openPopup();

polyline2.addTo(map2);
polyline3.addTo(map2);