// https://github.com/heigeo/leaflet.wms

var map = L.map('mapa').setView([-16.64, -49.55], 4);


//wms source = URL DO WMS
var s = L.WMS.source("http://localhost:8080/geoserver/grade-estatistica/wms", {
    'transparent': true,
    'tiled': true,
    
})

$.extend(s,
	{
		'ajax': function(url, callback) {
	        $.ajax(url, {
	            'context': this,
	            'success': function(result) {
	            	console.log(result)
	                callback.call(this, result);
	             }
	        });
    	},
    'showFeatureInfo': function(latlng, info) {
    	console.log('xxx info', info)
        $('.output').html(info);
    	}
	},
	
);

//param to getLayer (layer+style)
s.getLayer("grade-estatistica:brasil_10km_temp_prec").addTo(map);

console.log('xxx end')