import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import leaflet from 'leaflet';
/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;  
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.cargarMapa();
    this.cargarPuntosRecoleccion();
    this.cargarJornadasRecoleccion();    
  }
  cargarMapa() {
    var tileLayer=leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',      
      maxZoom: 18
    });
    var mapOptions={
      center: new leaflet.LatLng(-74.1181, 4.7209),
      zoom: 14,
      layers:[tileLayer]
    }
    this.map = leaflet.map("map", mapOptions);    
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
      })
  }
  cargarPuntosRecoleccion(){
    this.restProvider.getPuntosRecoleccion().then(data=>{      
      let markerGroup = leaflet.featureGroup();
      let iconoPuntoRecoleccion = leaflet.icon({
        iconUrl: '../../assets/icon/punto_recoleccion.png',
        iconSize: [32,32],
        iconAnchor: [0.5,0.5]
      });
      var i: any;      
      for(i = 0; i < data['length']; i++ ){        
        let marker: any = leaflet.marker([data[i]['latitud'], data[i]['longitud']],{icon: iconoPuntoRecoleccion});
        marker.bindPopup(data[i]['nombre']).openPopup();
        markerGroup.addLayer(marker);
      }        
    this.map.addLayer(markerGroup);
    });    
  }
  cargarJornadasRecoleccion(){
    this.restProvider.getJornadasRecoleccion().then(data=>{      
      let markerGroup = leaflet.featureGroup();
      let iconoJornadaRecoleccion = leaflet.icon({
        iconUrl: '../../assets/icon/jornada_recoleccion.png',
        iconSize: [32,32],
        iconAnchor: [0.5,0.5]
      });
      var i: any;      
      for(i = 0; i < data['length']; i++ ){        
        let marker: any = leaflet.marker([data[i]['latitud'], data[i]['longitud']],{icon: iconoJornadaRecoleccion});
        marker.bindPopup(data[i]['descripcion']).openPopup();
        markerGroup.addLayer(marker);
      }        
    this.map.addLayer(markerGroup);
    });
  } 
}
