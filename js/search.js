var search = function (key) {
  var detailsEl = document.getElementById('details');
  var feature = new ol.Feature({
    geometry: new ol.geom.Polygon([])
  });

  var map = new kt.VectorMap(
          'https://maps.tilehosting.com/styles/bright/style.json?key=' + key,
          'https://maps.tilehosting.com/styles/bright.json?key=' + key,
          'map-ol', 'map-gl').getMap();
  var autocomplete = new kt.OsmNamesAutocomplete('search', undefined, 'dgb7TgC5zR0YpsAqbEgb', true);

  autocomplete.registerCallback(function (item) {

    document.getElementById('searchform').className = 'founded';
    document.getElementById('navbar-top').className = '';
    document.getElementById('banner').style.display = 'none';
    document.getElementsByClassName('ac-renderer')[0].className = 'ac-renderer founded';

    if (item.boundingbox[0] > item.boundingbox[2]) {
      item.boundingbox[0] -= 360;
    }
    var isDegenerate = (item.boundingbox[2] - item.boundingbox[0]) * (item.boundingbox[3] - item.boundingbox[1]) <= 0;
    var extent = ol.extent.applyTransform(item.boundingbox, ol.proj.getTransform('EPSG:4326', 'EPSG:3857'));

    map.getView().fit(extent, map.getSize(), {
      padding: [250, 50, 50, 50]
    });
    if (isDegenerate) {
      var rank = item['place_rank'];
      var zoom = Math.min(4 + Math.floor(rank / 2), 20);
      map.getView().setZoom(zoom);
    }
    var coords = [[extent[0], extent[1]], [extent[0], extent[3]], [extent[2], extent[3]], [extent[2], extent[1]], [extent[0], extent[1]]];
    feature.getGeometry().setCoordinates([coords], 'XY');
    detailsEl.innerHTML = JSON.stringify(item, undefined, 2);
  }, true);

  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [feature]
    })
  }));
};
