var search = function () {
  var detailsEl = document.getElementById('details');
  var feature = new ol.Feature({
    geometry: new ol.geom.Polygon([])
  });

  var map = new kt.VectorMap(
          'https://klokantech.tilehosting.com/styles/basic.json?key=tX0QWNRowlarrQpqxngS',
          'https://klokantech.tilehosting.com/styles/basic/rendered.json?key=tX0QWNRowlarrQpqxngS',
          'map-ol', 'map-gl').getMap();
  var autocomplete = new kt.OsmNamesAutocomplete('search', 'dgb7TgC5zR0YpsAqbEgb', true);

  autocomplete.registerCallback(function (item) {

    document.getElementById('search').className = 'founded';
    document.getElementsByClassName('ac-renderer')[0].className = 'ac-renderer founded';

    var isDegenerate = (item.boundingbox[2] - item.boundingbox[0]) * (item.boundingbox[3] - item.boundingbox[1]) <= 0;
    var extent = ol.extent.applyTransform(item.boundingbox, ol.proj.getTransform('EPSG:4326', 'EPSG:3857'));

    map.getView().fit(extent, map.getSize(), {
      padding: [250, 50, 50, 50]
    });
    if (isDegenerate) {
      var rank = item['place_rank'];
      var zoom = Math.min(2 + Math.floor(rank / 2), 20);
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
