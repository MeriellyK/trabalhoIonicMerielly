import { ListaFotosPage } from './../lista-fotos/lista-fotos';
import { ListaRetornoJsonPage } from './../lista-retorno-json/lista-retorno-json';
import { MostraFotosPage } from './../mostra-fotos/mostra-fotos';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ListaObjetosPage } from '../lista-objetos/lista-objetos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  paginaListaObjetos(){
    this.navCtrl.push('ListaObjetosPage');
  }

  paginaMostraFotos(){
    this.navCtrl.push('MostraFotosPage');
  }

  paginaListaRetornoJSON(){
    this.navCtrl.push('ListaRetornoJsonPage');
  } 
  paginaListaFotos(){
    this.navCtrl.push('ListaFotosPage');
  } 
}
