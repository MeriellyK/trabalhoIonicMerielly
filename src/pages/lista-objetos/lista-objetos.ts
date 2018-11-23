import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaObjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-objetos',
  templateUrl: 'lista-objetos.html',
})
export class ListaObjetosPage {
  public contatos : Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contatos = [
      {
        nome: "Pedro",
        img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
        menssagem:"Buenas tchê"
      },
      {
        nome: "João",
        img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-buzz.png",
        menssagem:"Fala aí meu"
      },
      {
        nome: "Maria",
        img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-jessie.png",
        menssagem:"Olá"
      }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaObjetosPage');
  }

}
