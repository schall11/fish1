/* 
*    Return common layers used in different examples
*/
function getCommonBaseLayers(map){
    var topo = L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
    var mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
    var accessToken = 'pk.eyJ1Ijoia292ZTExIiwiYSI6ImNpeXV0aHViMTAwM3Eyd282Nzdkbmw0ZXAifQ.1jgyokT8rQ-x4FG_KpTp9A'
    var mapbox =L.tileLayer(mapboxUrl, {id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: accessToken});
    var bathymetryLayer = L.tileLayer.wms("//ows.emodnet-bathymetry.eu/wms", {
        layers: 'emodnet:mean_atlas_land',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });
    var coastlinesLayer = L.tileLayer.wms("//ows.emodnet-bathymetry.eu/wms", {
        layers: 'coastlines',
        format: 'image/png',
        transparent: true,
        attribution: "EMODnet Bathymetry",
        opacity: 0.8
    });

	// var Esri_WorldImagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia292ZTExIiwiYSI6IjEzOTIwZGMxYjRhNmE5NGIwNzE5OTJjMDBiZmI1NzAzIn0.oNkso-0A1fFI7D5OY1KonQ', {
	// attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	// });
    var Esri_WorldImagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia292ZTExIiwiYSI6IjEzOTIwZGMxYjRhNmE5NGIwNzE5OTJjMDBiZmI1NzAzIn0.oNkso-0A1fFI7D5OY1KonQ');
    var bathymetryGroupLayer = L.layerGroup([bathymetryLayer, coastlinesLayer]);
    mapbox.addTo(map);
    return {
		"Imagery": Esri_WorldImagery,
        "Topo": topo,
        "Mapbox":mapbox
    };
}