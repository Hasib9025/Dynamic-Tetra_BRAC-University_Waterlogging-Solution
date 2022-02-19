        var mymap = L.map('mapid').setView([28.612, 77.229], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap);
        // making a marker
        var marker = L.marker([28.614, 77.199]).addTo(mymap);
        // making a circle on area
        var circle = L.circle([28.612, 77.229], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 1000
        }).addTo(mymap);
        // adding popup to marker
        marker.bindPopup("<b>Welcome to Rashtrapati Bhawan</b>.").openPopup();