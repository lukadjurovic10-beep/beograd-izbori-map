var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BG_2_1 = new ol.format.GeoJSON();
var features_BG_2_1 = format_BG_2_1.readFeatures(json_BG_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BG_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BG_2_1.addFeatures(features_BG_2_1);
var lyr_BG_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BG_2_1, 
                style: style_BG_2_1,
                popuplayertitle: 'BG_2',
                interactive: true,
    title: 'BG_2<br />\
    <img src="styles/legend/BG_2_1_0.png" /> 5.4 - 40<br />\
    <img src="styles/legend/BG_2_1_1.png" /> 40 - 50<br />\
    <img src="styles/legend/BG_2_1_2.png" /> 50 - 60<br />\
    <img src="styles/legend/BG_2_1_3.png" /> 60 - 70<br />\
    <img src="styles/legend/BG_2_1_4.png" /> 70 - 100<br />' });
var format_BG_3_2 = new ol.format.GeoJSON();
var features_BG_3_2 = format_BG_3_2.readFeatures(json_BG_3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BG_3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BG_3_2.addFeatures(features_BG_3_2);
var lyr_BG_3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BG_3_2, 
                style: style_BG_3_2,
                popuplayertitle: 'BG_3',
                interactive: true,
    title: 'BG_3<br />\
    <img src="styles/legend/BG_3_2_0.png" /> Opozicija<br />\
    <img src="styles/legend/BG_3_2_1.png" /> Vlast<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_BG_2_1.setVisible(true);lyr_BG_3_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BG_2_1,lyr_BG_3_2];
lyr_BG_2_1.set('fieldAliases', {'BR_BM': 'BR_BM', 'RBR': 'RBR', 'OKRUG': 'OKRUG', 'OPSTINA': 'OPSTINA', 'NAZIV_BM': 'NAZIV_BM', 'ADRESA_BM': 'ADRESA_BM', 'Uparivanje': 'Uparivanje', 'layer': 'layer', 'path': 'path', 'OPSTINA_L': 'OPSTINA_L', 'Glasaci': 'Glasaci', 'Izasli': 'Izasli', 'Vazeci': 'Vazeci', 'Nevazeci': 'Nevazeci', 'SNS': 'SNS', 'SPS': 'SPS', 'SRS': 'SRS', 'Dver_Zav': 'Dver_Zav', 'DSS_POKS': 'DSS_POKS', 'SVM': 'SVM', 'SPN': 'SPN', 'Usame_DSHV': 'Usame_DSHV', 'SDA_Sandz': 'SDA_Sandz', 'Zajed_za_b': 'Zajed_za_b', 'Zajedno_za': 'Zajedno_za', 'Jeremic': 'Jeremic', 'Saip_Kembe': 'Saip_Kembe', 'MI_Nestor': 'MI_Nestor', 'Srbija_na_': 'Srbija_na_', 'Ruska_s': 'Ruska_s', 'Ceda': 'Ceda', 'Uj_dolina': 'Uj_dolina', 'Izlaznost_': 'Izlaznost_', 'Nevazeci_%': 'Nevazeci_%', 'SNS_%': 'SNS_%', 'SPS_%': 'SPS_%', 'SRS_%': 'SRS_%', 'Dver_Zave%': 'Dver_Zave%', 'DSS_%': 'DSS_%', 'SVM_%': 'SVM_%', 'SPN_%': 'SPN_%', 'UsameDSHV%': 'UsameDSHV%', 'SDA_S_%': 'SDA_S_%', 'Zajedno_z%': 'Zajedno_z%', 'Jeremic_%': 'Jeremic_%', 'DJB_Tadic%': 'DJB_Tadic%', 'S_Kembe_%': 'S_Kembe_%', 'Nestor_%': 'Nestor_%', 'Srbija_na%': 'Srbija_na%', 'Ruska_s_%': 'Ruska_s_%', 'Ceda_%': 'Ceda_%', 'Uj_dol_%': 'Uj_dol_%', 'Pobednik': 'Pobednik', 'Pobednik2': 'Pobednik2', });
lyr_BG_3_2.set('fieldAliases', {'BR_BM': 'BR_BM', 'RBR': 'RBR', 'OKRUG': 'OKRUG', 'OPSTINA': 'OPSTINA', 'NAZIV_BM': 'NAZIV_BM', 'ADRESA_BM': 'ADRESA_BM', 'Uparivanje': 'Uparivanje', 'layer': 'layer', 'path': 'path', 'OPSTINA_L': 'OPSTINA_L', 'Glasaci': 'Glasaci', 'Izasli': 'Izasli', 'Vazeci': 'Vazeci', 'Nevazeci': 'Nevazeci', 'SNS': 'SNS', 'SPS': 'SPS', 'SRS': 'SRS', 'Dver_Zav': 'Dver_Zav', 'DSS_POKS': 'DSS_POKS', 'SVM': 'SVM', 'SPN': 'SPN', 'Usame_DSHV': 'Usame_DSHV', 'SDA_Sandz': 'SDA_Sandz', 'Zajed_za_b': 'Zajed_za_b', 'Zajedno_za': 'Zajedno_za', 'Jeremic': 'Jeremic', 'Saip_Kembe': 'Saip_Kembe', 'MI_Nestor': 'MI_Nestor', 'Srbija_na_': 'Srbija_na_', 'Ruska_s': 'Ruska_s', 'Ceda': 'Ceda', 'Uj_dolina': 'Uj_dolina', 'Izlaznost_': 'Izlaznost_', 'Nevazeci_%': 'Nevazeci_%', 'SNS_%': 'SNS_%', 'SPS_%': 'SPS_%', 'SRS_%': 'SRS_%', 'Dver_Zave%': 'Dver_Zave%', 'DSS_%': 'DSS_%', 'SVM_%': 'SVM_%', 'SPN_%': 'SPN_%', 'UsameDSHV%': 'UsameDSHV%', 'SDA_S_%': 'SDA_S_%', 'Zajedno_z%': 'Zajedno_z%', 'Jeremic_%': 'Jeremic_%', 'DJB_Tadic%': 'DJB_Tadic%', 'S_Kembe_%': 'S_Kembe_%', 'Nestor_%': 'Nestor_%', 'Srbija_na%': 'Srbija_na%', 'Ruska_s_%': 'Ruska_s_%', 'Ceda_%': 'Ceda_%', 'Uj_dol_%': 'Uj_dol_%', 'Pobednik': 'Pobednik', 'Pobednik2': 'Pobednik2', });
lyr_BG_2_1.set('fieldImages', {'BR_BM': 'TextEdit', 'RBR': 'TextEdit', 'OKRUG': 'TextEdit', 'OPSTINA': 'TextEdit', 'NAZIV_BM': 'TextEdit', 'ADRESA_BM': 'TextEdit', 'Uparivanje': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'OPSTINA_L': 'TextEdit', 'Glasaci': 'TextEdit', 'Izasli': 'TextEdit', 'Vazeci': 'TextEdit', 'Nevazeci': 'TextEdit', 'SNS': 'TextEdit', 'SPS': 'TextEdit', 'SRS': 'TextEdit', 'Dver_Zav': 'TextEdit', 'DSS_POKS': 'TextEdit', 'SVM': 'TextEdit', 'SPN': 'TextEdit', 'Usame_DSHV': 'TextEdit', 'SDA_Sandz': 'TextEdit', 'Zajed_za_b': 'TextEdit', 'Zajedno_za': 'TextEdit', 'Jeremic': 'TextEdit', 'Saip_Kembe': 'TextEdit', 'MI_Nestor': 'TextEdit', 'Srbija_na_': 'TextEdit', 'Ruska_s': 'TextEdit', 'Ceda': 'TextEdit', 'Uj_dolina': 'TextEdit', 'Izlaznost_': 'TextEdit', 'Nevazeci_%': 'TextEdit', 'SNS_%': 'TextEdit', 'SPS_%': 'TextEdit', 'SRS_%': 'TextEdit', 'Dver_Zave%': 'TextEdit', 'DSS_%': 'TextEdit', 'SVM_%': 'TextEdit', 'SPN_%': 'TextEdit', 'UsameDSHV%': 'TextEdit', 'SDA_S_%': 'TextEdit', 'Zajedno_z%': 'TextEdit', 'Jeremic_%': 'TextEdit', 'DJB_Tadic%': 'TextEdit', 'S_Kembe_%': 'TextEdit', 'Nestor_%': 'TextEdit', 'Srbija_na%': 'TextEdit', 'Ruska_s_%': 'TextEdit', 'Ceda_%': 'TextEdit', 'Uj_dol_%': 'TextEdit', 'Pobednik': 'TextEdit', 'Pobednik2': 'TextEdit', });
lyr_BG_3_2.set('fieldImages', {'BR_BM': 'TextEdit', 'RBR': 'TextEdit', 'OKRUG': 'TextEdit', 'OPSTINA': 'TextEdit', 'NAZIV_BM': 'TextEdit', 'ADRESA_BM': 'TextEdit', 'Uparivanje': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'OPSTINA_L': 'TextEdit', 'Glasaci': 'TextEdit', 'Izasli': 'TextEdit', 'Vazeci': 'TextEdit', 'Nevazeci': 'TextEdit', 'SNS': 'TextEdit', 'SPS': 'TextEdit', 'SRS': 'TextEdit', 'Dver_Zav': 'TextEdit', 'DSS_POKS': 'TextEdit', 'SVM': 'TextEdit', 'SPN': 'TextEdit', 'Usame_DSHV': 'TextEdit', 'SDA_Sandz': 'TextEdit', 'Zajed_za_b': 'TextEdit', 'Zajedno_za': 'TextEdit', 'Jeremic': 'TextEdit', 'Saip_Kembe': 'TextEdit', 'MI_Nestor': 'TextEdit', 'Srbija_na_': 'TextEdit', 'Ruska_s': 'TextEdit', 'Ceda': 'TextEdit', 'Uj_dolina': 'TextEdit', 'Izlaznost_': 'TextEdit', 'Nevazeci_%': 'TextEdit', 'SNS_%': 'TextEdit', 'SPS_%': 'TextEdit', 'SRS_%': 'TextEdit', 'Dver_Zave%': 'TextEdit', 'DSS_%': 'TextEdit', 'SVM_%': 'TextEdit', 'SPN_%': 'TextEdit', 'UsameDSHV%': 'TextEdit', 'SDA_S_%': 'TextEdit', 'Zajedno_z%': 'TextEdit', 'Jeremic_%': 'TextEdit', 'DJB_Tadic%': 'TextEdit', 'S_Kembe_%': 'TextEdit', 'Nestor_%': 'TextEdit', 'Srbija_na%': 'TextEdit', 'Ruska_s_%': 'TextEdit', 'Ceda_%': 'TextEdit', 'Uj_dol_%': 'TextEdit', 'Pobednik': 'TextEdit', 'Pobednik2': 'TextEdit', });
lyr_BG_2_1.set('fieldLabels', {'BR_BM': 'inline label - always visible', 'RBR': 'hidden field', 'OKRUG': 'hidden field', 'OPSTINA': 'inline label - always visible', 'NAZIV_BM': 'inline label - always visible', 'ADRESA_BM': 'inline label - always visible', 'Uparivanje': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'OPSTINA_L': 'hidden field', 'Glasaci': 'inline label - always visible', 'Izasli': 'inline label - always visible', 'Vazeci': 'inline label - always visible', 'Nevazeci': 'inline label - always visible', 'SNS': 'hidden field', 'SPS': 'hidden field', 'SRS': 'hidden field', 'Dver_Zav': 'hidden field', 'DSS_POKS': 'hidden field', 'SVM': 'hidden field', 'SPN': 'hidden field', 'Usame_DSHV': 'hidden field', 'SDA_Sandz': 'hidden field', 'Zajed_za_b': 'hidden field', 'Zajedno_za': 'hidden field', 'Jeremic': 'hidden field', 'Saip_Kembe': 'hidden field', 'MI_Nestor': 'hidden field', 'Srbija_na_': 'hidden field', 'Ruska_s': 'hidden field', 'Ceda': 'hidden field', 'Uj_dolina': 'hidden field', 'Izlaznost_': 'inline label - always visible', 'Nevazeci_%': 'inline label - always visible', 'SNS_%': 'hidden field', 'SPS_%': 'hidden field', 'SRS_%': 'hidden field', 'Dver_Zave%': 'hidden field', 'DSS_%': 'hidden field', 'SVM_%': 'hidden field', 'SPN_%': 'hidden field', 'UsameDSHV%': 'hidden field', 'SDA_S_%': 'hidden field', 'Zajedno_z%': 'hidden field', 'Jeremic_%': 'hidden field', 'DJB_Tadic%': 'hidden field', 'S_Kembe_%': 'hidden field', 'Nestor_%': 'hidden field', 'Srbija_na%': 'hidden field', 'Ruska_s_%': 'hidden field', 'Ceda_%': 'hidden field', 'Uj_dol_%': 'hidden field', 'Pobednik': 'hidden field', 'Pobednik2': 'hidden field', });
lyr_BG_3_2.set('fieldLabels', {'BR_BM': 'inline label - always visible', 'RBR': 'hidden field', 'OKRUG': 'hidden field', 'OPSTINA': 'inline label - always visible', 'NAZIV_BM': 'inline label - always visible', 'ADRESA_BM': 'inline label - always visible', 'Uparivanje': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'OPSTINA_L': 'hidden field', 'Glasaci': 'inline label - always visible', 'Izasli': 'inline label - always visible', 'Vazeci': 'inline label - always visible', 'Nevazeci': 'inline label - always visible', 'SNS': 'inline label - always visible', 'SPS': 'inline label - always visible', 'SRS': 'inline label - always visible', 'Dver_Zav': 'inline label - always visible', 'DSS_POKS': 'inline label - always visible', 'SVM': 'inline label - always visible', 'SPN': 'inline label - always visible', 'Usame_DSHV': 'inline label - always visible', 'SDA_Sandz': 'inline label - always visible', 'Zajed_za_b': 'inline label - always visible', 'Zajedno_za': 'inline label - always visible', 'Jeremic': 'inline label - always visible', 'Saip_Kembe': 'inline label - always visible', 'MI_Nestor': 'inline label - always visible', 'Srbija_na_': 'inline label - always visible', 'Ruska_s': 'inline label - always visible', 'Ceda': 'inline label - always visible', 'Uj_dolina': 'inline label - always visible', 'Izlaznost_': 'inline label - always visible', 'Nevazeci_%': 'inline label - always visible', 'SNS_%': 'inline label - always visible', 'SPS_%': 'inline label - always visible', 'SRS_%': 'inline label - always visible', 'Dver_Zave%': 'inline label - always visible', 'DSS_%': 'inline label - always visible', 'SVM_%': 'inline label - always visible', 'SPN_%': 'inline label - always visible', 'UsameDSHV%': 'inline label - always visible', 'SDA_S_%': 'inline label - always visible', 'Zajedno_z%': 'inline label - always visible', 'Jeremic_%': 'inline label - always visible', 'DJB_Tadic%': 'inline label - always visible', 'S_Kembe_%': 'inline label - always visible', 'Nestor_%': 'inline label - always visible', 'Srbija_na%': 'inline label - always visible', 'Ruska_s_%': 'inline label - always visible', 'Ceda_%': 'inline label - always visible', 'Uj_dol_%': 'inline label - always visible', 'Pobednik': 'hidden field', 'Pobednik2': 'hidden field', });
lyr_BG_3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});