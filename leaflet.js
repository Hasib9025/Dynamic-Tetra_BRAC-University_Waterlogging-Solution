// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([23.8759, 90.3795], 16);

var latlngs = [
    [23.876104, 90.379106],
    [23.875621, 90.378870],
    [23.875008, 90.378591],
    [23.874655, 90.378516],
    [23.874055, 90.378416],
];

var latlngs2 = [
    [23.876149, 90.379050],
    [23.876593, 90.378200],
    [23.876703, 90.377513]
];

var latlngs3 = [
    [23.876068, 90.379560],
    [23.878361, 90.379595]
];
// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([23.8759, 90.3795]).addTo(map)
    .bindPopup('Uttara Banani. Water Logging. Red Line')
    .openPopup();

var polyline = L.polyline(latlngs, { color: 'red' });
var polyline2 = L.polyline(latlngs2, { color: 'blue' });
var polyline3 = L.polyline(latlngs3, { color: 'blue' });

polyline.addTo(map);
// create a map in the "map" div, set the view to a given place and zoom
var map2 = L.map('map2').setView([23.8759, 90.3795], 16);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

L.marker([23.8759, 90.3795]).addTo(map2)
    .bindPopup('Uttara Banani. Alternative route. Blue Line')
    .openPopup();

polyline2.addTo(map2);
polyline3.addTo(map2);