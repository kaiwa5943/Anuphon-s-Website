var wms_layers = [];

var lyr_SAVI_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11258550.000000, 1526333.140498, 11366430.000000, 1627354.588889]
                            })
                        });

lyr_SAVI_0.setVisible(true);
var layersList = [lyr_SAVI_0];
